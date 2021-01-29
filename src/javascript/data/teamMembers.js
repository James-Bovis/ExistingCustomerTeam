// @flow

type Team =
  | 'LTV'
  | 'Growth'
  | 'Platform'
  | 'Data'
  | 'All'

type TeamMember = {|
  timezone: string,
  team: Team,
  userID: string
|}

const TeamMembers: Array<TeamMember> = [
  {
    timezone: 'Europe/London',
    team: 'LTV',
    userID: 'UC7HELUHK'
  },
  {
    timezone: 'America/Toronto',
    team: 'Platform',
    userID: 'UCL31R6KU'
  },
  {
    timezone: 'Europe/Dublin',
    team: 'LTV',
    userID: 'U6278RRE3'
  },
  {
    timezone: 'Europe/Tallinn',
    team: 'LTV',
    userID: 'UCXR81C49'
  },
  {
    timezone: 'Europe/Kiev',
    team: 'LTV',
    userID: 'U011DRA8KGW'
  },
  {
    timezone: 'Europe/London',
    team: 'LTV',
    userID: 'UB1U1EGB0'
  },
  {
    timezone: 'Europe/London',
    team: 'LTV',
    userID: 'ULNRA693L'
  },
  {
    timezone: 'Europe/London',
    team: 'Growth',
    userID: 'UAXH5FK7V'
  },
  {
    timezone: 'Europe/London',
    team: 'Growth',
    userID: 'UDE7Z0ME2'
  },
  {
    timezone: 'Europe/London',
    team: 'Growth',
    userID: 'USCG9TATY'
  },
  {
    timezone: 'Europe/London',
    team: 'Growth',
    userID: 'UCZAK8EBW'
  },
  {
    timezone: 'Europe/London',
    team: 'Growth',
    userID: 'U74D7GZ7E'
  },
  {
    timezone: 'Europe/London',
    team: 'Platform',
    userID: 'US9S54K4L'
  },
  {
    timezone: 'Europe/London',
    team: 'Platform',
    userID: 'U01441V313L'
  },
  {
    timezone: 'Europe/London',
    team: 'All',
    userID: 'U5UFFTF52'
  },
  {
    timezone: 'Europe/London',
    team: 'All',
    userID: 'U92882KNH'
  },
  {
    timezone: 'Europe/London',
    team: 'Platform',
    userID: 'U01AHMBT20L'
  },
  {
    timezone: 'Europe/London',
    team: 'LTV',
    userID: 'U01BDH5DLRY'
  },
  {
    timezone: 'Europe/London',
    team: 'Data',
    userID: 'U01BDH5HB26'
  }
]

export default TeamMembers
export type {
  TeamMember,
  Team,
}
