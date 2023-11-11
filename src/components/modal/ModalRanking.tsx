import logo_bg from 'assets/mipmap-xxxhdpi-v4/unlock_people_bg.png'
import { IS_OPEN } from 'contants'
import { useFnOpen, useOpen } from 'hooks/useOpen'
import styled from 'styled-components'
import ModalBase from './ModalBaseCustom'
import Avatar from 'components/elements/Avatar'
import btnBg from "assets/mipmap-xxxhdpi-v4/time_reward_btn_sel.png"
import coin from 'assets/image/dollar.png'
const ModalRanking = () => {
  const isModalOpen = useOpen(IS_OPEN.RANKING)
  const { onOpen } = useFnOpen()
  return (
    <ModalBase
      onCancel={() =>
        onOpen({
          type: IS_OPEN.RANKING,
          value: false
        })
      }
      isModalOpen={isModalOpen}
      titleHeader='Xếp hạng trò chơi'
    >
      <BodyStyled className='body' bgLogo={logo_bg}>
        <div className='list'>
          <div className='item'>
            <div>
              <Avatar />
            </div>
            <div className='info-user'>
              <div className='name'>User name 1</div>
              <div className='balance'>
                <div className='coin'>
                  100K
                  <img src={coin} />
                </div>
              </div>
            </div>
            <div className='btn-review'>
              <img src={btnBg} />
              <div className='btn-name'>
                <h3>Tham quan</h3>
              </div>
            </div>
          </div>
          <div className='item'>
            <div>
              <Avatar />
            </div>
            <div className='info-user'>
              <div className='name'>User name 1</div>
              <div className='balance'>
                <div className='coin'>
                  100K
                  <img src={coin} />
                </div>
              </div>
            </div>
            <div className='btn-review'>
              <img src={btnBg} />
              <div className='btn-name'>
                <h3>Tham quan</h3>
              </div>
            </div>
          </div>
          <div className='item'>
            <div>
              <Avatar />
            </div>
            <div className='info-user'>
              <div className='name'>User name 1</div>
              <div className='balance'>
                <div className='coin'>
                  100K
                  <img src={coin} />
                </div>
              </div>
            </div>
            <div className='btn-review'>
              <img src={btnBg} />
              <div className='btn-name'>
                <h3>Tham quan</h3>
              </div>
            </div>
          </div>
        </div>
      </BodyStyled>
    </ModalBase>
  )
}

export default ModalRanking
const BodyStyled: any = styled.div`
  &.body {
    position: relative;
    border-radius: 5px;
    padding: 10px;
    .list {
      display: flex;
      flex-direction: column;
      .item {
        height: 70px;
        background-color: #84c3e7;
        box-shadow: 4px 4px 0 #ccc;
        border-radius: 10px;
        margin-bottom: 7px;
        padding: 5px;
        display: flex;
        gap: 10px;
        
        justify-content: space-between;
        align-items: center;
       .info-user{
          display: flex;
          flex: 1;
          flex-direction: column;
          .name{
            font-size: 16px;
            font-weight: 700;
          
          }
          .balance{
              display: flex;
              .coin{
                display: flex;
                align-items: center;
                gap: 5px;
                font-size: 14px;
                font-weight: 500;
                img{
                  width: 20px;
                }
              }
          }
       }
       .btn-review{
        width: 80px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 100%;
        }
        .btn-name{
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: translate(-50%,-50%);
          h3{
            font-size: 12px;
            font-weight: 700;
            color: #fff;
          }
        }
       }
      
      }
    }
  }
`
