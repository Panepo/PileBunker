// @flow
import { dbChar } from './database'
import {
  listType,
  listTypeS,
  listPlainQ,
  listRarity
} from '../constants/ConstList'

export const queryChar = (type: string, plain: number, rarity: number) => {
  if (listTypeS.includes(type)) {
    let idx = listTypeS.indexOf(type)
    return listRarity.reduce((output, data) => {
      if (rarity & Math.pow(2, data - 1)) {
        let charTemp = dbChar
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

        charTemp.forEach(char => {
          output.push(char)
        })
      }
      return output
    }, [])
  }
  return []
}
