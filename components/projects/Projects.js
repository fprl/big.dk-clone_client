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
  const gap = groupedBy === 'programmatic' || groupedBy === 'scale' || groupedBy === 'status' ? 'big' : 'small'

  const dataFlip = 'flip-root'
  useFlip(dataFlip)
  // info={getOrdererWidth(projects[orderer].length)}

  return (
    <>
      <FlipProvider>
        <Section data-flip-root-id={dataFlip} gap={gap}>
          {sortedKeys.map(orderer => (
            <ProjectsColumn key={orderer} items={projects[orderer].length}>
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

  overflow: auto;
`

const ProjectsColumn = styled.article`
  --icon-width: 36px;
  --gap-width: 8px;
  --items: ${p => p.items};
  --columns: ${p => Math.ceil(p.items / 13)}; // 13 is the number of items in a column
  --gaps: calc(var(--columns) - 1);
  --width: calc(var(--icon-width) * var(--columns) + var(--gap-width) * var(--gaps));

  @media screen and (max-width: 860px) {
    --icon-width: 26px;
    --columns: ${p => Math.ceil(p.items / 10)}; // 10 is the number of items in a column
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  min-width: 2rem;
  /* max-width: ${p => p.info.columns > 1 ? `${p.info.width}px` : '5rem'}; */
  max-width: ${p => Math.ceil(p.items) / 13 > 1 ? 'var(--width)' : '5rem'};

  /* flex-grow: ${p => p.info.columns > 1 ? 1 : 0}; */
  flex-grow: ${p => Math.ceil(p.items) / 13 > 1 ? 1 : 0};
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

  column-gap: 0.5rem;

  list-style: none;
  margin: 0;
  padding: 0;
`
