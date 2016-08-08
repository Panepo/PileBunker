import lokijs from 'lokijs'
import weaponData from '../../raw/weapons.json'
import typeData from '../../raw/weaponTypes.json'

var db = new lokijs('db')
export var dbWeapon = db.addCollection("dbWeapon")
export var dbType = db.addCollection("dbType")

for (var i=0; i<weaponData.length; i++) {
	dbWeapon.insert(weaponData[i])
}

for (var i=0; i<typeData.length; i++) {
	dbType.insert(typeData[i])
}