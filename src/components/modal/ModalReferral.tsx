import { Modal } from 'antd'
import { IS_OPEN } from 'contants'
import { useFnOpen, useOpen } from 'hooks/useOpen'
import withDrawBtnBg from 'assets/mipmap-xxxhdpi-v4/withdrawal_button_sel.png'
import styled from 'styled-components'
import bannerTop from 'assets/bg/1.png'
import qz from 'assets/mipmap-xxxhdpi-v4/yq_gz_icon.png'
import close from 'assets/mipmap-xxxhdpi-v4/home_dialog_close.png'
import { ColorConstants } from 'globalStyles/color'
const ModalReferral = () => {
  const isModalOpen = useOpen(IS_OPEN.REFERRAL)
  const { onOpen } = useFnOpen()
  return (
    <ModalReferralStyled
      centered
      open={isModalOpen}
      width={350}
      onCancel={() =>
        onOpen({
          type: IS_OPEN.REFERRAL,
          value: false
        })
      }
      footer={null}
    >
      <div className='header'>
        <img src={bannerTop} />
      </div>
      <div className='body'>
        <div className='box'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className='text1'>Lời mời của tôi</div>
            <div>
              <img src={qz} width={24} />
            </div>
          </div>
          <div>
            <div className='text-center'>Số dư hiện tại </div>
            <h4>14k đ</h4>
          </div>
          <div>
            <div className='mb-1 flex justify-between'>
              <div>Tổng thu nhập tích lũy</div>
              <div>0đ</div>
            </div>
            <div className='mb-1 flex justify-between'>
              <div>Tổng thu nhập hôm nay</div>
              <div>0đ</div>
            </div>
            <div className='mb-1 flex justify-between'>
              <div>Tổng người mời</div>
              <div>100</div>
            </div>
          </div>
          <div className='btn-withdraw'>
            <img src={withDrawBtnBg} />
            <div className='text'>
              <h4>Rút tiền</h4>
            </div>
          </div>
        </div>
        {/* <div className="box">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="text1">Bạn: 0</div>
            <div>
              <img src={right} width={12} />
            </div>
          </div>
          <div className="list-reward-invite">
            <div className="item">
              <div className="header">
                <h4>Phần thưởng</h4>
              </div>
              <div className="body"></div>
            </div>
            <div className="item">
              <div className="header"></div>
              <div className="body"></div>
            </div>
            <div className="item">
              <div className="header"></div>
              <div className="body"></div>
            </div>
          </div>
        </div> */}
      </div>
    </ModalReferralStyled>
  )
}

export default ModalReferral

const ModalReferralStyled = styled(Modal)`
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
    background-color: transparent;
    box-shadow: unset;
    border-radius: 20px;
    padding: 10px;
    .header {
      width: 200px;
      margin: 0 auto -10%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .body {
      display: flex;
      flex-direction: column;

      .text1 {
        font-size: 20px;
        font-weight: 700;
      }
      .box {
        min-height: 50px;
        background: ${ColorConstants.bg_main_1};
        box-shadow: 4px 5px 0 0 ${ColorConstants.shadow_main_1};
        margin: 5px 0;
        border-radius: 10px;
        font-weight: 700;
        font-size: 16px;
        padding: 15px 25px;
        h4 {
          text-align: center;
          margin: 0;
          font-size: 24px;
          color: #b90c06;
          font-weight: 700;
        }
        .list-reward-invite {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          align-items: center;
          .item {
            width: 80px;
            min-height: 120px;
            border-radius: 10px;
            border: 2px solid #a45704;
            overflow: hidden;
            .header {
              height: 40px;
              background: #f3e11f;
              display: flex;
              justify-content: center;
              align-items: center;
              h4 {
                font-weight: 500;
                font-size: 14px;
                color: #000;
              }
            }
          }
        }
        .btn-withdraw {
          width: 200px;
          margin: auto;
          position: relative;
          .text {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            h4 {
              font-size: 16px;
              font-weight: 700;
              color: #fff;
              margin-bottom: 10px;
            }
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
`
