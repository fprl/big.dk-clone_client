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
  overflow: auto;

  min-height: 100vh;
  max-height: 100vh;

  padding: 4rem 0;
  margin: 0 auto;
  gap: ${p => p.gap === 'small' ? '1rem' : '2rem'};


  @media screen and (min-width: 1024px) {
    gap: ${p => p.gap === 'small' ? 'var(--section-gap-s)' : 'var(--section-gap-l)'};
  }

  @media screen and (min-width: 1200px) {
    gap: ${p => p.gap === 'small' ? 'var(--section-gap-m)' : 'var(--section-gap-l)'};
  }
`

const ProjectsColumn = styled.article`


@media screen and (min-width: 1024px) {
    --columns: ${p => Math.ceil(p.items / 13)}; // 13 is the number of items in a column
    --gaps: calc(var(--columns) - 1);

    --max-width: calc(var(--icon-size) * var(--columns) + var(--gap-width) * var(--gaps));

    max-width: ${p => Math.ceil(p.items) / 13 > 1 ? 'var(--max-width)' : '5rem'};
    flex-grow: ${p => Math.ceil(p.items) / 13 > 1 ? 1 : 0};
  }

  @media screen and (min-width: 1200px) {
    --columns: ${p => Math.ceil(p.items / 10)}; // 10 is the number of items in a column
    --gaps: calc(var(--columns) - 1);

    --max-width: calc(var(--icon-size) * var(--columns) + var(--gap-width) * var(--gaps));

    max-width: ${p => Math.ceil(p.items) / 10 > 1 ? 'var(--max-width)' : '5rem'};
    flex-grow: ${p => Math.ceil(p.items) / 10 > 1 ? 1 : 0};
  }

  @media screen and (min-width: 1600px) {
    --columns: ${p => Math.ceil(p.items / 13)}; // 13 is the number of items in a column
    --gaps: calc(var(--columns) - 1);
    
    --max-width: calc(var(--icon-size) * var(--columns) + var(--gap-width) * var(--gaps));
    
    max-width: ${p => Math.ceil(p.items) / 13 > 1 ? 'var(--max-width)' : '5rem'};
    flex-grow: ${p => Math.ceil(p.items) / 13 > 1 ? 1 : 0};
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const ProjectsOrderer = styled.h6`
  font-size: 0.70rem;
  margin: 1rem 0;
  text-transform: uppercase;
`

const ProjectsList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  max-height: var(--col-height);

  column-gap: var(--gap-width);

  list-style: none;
  margin: 0;
  padding: 0;
`
