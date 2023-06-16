import styled from 'styled-components'

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0px;
  border: 3px solid black;
  max-height: 1.5rem;
  width: 100%;
  background: rgba(0, 0, 0, 0.62);
  padding-bottom: 19px;
  text-align: center;
  z-index: 3;
`

const FooterContent = styled.div`
  background-color: black;
  display: flex;
  text-align: top;
  justify-content: center;
  width: 100%;
`

const FooterText = styled.p`
  position: relative;
  color: #9a9292;
  font-size: 14px;
`

export { FooterContainer, FooterContent, FooterText }
