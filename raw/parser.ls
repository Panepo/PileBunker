require! {
	'fs': fs
	'./weapons.ls': weapons
	'./weaponType.ls': weaponType
}

# ===============================================================================
# PARSE WEAPONS DATA
# ===============================================================================
slotWeapon = <[name type atk aspd range rare]>
outWeapon = []
for weapon, i in weapons
	outWeapon[i] = {}
	for slotValue, j in slotWeapon
		if slotValue !== 'X'
			outWeapon[i][slotValue] = weapon[j]

outWeapon = JSON.stringify outWeapon
console.log 'weapons.json arrange complete!'
fs.writeFileSync './raw/weapons.json', outWeapon

# ===============================================================================
# PARSE WEAPON TYPES DATA
# ===============================================================================
slotType = <[name frame1 frame2 range]>
outType = []

for type, i in weaponType
	outType[i] = {}
	for slotValue, j in slotType
		if slotValue !== 'X'
				outType[i][slotValue] = type[j]

outType = JSON.stringify outType
console.log 'weaponTypes.json arrange complete!'
fs.writeFileSync './raw/weaponTypes.json', outType
