import React from 'react'
import styled from 'styled-components'
import mark from 'assets/image/mark.png'
const Mark = () => {
  return (
    <MarkStyled>
        <img src={mark} alt=""/>
    </MarkStyled>
  )
}

export default Mark
const MarkStyled = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
    img{
        width: 30px;
        object-fit: cover;
    }
`;