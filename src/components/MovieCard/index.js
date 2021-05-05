import React from 'react'
import styled from 'styled-components'

const MovieCardDiv = styled.div`
    width:85%;
    height: 143px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    border: 1px solid rgb(227,227,227);
    background-color: #fff;
    display:flex;
    border-radius: 8px;
    margin-bottom: 15px;
`
const MovieCardImage = styled.div`
    min-width: 100px;
    border-radius: 8px 0px 0px 8px;
    background-image: ${props=> `url(${props.poster})`};
    background-size:cover;
    cursor: pointer;
`
const MovieCardBody = styled.div`
    width: 100%;
    height:80%;
    border-radius: 0px 8px 8px 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 10px;
    padding-right: 15px;
    padding-left: 15px;
`
const Title = styled.h2`
    color:#000;
    cursor: pointer;
`
const Subtitle = styled.span`
    white-space: nowrap;
    color: #999;
`
const Description = styled.span`
    margin-top:20px;
    display:block;
`

export default function MovieCard({openModal,title,data,overview,image}){


    if(data){       
        let month = ''
        data = data.split("-")
        switch (data[1]){
            case '01':
                month = 'Janeiro'
                break;
            case '02': 
                month = 'Fevereiro'
                break;
            case '03': 
                month = 'Março'
                break;
            case '04': 
                month = 'Abril'
                break;
            case '05': 
                month = 'Maio'
                break;
            case '06': 
                month = 'Junho'
                break;
            case '07': 
                month = 'Julho'
                break;
            case '08': 
                month = 'Agosto'
                break;
            case '09': 
                month = 'Setembro'
                break;
            case '10': 
                month = 'Outubro'
                break;
            case '11': 
                month = 'Novembro'
                break;
            case '12': 
                month = 'Dezembro'
                break;
        }  
        data = data[2] +' de '+ month +' de '+ data[0]
    }
    

    return(
        <MovieCardDiv>
            <MovieCardImage onClick={() => openModal()} poster={`https://image.tmdb.org/t/p/w200/${image}`}>

            </MovieCardImage>
            <MovieCardBody>
                    <Title onClick={() => openModal()} >{title}</Title>
                    <Subtitle>{data}</Subtitle>
                    <Description>{overview}</Description>
            </MovieCardBody>
        </MovieCardDiv>
    )
}