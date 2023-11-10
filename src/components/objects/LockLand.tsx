import React from 'react'
import styled from 'styled-components'
import lock from 'assets/mipmap-xxxhdpi-v4/unlock_image.png'
const Lock = () => {
  return (
    <LockStyled>
      <div style={{ position: 'relative' }}>
        <img src={lock} alt='' style={{ zIndex: 99, }} />
      </div>
    </LockStyled>
  )
}

export default Lock
const LockStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  img {
    width: 15px;
    object-fit: cover;
  }
`
