import React from 'react'
import Navbar from '../Common/Navbar'
import Aus from '../Core/Home/Aus'
import Clint from '../Core/Home/Clint'
import Port from '../Core/Home/Port'
import Serv from '../Core/Home/Serv'
import Slider from '../Core/Home/Slider'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <Aus/>
    <Serv/>
    <Port/>
    <Clint/>
    </>
  )
}

export default Home