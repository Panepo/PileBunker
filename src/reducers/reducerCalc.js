import {
  TYPE_CHANGE,
  PLAIN_CHANGE,
  MAX_CHANGE,
  INPUT_CHANGE,
  FLY_CHANGE,
  MONS_CHANGE,
  REF_CHANGE,
  REF_SIN_CHANGE,
  CANNON_CHANGE,
  CHAR_SELECT,
  PLAIN_SELECT,
  RARITY_SELECT
} from '../constants/ConstActionTypes'

import { dbWeapon, dbChar } from './database'
import * as parameters from '../constants/ConstParameters'
import { calcOutput, calcAtk } from './calcOutput'
import { queryChar } from './dbQuery'

// ===============================================================================
// initial status
// ===============================================================================

const initialState = {
  type: 'sword',
  plain: 'plain',
  fly: '',
  mons: '',
  cannon: 'cannon',
  max: 'max0',
  level: parameters.defaultLevel,
  HPParm: parameters.defaultHPParm,
  AtkParm: parameters.defaultAtkParm,
  DefParm: parameters.defaultDefParm,
  com: parameters.defaultCompanion,
  atk: 0,
  def: parameters.defaultDef,
  skillAtkUp: 0,
  skillDefDown: 0,
  skillSpdUpF: 0,
  skillSpdUpB: 0,
  skillAtkUpInt: 0,
  skillDefDownInt: 0,
  skillDamUp: 0,
  skillRecDamUp: 0,
  struAtk: 0,
  skillCanDirUp: 0,
  skillMelIgdef: 0,
  output: [],
  outputChar: queryChar('sword', 15, 64 | 128),
  plainStatus: 1 | 2 | 4 | 8,
  rarityStatus: 64 | 128
}

// ===============================================================================
// reducer main function
// ===============================================================================

