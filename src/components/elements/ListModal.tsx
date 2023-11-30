import React from 'react'
import styled from 'styled-components'

interface Props {
    children: React.ReactNode
}
const ListModal = ({ children }: Props) => {
    return (
        <ListStyled className='list'>
            {children}
        </ListStyled>
    )
}


const ListItem = styled.div`

    height: 70px;
    background-color: #84c3e7;
    box-shadow: 4px 4px 0 #ccc;
    border-radius: 10px;
    margin-bottom: 7px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
`;
const ListStyled = styled.div`
        &.list {
        display: flex;
        flex-direction: column;
        }
    `
export default ListModal
export { ListItem }