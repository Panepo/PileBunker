export const defaultLevel = 50 // define the default level
export const defaultHPParm = 100 // define the default hp parameter
export const defaultAtkParm = 100 // define the default atk parameter
export const defaultDefParm = 100 // define the default def parameter
export const defaultCompanion = 100 // define the default Companion parameter

export const defaultDef = 100 // define the default defense value

export const muxPlain = 1.2 // define the multiplier when attacker have plain
export const muxFlyBow = 1.5 // define the multiplier when bow attack a flying enemy
export const muxFlyMelee = 0.5 // define the multiplier when melee attack a flying enemy
export const muxMonsMelee = 0.5 // define the multiplier when physical attack a monster
export const muxCanDirect = 0.5 // define the multiplier when cannon direct hit

// define the multiplier for each maximum step
// export const muxMax = [1.16, 1.32, 1.48, 1.64, 1.8]
export const muxMax = {
  max0: 1,
  max1: 1.16,
  max2: 1.32,
  max3: 1.48,
  max4: 1.64,
  max5: 1.8
}

export const valueProDam = 20 // define the promised damage when hit
export const valueFPS = 30 // define the system frame per second
export const valueMaxRef = 10 // define the maximum refine value

export const maxskillSpdUpF = 500 // define the maximum aspd skill value
export const maxskillSpdUpB = 100 // define the maximum aspd spell value
