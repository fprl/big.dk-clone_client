import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const ProjectItem = ({ project }) => {
  const LOCAL_URL = process.env.NEXT_PUBLIC_CMS_LOCALHOST + project.icon.url

  return (
    <Item id={project.id} data-flip-id={project.shortTitle}>
      <Link href={`/projects/${project.slug}`}>
        <img
          src={process.env.NODE_ENV === 'development' ? LOCAL_URL : project.icon.url}
          width={project.icon.width / 2}
          height={project.icon.height / 2}
        />
      </Link>
    </Item>
  )
}

export default ProjectItem

const Item = styled.article``
