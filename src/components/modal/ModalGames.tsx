import logo_bg from 'assets/mipmap-xxxhdpi-v4/unlock_people_bg.png'
import { IS_OPEN } from 'contants'
import { useFnOpen, useOpen } from 'hooks/useOpen'
import React from 'react'
import styled from 'styled-components'
import ModalBase from './ModalBaseCustom'
import loteryIcon from 'assets/games/lottery.png'
import fortuneWheel from 'assets/games/fortune-wheel.png'
import trophy from 'assets/games/trophy.png'
import bg_play from 'assets/mipmap-xxxhdpi-v4/time_reward_btn_sel.png'
const ModalGames = () => {
  const isModalOpen = useOpen(IS_OPEN.GAMES)
  const { onOpen } = useFnOpen()
  return (
    <ModalBase
      onCancel={() =>
        onOpen({
          type: IS_OPEN.GAMES,
          value: false
        })
      }
      isModalOpen={isModalOpen}
      titleHeader='Danh sách trò chơi'
    >
      <BodyStyled className='body' bgLogo={logo_bg}>
        <div className='list'>
          <div className='item'>
            <div className='logo'>
              <img src={loteryIcon} alt='loteryIcon' />
            </div>
            <div className='des-games'>Tham gia mua vé sổ xố thần tài</div>
            <div
              className='play-game'
              onClick={() => {
                onOpen({
                  type: IS_OPEN.LOTTERY,
                  value: true
                })
                onOpen({
                  type: IS_OPEN.GAMES,
                  value: false
                })
              }}
            >
              <img src={bg_play} />
              <div className='text-title'>
                <h4>Chơi</h4>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='logo'>
              <img src={fortuneWheel} alt='loteryIcon' />
            </div>
            <div className='des-games'>Tham gia vòng xoay may mắn</div>
            <div
              className='play-game'
              onClick={() => {
                onOpen({
                  type: IS_OPEN.LUCKYWEEL,
                  value: true
                })
                onOpen({
                  type: IS_OPEN.GAMES,
                  value: false
                })
              }}
            >
              <img src={bg_play} />
              <div className='text-title'>
                <h4>Chơi</h4>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='logo'>
              <img src={trophy} alt='loteryIcon' />
            </div>
            <div className='des-games'>
              Tham gia cuộc đua của những loài thú
            </div>
            <div className='play-game'>
              <img src={bg_play} />
              <div className='text-title'>
                <h4>Chơi</h4>
              </div>
            </div>
          </div>
        </div>
      </BodyStyled>
    </ModalBase>
  )
}

export default ModalGames
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
        justify-content: space-between;
        align-items: center;
        .logo {
          width: 50px;
          height: 50px;
          margin-right: 10px;
          background: url(${(props: any) => props.bgLogo}) no-repeat;
          background-position: center;
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            object-fit: cover;
          }
        }
        .des-games {
          text-align: left;
          font-size: 18px;
          font-weight: 500;
          max-width: 150px;
        }

        .play-game {
          width: 70px;
          height: 30px;
          position: relative;
          .text-title {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            h4 {
              font-size: 14px;
              font-weight: 700;
              color: #fff;
            }
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`
