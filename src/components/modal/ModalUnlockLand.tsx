import logo_bg from 'assets/mipmap-xxxhdpi-v4/unlock_people_bg.png'
import { TYPE_MODAL } from 'contants'
import { useFnOpen, useOpen } from 'hooks/useOpen'
import styled from 'styled-components'
import ModalBase from './ModalBaseCustom'
import img1 from 'assets/mipmap-xxxhdpi-v4/txcg_my_bg1.png'
import homeland1 from 'assets/mipmap-xxxhdpi-v4/home_land1.png'
import btnBg from "assets/mipmap-xxxhdpi-v4/time_reward_btn_sel.png"
const ModalUnlockLand = () => {
    const isModalOpen = useOpen(TYPE_MODAL.UNLOCK_LAND)
    const { onOpen } = useFnOpen()
    return (
        <ModalBase
            onCancel={() =>
                onOpen({
                    type: TYPE_MODAL.UNLOCK_LAND,
                    value: false
                })
            }
            isModalOpen={isModalOpen}
            titleHeader='Mở khóa đất'
        >
            <BodyStyled className='body' bgLogo={logo_bg}>
                <div className=' review'>
                    <img src={img1} style={{ width: "70%", margin: "auto" }} />
                    <div className='land'>
                        <img src={homeland1} style={{ width: "150px" }} />
                        <div className='title'>
                            Cần 300.000 đ  để mở khóa
                        </div>

                    </div>
                    <div className='btn-unlock'>
                        <img src={btnBg} />
                        <div className='btn-name'>
                            Mở khóa ngay
                        </div>
                    </div>
                </div>

            </BodyStyled>
        </ModalBase>
    )
}

export default ModalUnlockLand
const BodyStyled: any = styled.div`
  &.body {
    position: relative;
    border-radius: 5px;
    padding: 10px;
    .review{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 100%;
            height: 100%;
        }
        .land{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            .title{
                font-size: 20px;
                font-weight: 700;
                  margin-top: 20px;
            }
             
        }
            .btn-unlock{
                margin-top: 20px;
                width: 170px;
                height: 50px;
                position: relative;
                .btn-name{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    width: 100%;
                    font-weight: 700;
                    text-align: center;
                    color: #fff;
                    font-size: 16px;
                }
            }  
    }
  }
`
