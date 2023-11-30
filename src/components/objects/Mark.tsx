import React from 'react'
import styled from 'styled-components'
import mark from 'assets/image/mark.png'
import grass from 'assets/image/grass.png'
import { useFnOpen } from 'hooks/useOpen'
import { TYPE_MODAL } from 'contants'
const Mark = () => {
  const { onOpen } = useFnOpen()
  return (
    <MarkStyled onClick={() => onOpen({
      type: TYPE_MODAL.UNLOCK_LAND,
      value: true
    })}>
      <div style={{ position: 'relative' }}>
        <img src={mark} alt='' style={{ zIndex: 99, }} />
        <div className='grass'>
          <img src={grass} alt='' />
        </div>
      </div>
    </MarkStyled>
  )
}

export default Mark
const MarkStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .grass {
    position: absolute;
    left: 50%;
    top: 75%;
    transform: translate(-50%, -50%);
    img{
      width:100%;
      transform: scale(1.4);
    }
  }
  img {
    width: 30px;
    object-fit: cover;
  }
`
