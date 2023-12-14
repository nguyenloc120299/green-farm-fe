
import { TYPE_LOADING } from 'contants'
import { useLoading } from 'hooks/useLoading'
import styled from 'styled-components'

const Loading = () => {
    const loadingApp = useLoading(TYPE_LOADING.APP)
    return (
        <LoadingStyled loading={loadingApp}>
            <div className='content'>
                Xin chờ ...
            </div>
        </LoadingStyled>
    )
}

export default Loading

const LoadingStyled = styled.div<{ loading: boolean }>`
    position: fixed;
    min-width: 70px;
    min-height: 50px;
    background-color: rgba(0,0,0,.85);
    left:50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: ${(props: any) => props.loading ? 999999 : -1};
    border-radius: 10px;
    display: flex;
    pointer-events: none;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    .content{
        color:#fff;
        font-weight: 700;
    }
`