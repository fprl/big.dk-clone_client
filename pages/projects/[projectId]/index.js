// domain.com/projects/projectI
import Head from 'next/head'

const projectDetails = () => {
  return (
    <Head>
      <title>{props.project.title}</title>
      <meta name='description' content={props.project.description} />
    </Head>
  )
}


export async function getStaticPaths() {
  // get ids from database

  return {
    fallback: 'blocking',
    // paths: map each id for path
  }
}

export async function getStaticProps(context) {
  // fetch data for a single project

  return {
    props: {
      // project object
    }    
  }
}

export default projectDetails
