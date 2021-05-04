import React,{useEffect, useState} from 'react'
import axios from 'axios'
import GlobalStyles from './globalStyles'
import styled from 'styled-components'

import MovieCard from './components/MovieCard'
import FilterCard from './components/FilterCard'

import searchImage from './assets/search.svg'


const Main = styled.div`
  display:grid;
  grid-template-columns:.4fr 2fr;
  grid-template-areas: 'sidebody body';

`
const Body = styled.div`
  grid-area: 'body';
  margin-left:30px;

`
const SideBody = styled.div`
  grid-area: 'sidebody';
  margin-left:180px;
`
const SearchBar = styled.div`
    width:100%;
    height:40px;
    border: 1px solid rgb(227,227,227);
    margin-bottom:20px;
    display:flex;
    justify-content:center;

    input{
      margin-top:5px;
      width: 90%;
      outline:none;
      border: none;
      height:80%;
      font-size:16px;
      font-style: italic;
      color: gray;
    }

    img{
      width: 20px;
      margin-right:5px;
    }
`

function App() {

  const [searchInput, setSearchInput] = useState('s')

  const [data,setData] = useState([])

  useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1`).then(res => {
        setData(res.data.results)
      })
  },[])

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchInput}&language=pt-BR`).then(res =>{
      console.log(res)
      setData(res.data.results)
    })
  },[searchInput])

  return (
    <>
    <SearchBar>
        <img src={searchImage}/>
        <input type='text' placeholder='Buscar por um Filme, Série ou Pessoa' onChange={(e)=>setSearchInput(e.target.value)}/>
    </SearchBar>

    <Main>
        <SideBody>
          <FilterCard/>
        </SideBody>

        <Body>
          {data.map(e => <MovieCard title={e.original_title} data={e.release_date} image={e.poster_path} overview={e.overview}/>)}
        </Body>

      </Main>
      
      <GlobalStyles/>
    </>
  );
}

export default App;
