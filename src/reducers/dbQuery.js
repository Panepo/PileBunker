import { dbChar } from './database'
import { listType, listTypeS, listPlainQ } from '../constants/ConstList'

export function queryChar(type, plain, rarity) {
  let charTemp = []
  let charTemp2 = []

  for (let i = 0; i < listTypeS.length; i += 1) {
    if (type === listTypeS[i]) {
      if (rarity & 1) {
        charTemp2 = dbChar
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
        for (let j = 0; j < charTemp2.length; j += 1) {
          charTemp.push(charTemp2[j])
        }
      }
      if (rarity & 2) {
        charTemp2 = dbChar
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
        for (let j = 0; j < charTemp2.length; j += 1) {
          charTemp.push(charTemp2[j])
        }
      }
      if (rarity & 4) {
        charTemp2 = dbChar
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
        for (let j = 0; j < charTemp2.length; j += 1) {
          charTemp.push(charTemp2[j])
        }
      }
      if (rarity & 8) {
        charTemp2 = dbChar
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
        for (let j = 0; j < charTemp2.length; j += 1) {
          charTemp.push(charTemp2[j])
        }
      }
      if (rarity & 16) {
        charTemp2 = dbChar
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
        for (let j = 0; j < charTemp2.length; j += 1) {
          charTemp.push(charTemp2[j])
        }
      }
      if (rarity & 32) {
        charTemp2 = dbChar
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
        for (let j = 0; j < charTemp2.length; j += 1) {
          charTemp.push(charTemp2[j])
        }
      }
      if (rarity & 64) {
        charTemp2 = dbChar
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
        for (let j = 0; j < charTemp2.length; j += 1) {
          charTemp.push(charTemp2[j])
        }
      }
      if (rarity & 128) {
        charTemp2 = dbChar
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
        for (let j = 0; j < charTemp2.length; j += 1) {
          charTemp.push(charTemp2[j])
        }
      }

      break
    }
  }

  return charTemp
}
