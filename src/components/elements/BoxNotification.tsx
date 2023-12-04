import { ColorConstants } from 'globalStyles/color'
import btn from 'assets/mipmap-xxxhdpi-v4/time_reward_btn1_sel.png'
import styled from 'styled-components'

const BoxNotification = () => {
    return (
        <BoxNotificationStyled>
            <div className='body'>
                <h5>Bạn nhập không đúng?</h5>
                <div className='footer'>
                    <div className='btn-ok'>
                        <img src={btn} />
                        <div className='title'>
                            OK
                        </div>
                    </div>
                </div>
            </div>

        </BoxNotificationStyled>
    )
}

export default BoxNotification

export const BoxNotificationStyled = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
   
    background-color: rgba(0,0,0,0.6);
    z-index: 9999;
    .body{
            position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
              border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAgMAAADwXCcuAAAACVBMVEUAAAAYFCXupGhEFGpVAAAAAXRSTlMAQObYZgAAABpJREFUCNdjYA1lYJBa5cCQwDABGwbJgdQAAKX2CF37xkC2AAAAAElFTkSuQmCC)
        20% / 1 / 0 stretch;
            box-shadow: 0 0 40px #000;
         max-width: 400px;
        padding: 10px 0;
         margin: auto;
      border-style: solid;
      border-width: 5.25px;
      image-rendering: pixelated;
      border-radius: 15px;
      padding: 2.625px;
      background-color: ${ColorConstants.bg_main_2};
      padding: 0 15px;
        min-height: 70px;
    }
    .footer{
        display: flex;
        justify-content: center;
        .btn-ok{
            width: 70px;
            position: relative;
            img{
                width: 100%;
            }
            .title{
                position: absolute;
                left: 50%;
                top: 45%;
                transform: translate(-50%,-50%);
                font-weight: 900;
                color:#eee
            }
        }
    }
`