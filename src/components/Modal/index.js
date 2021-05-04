import React, { useState } from 'react'
import styled from 'styled-components'

const ModalDiv = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;

`
const Modal = styled.div`
    margin-top:50px;
    width: 60%;
    height: 60%;
    position:relative;
    background-color:blue;
`


export default function ModalMovie(){
    return(
        <ModalDiv>
            <Modal></Modal>
        </ModalDiv>
    )
}