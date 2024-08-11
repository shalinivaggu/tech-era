import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import CourseItem from '../CourseItem'
import {Globaldiv, UnorderedList} from './styledComponents'

class Home extends Component {
  state = {courses: [], isLoading: true}

  componentDidMount() {
    this.getCourses()
  }

  getCourses = async () => {
    const response = await fetch('https://apis.ccbp.in/te/courses')

    const result = await response.json()
    const updatedData = result.courses.map(each => ({
      id: each.id,
      name: each.name,
      logoUrl: each.logo_url,
    }))
    this.setState({
      courses: updatedData,
      isLoading: false,
    })
  }

  renderSuccessView = () => {
    const {courses} = this.state
    return (
      <UnorderedList>
        {courses.map(each => (
          <CourseItem course={each} key={each.id} />
        ))}
      </UnorderedList>
    )
  }

  renderLoaderView = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <Globaldiv>
        <Header />
        <div>
          <h1>Courses</h1>
          {isLoading ? this.renderLoaderView() : this.renderSuccessView()}
        </div>
      </Globaldiv>
    )
  }
}

export default Home
