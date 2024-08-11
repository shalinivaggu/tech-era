import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Header from '../Header'

import {View, Success, Image, Text, Button} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class CourseDetails extends Component {
  state = {apiStatus: apiStatusConstant.initial, info: undefined}

  componentDidMount() {
    this.getCourseDetails()
  }

  getCourseDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(` https://apis.ccbp.in/te/courses/${id}`)
    if (response.ok) {
      const result = await response.json()
      const courseDetails = result.course_details
      const updatedData = {
        description: courseDetails.description,
        imageUrl: courseDetails.image_url,
        name: courseDetails.name,
        id: courseDetails.id,
      }
      this.setState({apiStatus: apiStatusConstant.success, info: updatedData})
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderSuccessView = () => {
    const {info} = this.state
    const {description, imageUrl, name} = info
    return (
      <View>
        <Success>
          <Image src={imageUrl} alt={name} />
          <div>
            <h1>{name}</h1>
            <Text>{description}</Text>
          </div>
        </Success>
      </View>
    )
  }

  renderLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <View>
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for.</p>
      <Link to="/">
        <Button type="button">Retry</Button>
      </Link>
    </View>
  )

  renderSwitch = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccessView()
      case apiStatusConstant.inProgress:
        return this.renderLoaderView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderSwitch()}
      </div>
    )
  }
}

export default CourseDetails
