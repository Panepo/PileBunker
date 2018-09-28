import * as calc from './calcOutput'

it('calcAtk', () => {
  let input = {}
  input.type = 'sword'
  input.com = 100
  input.level = 70
  input.AtkParm = 130
  expect(calc.calcAtk(input)).toEqual(249)
})
