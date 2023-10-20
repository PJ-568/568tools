# Author: bluecarrot16
# https://creativecommons.org/publicdomain/zero/1.0/
# requires: 
# - python 3.5+
# - pandas 0.24+

import pandas as pd
import re
import glob
from pathlib import Path


from licenses import *

def credits_txt_to_df(path='../CREDITS.TXT'):
	"""
	convert a CREDITS.TXT automatically generated from a collection on OpenGameArt.org to a Pandas DataFrame
	"""

	rows = []

	license_pattern = re.compile(r'\s*\*\s+([^(]*)\(.*')
	with open(path,mode='r') as file:
		data  = {}
		mode = ""
		while True:
			line = file.readline()
			if line == '':
				break;

			if line == "Title:\n":
				mode = "title"
			elif line == "Author:\n":
				mode = "authors"
			elif line == "Collaborators:\n":
				mode = "authors"
			elif line == "URL:\n":
				mode = "url"
			elif line == "License(s):\n":
				mode = "licenses"
			elif line == 'Copyright/Attribution Notice:\n':
				mode = "instructions"
			elif line == "SPECIAL ATTRIBUTION INSTRUCTIONS:\n":
				mode = "instructions"
			elif line == "File(s):\n":
				mode = "files"

			elif line == "----------------------------------------\n":
				rows.append(data)
				data = {}
				mode = ""
			else:
				if mode != "":
					if not mode in data: data[mode] = ''
					data[mode] += line

	credits_by_file = []

	for data in rows:
		if 'title' in data:
			data['title'] = data['title'].strip()
		if 'url' in data:
			data['url'] = data['url'].strip()
		if 'authors' in data:
			authors = [a.strip() for a in data['authors'].replace("\n",",").split(',')] #[a.strip() for a in f.split('\n') for f in data['author'].split('\n')]
			authors = [a for a in authors if a != '']
			data['authors'] = authors
		if 'files' in data:
			data['files'] = [f[6:].strip() for f in data['files'].split("\n") if f != '']
		if 'instructions' in data:
			data['instructions'] = " / ".join(data['instructions'].split("\n"))
		if 'licenses' in data:
			#     * CC-BY-SA 3.0 ( http://creativecommons.org/licenses/by-sa/3.0/legalcode )
			license = []
			for f in data['licenses'].split("\n"):
				f = f.strip()
				if f != '':
					match = license_pattern.match(f)
					if match is not None:
						f = match.group(1).strip()
						license.append(f)						
					else:
						print("unrecognized license for {0}: '{1}'".format(data['url'], f))

			data['licenses'] = license #[license_pattern.match(f).group(0).strip() for f in data['license'].split('\n') if f != '']

		for f in data['files']:
			credits_by_file.append({ 'file': f, **data})

	return pd.DataFrame(rows)
	# return pd.DataFrame(credits_by_file).fillna('')

def populate_submissions_from_oga_credits(submissions, autocredits):
	"""
	fill in missing information in SUBMISSIONS.CSV from the auto-generated CREDITS.TXT file downloaded from OpenGameArt.org
	"""
	author_index = index_authors(','.join(submissions['authors']).split(','))
	if not ('instructions' in submissions): submissions['instructions'] = ''
	autocredits = autocredits.fillna('')

	for i, row in submissions.iterrows():
		oga_submission = autocredits.loc[autocredits['url'] == row['url'],:].squeeze()
		if row['authors'].strip() == '':
			if len(oga_submission) == 0:
				print("for '{0}', missing 'authors' and no matching data found in CREDITS.txt".format(row['url']))
			else:
				authors = normalize_authors(oga_submission['authors'], author_index)
				submissions.at[i,'authors'] = ', '.join(authors)
				print("for '{0}' adding authors {1}".format(row['url'], submissions.at[i,'authors']))
		if row['licenses'].strip() == '':
			if len(oga_submission) == 0:
				print("for '{0}', missing 'licenses' and no matching data found in CREDITS.txt".format(row['url']))
			else:
				submissions.at[i,'licenses'] = ', '.join(oga_submission['licenses'])
				print("for '{0}' adding licenses {1}".format(row['url'], submissions.at[i,'licenses']))
		if row['title'].strip() == '':
			if len(oga_submission) == 0:
				print("for '{0}', missing 'title' and no matching data found in CREDITS.txt".format(row['url']))
			else:
				submissions.at[i,'title'] = oga_submission['title'].strip()
				print("for '{0}' adding title {1}".format(row['url'], submissions.at[i,'title']))
		if 'instructions' in oga_submission and len(oga_submission['instructions']) > 0:
			submissions.at[i,'instructions'] = oga_submission['instructions']

	return submissions

