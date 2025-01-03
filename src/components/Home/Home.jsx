import React from 'react'
import Hero from './hero/Hero'
import Featured from './featured/Featured'
import Recent from './recent/Recent'
import Question from './question/Question'

const Home = () => {
  return (
    <div>
      <>
      <Hero/>
      <Featured/>
      <Recent/>
      <Question/>
      </>
    </div>
  )
}

export default Home