export default function reducerCalc(state = initialState, action) {
  let calcTemp = {}
  let weaponSelected = []
  let charTemp = []
  let plainTemp
  let rarityTemp

  switch (action.type) {
    // ===============================================================================
    // weapon types change
    // ===============================================================================
    case TYPE_CHANGE:
      calcTemp = state
      calcTemp.type = action.modelId
      return Object.assign({}, state, {
        type: action.modelId,
        output: calcOutput(calcTemp),
        atk: calcAtk(calcTemp),
        outputChar: queryChar(
          action.modelId,
          state.plainStatus,
          state.rarityStatus
        )
      })
    // ===============================================================================
    // plain bonus switch
    // ===============================================================================
    case PLAIN_CHANGE:
      if (state.plain === 'plain') {
        calcTemp = state
        calcTemp.plain = ''
      } else {
        calcTemp = state
        calcTemp.plain = 'plain'
      }
      return Object.assign({}, state, {
        plain: calcTemp.plain,
        output: calcOutput(calcTemp)
      })
    // ===============================================================================
    // enemy fly status switch
    // ===============================================================================
    case FLY_CHANGE:
      if (state.fly === 'fly') {
        calcTemp = state
        calcTemp.fly = ''
      } else {
        calcTemp = state
        calcTemp.fly = 'fly'
      }
      return Object.assign({}, state, {
        fly: calcTemp.fly,
        output: calcOutput(calcTemp)
      })
    // ===============================================================================
    // enemy monster status switch
    // ===============================================================================
    case MONS_CHANGE:
      if (state.mons === 'mons') {
        calcTemp = state
        calcTemp.mons = ''
      } else {
        calcTemp = state
        calcTemp.mons = 'mons'
      }
      return Object.assign({}, state, {
        mons: calcTemp.mons,
        output: calcOutput(calcTemp)
      })
    // ===============================================================================
    // cannon direct hit switch
    // ===============================================================================
    case CANNON_CHANGE:
      if (state.cannon === 'cannon') {
        calcTemp = state
        calcTemp.cannon = ''
      } else {
        calcTemp = state
        calcTemp.cannon = 'cannon'
      }
      return Object.assign({}, state, {
        cannon: calcTemp.cannon,
        output: calcOutput(calcTemp)
      })
    // ===============================================================================
    // maximum level switch
    // ===============================================================================
    case MAX_CHANGE:
      calcTemp = state
      calcTemp.max = action.modelId
      return Object.assign({}, state, {
        max: action.modelId,
        output: calcOutput(calcTemp)
      })
    // ===============================================================================
    // weapons refine change
    // ===============================================================================
    case REF_CHANGE:
      switch (action.modelId) {
        case 'ref0':
          weaponSelected = dbWeapon.chain().data()
          weaponSelected.map(data => {
            data.atk -= data.ref
            data.ref = 0
            data.refText = '+0'
          })
          dbWeapon.update(weaponSelected)
          calcTemp = state
          return Object.assign({}, state, {
            output: calcOutput(calcTemp)
          })
        case 'refAll':
          weaponSelected = dbWeapon.chain().data()
          weaponSelected.map(data => {
            data.atk -= data.ref
            data.atk += parameters.valueMaxRef
            data.ref = parameters.valueMaxRef
            data.refText = '+' + parameters.valueMaxRef.toString()
          })
          dbWeapon.update(weaponSelected)
          calcTemp = state
          return Object.assign({}, state, {
            output: calcOutput(calcTemp)
          })
        case 'ref4':
          weaponSelected = dbWeapon
            .chain()
            .find({ rare: 4 })
            .data()
          weaponSelected.map(data => {
            data.atk -= data.ref
            data.atk += parameters.valueMaxRef
            data.ref = parameters.valueMaxRef
            data.refText = '+' + parameters.valueMaxRef.toString()
          })
          dbWeapon.update(weaponSelected)
          calcTemp = state
          return Object.assign({}, state, {
            output: calcOutput(calcTemp)
          })
        case 'ref3':
          weaponSelected = dbWeapon
            .chain()
            .find({ rare: 3 })
            .data()
          weaponSelected.map(data => {
            data.atk -= data.ref
            data.atk += parameters.valueMaxRef
            data.ref = parameters.valueMaxRef
            data.refText = '+' + parameters.valueMaxRef.toString()
          })
          dbWeapon.update(weaponSelected)
          calcTemp = state
          return Object.assign({}, state, {
            output: calcOutput(calcTemp)
          })
        case 'ref2':
          weaponSelected = dbWeapon
            .chain()
            .find({ rare: 2 })
            .data()
          weaponSelected.map(data => {
            data.atk -= data.ref
            data.atk += parameters.valueMaxRef
            data.ref = parameters.valueMaxRef
            data.refText = '+' + parameters.valueMaxRef.toString()
          })
          dbWeapon.update(weaponSelected)
          calcTemp = state
          return Object.assign({}, state, {
            output: calcOutput(calcTemp)
          })
        case 'ref1':
          weaponSelected = dbWeapon
            .chain()
            .find({ rare: 1 })
            .data()
          weaponSelected.map(data => {
            data.atk -= data.ref
            data.atk += parameters.valueMaxRef
            data.ref = parameters.valueMaxRef
            data.refText = '+' + parameters.valueMaxRef.toString()
          })
          dbWeapon.update(weaponSelected)
          calcTemp = state
          return Object.assign({}, state, {
            output: calcOutput(calcTemp)
          })
        default:
          return state
      }
    // ===============================================================================
    // weapon refine change toggle
    // ===============================================================================
    case REF_SIN_CHANGE:
      weaponSelected = dbWeapon.findOne({ name: action.modelId })
      if (weaponSelected.ref === parameters.valueMaxRef) {
        weaponSelected.atk -= parameters.valueMaxRef
        weaponSelected.ref = 0
        weaponSelected.refText = '+0'
      } else {
        weaponSelected.atk += 1
        weaponSelected.ref += 1
        weaponSelected.refText = '+' + weaponSelected.ref.toString()
      }
      dbWeapon.update(weaponSelected)
      calcTemp = state
      return Object.assign({}, state, {
        output: calcOutput(calcTemp)
      })
    // ===============================================================================
    // text input change
    // ===============================================================================
    case INPUT_CHANGE:
      switch (action.modelId) {
        case 'level':
          calcTemp = state
          calcTemp.level = action.modelValue
          return Object.assign({}, state, {
            level: action.modelValue,
            atk: calcAtk(calcTemp),
            output: calcOutput(calcTemp)
          })
        case 'AtkParm':
          calcTemp = state
          calcTemp.AtkParm = action.modelValue
          return Object.assign({}, state, {
            AtkParm: action.modelValue,
            atk: calcAtk(calcTemp),
            output: calcOutput(calcTemp)
          })
        case 'com':
          calcTemp = state
          calcTemp.com = action.modelValue
          return Object.assign({}, state, {
            com: action.modelValue,
            atk: calcAtk(calcTemp),
            output: calcOutput(calcTemp)
          })
        case 'atk':
          calcTemp = state
          calcTemp.atk = action.modelValue
          return Object.assign({}, state, {
            atk: action.modelValue,
            output: calcOutput(calcTemp)
          })
        case 'def':
          calcTemp = state
          calcTemp.def = action.modelValue
          return Object.assign({}, state, {
            def: action.modelValue,
            output: calcOutput(calcTemp)
          })
        case 'skillAtkUp':
          calcTemp = state
          calcTemp.skillAtkUp = action.modelValue
          return Object.assign({}, state, {
            skillAtkUp: action.modelValue,
            output: calcOutput(calcTemp)
          })
        case 'skillAtkUpInt':
          calcTemp = state
          calcTemp.skillAtkUpInt = action.modelValue
          return Object.assign({}, state, {
            skillAtkUpInt: action.modelValue,
            output: calcOutput(calcTemp)
          })
        case 'skillDefDown':
          calcTemp = state
          calcTemp.skillDefDown = action.modelValue
          return Object.assign({}, state, {
            skillDefDown: action.modelValue,
            output: calcOutput(calcTemp)
          })
        case 'skillDefDownInt':
          calcTemp = state
          calcTemp.skillDefDownInt = action.modelValue
          return Object.assign({}, state, {
            skillDefDownInt: action.modelValue,
            output: calcOutput(calcTemp)
          })
        case 'skillSpdUpF':
          calcTemp = state
          if (action.modelValue >= parameters.maxskillSpdUpF) {
            calcTemp.skillSpdUpF = parameters.maxskillSpdUpF
          } else {
            calcTemp.skillSpdUpF = action.modelValue
          }
          return Object.assign({}, state, {
            skillSpdUpF: calcTemp.skillSpdUpF,
            output: calcOutput(calcTemp)
          })
        case 'skillSpdUpB':
          calcTemp = state
          if (action.modelValue >= parameters.maxskillSpdUpB) {
            calcTemp.skillSpdUpB = parameters.maxskillSpdUpB
          } else {
            calcTemp.skillSpdUpB = action.modelValue
          }
          return Object.assign({}, state, {
            skillSpdUpB: calcTemp.skillSpdUpB,
            output: calcOutput(calcTemp)
          })
        case 'skillDamUp':
          calcTemp = state
          calcTemp.skillDamUp = action.modelValue
          return Object.assign({}, state, {
            skillDamUp: action.modelValue,
            output: calcOutput(calcTemp)
          })
        case 'skillRecDamUp':
          calcTemp = state
          calcTemp.skillRecDamUp = action.modelValue
          return Object.assign({}, state, {
            skillRecDamUp: action.modelValue,
            output: calcOutput(calcTemp)
          })
        case 'struAtk':
          calcTemp = state
          calcTemp.struAtk = action.modelValue
          return Object.assign({}, state, {
            struAtk: action.modelValue,
            output: calcOutput(calcTemp)
          })
        case 'skillCanDirUp':
          calcTemp = state
          calcTemp.skillCanDirUp = action.modelValue
          return Object.assign({}, state, {
            skillCanDirUp: action.modelValue,
            output: calcOutput(calcTemp)
          })
        case 'skillMelIgdef':
          calcTemp = state
          calcTemp.skillMelIgdef = action.modelValue
          return Object.assign({}, state, {
            skillMelIgdef: action.modelValue,
            output: calcOutput(calcTemp)
          })
        default:
          return state
      }
    // ===============================================================================
    // character select change
    // ===============================================================================
    case CHAR_SELECT:
      calcTemp = state
      charTemp = dbChar.findOne({ name: action.modelId })
      calcTemp.AtkParm = Math.round(parseFloat(charTemp.atF, 10) * 100)
      return Object.assign({}, state, {
        AtkParm: Math.round(parseFloat(charTemp.atF, 10) * 100),
        output: calcOutput(calcTemp),
        atk: calcAtk(calcTemp)
      })
    // ===============================================================================
    // character plain select change
    // ===============================================================================
    case PLAIN_SELECT:
      plainTemp = state.plainStatus
      if (plainTemp & action.modelId) {
        plainTemp ^= action.modelId
      } else {
        plainTemp |= action.modelId
      }

      return Object.assign({}, state, {
        plainStatus: plainTemp,
        outputChar: queryChar(state.type, plainTemp, state.rarityStatus)
      })
    // ===============================================================================
    // character rarity select change
    // ===============================================================================
    case RARITY_SELECT:
      rarityTemp = state.rarityStatus
      if (rarityTemp & action.modelId) {
        rarityTemp ^= action.modelId
      } else {
        rarityTemp |= action.modelId
      }

      return Object.assign({}, state, {
        rarityStatus: rarityTemp,
        outputChar: queryChar(state.type, state.plainStatus, rarityTemp)
      })
    // ===============================================================================
    // default status
    // ===============================================================================
    default:
      calcTemp = state
      return Object.assign({}, state, {
        atk: calcAtk(calcTemp),
        output: calcOutput(calcTemp)
      })
  }
}
