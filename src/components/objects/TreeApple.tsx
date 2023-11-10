import React from 'react'
import treeImg from 'assets/farm/tree-001.png'
import styled from 'styled-components'
import { PropsType } from 'global'
import Lock from './LockLand'

const Tree = ({ column, row }: PropsType) => {
  return (
    <TreeStyle style={{ gridColumn: column, gridRow: row }}>
      <div className='tree'>
        <img src={treeImg} alt='tree' />
      </div>
      <Lock />
    </TreeStyle>
  )
}

export default Tree
const TreeStyle: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .tree {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
      transform: scale(1.8);
      object-fit: cover;
      image-rendering: crisp-edges;
      image-rendering: pixelated;
    }
  }
  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-5deg);
    }
    50% {
      transform: rotate(5deg);
    }
    75% {
      transform: rotate(-3deg);
    }
    100% {
      transform: rotate(3deg);
    }
  }
`
