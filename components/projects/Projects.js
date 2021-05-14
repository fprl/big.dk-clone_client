import styled from 'styled-components'
import { useFlip, FlipProvider } from 'react-easy-flip'

import ProjectItem from './ProjectItem'

const Projects = ({ projects }) => {
  if (!projects) {
    return null
  }

  const dataFlip = 'flip-root'

  useFlip(dataFlip)

  return (
    <>
      <FlipProvider>
        <Section data-flip-root-id={dataFlip}>
          {Object.keys(projects).map(orderer => (
            <ProjectsColumn key={orderer}>
              <ProjectsList>
                {projects[orderer].map(project => (
                  <ProjectItem project={project} key={project.id} />
                ))}
              </ProjectsList>
              <ProjectsOrderer children={orderer} />
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

  min-height: 75vh;
  max-width: 50%;

  margin: 0 auto;
  gap: 1rem;
`

const ProjectsColumn = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  min-width: 2rem;
  max-width: 4rem;

  flex-grow: 0;
`

const ProjectsOrderer = styled.h6`
  margin: 1rem 0;
`

const ProjectsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
