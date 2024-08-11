import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const List = styled.li`
  display: flex;
  margin: 10px;
  width: 200px;
  align-items: center;
  color: #000000;
  text-decoration: none;
`
export const StyledLink = styled(Link)`
  display: flex;
  margin: 10px;
  width: 200px;
  align-items: center;
  color: #000000;
  text-decoration: none;
  list-style-type: none;
`

export const Img = styled.img`
  align-self: center;
  margin: 5px;
`
