// domain.com/projects
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { projectsApi } from '../../lib/api'
import { groupByProperty } from '../../lib/utilities/'

import { Projects, ProjectsOrderer } from '../../components/projects'

const ProjectsPage = ({ projects }) => {
  const [projectsOrdered, setProjectsOrdered] = useState(null)
  const [groupProjectsBy, setGroupProjectsBy] = useState('year')

  useEffect(() => {
    const groupedProjects = groupByProperty(projects, groupProjectsBy)
    setProjectsOrdered(groupedProjects)
  }, [groupProjectsBy])

  if (projects.length === 0) {
    return <h1>No projects to show, please add one.</h1>
  }

  return (
    <>
      <Head>
        <title>BIG | Bjarke Ingels Group</title>
        <meta name="description" content="BIG projects" />
      </Head>
      <Projects projects={projectsOrdered} />
      <ProjectsOrderer setGroupProjectsBy={setGroupProjectsBy} />
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
