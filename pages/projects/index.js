// domain.com/projects
import { useEffect, useState } from 'react'
import Head from 'next/head'

import { projectsApi } from '../../lib/api'
import { groupByProperty } from '../../lib/utilities/'

import { Loading, ProjectsNavbar, Projects, ProjectsOrderer } from '../../components/projects'

const ProjectsPage = ({ projects }) => {
  const [isPageLoading, setIsPageLoading] = useState(true)
  const [projectsOrdered, setProjectsOrdered] = useState(null)
  const [groupProjectsBy, setGroupProjectsBy] = useState('year')
  const [searchProjects, setSearchProjects] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoading(false)
    }, 3000)
  }, [])

  useEffect(() => {
    const userIsSearching = searchProjects ? true : false
    const projectsToShow = userIsSearching ? projects.filter(project => project.title.toLowerCase().includes(searchProjects.toLowerCase())) : projects
    const groupedProjects = groupByProperty(projectsToShow, groupProjectsBy)
    setProjectsOrdered(groupedProjects)
  }, [searchProjects, groupProjectsBy])

  if (projects.length === 0) {
    return <h1>No projects to show, please add one.</h1>
  }

  return (
    <>
      {isPageLoading ? <Loading /> : null}
      <Head>
        <title>BIG | Bjarke Ingels Group</title>
        <meta name="description" content="BIG projects" />
      </Head>
      <ProjectsNavbar setSearchProjects={setSearchProjects} />
      <Projects projects={projectsOrdered} groupedBy={groupProjectsBy} />
      <ProjectsOrderer orderer={groupProjectsBy} setGroupProjectsBy={setGroupProjectsBy} />
    </>
  )
}

export async function getStaticProps() {
  // fetch data from an API
  const projects = await projectsApi.getAll()

  return {
    props: {
      projects,
    },
    revalidate: 1,
  }
}

export default ProjectsPage
