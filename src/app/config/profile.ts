export enum ProfileLogo {
  ComedySportz = 'comedysportz.png',
  MinorLeague =  'minorleague.png',
  RecLeague = 'recleague.png',
  WryVsDry = 'wry-vs-dry.png'
}

export enum TeamLogo {
  Snortyniners = 'snortyniners.png',
  Mirthquakes = 'mirthquakes.png'
}

export interface Profile {
  id: string
  name: string
  builtin?: boolean
  logo: ProfileLogo
  social?: string
  rounds: string[]
  teams: {
    leftName: string
    leftLogo?: TeamLogo,
    leftColor: string,
    rightName: string
    rightLogo?: TeamLogo
    rightColor: string,
    optional: string,
  }
  disableRoundFlyby?: boolean
  disableTeamFlyby?: boolean
}
