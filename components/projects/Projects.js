import styled from 'styled-components'
import { useFlip, FlipProvider } from 'react-easy-flip'

import { camelToTitle } from './utilities/'

import ProjectItem from './ProjectItem'

const Projects = ({ projects, groupedBy }) => {
  if (!projects) {
    return null
  }
  console.log(groupedBy)
  const sortedKeys = groupedBy === 'alphabetical' ? Object.keys(projects).sort() : Object.keys(projects)

  const dataFlip = 'flip-root'
  useFlip(dataFlip)
  // Object.keys(projects)

  return (
    <>
      <FlipProvider>
        <Section data-flip-root-id={dataFlip}>
          {sortedKeys.map(orderer => (
            <ProjectsColumn key={orderer}>
              <ProjectsList>
                {projects[orderer].map(project => (
                  <ProjectItem project={project} key={project.id} />
                ))}
              </ProjectsList>
              <ProjectsOrderer children={camelToTitle(orderer, ' ')} />
            </ProjectsColumn>
          ))}
        </Section>
      </FlipProvider>
    </>
  )
}

export default Projects

const Section = styled.section`
  display: flex;
  justify-content: center;

  min-height: 100vh;
  max-width: 50%;

  padding: 4rem 0;

  margin: 0 auto;
  gap: 1rem;
`

const ProjectsColumn = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* align-items: center; */

  min-width: 2rem;
  max-width: 5rem;

  flex-grow: 0;
`

const ProjectsOrderer = styled.h6`
  margin: 1rem 0;
  text-transform: uppercase;
`

const ProjectsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
