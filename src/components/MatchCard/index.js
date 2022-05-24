import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetails
  const getMatchStatusStyle = matchStatus === 'Won' ? 'won' : 'lose'

  return (
    <li className="march-card-container">
      <img
        src={competingTeamLogo}
        className="comp-team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="team-heading">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`match-status ${getMatchStatusStyle}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
