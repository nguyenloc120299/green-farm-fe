import styled from "styled-components";
import bg from 'assets/farm/bg-mainmenu.png'
export const LoadindScrenStyled = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${bg}) no-repeat;
    background-size: cover;
    background-position: center;
    position: fixed;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .img-load{
        margin-bottom: 10px;
        width: 150px;
        img{
            width: 100%;
        }
    }
    .text-title{
        font-size: 24px;
        font-weight: 900;
    }
`