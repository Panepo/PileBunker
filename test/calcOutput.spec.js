import 'babel-polyfill'
import should from 'should'
import * as calcOutput from '../src/reducers/calcOutput'

describe('#calcAtk', () => {
  it('should return the attack value of the character', done => {
    let input = {}
    input.type = 'sword'
    input.com = 100
    input.level = 70
    input.AtkParm = 130

    var test = calcOutput.calcAtk(input)

    test.should.equal(249)
    done()
  })
})
