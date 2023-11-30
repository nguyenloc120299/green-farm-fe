import { Button, List, Modal } from 'antd'
import Avatar from 'components/elements/Avatar'
import { TYPE_MODAL } from 'contants'
import { useFnOpen, useOpen } from 'hooks/useOpen'
import money from 'assets/image/money.png'
import dollar from 'assets/image/dollar.png'
import friendly from 'assets/image/friendly.png'
import setting from 'assets/image/gear.png'
import custom_service from 'assets/image/customer-service.png'
import about from 'assets/image/info.png'
import styled from 'styled-components'
import close from 'assets/mipmap-xxxhdpi-v4/home_dialog_close.png'
import { RightOutlined } from '@ant-design/icons'

const ModalProfile = () => {
  const isModalOpen = useOpen(TYPE_MODAL.PROFILE)
  const { onOpen } = useFnOpen()
  return (
    <ModalProfileStyled
      centered
      open={isModalOpen}
      onCancel={() =>
        onOpen({
          type: TYPE_MODAL.PROFILE,
          value: false
        })
      }
      footer={null}
      width={450}
    >
      <div className='info-user'>
        <Avatar />
        <div>
          <div className='name'>Loc Nguyen</div>
          <div className='id_user'>Id: 5803163</div>
        </div>
      </div>

      <div className='box-money'>
        <div className='money'>
          <div className='icon'>
            <img src={money} alt='' />
          </div>
          8k
        </div>
        <div className='coin'>
          590
          <div className='icon'>
            <img src={dollar} />
          </div>
        </div>
      </div>
      <div className='box-money'>
        <List>
          <List.Item>
            <List.Item.Meta
              avatar={<img src={money} />}
              title={'Chi tiết số dư'}
            />
            <RightOutlined />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<img src={dollar} />}
              title={'Chi tiết tiền vàng'}
            />
            <RightOutlined />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<img src={friendly} />}
              title={'Lời mời của tôi'}
            />
            <RightOutlined />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<img src={custom_service} />}
              title={'Liên hệ CSKH'}
            />
            <RightOutlined />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<img src={setting} />}
              title={'Cài đặt ngôn ngữ'}
            />
            <RightOutlined />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<img src={about} />}
              title={'Về chúng tôi'}
            />
            <RightOutlined />
          </List.Item>
        </List>
      </div>
    </ModalProfileStyled>
  )
}

export default ModalProfile

const ModalProfileStyled = styled(Modal)`
  width: 100%;
  height: 100vh;
  max-width: 100%;

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
    border-radius: 0;
    background-color: #9fd7ec;
    padding: 50px 20px;
    .info-user {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
      .name {
        font-size: 24px;
        font-weight: 700;
        color: #0f6481;
      }
      .id_user {
        font-size: 14px;
        color: #1e556a;
        font-weight: 700;
      }
    }
    .box-money {
      min-height: 80px;
      background: #f4dede;
      border-radius: 15px;
      border: 5px solid #45869b;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 15px;
      box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);
      position: relative;
      .ant-list {
        flex: 1;
        padding: 10px 20px;
        .ant-list-item-meta {
          align-items: center;
          img {
            width: 32px;
          }
        }
      }
      .money,
      .coin {
        display: flex;
        gap: 10px;
        align-items: center;
        font-weight: 700;
        font-size: 24px;
        .icon {
          img {
            width: 40px;
          }
        }
      }
    }
  }
`
