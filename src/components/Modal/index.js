import React, { useState,useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ModalDiv = styled.div`
    width:100%;
    height:100vh;
    position:fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index: 3;
`
const Modal = styled.div`
    z-index: 2;
    margin-top:50px;
    width: 80%;
    height: 80%;
    word-wrap: break-word;
    overflow: hidden;
    position:relative;
    background-color:rgb(3,37,65);
    border-radius:8px;
    display:flex;
    animation: fade 1s 1;

    @keyframes fade{
        0%{
            transform: translate3d(0,-50px,0)
        }
        100%{
            transform: translate3d(0,0px,0)
        }
    }

`
const ModalBackground = styled.div`
    min-width:100%;
    height:100%;
    position:absolute;
    border-radius: 8px;
    background-image: ${props => `url(${props.backdrop})` };
    background-repeat:no-repeat;
    background-size:cover;
    filter:  brightness(40%);
    -webkit-filter: brightness(40%);
`
const ModalMovieImage = styled.div`
    z-index:4;
    width:40%;
    border-radius:8px 0px 0px 8px;
    display:flex;
    align-items:center;
    justify-content:center;

    img{
        width: 80%;
    }
`
const ModalMovieInfo = styled.div`
    z-index:4;
    width:60%;
    height:100%;
    color:white;
    word-wrap:wrap;
    
    h1{
        margin-top: 5%;
        font-size: 40px;
    }

    h2{
        margin-top: 22%;
    }

    h3{
        font-weight:500;
    }

    span{
        width: 90%;
        display:block;
        font-size:20px;
    }
    div{
        float:right;
        margin-top:15px;
        margin-right:15px;
        cursor: pointer;
    }
`
const Overlay = styled.div`
    width: 100%;
    height:100vh;
    position: absolute;
    top:0;
    z-index:0;
    background-color: black;
    opacity: .3;
    scroll-behavior:none;
    overflow-y: hidden;
    
`

export default function ModalMovie({id,vote,date,close, title, image, backdrop,overview}){

    const [genres,setGenres]= useState()

    useEffect(()=>{
        let genresArray = []

        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`).then(res => {
          res.data.genres.map((e)=>{
           genresArray.push(e.name)
           genresArray.push(', ')
          })
        }).then(()=>{
            genresArray.pop()
            setGenres(genresArray)
        })
    },[])



    if(date){       
        date = date.split("-")
        switch (date[1]){
            case '01':
                var month = 'Janeiro'
                break;
            case '02': 
                var month = 'Fevereiro'
                break;
            case '03': 
                var month = 'Março'
                break;
            case '04': 
                var month = 'Abril'
                break;
            case '05': 
                var month = 'Maio'
                break;
            case '06': 
                var month = 'Junho'
                break;
            case '07': 
                var month = 'Julho'
                break;
            case '08': 
                var month = 'Agosto'
                break;
            case '09': 
                var month = 'Setembro'
                break;
            case '10': 
                var month = 'Outubro'
                break;
            case '11': 
                var month = 'Novembro'
                break;
            case '12': 
                var month = 'Dezembro'
                break;
        }  
        date = date[2] +' de '+ month +' de '+ date[0]
    }

    return(
        <>
        <ModalDiv>
            <Overlay/>
            <Modal>
                <ModalBackground backdrop={backdrop}/>

                <ModalMovieImage>
                    <img src={image} alt='' />
                </ModalMovieImage>

                <ModalMovieInfo>
                    <div onClick={()=> close()}>
                        <span>X</span>
                    </div>
                    <h1>{title}</h1>
                    <h3>{date}</h3>
                    <h3>{genres}</h3>
                    <h3>Nota: {vote}</h3>
                    {overview && (
                        <h2>Sinopse</h2>
                    )}
                    
                    <span>{overview}‎</span>
                </ModalMovieInfo>
            </Modal>
        </ModalDiv>
        </>
    )
}