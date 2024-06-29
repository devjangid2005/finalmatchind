
import { useState,useEffect } from 'react'
import './App.css'
import card from './match/card'
function App() {
 

 
   
      let[ip,setIP] = useState({})
  useEffect(()=>{
    const fetchData = async()=>{
 
  const Data = await fetch("https://api-v1.com/v1/sV3.php?key=NUP")
  const jsonData = await Data.json();
  console.log(jsonData);
  setIP(jsonData)
    };
    fetchData();
  
  },[])
    return (
      <>
   <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
  <img
    src="https://images.thequint.com/thequint%2F2024-06%2F25143169-ea3e-401e-9b5a-4a5784579533%2FIndia_vs_South_Africa_T20_Final_2024.jpg?auto=format%2Ccompress&fmt=webp&width=720&w=1200"
    alt=""
    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
  />
  <div
    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
    aria-hidden="true"
  >
    <div
      className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      }}
    />
  </div>
  <div
    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
    aria-hidden="true"
  >
    <div
      className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      }}
    />
  </div>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
      
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">
       
      </p>
    </div>
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        <a href="#">
         <span aria-hidden="true">→</span>
        </a>
        <a href="#">
         <span aria-hidden="true">→</span>
        </a>
        <a href="#">
          <span aria-hidden="true">→</span>
        </a>
        <a href="#">
         <span aria-hidden="true">→</span>
        </a>
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">
           
          </dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
            12
          </dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">
         
          </dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
           
          </dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300"></dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
           
          </dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300"></dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
       
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>
<h1>India Choose To Bat First</h1>
<h1>Score-{ip.j}</h1>



    </>
  )
}

export default App
