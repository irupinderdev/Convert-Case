import React, { useState } from 'react'

export default function About() {

  // let myStyle = 

  const[myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
})

const[btnText, setBtnText] = useState("Enable Dark mode")

const toggleStyle = () => {
  if (myStyle.color === "black") {
      setMyStyle({
          color: "white",
          backgroundColor: "black",
          borderColor: "white",
      })
      setBtnText("Enable Light Mode")
  }
  else {
    setMyStyle({
        color: 'black',
        backgroundColor: 'white'
    })
    setBtnText("Enable Dark Mode")
}
}

  return (
                <div className='container my-4' style={myStyle}>
               <hr className="dropdown-divider my-4"/>
                  <h2>About Us</h2>
                    <div className="accordion" id="accordionExample">
              <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    #1
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={myStyle}>
                    This is the first item's accordion body.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    #2
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={myStyle}>
                    This is the second item's accordion body.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    #3
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={myStyle}>
                    This is the third item's accordion body.
                  </div>
                </div>
              </div>


            </div>
            <button onClick={toggleStyle} type="button" style={myStyle} className="btn btn-secondary my-3"> {btnText}</button>
        </div>
  )
}
