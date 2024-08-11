import {List, Img, StyledLink} from './styledComponents'

const CourseItem = props => {
  const {course} = props
  const {id, logoUrl, name} = course
  return (
    <StyledLink to={`/courses/${id}`}>
      <List>
        <Img src={logoUrl} alt={name} />
        <p>{name}</p>
      </List>
    </StyledLink>
  )
}

export default CourseItem
