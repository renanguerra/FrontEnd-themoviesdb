import React from 'react'
import styled from 'styled-components'

const FilterCardDiv = styled.div`
    width:260px;
    border: 1px solid rgb(227,227,227);
    border-radius: 8px;
`
const FilterCardHeader = styled.div`
    width:100%;
    height:70px;
    background-color: rgb(1,180,228);
    border-radius: 8px 8px 0px 0px; 
    display:flex;
    align-items:center;
    justify-content:start;

    span{
        margin-left:15px;
        color:white;
        font-size:19px;
        font-weight: 600;
    }
`
const FilterCardBody = styled.div`
    width:100%;
    min-height:200px;
    border-radius: 0px 0px 8px 8px; 
    padding-top:10px;

`
const Button = styled.button`
    width:100%;
    background-color:white;
    outline:none;
    border:none;
    height: 45px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    cursor: pointer;

    span{
        margin-left:15px;
        font-size:16px;
        cursor: pointer;
        
    }

    div{
        margin-right:15px;
        width:25px;
        height:30px;
        border-radius:8px;
        background-color: rgb(227,227,227);;
        display:flex;
        justify-content:center;
        align-items:center;

        span{
            margin-left:0px;
        }
    }
    
    :hover{
        background-color:rgb(227,227,227);

        div{
            background-color:white
        }
    }

    :focus{
        background-color:rgb(227,227,227);
        

        div{
            background-color:white
        }
    }
`


export default function FilterCard({moviesLenght,tvLenght,personLenght,filterMovies,filterTv,filterPerson,filterAll}){

    if (!tvLenght && !personLenght){
        tvLenght=0
        personLenght=0
    }
    
    return(
        <FilterCardDiv>
            <FilterCardHeader>
                <span>Resultado da Busca</span>
            </FilterCardHeader>

            <FilterCardBody>
                <Button onClick={()=>filterAll()}>
                    <span>Tudo</span>

                    <div> 
                        <span>{moviesLenght+tvLenght+personLenght}</span> 
                    </div>
                </Button>

                <Button onClick={()=>filterMovies()}>
                    <span>Filmes</span>
                    
                    <div>
                        <span>{moviesLenght}</span> 
                    </div>
                </Button>

                <Button onClick={()=>filterTv()}>
                    <span>Seriado</span>
                    <div>
                        <span>{tvLenght}</span> 
                    </div>
                </Button>

                <Button onClick={()=>filterPerson()}>
                    <span>Pessoas</span>
                    <div>
                        <span>{personLenght}</span> 
                    </div>
                </Button>
                
            </FilterCardBody>
        </FilterCardDiv>
    )
}