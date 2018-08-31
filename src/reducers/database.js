import Lokijs from 'lokijs'
import weaponData from '../raw/weapons.json'
import typeData from '../raw/weaponTypes.json'
import charData from '../raw/chars.json'

const db = new Lokijs('db')
export const dbWeapon = db.addCollection('dbWeapon')
export const dbType = db.addCollection('dbType')
export const dbChar = db.addCollection('dbChar')

weaponData.forEach(element => {
  dbWeapon.insert(element)
})

typeData.forEach(element => {
  dbType.insert(element)
})

charData.forEach(element => {
  dbChar.insert(element)
})
