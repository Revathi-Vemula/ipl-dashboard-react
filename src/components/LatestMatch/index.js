import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatch

  return (
    <div className="latest-match-container">
      <div className="competing-team-match-container">
        <div className="competing-team-match-happening">
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <hr className="separator" />
      <div className="innings-container">
        <p className="innings-heading">First Innings</p>
        <p className="innings-team-name">{firstInnings}</p>
        <p className="innings-heading">Second Innings</p>
        <p className="innings-team-name">{secondInnings}</p>
        <p className="man-of_the_match-heading">Man of the Match</p>
        <p className="man-of-the-match">{manOfTheMatch}</p>
        <p className="umpires-heading">Umpires</p>
        <p className="umpires">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
