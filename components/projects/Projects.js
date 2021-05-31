import styled from 'styled-components'
import { useFlip, FlipProvider } from 'react-easy-flip'

import { camelToTitle, getOrdererWidth } from './utilities/'

import ProjectItem from './ProjectItem'

const Projects = ({ projects, groupedBy }) => {
  if (!projects) {
    return null
  }

  const sortedKeys = groupedBy === 'alphabetical' ? Object.keys(projects).sort() : Object.keys(projects)
  // Object.keys(projects)
  const gap = groupedBy === 'scale' || groupedBy === 'status' ? 'big' : 'small'

  const dataFlip = 'flip-root'
  useFlip(dataFlip)

  return (
    <>
      <FlipProvider>
        <Section data-flip-root-id={dataFlip} gap={gap}>
          {sortedKeys.map(orderer => (
            <ProjectsColumn key={orderer} info={getOrdererWidth(projects[orderer].length)}>
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

  padding: 4rem 0;

  margin: 0 auto;
  gap: ${p => p.gap === 'small' ? '1rem' : '2rem'};
`

const ProjectsColumn = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  min-width: 2rem;
  max-width: ${p => p.info.columns > 1 ? `${p.info.width}px` : '5rem'};

  flex-grow: ${p => p.info.columns > 1 ? 1 : 0};
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

  gap: 0.5rem;

  list-style: none;
  margin: 0;
  padding: 0;
`
