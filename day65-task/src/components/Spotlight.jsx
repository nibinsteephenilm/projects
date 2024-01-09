import styled from 'styled-components'
import car from '../assets/13.jpg'
import './style.css'
import { useState } from 'react'
export default function Spotlight() {
    return (
        <div>
            <FirstHeading>Lorem Ipsum</FirstHeading>
            <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Description>
            <StyledImage><img src={car} alt="spotlight image" /></StyledImage>
        </div>
    )
}

const StyledImage = styled.div`
  width: 20%;
  margin-left: 50%;
  transform: translateX(-50%);
  img{
    width: 100%;
  }
`
const Description = styled.p`
    color: #9d9d9d;
    text-align: center;
    padding: 2% 20%;
`

const FirstHeading = styled.h1`
    color: #ffffff;
    text-align: center;
    
`


