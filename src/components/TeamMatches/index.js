import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

// eslint-disable-next-line spaced-comment
/*const initialBackgroundColorClassNames = [
  'RCB',
  'KXP',
  'KKR',
  'CSK',
  'RR',
  'MI',
  'DC',
] */

class TeamMatches extends Component {
  state = {
    isLoading: true,
    latestMatch: {},
    recentMatchList: [],
    teamBannerImage: '',
  }

  componentDidMount() {
    this.fetchTeamDetails()
  }

  fetchTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    const {latestMatchDetails, recentMatches, teamBannerUrl} = formattedData

    const formattedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    console.log(formattedLatestMatchDetails)
    const formattedRecentMatches = recentMatches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      id: eachMatch.id,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))

    this.setState({
      latestMatch: formattedLatestMatchDetails,
      recentMatchList: formattedRecentMatches,
      teamBannerImage: teamBannerUrl,
      isLoading: false,
    })
  }

  renderRecentMatches = () => {
    const {recentMatchList} = this.state

    return (
      <ul className="recent-matches-container">
        {recentMatchList.map(eachMatch => (
          <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  renderLatestMatch = () => {
    const {latestMatch} = this.state

    return <LatestMatch latestMatch={latestMatch} />
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#FFFFFF" height={50} width={50} />
    </div>
  )

  renderMatchDetails = () => {
    const {teamBannerImage} = this.state
    return (
      <div className="matches-container">
        <img src={teamBannerImage} className="banner-image" alt="team banner" />
        <h1 className="heading-latest-matches">Latest Matches</h1>
        {this.renderLatestMatch()}
        {this.renderRecentMatches()}
      </div>
    )
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {isLoading} = this.state
    return (
      <div className={`match-details-container ${id}`}>
        {isLoading ? this.renderLoader() : this.renderMatchDetails()}
      </div>
    )
  }
}

export default TeamMatches
