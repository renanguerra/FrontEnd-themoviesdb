import React from 'react'
import styled from 'styled-components'

import filme from '../../assets/filme.jpg'

const MovieCardDiv = styled.div`
    width:85%;
    height: 143px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    border: 1px solid rgb(227,227,227);
    background-color: #fff;
    display:flex;
    border-radius: 8px;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    margin-bottom: 15px;
`
const MovieCardImage = styled.div`
    min-width: 100px;
    border-radius: 8px 0px 0px 8px;
    background-image: ${props=> `url(${props.poster})`};
    background-size:cover;
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
`
const Subtitle = styled.span`
    white-space: nowrap;
    color: #999;
`
const Description = styled.span`
    margin-top:20px;
    display:block;
`

export default function MovieCard(props){
    return(
        <MovieCardDiv>
            <MovieCardImage poster={`https://image.tmdb.org/t/p/w200/${props.image}`}>

            </MovieCardImage>
            <MovieCardBody>
                    <Title>{props.title}</Title>
                    <Subtitle>{props.data}</Subtitle>
                    <Description>{props.overview}</Description>
            </MovieCardBody>
        </MovieCardDiv>
    )
}