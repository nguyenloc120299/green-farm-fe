import styled from "styled-components";
import bg from 'assets/mipmap-xxxhdpi-v4/home_image_bg.9.png'
export const LoadindScrenStyled = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${bg}) no-repeat;
    background-size: cover;
    background-position: center;
    position: fixed;
    z-index: 9999;
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