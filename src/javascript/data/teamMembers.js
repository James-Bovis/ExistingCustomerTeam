// @flow

type Team =
  | 'ECT'
  | 'NCT'
  | 'Platform'
  | 'All'

  | 'male'
  | 'female'

type TeamMember = {|  timezone: string,
  avatarUrl: string,
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
    avatarUrl: 'https://ca.slack-edge.com/T0P6BBP1N-UC7HELUHK-496bfc0bd71e-512',
    team: 'ECT',
    onlineStatus: fetchOnlineStatus('UC7HELUHK'),
    profile: fetchUserProfile('UC7HELUHK')
  },
  {
    timezone: 'America/Toronto',
    avatarUrl: 'https://ca.slack-edge.com/T0P6BBP1N-UCL31R6KU-03571b8c9038-512',
    team: 'Platform',
    onlineStatus: fetchOnlineStatus('UCL31R6KU'),
    profile: fetchUserProfile('UCL31R6KU')
  },
  {
    timezone: 'Europe/Dublin',
    avatarUrl: 'https://ca.slack-edge.com/T0P6BBP1N-U6278RRE3-8bace14f04b9-512',
    team: 'ECT',
    onlineStatus: fetchOnlineStatus('U6278RRE3'),
    profile: fetchUserProfile('U6278RRE3')
  },
  {
    timezone: 'Europe/Tallinn',
    avatarUrl: 'https://ca.slack-edge.com/T0P6BBP1N-UCXR81C49-4a5b9245e263-512',
    team: 'ECT',
    onlineStatus: fetchOnlineStatus('UCXR81C49'),
    profile: fetchUserProfile('UCXR81C49')
  },
  {
    timezone: 'Europe/Kiev',
    avatarUrl: 'https://ca.slack-edge.com/T0P6BBP1N-U011DRA8KGW-g70d54f080ff-512',
    team: 'ECT',
    onlineStatus: fetchOnlineStatus('U011DRA8KGW'),
    profile: fetchUserProfile('U011DRA8KGW')
  },
  {
    timezone: 'Europe/London',
    avatarUrl: 'https://ca.slack-edge.com/T0P6BBP1N-UB1U1EGB0-93a5bdc616ab-512',
    team: 'ECT',
    onlineStatus: fetchOnlineStatus('UB1U1EGB0'),
    profile: fetchUserProfile('UB1U1EGB0')
  },
  {
    timezone: 'Europe/London',
    avatarUrl: 'https://ca.slack-edge.com/T0P6BBP1N-ULNRA693L-6209b1706303-512',
    team: 'ECT',
    onlineStatus: fetchOnlineStatus('ULNRA693L'),
    profile: fetchUserProfile('ULNRA693L')
  },
  {
    timezone: 'Europe/London',
    avatarUrl: 'https://ca.slack-edge.com/T0P6BBP1N-UAXH5FK7V-7f7a3aa35535-512',
    team: 'NCT',
    onlineStatus: fetchOnlineStatus('UAXH5FK7V'),
    profile: fetchUserProfile('UAXH5FK7V')
  },
  {
    timezone: 'Europe/London',
    avatarUrl: 'https://ca.slack-edge.com/T0P6BBP1N-UDE7Z0ME2-ae2029c08327-512',
    team: 'NCT',
    onlineStatus: fetchOnlineStatus('UDE7Z0ME2'),
    profile: fetchUserProfile('UDE7Z0ME2')
  },
  {
    timezone: 'Europe/London',
    avatarUrl: 'https://ca.slack-edge.com/T0P6BBP1N-USCG9TATY-g265149b88f2-512',
    team: 'NCT',
    onlineStatus: fetchOnlineStatus('USCG9TATY'),
    profile: fetchUserProfile('USCG9TATY')
  },
  {
    timezone: 'Europe/London',
    avatarUrl: 'https://ca.slack-edge.com/T0P6BBP1N-UCZAK8EBW-1faaaf3d65cf-512',
    team: 'NCT',
    onlineStatus: fetchOnlineStatus('UCZAK8EBW'),
    profile: fetchUserProfile('UCZAK8EBW')
  },
  {
    timezone: 'Europe/London',
    avatarUrl: 'https://ca.slack-edge.com/T0P6BBP1N-U74D7GZ7E-8a5abb485474-512',
    team: 'NCT',
    onlineStatus: fetchOnlineStatus('U74D7GZ7E'),
    profile: fetchUserProfile('U74D7GZ7E')
  },
  {
    timezone: 'Europe/London',
    avatarUrl: 'https://ca.slack-edge.com/T0P6BBP1N-US9S54K4L-g3c65da64eb4-512',
    team: 'Platform',
    onlineStatus: fetchOnlineStatus('US9S54K4L'),
    profile: fetchUserProfile('US9S54K4L')
  },
  {
    timezone: 'Europe/London',
    avatarUrl: 'https://ca.slack-edge.com/T0P6BBP1N-U01441V313L-g4ffa7040829-512',
    team: 'Platform',
    onlineStatus: fetchOnlineStatus('U01441V313L'),
    profile: fetchUserProfile('U01441V313L')
  },
  {
    timezone: 'Europe/London',
    avatarUrl: 'https://ca.slack-edge.com/T0P6BBP1N-U5UFFTF52-f5fa75b2a988-512',
    team: 'All',
    onlineStatus: fetchOnlineStatus('U5UFFTF52'),
    profile: fetchUserProfile('U5UFFTF52')
  },
  {
    timezone: 'Europe/London',
    avatarUrl: 'https://ca.slack-edge.com/T0P6BBP1N-U92882KNH-d833d845d1cc-512',
    team: 'All',
    onlineStatus: fetchOnlineStatus('U92882KNH'),
    profile: fetchUserProfile('U92882KNH')
  }
]

export default TeamMembers
export type {
  TeamMember,
  Team,
}
