import { dbChar } from './database'
import { listType, listTypeS, listPlainQ } from '../constants/ConstList'

export function queryChar(type, plain, rarity) {
  let charTemp = []

  for (let i = 0; i < listTypeS.length; i += 1) {
    if (type === listTypeS[i]) {
      if (rarity & 1) {
        charTemp.concat(
          dbChar
            .chain()
            .find({
              $and: [
                { weapon: listType[i] },
                {
                  $and: [
                    { plain: { $in: listPlainQ[plain - 1] } },
                    { rarity: '1' }
                  ]
                }
              ]
            })
            .data()
        )
      }
      if (rarity & 2) {
        charTemp.concat(
          dbChar
            .chain()
            .find({
              $and: [
                { weapon: listType[i] },
                {
                  $and: [
                    { plain: { $in: listPlainQ[plain - 1] } },
                    { rarity: '2' }
                  ]
                }
              ]
            })
            .data()
        )
      }
      if (rarity & 4) {
        charTemp.concat(
          dbChar
            .chain()
            .find({
              $and: [
                { weapon: listType[i] },
                {
                  $and: [
                    { plain: { $in: listPlainQ[plain - 1] } },
                    { rarity: '3' }
                  ]
                }
              ]
            })
            .data()
        )
      }
      if (rarity & 8) {
        charTemp.concat(
          dbChar
            .chain()
            .find({
              $and: [
                { weapon: listType[i] },
                {
                  $and: [
                    { plain: { $in: listPlainQ[plain - 1] } },
                    { rarity: '4' }
                  ]
                }
              ]
            })
            .data()
        )
      }
      if (rarity & 16) {
        charTemp.concat(
          dbChar
            .chain()
            .find({
              $and: [
                { weapon: listType[i] },
                {
                  $and: [
                    { plain: { $in: listPlainQ[plain - 1] } },
                    { rarity: '5' }
                  ]
                }
              ]
            })
            .data()
        )
      }
      if (rarity & 32) {
        charTemp.concat(
          dbChar
            .chain()
            .find({
              $and: [
                { weapon: listType[i] },
                {
                  $and: [
                    { plain: { $in: listPlainQ[plain - 1] } },
                    { rarity: '6' }
                  ]
                }
              ]
            })
            .data()
        )
      }
      if (rarity & 64) {
        charTemp.concat(
          dbChar
            .chain()
            .find({
              $and: [
                { weapon: listType[i] },
                {
                  $and: [
                    { plain: { $in: listPlainQ[plain - 1] } },
                    { rarity: '7' }
                  ]
                }
              ]
            })
            .data()
        )
      }
      if (rarity & 128) {
        charTemp.concat(
          dbChar
            .chain()
            .find({
              $and: [
                { weapon: listType[i] },
                {
                  $and: [
                    { plain: { $in: listPlainQ[plain - 1] } },
                    { rarity: '8' }
                  ]
                }
              ]
            })
            .data()
        )
      }
      break
    }
  }
  return charTemp
}
