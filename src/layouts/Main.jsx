import { Outlet, useLoaderData } from 'react-router-dom'

// assets
import wave from "../assets/wave.svg"

// components
import Header from '../components/Header'

// helper functions
import { fetchData } from '../helpers'

// loader
export function mainLoader(){
    const userName = fetchData("userName")
    return {userName}
}


const Main = () => {
    const {userName} = useLoaderData()
  
    return (
      <div className='layout'>
          <Header userName={userName}/>
          <main>
          <Outlet />
          </main>
          <img src={wave} alt="" />
      </div>
  )
}

export default Main