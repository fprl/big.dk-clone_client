import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const ProjectItem = ({ project }) => {
  const [currPosition, setCurrPosition] = useState({})
  const [prevPosition, setPrevPosition] = useState({})
  const itemRef = useRef(null)

/*   if (itemRef.current) {
    console.group(`${project.title}`)
    console.dir(itemRef.current.getBoundingClientRect())
    console.groupEnd()
  } */

  useEffect(() => {
    const position = itemRef.current.getBoundingClientRect()
    setCurrPosition(position)
  }, [])

  useEffect(() => {
    const position = itemRef.current.getBoundingClientRect()
    if (currPosition.x === position.x) {
      return
    } else {
      setPrevPosition(currPosition)
      setCurrPosition(position)
    }
  })

  return <Item id={project.id} ref={itemRef}>{project.title}</Item>
}

export default ProjectItem

const Item = styled.article`
  transition: all 3s;
`
