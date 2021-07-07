// domain.com/projects/projectSlug
import Head from 'next/head'
import Image from 'next/image'
import { projectsApi } from '../../../lib/api'

const projectDetails = ({ project }) => {
  return (
    <>
      <Head>
        <title>{project.title}</title>
        <meta name="description" content={project.description} />
      </Head>
      <h1>{project.title}</h1>
    </>
  )
}

export default projectDetails

export async function getStaticPaths() {
  // get ids from database and map projectId for routes
  const projects = await projectsApi.getAll()
  const paths = projects.map(project => ({
    params: { slug: project.slug },
  }))

  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  // fetch data for a single project
  const { slug } = params
  const [project] = await projectsApi.getOne(slug)

  return {
    props: {
      project,
    },
  }
}
