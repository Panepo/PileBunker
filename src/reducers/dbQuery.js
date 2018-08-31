import { dbChar } from './database'
import {
  listType,
  listTypeS,
  listPlainQ,
  listRarity
} from '../constants/ConstList'

export const queryChar = (type, plain, rarity) => {
  let charTemp = []
  let charTemp2 = []

  if (listTypeS.includes(type)) {
    let idx = listTypeS.indexOf(type)
    listRarity.forEach(data => {
      if (rarity & Math.pow(2, data - 1)) {
        charTemp2 = dbChar
          .chain()
          .find({
            $and: [
              { weapon: listType[idx] },
              {
                $and: [
                  { plain: { $in: listPlainQ[plain - 1] } },
                  { rarity: data.toString() }
                ]
              }
            ]
          })
          .data()

        charTemp2.forEach(char => {
          charTemp.push(char)
        })
      }
    })
  }
  return charTemp
}
