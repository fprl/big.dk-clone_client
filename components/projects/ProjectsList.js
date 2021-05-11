import styled from 'styled-components'
import ProjectItem from './ProjectItem'

const ProjectsList = ({ projects }) => {
  return (
    <>
      {projects.map(projectsBy => (
        <ProjectsColumn key={projectsBy.type}>
          <ProjectsUl>
            {/* {projectsBy.map(project => (
              <ProjectItem project={project} key={project.id} />
            ))} */}
          </ProjectsUl>
        </ProjectsColumn>
      ))}
    </>
  )
}

export default ProjectsList

const ProjectsColumn = styled.article`
  display: inline-flex;

  margin-left: 1rem;
`
const ProjectsUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
