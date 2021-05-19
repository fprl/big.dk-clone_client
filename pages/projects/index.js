// domain.com/projects
import { useEffect, useState } from 'react'
import Head from 'next/head'

import { projectsApi } from '../../lib/projects'

import groupBy from '../../components/projects/utilities/groupBy'
import Projects from '../../components/projects/Projects'
import ProjectsOrderer from '../../components/projects/ProjectsOrderer'

const projects = [
  {
    id: 1,
    shortTitle: 'BAT',
    title: 'Faste Batteri',
    year: 2010,
    size: '124000',
    programmatic: 'Housing',
    location: 'Copenhaguen, DK',
    status: 'Idea',
  },
  {
    id: 2,
    shortTitle: 'TSP',
    title: 'The Spiral',
    year: 2012,
    size: '264775',
    programmatic: 'Commercial',
    location: 'New York, USA',
    status: 'Under construction',
  },
  {
    id: 3,
    shortTitle: 'BKB',
    title: 'Back to the future',
    year: 2016,
    size: '161874',
    programmatic: 'Public space',
    location: 'New York, USA',
    status: 'Idea',
  },
  {
    id: 4,
    shortTitle: 'WTF',
    title: 'Washington stadium',
    year: 2018,
    size: '132665',
    programmatic: 'Body culture',
    location: 'Washington D.C., USA',
    status: 'In progress',
  },
  {
    id: 5,
    shortTitle: 'FCB',
    title: 'Barcelona stadium',
    year: 2018,
    size: '200000',
    programmatic: 'Body culture',
    location: 'Barcelona, ESP',
    status: 'In progress',
  },
]

const ProjectsPage = ({ projects }) => {
  const [projectsOrdered, setProjectsOrdered] = useState(null)
  const [groupProjectsBy, setGroupProjectsBy] = useState('year')

  useEffect(() => {
    const groupedProjects = groupBy(projects, groupProjectsBy)
    setProjectsOrdered(groupedProjects)
  }, [groupProjectsBy])

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
  const proj = await projectsApi.getAll()

  return {
    props: {
      projects,
    },
    revalidate: 1,
  }
}

export default ProjectsPage
