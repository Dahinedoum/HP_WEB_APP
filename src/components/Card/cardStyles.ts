import styled from 'styled-components'

export const Container = styled.div`
background: linear-gradient(315deg, #d9ba9b 0%, #f2a65a 74%);
	flex: 0 0 300px;
	padding: 5px;
	margin: 2em;
	border-radius: 20px;
	box-shadow: 0 0 0 14px #333;
	text-align: center;
	position: relative;
	&:before {
		content: 'wizard identification';
		font-family: 'Cinzel';
		font-weight: 700;
		text-transform: uppercase;
		font-size: 16px;
		letter-spacing: .5px;
		border-radius: 20px;
		background: linear-gradient(to top, #9d523c 0%, #f2a65a 74%);
		position: absolute;
		z-index: 10;
		max-width: 225px;
		top: -8px;
		padding: 5px;
		left: 0;
		right: 0;
		margin: auto;
	}
	&__inner {
		border-radius: 17px;
		overflow: hidden;
		background: #333;
	}
`
export const Content = styled.div`
  padding: 16px;
  text-align: center;
`

export const Header = styled.div`
  height: 64px;
`
export const Footer = styled.div`
  /* border-top: 1px solid rgba(128, 0, 0, 0.3); */
  margin-top: 16px;
`

export const FooterContent = styled.div`
  margin-top: 16px;
`
export const ExtraInfo = styled.div`
  margin-bottom: 10px;
`
export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 15px;
  box-shadow: 5px 5px 5px darkgoldenrod;
`
export const ButtonContainer = styled.div``
