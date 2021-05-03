import React from 'react'
import GlobalStyles from './globalStyles'
import styled from 'styled-components'

import MovieCard from './components/MovieCard'
import FilterCard from './components/FilterCard'


const SearchBar = styled.div`

`
const Main = styled.div`
  margin-top:20px;
  display:grid;
  grid-template-columns:.8fr 2fr;
  grid-area: 'sidebody body';

`
const Body = styled.div`
  grid-area: 'body';
  margin-left:30px;

`
const SideBody = styled.div`
  grid-area: 'sidebody';
  margin-left:300px;
`

function App() {
  return (
    <>
    <Main>

        <SideBody>
          <FilterCard/>
        </SideBody>

        <Body>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
        </Body>

      </Main>
      
      <GlobalStyles/>
    </>
  );
}

export default App;