def index_authors(authors):
	"""
	record author's real names, allowing you to look them up from their nicknames with `normalize_author`

	index_authors(['Benjamin K. Smith (BenCreating)', 'Sander Frenken (castelonia)'])
	# -> ({'bencreating': 'Benjamin K. Smith', 'castelonia': 'Sander Frenken'}, {'benjamin k. smith': 'BenCreating', 'sander frenken': 'castelonia'})
	"""
	nick_to_name = {}
	name_to_nick = {}
	nick_capitalization = {}

	pattern = re.compile(r'([^(]+)\(([^)]+)\)')

	for author in authors:
		author = author.strip()
		match = pattern.match(author)
		if match is not None:
			(name, nickname) = match.groups()
			name = name.strip()
			nickname = nickname.strip()
			nick_to_name[nickname.lower()] = name
			name_to_nick[name.lower()] = nickname
			nick_capitalization[nickname.lower()] = nickname

	return {'nick_to_name':nick_to_name, 'name_to_nick':name_to_nick, 'nick_capitalization':nick_capitalization}

def normalize_author(author, author_index):
	"""
	given an author's nickname (or realname), try to figure out their realname (or nickname)
	"""

	author = author.strip()
	author_l = author.lower()

	if author_l in author_index['nick_to_name']:
		name = author_index['nick_to_name'][author_l]
		nick = author_index['nick_capitalization'][author_l]
		return '{0} ({1})'.format(name, nick)

	elif author_l in author_index['name_to_nick']:
		nick = author_index['name_to_nick'][author_l]
		nick = author_index['nick_capitalization'][nick.lower()]
		name = author
		return '{0} ({1})'.format(name, nick)

	else: return author

def normalize_authors(authors, author_index):
	"""
	given a list of authors, some of which may just be nicknames, try to find everyone's real names
	"""
	authors = [normalize_author(a,author_index) for a in authors if a != '']

	# remove duplicates, preserving order 
	# https://stackoverflow.com/questions/480214/how-do-you-remove-duplicates-from-a-list-whilst-preserving-order
	return list(dict.fromkeys(authors))


