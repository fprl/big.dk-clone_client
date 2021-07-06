import styled from 'styled-components'
import { useFlip, FlipProvider } from 'react-easy-flip'

import { camelToTitle } from './utilities/'
import ProjectItem from './ProjectItem'


const Projects = ({ projects, groupedBy }) => {
  if (!projects) {
    return null
  }

  const sortedKeys = groupedBy === 'alphabetical' ? Object.keys(projects).sort() : Object.keys(projects)
  const gap = groupedBy === 'programmatic' || groupedBy === 'scale' || groupedBy === 'status' ? 'big' : 'small'

  const dataFlip = 'flip-root'
  useFlip(dataFlip)


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
  flex-direction: column;
  overflow: auto;

  min-height: 100vh;
  max-height: 100vh;

  padding: 4rem 0;
  margin: 0 auto;
  gap: ${p => p.gap === 'small' ? 'var(--section-gap-s)' : 'var(--section-gap-m)'};

  font-family: "BigPixel";
  font-weight: 400;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: ${p => p.gap === 'small' ? 'var(--section-gap-s)' : 'var(--section-gap-l)'};
  }

  @media screen and (min-width: 1200px) {
    gap: ${p => p.gap === 'small' ? 'var(--section-gap-m)' : 'var(--section-gap-l)'};
  }
`

const ProjectsColumn = styled.article`
  display: flex;
  flex-direction: column-reverse;

  margin-inline: 1rem;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    margin-inline: 0;
    // check if col should accept a max of 10 items.
    --columns: ${p => Math.ceil(p.items / 13)}; // 13 is the number of items in a column
    --gaps: calc(var(--columns) - 1);
    --max-width: calc(var(--icon-size) * var(--columns) + var(--gap-width) * var(--gaps));

    max-width: ${p => Math.ceil(p.items) / 13 > 1 ? 'var(--max-width)' : '5rem'};
    flex-grow: ${p => Math.ceil(p.items) / 13 > 1 ? 1 : 0};
  }

  @media screen and (min-width: 1200px) {
    --columns: ${p => Math.ceil(p.items / 10)}; // 10 is the number of items in a column

    max-width: ${p => Math.ceil(p.items) / 10 > 1 ? 'var(--max-width)' : '5rem'};
    flex-grow: ${p => Math.ceil(p.items) / 10 > 1 ? 1 : 0};
  }

  @media screen and (min-width: 1600px) {
    --columns: ${p => Math.ceil(p.items / 13)}; // 13 is the number of items in a column
    
    max-width: ${p => Math.ceil(p.items) / 13 > 1 ? 'var(--max-width)' : '5rem'};
    flex-grow: ${p => Math.ceil(p.items) / 13 > 1 ? 1 : 0};
  }
`

const ProjectsList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  column-gap: var(--gap-width);
  
  @media screen and (min-width: 1024px) {
  flex-direction: column-reverse;
  flex-wrap: wrap;

  max-height: var(--col-height);
  }
`

const ProjectsOrderer = styled.h6`
  font-size: 1rem;
  margin: 0.5rem 0;
  text-transform: uppercase;

  @media screen and (min-width: 1024px) {
    font-size: 0.85rem;
    font-weight: 800;
    margin: 1rem 0;
  }
`
