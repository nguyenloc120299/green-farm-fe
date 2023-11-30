import { Modal } from 'antd'
import { ReactNode } from 'react'
import styled from 'styled-components'
import bg from 'assets/mipmap-xxxhdpi-v4/home_dialog_bg.9.png'
import header_bg from 'assets/mipmap-xxxhdpi-v4/home_dialog_title_bg.9.png'
import close from 'assets/mipmap-xxxhdpi-v4/home_dialog_close.png'
interface Type_Props {
  isModalOpen: boolean
  onOpen?: () => void
  onCancel: () => void
  children?: ReactNode
  titleHeader: string
}

const ModalBase = ({
  isModalOpen,
  onCancel,
  children,
  titleHeader
}: Type_Props) => {
  return (
    <ModalMissionStyled
      centered
      open={isModalOpen}
      onCancel={onCancel}
      footer={null}
      width={375}
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
        <h1>{titleHeader}</h1>
      </div>
      {children}
    </ModalMissionStyled>
  )
}

export default ModalBase


const ModalMissionStyled = styled(Modal)`
    
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
    background-color: transparent;
    box-shadow: none;
    position: relative;
    padding: 18px;
    border-radius: 12px;
    .header {
      background: url(${header_bg});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
      position: absolute;
      top: -16%;
      left: 50%;
      transform: translateX(-50%);
      width: 85%;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 20px;
        font-weight: 700;
        color: #fff;
      }
    }
  }
`
