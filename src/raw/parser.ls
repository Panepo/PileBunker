require! {
  'fs': fs
  './weapons.ls': weapons
  './weaponType.ls': weaponType
  "cheerio": cheerio
  "./data.ls": Data
}

# ===============================================================================
# PARSE WEAPONS DATA
# ===============================================================================
outWeapon = []
for weapon, i in weapons.data
  outWeapon[i] = {}
  for slotValue, j in weapons.slotWeapon
    if slotValue !== 'X'
      outWeapon[i][slotValue] = weapon[j]

for weapon, i in outWeapon
  weapon.id = i
  weapon.ref = 0
  weapon.refText = '+0'
  weapon.damage = 0
  weapon.frame1 = 0
  weapon.frame2 = 0
  weapon.dps = 0
  weapon.time = 0

outWeapon = JSON.stringify outWeapon
console.log 'weapons.json arrange complete!'
fs.writeFileSync './src/raw/weapons.json', outWeapon

# ===============================================================================
# PARSE WEAPON TYPES DATA
# ===============================================================================
outType = []
for type, i in weaponType.data
  outType[i] = {}
  for slotValue, j in weaponType.slotType
    if slotValue !== 'X'
      outType[i][slotValue] = type[j]

outType = JSON.stringify outType
console.log 'weaponTypes.json arrange complete!'
fs.writeFileSync './src/raw/weaponTypes.json', outType

# ===============================================================================
# PARSE CHARACTER DATA
# ===============================================================================
(err, data) <- fs.readFile "./src/raw/char.html"
if err
  throw err

# read data
$ = cheerio.load data.toString!
output = []
$("\a.dps_name").each (i, elem) ->
  name = elem.children[0].data
  char = new Data.Char name
  status_data = elem.parent.parent.children
  char.weapon = status_data[1].children[0].data
  char.rarity = status_data[2].children[0].data
  char.plain = status_data[3].children[0].data
  char.hpF = status_data[4].children[0].data
  char.atF = status_data[5].children[0].data
  char.dfF = status_data[6].children[0].data
  char.totF = status_data[7].children[0].data
  char.id = i
  output.push char

#parse data
output = JSON.stringify output
console.log 'chars.json arrange complete!'
fs.writeFileSync './src/raw/chars.json', output
