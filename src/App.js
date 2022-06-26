import React from "react"
import Nav from "./components/Nav"
import Accordian from "./components/Accordian"
import accordianData from "./accordianContent"

function App() {

const accordianList = accordianData.map(item => {
    return (
            <Accordian item = {item} />
        )
})

  return (
    <>
      <div className="App">
        <Nav />
        {accordianList}
      </div>
       
    </>
  )
}

export default App;