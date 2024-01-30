import { useState } from "react"

function App() {
  const [color,setColor]=useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style ={ {backgroundColor: color} }
    >
      <div className="fixed flex flex-wrap justify-center
       bottom-12 inset-x-0 px-2">
        <div className="gap-3 flex flex-wrap justify-center
         shadow-lg bg-white px-3 py-2 rounded-xl ">
          <button  onClick={()=>{setColor("red")}}
          className="Px-2 py-1 outline-none
           rounded-full text-white shadow-lg" 
          style={{backgroundColor: "red"}}
          >red</button>
          <button className="Px-2 py-1 outline-none
           rounded-full text-white shadow-lg" 
          style={{backgroundColor: "yellow"}} 
          onClick={()=>{setColor("yellow")}}
          >yellow</button>
          <button className="Px-2 py-1 outline-none
           rounded-full text-white shadow-lg" 
          style={{backgroundColor: "pink"}}
          onClick={()=>{setColor("pink")}}
          >pink</button>
          <button className="Px-2 py-1 outline-none
           rounded-full text-white shadow-lg" 
          style={{backgroundColor: "green"}}
          onClick={()=>{setColor("green")}}
          >green</button>
         ̥
         </div>
       </div>
    </div>
  )
}

export default App
