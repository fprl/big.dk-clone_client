import Image from 'next/image'
import styled from 'styled-components'

const Icon = ({ src, width, height, srcOnHover }) => {
  console.log(src, width, height, srcOnHover)
  return (
    <StyledIcon
      src={src}
      width={width}
      height={height}
      onMouseOver={e => srcOnHover && (e.currentTarget.src = srcOnHover)}
      onMouseOut={e => srcOnHover && (e.currentTarget.src = src || '')}
    />
  )
}

export default Icon

const StyledIcon = styled(Image)`
`
