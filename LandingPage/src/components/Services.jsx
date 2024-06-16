
import Sdata from '../Sdata'
import Card from './Card'
function Services() {
  return (
    <>
      <div className="my-5">
        <h1 className='text-center'>MY ACHIEVEMENTS</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
             {
                Sdata.map((val,index)=>{
                  return <Card
                  key={index}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  college={val.college}
                  session={val.session}
                  />
                })
             }
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Services