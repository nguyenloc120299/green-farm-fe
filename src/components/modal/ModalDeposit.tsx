import { Modal } from 'antd'
import { TYPE_MODAL } from 'contants'
import { useFnOpen, useOpen } from 'hooks/useOpen'
import React from 'react'
import { styled } from 'styled-components'
import bg from 'assets/mipmap-xxxhdpi-v4/home_dialog_bg.9.png'
import header_bg from 'assets/mipmap-xxxhdpi-v4/reward_dialog_title_bg.png'
import close from 'assets/mipmap-xxxhdpi-v4/home_dialog_close.png'
import reward from 'assets/mipmap-xxxhdpi-v4/offline_reward_chart.png'
import btn from 'assets/mipmap-xxxhdpi-v4/time_reward_btn_sel.png'
const ModalDeposit = () => {
  const isModalOpen = useOpen(TYPE_MODAL.DEPOSIT)
  const { onOpen } = useFnOpen()
  return (
    <ModalDepositStyled
      onCancel={() =>
        onOpen({
          type: TYPE_MODAL.DEPOSIT,
          value: false
        })
      }
      open={isModalOpen}
      width={400}
      centered
      footer={null}
    >
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          display: 'flex'
        }}
      >
        <img src={bg} style={{ width: '100%', height: '100%' }} alt='' />
      </div>
      <div className='header'>
        <h1>Nạp tiền vàng</h1>
      </div>
      <div className='reward_img'>
        <img src={reward} alt='' />
        <div className='total-coin-deposit'>
          <h3>100k </h3>
        </div>
      </div>
      <div>
        <div className='btn-desposit'>
          <img src={btn} alt='' />
          <div className='content'>
            <span>Nạp vàng</span>
          </div>
        </div>
      </div>
    </ModalDepositStyled>
  )
}

export default ModalDeposit

const ModalDepositStyled = styled(Modal)`
  .ant-modal-close {
    top: 0px;
    right: 0px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: url(${close});
    background-size: 100%;
    span {
      display: none;
    }
  }

  .ant-modal-content {
    width: 100%;
    height: 100%;
    background-color: transparent;
    min-height: 200px;
    padding: 50px 20px;
    box-shadow: none;
    position: relative;
    .header {
      background: url(${header_bg});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
      position: absolute;
      top: -10%;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: start;
      h1 {
        font-size: 20px;
        font-weight: 700;
        color: black;
        margin: 10px;
        
      }
    }
    .reward_img {
      display: flex;
      justify-content: center;
      padding: 20px;
      position: relative;
      .total-coin-deposit {
        position: absolute;
        top: 10px;
        h3 {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
        }
      }
      img {
        width: 100%;
      }
    }
    .btn-desposit {
      position: relative;
      width: 130px;
      height: 50px;
      margin: auto;
      img {
        width: 100%;
      }
      .content {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
        }
      }
    }
  }
`
