
import Common from './Common'
import web from '/images/wasim4.jpg'
import bio from '/images/WasimBio.pdf'
// import web from '/images/dice_1.png'
function About() {
  return (
    <>
    
      <Common 
      name="Welcome to About Page"
      imgsrc={web} 
      visit={bio}
      btnname="Download BioData"
     />
    </>
  )
}

export default About