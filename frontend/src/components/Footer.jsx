import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <div className='custom-footer-div'>
          <p>jungle store &copy; {currentYear}</p>
        </div>
      </Container>
    </footer>
  )
}
export default Footer
