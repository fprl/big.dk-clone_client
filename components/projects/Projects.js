import styled from 'styled-components'
import { useFlip, FlipProvider } from 'react-easy-flip'

import { camelToTitle } from './utilities/'

import ProjectItem from './ProjectItem'

const Projects = ({ projects, groupedBy }) => {
  if (!projects) {
    return null
  }

  const sortedKeys = groupedBy === 'alphabetical' ? Object.keys(projects).sort() : Object.keys(projects)
  // Object.keys(projects)

  const dataFlip = 'flip-root'
  useFlip(dataFlip)

  return (
    <>
      <FlipProvider>
        <Section data-flip-root-id={dataFlip}>
          {sortedKeys.map(orderer => (
            <ProjectsColumn key={orderer} projectsLength={projects[orderer].length}>
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
  max-height: 100vh;
  max-width: 80%;

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
  max-width: ${p => p.projectsLength >= 36 ? '12rem' : '6rem'};

  flex-grow: ${p => p.projectsLength >= 18 ? 1 : 0};
`

const ProjectsOrderer = styled.h6`
  margin: 1rem 0;
  text-transform: uppercase;
`

const ProjectsList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  max-height: 80%;

  list-style: none;
  margin: 0;
  padding: 0;
`
