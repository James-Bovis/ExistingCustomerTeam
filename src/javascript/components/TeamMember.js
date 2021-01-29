// @flow

import * as React from 'react'

// Utils
import { zones } from 'moment-timezone/data/meta/latest.json'

// Context
import Show24HourTimeContext from '../Show24HourTimeContext'
import CurrentTimeContext from '../CurrentTimeContext'

import type { TeamMember as TeamMemberType } from '../data/teamMembers'

type Props = {|
  timezone: $PropertyType<TeamMemberType, 'timezone'>,
  userID: $PropertyType<TeamMemberType, 'userID'>
|}

const TeamMember = ({ timezone, userID }: Props): React.Node => {
  const [ userProfile, setUserProfile ] = React.useState({})
  const [isOnline, setIsOnline] = React.useState(false)

  const show24HourTime = React.useContext(Show24HourTimeContext)
  const currentTime = React.useContext(CurrentTimeContext)

  const getCountryCode = (zone: $PropertyType<TeamMemberType, 'timezone'>): string => {
    return zones[zone] && zones[zone].countries[0]
  }

  // Fetch the Team Members Slack profile
  React.useEffect((): void => {
    const endpoint = `/.netlify/functions/fetchUserProfile?userID=${userID}`

    fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      setUserProfile(data)
    })
  }, [userID])

  // Fetch the Team Members Online Presence
  React.useEffect((): void => {
    const endpoint = `/.netlify/functions/slackOnlineStatus?userID=${userID}`

    fetch(endpoint)
    .then((response) => response.text())
    .then((data) => {
      setIsOnline(data === 'active')
    })
  }, [userID])

  return (
    <div className='team-member'>
      <div className='team-member__avatar'>
        <div className={`team-member__avatar__day-night-indicator ${isOnline ? 'team-member__avatar__day-night-indicator--online' : 'team-member__avatar__day-night-indicator--offline'}`} />
        <img
          alt={userProfile.real_name}
          className='team-member__avatar__image'
          src={userProfile.image_512}
        />
      </div>
      <div className='team-member__information'>
        <h2 className='team-member__information__name'>
          { userProfile.real_name_normalized }
        </h2>
        <p className='team-member__information__current-time'>
          <React.Suspense fallback={<p>Loading...</p>}>
            {
              currentTime.tz(timezone).format(
                show24HourTime
                  ? 'HH:mm'
                  : 'hh:mm A'
              )
            }
          </React.Suspense>
        </p>
        <small className='team-member__information__timezone'>
          { timezone }
        </small>
        <img
          alt={getCountryCode(timezone)}
          className='team-member__country'
          src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${getCountryCode(timezone)}.svg`}
        />
      </div>
    </div>
  )
}

export default TeamMember

