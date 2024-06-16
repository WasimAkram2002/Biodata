import { useState } from "react"

function Contact() {
    const [data,setData]=useState({
      fullname:"",
      phone:"",
      email:"",
      msg:""
    })
 
  const InputEvent =(event)=>
  {
    const {name,value}=event.target;
    setData((preVal)=>
    {
      return{
        ...preVal,
        [name]:value,
      }
    })
  }

const formSubmit=(e)=>{
  e.preventDefault();
  alert(
    `${data.fullname}
    ${data.email}
    ${data.phone}
    ${data.msg}`
  )
}

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input
                 type="text"
                 className="form-control" 
                 id="exampleFormControlInput1" 
                 placeholder="Enter your name"
                 name="fullname"
                 value={data.fullname}
                 onChange={InputEvent} />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input 
                type="email" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="name@example.com"
                name="email"
                value={data.email}
                onChange={InputEvent} />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input 
                type="number" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="Phone Number" 
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message Wasim</label>
                <textarea 
                className="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3"
                name="msg"
                value={data.msg}
                onChange={InputEvent}
                placeholder="Write something to Wasim Akram..."
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact