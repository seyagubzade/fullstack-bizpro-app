import React from 'react'
import styled from 'styled-components'
import SliderHero from '../../components/SliderHero'
import About from '../../components/About'
import TeamList from '../../components/TeamList'

const Home = () => {
  return (
    <StyledHome>
        <SliderHero />
        <About />
        <TeamList />
    </StyledHome>
  )
}

const StyledHome = styled.div`
min-height: 100vh;
`

export default Home