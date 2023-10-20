# which licenses can be sublicensed to which other licenses?
# sublicense = make a derivative asset and issue your own license to a third party 
compatible_sublicenses = {
 # CC0 can be sublicensed to anything else
 'CC0': ['CC0', 'CC-BY 3.0', 'CC-BY 4.0', 'OGA-BY 3.0', 'CC-BY-SA 3.0', 'CC-BY-SA 4.0', 'GPL 2.0', 'GPL 3.0'],

 # CC-BY and OGA-BY can be sublicensed to anything except CC0, since attribution must be retained
 'CC-BY 3.0': ['CC-BY 3.0', 'CC-BY 4.0', 'OGA-BY 3.0', 'CC-BY-SA 3.0', 'CC-BY-SA 4.0', 'GPL 2.0', 'GPL 3.0'],
 'CC-BY 4.0': ['CC-BY 3.0', 'CC-BY 4.0', 'OGA-BY 3.0', 'CC-BY-SA 3.0', 'CC-BY-SA 4.0', 'GPL 2.0', 'GPL 3.0'],
 'OGA-BY 3.0': ['CC-BY 3.0', 'CC-BY 4.0', 'OGA-BY 3.0', 'CC-BY-SA 3.0', 'CC-BY-SA 4.0', 'GPL 2.0', 'GPL 3.0'],

 # derivatives of works under CC-BY-SA must be shared under the same license _or a later version_, 
 # so CC-BY-SA 3.0 can be remixed with work under CC-BY-SA 4.0. _However_, under this circumstance,
 # the licenses "stack", meaning the end-user must comply with the terms of _both_ CC-BY-SA 3.0 *and*
 # CC-BY-SA 4.0. Therefore, sublicensing from CC-BY-SA 3.0 to GPL 3.0 (for instance) is *not* possible
 # https://opensource.stackexchange.com/questions/2212/is-stack-exchanges-cc-by-sa-v3-0-content-compatible-with-the-gpl/6782#6782
 # this special circumstance is denoted as 'CC-BY-SA 3.0+4.0'
 'CC-BY-SA 3.0': ['CC-BY-SA 3.0', 'CC-BY-SA 3.0+4.0'],
 'CC-BY-SA 3.0+4.0': ['CC-BY-SA 3.0+4.0'], 

 # CC-BY-SA 4.0 is one-way compatible with GPL 3.0, so CC-BY-SA 4.0 can be sublicensed as GPL 3.0
 # https://creativecommons.org/2015/10/08/cc-by-sa-4-0-now-one-way-compatible-with-gplv3/
 'CC-BY-SA 4.0': ['CC-BY-SA 4.0', 'GPL 3.0'],

 # GPL is a dead end
 'GPL 2.0': ['GPL 2.0'],
 'GPL 3.0': ['GPL 3.0']
}

# since some licenses are forward-compatible with others, listing all possible licenses may be redundant.
# for example, an asset could be licensed CC-BY-SA 3.0 / CC-BY 3.0 / CC0, but this is unnecessary since
# CC0 is less restrictive than CC-BY or CC-BY-SA and can be freely sublicensed. A more parsimonious
# licensing statement would be just "CC0"
superlicenses = {k:[] for k in compatible_sublicenses.keys()}
for license in superlicenses.keys():
	for sublicense in compatible_sublicenses[license]:
		superlicenses[sublicense] = superlicenses[sublicense] + [license]
superlicenses = {k: list(set(v) - set([k])) for k,v in superlicenses.items()}

def find_parsimonious_licenses(licenses):
	"""
	find the most parsimonious (simplest) license statement, such that ALL desired `licenses` can be 
	achieved by sublicensing. 
	"""
	_licenses = set(licenses)
	for license in licenses:
		compatible_superlicenses = superlicenses[license]
		if any([l in compatible_superlicenses for l in _licenses]):
			_licenses = _licenses - {license}
	return _licenses

def find_sublicenses(licenses):
	"""
	find all permissible sublicenses for a work that is already licensed under one or more possible `licenses`.

	e.g.:
		find_sublicenses(['CC-BY-SA 4.0','GPL 2.0']) 
		# -> {'CC-BY-SA 4.0', 'GPL 2.0', 'GPL 3.0'}

	"""
	sublicenses = []
	for lic in licenses:
		sublicenses += compatible_sublicenses[lic.strip()]
	return set(sublicenses)

def find_compatible_licenses(*license_lists, parsimonious = True):
	"""
	for a set of assets, each of which is available under one or more licenses, find which licenses 
	could be used for a derivative work that incorporates all assets

	e.g.: asset 1 is licensed CC-BY 3.0. asset 2 is licensed CC-BY-SA 4.0 or GPL 2.0.

		find_compatible_licenses(
			['CC-BY 3.0'], # asset 1
			['CC-BY-SA 4.0', 'GPL 2.0'] # asset 2,
			parsimonious = False
		)
		# -> {'CC-BY-SA 4.0', 'GPL 2.0', 'GPL 3.0'}

		# asset 1 could be sublicensed to CC-BY-SA 4.0 or to GPL 2.0 like asset 2; alternatively, 
		# both licenses could be sublicensed to GPL 3.0. 
		# however, the possibility of "reaching" GPL 3.0 remains if the asset is licensed as 
		# CC-BY-SA 4.0 or GPL 2.0. Therefore a more parsimonious statement would be to 
		# license the asset as CC-BY-SA 4.0 (which in turn allows licensing to GPL 3.0) or GPL 2.0:

		find_compatible_licenses(
			['CC-BY 3.0'], # asset 1
			['CC-BY-SA 4.0', 'GPL 2.0'] # asset 2,
			parsimonious = True
		)
		# -> {'CC-BY-SA 4.0', 'GPL 2.0'}


	"""
	sublicense_list = []
	for license_list in license_lists:
		sublicense_list.append( find_sublicenses(license_list) )
	if len(sublicense_list) > 0:
		licenses = set.intersection(*sublicense_list)
		if parsimonious: return find_parsimonious_licenses(licenses)
		else: return licenses
	else: return []


def check_license_compatibility(original, derivative):
	possible_sublicenses = []
	for license in original:
		possible_sublicenses  = possible_sublicenses + compatible_sublicenses[license]
	possible_sublicenses = list(set(possible_sublicenses))

	derivative_licenses = []
	for license in derivative:
		if not (license in possible_sublicenses):
			print("warning: work licensed as {0} cannot be sublicensed to {1}. permissible sublicenses are {2}".format(original, license, possible_sublicenses))
		else:
			derivative_licenses.append(license)
	if len(derivative_licenses) == 0:
		print("error: cannot find compatible license between {0} and {1}".format(original, derivative))
	return derivative_licenses