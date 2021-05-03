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

export default function MovieCard(){
    return(
        <MovieCardDiv>
            <MovieCardImage poster={filme}>

            </MovieCardImage>
            <MovieCardBody>
                    <Title>Sword Art Online</Title>
                    <Subtitle>18 de fevereiro de 2017</Subtitle>
                    <Description>Em 2026, 4 anos após o infame incidente de Sword Art Online, uma nova forma de tecnologia emergiu: o Augma, um dispositivo que utiliza um sistema de Realidade Aumentada. Diferente da Realidade Virtual do NerveGear e do Amusphere, é perfeitamente seguro e permite aos jogadores à usarem enquanto estão conscientes, gerando um grande hit no mercado. A aplicação mais popular do Augma é o jogo Ordinal Scale, que emerge os jogadores em um RPG de fantasia com rankings e recompensas. Seguindo a nova mania, os amigos de Kirito mergulham no jogo e, apesar de seus receios sobre o sistema, Kirito eventualmente se junta à eles. Enquanto parece ser algo apenas para diversão e jogos à princípio, eles logo descobrem que o jogo não é tudo o que parece...</Description>
            </MovieCardBody>
        </MovieCardDiv>
    )
}