import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

const SearchBar = ({ isVisible, setSearchProjects }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    const search = isVisible ? value : ''
    const timeOutId = setTimeout(() => setSearchProjects(search), 500)

    if (!isVisible) {
      setValue('')
    }
  
    return () => clearTimeout(timeOutId)
  }, [isVisible, value])

  const transition = useTransition(isVisible, {
    from: { y: 0, opacity: 0 },
    enter: { y: 24, opacity: 1 },
    leave: { y: 0, opacity: 0 },
    delay: 200,
  })

  return (
    <>
      {transition((style, item) =>
        item ? (
          <Form id="projects-form" style={style}>
            <Input
              type="search"
              title="Type search term here"
              name="Projects"
              aria-label="Search through site projects"
              placeholder="SEARCH FOR PROJECTS"
              autoComplete="off"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </Form>
        ) : null
      )}
    </>
  )
}

export default SearchBar

const Form = styled(animated.form)`
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: -1;

  left: 0;
  right: 0;

  margin: 0 auto;
`

const Input = styled.input`
  width: calc(100% - 32px);
  height: 1.5rem;

  padding: 0.5rem;
  border: 1px solid #dddddd;

  font-family: 'BigPixel';
  font-size: 1rem;

  ::placeholder {
    color: #dddddd;
  }

  @media screen and (min-width: 768px) {
    width: 60%;
    height: 2rem;
    font-size: 2rem;
  }

  @media screen and (min-width: 1024px) {
    height: 2.5rem;
    width: 40%;
  }
`
