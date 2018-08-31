import { dbChar } from './database'
import { listType, listTypeS, listPlainQ } from '../constants/ConstList'

export function queryChar(type, plain, rarity) {
  let charTemp = []
  let charTemp2 = []

  if (listTypeS.includes(type)) {
    let idx = listTypeS.indexOf(type)
    for (let i = 1; i <= 8; i += 1) {
      if (rarity & Math.pow(2, i - 1)) {
        charTemp2 = dbChar
          .chain()
          .find({
            $and: [
              { weapon: listType[idx] },
              {
                $and: [
                  { plain: { $in: listPlainQ[plain - 1] } },
                  { rarity: i.toString() }
                ]
              }
            ]
          })
          .data()

        charTemp2.forEach(data => {
          charTemp.push(data)
        })
      }
    }
  }

  return charTemp
}
