import {Link} from 'react-router-dom'
import Header from '../Header'
import {ErrorImg, Division, Heading, Btn} from './styledComponents'

const NotFound = () => (
  <div>
    <Header />
    <Division>
      <ErrorImg
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="notfound"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <p>We cannot seem to find the page you are looking for.</p>
      <Link to="/">
        <Btn type="button">Retry</Btn>
      </Link>
    </Division>
  </div>
)

export default NotFound
