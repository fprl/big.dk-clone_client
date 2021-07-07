import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const Info = () => {
  return (
    <FlexContainer>
      <Text>made by <br /> Franco Romano Losada</Text>
      <IconsContainer>
        <a href="https://github.com/francoromanol" target="_blank">
          <GitHubIcon fontSize="regular" />
        </a>
        <a href="https://twitter.com/Francoromanol" target="_blank">
          <TwitterIcon fontSize="regular" />
        </a>
        <a href="https://www.linkedin.com/in/franco-romano-losada/" target="_blank">
          <LinkedInIcon fontSize="regular" />
        </a>
      </IconsContainer>
    </FlexContainer>
  )
}

export default Info

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 0.5rem;
  width: 12rem;
  height: 6rem;
`

const Text = styled.span`
  font-family: "BigPixel";
  font-size: 1.2rem;
`

const IconsContainer = styled(FlexContainer)`
  flex-direction: row;
  align-items: center;
`
