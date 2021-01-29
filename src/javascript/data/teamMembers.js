// @flow

type Team =
  | 'ECT'
  | 'NCT'
  | 'Platform'
  | 'All'

type TeamMember = {|
  timezone: string,
  team: Team,
  onlineStatus: Promise<any>,
  profile: Promise<any>
|}

const fetchOnlineStatus = (teamMemberId: string): Promise<any> => {
  const endpoint = `/.netlify/functions/slackOnlineStatus?userID=${teamMemberId}`

  return fetch(endpoint)
    .then(response => response.text())
    .then(data => data)
    .catch(error => ({ statusCode: 422, body: String(error) }))
}

const fetchUserProfile = (teamMemberId: string): Promise<any> => {
  const endpoint = `/.netlify/functions/fetchUserProfile?userID=${teamMemberId}`

  return fetch(endpoint)
    .then(response => response.text())
    .then(data => JSON.parse(data))
    .catch(error => ({ statusCode: 422, body: String(error) }))
}


const TeamMembers: Array<TeamMember> = [
  {
    timezone: 'Europe/London',
    team: 'ECT',
    onlineStatus: fetchOnlineStatus('UC7HELUHK'),
    profile: fetchUserProfile('UC7HELUHK')
  },
  {
    timezone: 'America/Toronto',
    team: 'Platform',
    onlineStatus: fetchOnlineStatus('UCL31R6KU'),
    profile: fetchUserProfile('UCL31R6KU')
  },
  {
    timezone: 'Europe/Dublin',
    team: 'ECT',
    onlineStatus: fetchOnlineStatus('U6278RRE3'),
    profile: fetchUserProfile('U6278RRE3')
  },
  {
    timezone: 'Europe/Tallinn',
    team: 'ECT',
    onlineStatus: fetchOnlineStatus('UCXR81C49'),
    profile: fetchUserProfile('UCXR81C49')
  },
  {
    timezone: 'Europe/Kiev',
    team: 'ECT',
    onlineStatus: fetchOnlineStatus('U011DRA8KGW'),
    profile: fetchUserProfile('U011DRA8KGW')
  },
  {
    timezone: 'Europe/London',
    team: 'ECT',
    onlineStatus: fetchOnlineStatus('UB1U1EGB0'),
    profile: fetchUserProfile('UB1U1EGB0')
  },
  {
    timezone: 'Europe/London',
    team: 'ECT',
    onlineStatus: fetchOnlineStatus('ULNRA693L'),
    profile: fetchUserProfile('ULNRA693L')
  },
  {
    timezone: 'Europe/London',
    team: 'NCT',
    onlineStatus: fetchOnlineStatus('UAXH5FK7V'),
    profile: fetchUserProfile('UAXH5FK7V')
  },
  {
    timezone: 'Europe/London',
    team: 'NCT',
    onlineStatus: fetchOnlineStatus('UDE7Z0ME2'),
    profile: fetchUserProfile('UDE7Z0ME2')
  },
  {
    timezone: 'Europe/London',
    team: 'NCT',
    onlineStatus: fetchOnlineStatus('USCG9TATY'),
    profile: fetchUserProfile('USCG9TATY')
  },
  {
    timezone: 'Europe/London',
    team: 'NCT',
    onlineStatus: fetchOnlineStatus('UCZAK8EBW'),
    profile: fetchUserProfile('UCZAK8EBW')
  },
  {
    timezone: 'Europe/London',
    team: 'NCT',
    onlineStatus: fetchOnlineStatus('U74D7GZ7E'),
    profile: fetchUserProfile('U74D7GZ7E')
  },
  {
    timezone: 'Europe/London',
    team: 'Platform',
    onlineStatus: fetchOnlineStatus('US9S54K4L'),
    profile: fetchUserProfile('US9S54K4L')
  },
  {
    timezone: 'Europe/London',
    team: 'Platform',
    onlineStatus: fetchOnlineStatus('U01441V313L'),
    profile: fetchUserProfile('U01441V313L')
  },
  {
    timezone: 'Europe/London',
    team: 'All',
    onlineStatus: fetchOnlineStatus('U5UFFTF52'),
    profile: fetchUserProfile('U5UFFTF52')
  },
  {
    timezone: 'Europe/London',
    team: 'All',
    onlineStatus: fetchOnlineStatus('U92882KNH'),
    profile: fetchUserProfile('U92882KNH')
  },
  {
    timezone: 'Europe/London',
    team: 'Platform',
    onlineStatus: fetchOnlineStatus('U01AHMBT20L'),
    profile: fetchUserProfile('U01AHMBT20L')
  },
  {
    timezone: 'Europe/London',
    team: 'ECT',
    onlineStatus: fetchOnlineStatus('U01BDH5DLRY'),
    profile: fetchUserProfile('U01BDH5DLRY')
  },
  {
    timezone: 'Europe/London',
    team: 'Platform',
    onlineStatus: fetchOnlineStatus('U01BDH5HB26'),
    profile: fetchUserProfile('U01BDH5HB26')
  }
]

export default TeamMembers
export type {
  TeamMember,
  Team,
}
