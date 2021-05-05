import React,{useEffect, useState} from 'react'
import axios from 'axios'
import GlobalStyles from './globalStyles'
import styled from 'styled-components'

import MovieCard from './components/MovieCard'
import FilterCard from './components/FilterCard'
import ModalMovie from './components/Modal'

import searchImage from './assets/search.svg'
import notFoundImage from './assets/sad.svg'


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
    border-bottom: 1px solid rgb(227,227,227);
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

    span{
      margin-top:10px;
      cursor: pointer;
      color: gray;
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
const NotFoundDiv = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;

  img {
    margin-top: 40px;
    width:200px;
    margin-bottom: 20px;
  }
  
  span{
    display:block;
    font-size:20px;
  }
`
const Footer = styled.div`
  width:100%;
  height:70px;
  background-color: rgb(3,37,65);
  display:flex;
  align-items:center;
  justify-content:space-around;

  span{
    font-size:16px;
    color:white;
  }
`

function App() {

  const [searchInput, setSearchInput] = useState('')

  const [data,setData] = useState([])

  const [modalInfo,setModalInfo] = useState({
        title: '',
        date:'',
        overview:'',
        image:'',
        backdrop: '',
        vote_average: ''
  })

  const [modalView,setModalView] = useState()

  const [tvLength,setTvlength] = useState()
  const [personLength,setPersonlength] = useState()

  useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`).then(res => {
        setData(res.data.results)
        console.log(res.data.results)
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

  function mostPopular(){
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1`).then(res => {
        setData(res.data.results)
      })
  }

  function topRated(){
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1`).then(res => {
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
      console.log(res.data.results)
    })
  }

  function filterAll(){
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${searchInput}&language=pt-BR`).then(res =>{
      setData(res.data.results)
    })
  }

  function openModal(e){
    setModalInfo({
      title: e.original_title || e.name,
      date: e.release_date || e.first_air_date,
      image: e.poster_path || e.profile_path,
      overview: e.overview,
      backdrop: e.backdrop_path,
      vote_average: e.vote_average,
      id: e.id
    })

    setModalView(true)
  }
  
  function clearSearch(){
    setSearchInput('')
    mostPopular()
  }

  return (
    <>
    {modalView && (
      <ModalMovie id={modalInfo.id} vote={modalInfo.vote_average} title={modalInfo.title} date={modalInfo.date} overview={modalInfo.overview} close={()=> setModalView(!modalView)} image={`https://image.tmdb.org/t/p/w500/${modalInfo.image}`} backdrop={`https://image.tmdb.org/t/p/w500/${modalInfo.backdrop}`}/>
    )
    }
    

    <Header>
          <span onClick={()=> mostPopular()}>Mais populares</span>
          <span onClick={()=> topRated()}>Maiores Notas</span>

  
    </Header>

    <SearchBar>
        <img src={searchImage}/>
        <input type='text' placeholder='Buscar por um Filme, Série ou Pessoa.' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
        <span onClick={()=>clearSearch()}>X</span>
        
    </SearchBar>

    <Main>
        <SideBody>
          <FilterCard moviesLenght={data.length} tvLenght={tvLength} personLenght={personLength} filterMovies={()=> filterMovies()} filterPerson={() => filterPerson()} filterTv={()=>filterTv()} filterAll={() => filterAll()}/>
        </SideBody>

        <Body>
          {data.map(e => 

            <MovieCard 
              title={e.original_title || e.name} 
              data={e.release_date || e.first_air_date} 
              image={e.poster_path || e.profile_path} 
              overview={e.overview}
              openModal={() => openModal(e)}
            />
          )}

          {!data[0] && (
            <NotFoundDiv>
              <img src={notFoundImage} alt=''/>
              <span>Não encontramos nada referente a sua pesquisa.</span>
              <span>Tente Novamente!</span>
            </NotFoundDiv>
          )}
        </Body>

      </Main>
      <Footer>
        <span>Feito por Renan Guerra</span>
      </Footer>
      <GlobalStyles/>
    </>
  );
}

export default App;
