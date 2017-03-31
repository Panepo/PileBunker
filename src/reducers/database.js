import Lokijs from 'lokijs'
import weaponData from '../../raw/weapons.json'
import typeData from '../../raw/weaponTypes.json'

const db = new Lokijs('db')
export const dbWeapon = db.addCollection('dbWeapon')
export const dbType = db.addCollection('dbType')

for (let i = 0; i < weaponData.length; i += 1) {
	dbWeapon.insert(weaponData[i])
}

for (let i = 0; i < typeData.length; i += 1) {
	dbType.insert(typeData[i])
}
