
import web from '/images/wasim2.jpeg'
import cv from '/images/WasimCV.pdf'
import Common from './Common'
function Home() {
  return (
    <>
      <Common
        name="Welcome to Home Page"
        imgsrc={web}
        visit={cv}
        btnname="Download CV"
      >
      </Common>
    </>
  )
}

export default Home