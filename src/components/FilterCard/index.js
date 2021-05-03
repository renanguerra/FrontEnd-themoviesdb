import React from 'react'
import styled from 'styled-components'

const FilterCardDiv = styled.div`
    width:260px;
    border: 1px solid rgb(227,227,227);
    border-radius: 8px;
    font-family: 'Source Sans Pro', Arial, sans-serif;
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

    span{
        margin-left:15px;
        font-size:16px;
        cursor: pointer;
        
    }
    div{
        margin-right:15px;

        input{
            width:20px;
        }
    }
    :hover{
        background-color:rgb(227,227,227);
    }

    :focus{
        background-color:rgb(227,227,227);
        font-weight:600;
    }
`


export default function FilterCard(){
    return(
        <FilterCardDiv>
            <FilterCardHeader>
                <span>Resultado da Busca</span>
            </FilterCardHeader>

            <FilterCardBody>
                <Button>
                    <span>Tudo</span>
                    <div> <input type='text'/> </div>
                </Button>

                <Button>
                    <span>Filmes</span>
                    <div> <input type='text'/> </div>
                </Button>

                <Button>
                    <span>Seriado</span>
                    <div> <input type='text'/> </div>
                </Button>

                <Button>
                    <span>Pessoas</span>
                    <div> <input type='text'/> </div>
                </Button>
                
            </FilterCardBody>
        </FilterCardDiv>
    )
}