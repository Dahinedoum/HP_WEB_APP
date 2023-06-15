import styled from 'styled-components'

import loadingGif from '../../../public/Gify.gif'

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Loading = () => {
  return (
    <LoadingContainer>
      <img src={loadingGif} alt="Loading" />
    </LoadingContainer>
  )
}

export default Loading
