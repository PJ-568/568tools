import pandas as pd
from credits import *
from collections import Counter


# run this file from the root of the project as `python scripts/update_credits.py`

# read in data on credits for each file
credits = pd.read_csv('./CREDITS.csv', encoding='utf-8').fillna('')

# and for each contributing submission
submissions = pd.read_csv('./SUBMISSIONS.csv', encoding='utf-8').fillna('')

# read in the auto-generated credits from the OpenGameArt collection
# use this to fill in missing information from SUBMISSIONS.csv
autocredits = credits_txt_to_df('./CREDITS.TXT')
submissions = populate_submissions_from_oga_credits(submissions, autocredits)
submissions.to_csv('./SUBMISSIONS.csv', index=False)

# fill in CREDITS.csv with information from SUBMISSIONS.csv . This will
# also look for any image files in this directory, and check that all images 
# have a URL and author(s) associated with them. it will then generate a license
# statement for each file. The results will be saved in CREDITS.csv
credits_full = populate_credits(credits, submissions)
credits_full.to_csv('./CREDITS.csv', index=False)


# generate a generic statement crediting all authors and giving license
credits = credits_full
author_index = index_authors(','.join(submissions['authors']).split(','))
authors = list(', '.join(a.strip() for a in credits['authors'] if a != '').split(', '))
authors = ', '.join([a for a,c in Counter(normalize_authors(authors, author_index)).most_common()])
licenses = [l.strip().split(', ') for l in credits['licenses'] if l != '']
license = find_compatible_licenses(*licenses)

print("\n\n")
print("Generic attribution statement: ")
print("")
print("Sprites by: {0}".format(authors))
print("Sprites contributed as part of the Liberated Pixel Cup project from OpenGameArt.org: http://opengameart.org/content/lpc-collection")
print("License: {0}".format(', '.join(license)))
print("Detailed credits: [LINK TO CREDITS.CSV FILE]")