import {Profile, ProfileLogo, TeamLogo} from "./profile";
import {Rounds} from "./rounds";

const cszBlue = '#0b4d82'
const cszRed = '#9a1b20'

export const builtinProfiles: Profile[] = [
  {
    id: 'wry-vs-dry',
    name: 'Wry vs Dry',
    builtin: true,
    logo: ProfileLogo.WryVsDry,
    // social: '(FB)(IG)(TW) @cszsanjose',
    rounds: Rounds.default,
    teams: {
      leftName: 'Wry',
      leftColor: '#000000',
      rightName: 'Dry',
      rightColor: '#ffffff',
      optional: 'Alyssa'
    }
  },
  {
    id: 'csz-main',
    name: 'ComedySportz',
    builtin: true,
    logo: ProfileLogo.ComedySportz,
    social: '(FB)(IG)(TW) @cszsanjose',
    rounds: Rounds.default,
    teams: {
      leftName: 'Snarks',
      leftColor: cszBlue,
      rightName: 'Laughletics',
      rightColor: cszRed,
      optional: 'Alyssa'
    }
  },
  {
    id: 'csz-minorleague',
    name: 'Minor League',
    builtin: true,
    logo: ProfileLogo.MinorLeague,
    social: '(FB)(IG) @cszminorleaguesj',
    rounds: Rounds.default,
    teams: {
      leftName: 'Snortyniners',
      leftLogo: TeamLogo.Snortyniners,
      leftColor: cszBlue,
      rightName: 'Mirthquakes',
      rightLogo: TeamLogo.Mirthquakes,
      rightColor: cszRed,
      optional: 'George'
    }
  },
  {
    id: 'csz-recleague',
    name: 'Rec League',
    builtin: true,
    logo: ProfileLogo.RecLeague,
    // social: '(FB)(IG) @cszminorleaguesj',
    rounds: Rounds.default,
    teams: {
      leftName: 'Blue',
      leftColor: cszBlue,
      rightName: 'Red',
      rightColor: cszRed,
      optional: 'Name'
    }
  }
]
