import React,{useEffect, useState} from 'react'
import axios from 'axios'
import GlobalStyles from './globalStyles'
import styled from 'styled-components'

import MovieCard from './components/MovieCard'
import FilterCard from './components/FilterCard'
import ModalMovie from './components/Modal'

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
  margin-left:100px;
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
const Header = styled.div`
  width:100%;
  height:70px;
  background-color: rgb(3,37,65);
  display:flex;
  align-items:center;
  justify-content:space-around;

  span{
    font-size:16px;
    color:white;
    cursor: pointer;
    font-weight:600;
  }
`

function App() {

  const [searchInput, setSearchInput] = useState('')

  const [data,setData] = useState([])

  const [tvLength,setTvlength] = useState()
  const [personLength,setPersonlength] = useState()

  useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`).then(res => {
        setData(res.data.results)
        console.log()
      })
  },[])

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchInput}&language=pt-BR`).then(res =>{
      setData(res.data.results)
    })
    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${searchInput}&language=pt-BR`).then(res =>{
      setTvlength(res.data.results.length)
    })
    axios.get(`https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&query=${searchInput}&language=pt-BR`).then(res =>{
      setPersonlength(res.data.results.length)
    })

  },[searchInput])

  function mostPopulaty(){
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1`).then(res => {
        setData(res.data.results)
      })
  }

  function filterMovies(){
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchInput}&language=pt-BR`).then(res =>{
      setData(res.data.results)
    })
  }


  function filterTv(){
    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${searchInput}&language=pt-BR`).then(res =>{
      setData(res.data.results)
      console.log(res.data.results)
    })
  }

  function filterPerson(){
    axios.get(`https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&query=${searchInput}&language=pt-BR`).then(res =>{
      setData(res.data.results)
    })
  }


  return (
    <>
    <ModalMovie></ModalMovie>

    <Header>
          <span>Recomendados</span>
          <span onClick={()=> mostPopulaty()}>Mais populares</span>
          <span onClick={()=> filterTv()}>Meus Favoritos</span>
          <span>Recomendados</span>
          <span>Recomendados</span>
    </Header>

    <SearchBar>
        <img src={searchImage}/>
        <input type='text' placeholder='Buscar por um Filme, Série ou Pessoa' onChange={(e)=>setSearchInput(e.target.value)}/>
    </SearchBar>

    <Main>
        <SideBody>
          <FilterCard moviesLenght={data.length} tvLenght={tvLength} personLenght={personLength} filterMovies={()=> filterMovies()} filterPerson={() => filterPerson()} filterTv={()=>filterTv()}/>
        </SideBody>

        <Body>
          {data.map(e => <MovieCard title={e.original_title || e.name} data={e.release_date} image={e.poster_path || e.profile_path} overview={e.overview}/>)}

          {!data[0] && (
            <div>vazio</div>
          )}
        </Body>

      </Main>
      
      <GlobalStyles/>
    </>
  );
}

export default App;