def populate_credits(credits, submissions, check_files_in = './spritesheets/'):
	"""
	using CREDITS.csv (`credits`), fill in missing information from SUBMISSIONS.csv (`submissions`). Optionally, 
	set `check_files_in` to a folder path in order to look for PNG files in that foler and subfolders; try to look
	up author/license information for these files based on information in CREDITS.

	Several transformations are performed, in order:
	- missing `filename`s from `check_files_in` are added as rows to `credits`
	- any image `filename` in `credits` with a missing `url1` or `url1` set to '^' has missing authors and URLs copied from its parent directory
	- if the authors are missing but URL(s) are given, the authors list is populated. if authors are specified, they are not overwritten, since the submission may have more authors than the file.
	- all author names are normalized using `normalize_authors` 
	- the most parsimonious statement of the license(s) is found, such that the licenses are compatible with all submissions from the linked URLs
	"""
	author_index = index_authors(','.join(submissions['authors']).split(','))
	print('Authors:')
	print(author_index['nick_to_name'])

	# find extra files from the directory `check_files_in` (and subdirectories)
	if check_files_in:
		print("checking for new files in '{0}'...".format(check_files_in))
		root_dir = check_files_in
		files = [''.join(f.split(root_dir, 1)) for f in glob.iglob( root_dir + '**', recursive=True) ]
		files = [f.strip() for f in files if f.strip() != '']
		newfiles = set(files) - set(credits['filename'])
		if len(newfiles) > 0:
			print('found new {0}/{1} files:'.format(len(newfiles), len(files)))
			print(newfiles)
			credits = credits.append([{'filename': f} for f in newfiles], ignore_index = True)
	
	credits = credits.fillna('')
	credits = credits.sort_values(by=['filename'])
	credits = credits.drop_duplicates()

	# build list of files that lack some necessary attribution
	unattributed = []
	url_columns = [col for col in credits.columns if 'url' in col] 
	#[f'url{n}' for n in range(1, 21)] #['url1','url2','url3','url4','url5', 'url6', 'url7', 'url8', 'url9', 'url10', 'url11', '']
	if 'licenses' not in credits: credits['licenses'] = ''

	for i, row in credits.iterrows():
		filename = row['filename']
		is_image = filename.strip().endswith('.png')

		# if filename=='hat/pirate/bandana-skull/female/black.png':
		# 	import pdb; pdb.set_trace()

		# copy missing data from that for parent directory
		if row['url1'] == '^' or (is_image and any(row[['authors','licenses','url1']] == '')):
			print("searching for data for {0} from parent directories...".format(filename))
			parent_filename = Path(filename).parent
			while parent_filename != Path('.'):
				print(f"- {parent_filename}")
				parent_row = credits.loc[credits['filename'] == str(parent_filename),:]
				if len(parent_row.index) > 1:
					print(f"  - warning: multiple entries found for {filename}: \n {parent_row}")
					parent_row = parent_row.iloc[0,:]
				if len(parent_row) != 0:
					parent_row = parent_row.squeeze()
					cols = ['authors','licenses'] + url_columns
					for col in cols:
						if (credits.loc[i, col] == '') or (credits.loc[i, col] == '^'):
							credits.loc[i,col] = parent_row[col]
					# credits.loc[i,['authors','licenses'] + url_columns] = parent_row[['authors','licenses'] + url_columns].squeeze()
					row = credits.loc[i,:]

					# if not (row['url1'] == '^' or (row['url1'] == '' and is_image)):
					if not any(row[['authors','licenses','url1']] == ''):
						break
				parent_filename = Path(parent_filename).parent

		# copy authors from submissions
		if row['authors'].strip() == '':
			authors = []
			for url in row[url_columns]:
				authors = authors + list(submissions.loc[submissions['url'] == url,'authors'])
			authors = normalize_authors(','.join(authors).split(','), author_index)
			if len(authors) > 0:
				credits.at[i, 'authors'] = ', '.join(authors)
				print("populating authors for {0}: {1}".format(filename, authors))
			row = credits.loc[i,:]
		else:
			authors = ', '.join(normalize_authors(row['authors'].split(','), author_index))
			credits.at[i,'authors'] = authors

		# for images, check we eventually found an author, URL(s), and some licenses
		if is_image:

			# note if we're missing something
			if row['authors'].strip() == '' and row['url1'].strip() == '':
				unattributed.append(row['filename'])
				credits.at[i, 'status'] = 'BAD'

			# figure out a good licensing statement
			urls = row[['url1','url2','url3','url4','url5']] 
			if any(urls != '') and row['licenses'].strip() == '':
				file_submissions = submissions.loc[submissions['url'].isin(urls),:]
				licenses = find_compatible_licenses(*[lic.split(', ') for lic in file_submissions['licenses']])
				if len(licenses) > 0:
					credits.at[i, 'licenses'] = ', '.join(licenses)
					credits.at[i, 'status'] = 'OK'
				else:
					print("error: no compatible licenses found for '{0}'".format(filename))
					credits.at[i, 'status'] = 'BAD'
			elif row['licenses'].strip() == '':
				print("error: no URLs or licenses found for '{0}'".format(filename))
				credits.at[i, 'status'] = 'BAD'
			else:
				credits.at[i, 'status'] = 'OK'

	print()
	print("{0} unattributed assets:".format(len(unattributed)))
	print('\t\n'.join(unattributed))

	return credits


	# git log --follow --format="%an"
	# =IF(RIGHT(A2,3)="png",IF(AND(ISBLANK(D2),ISBLANK(E2)),"BAD","OK"),"")