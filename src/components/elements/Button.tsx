import styled from 'styled-components'

interface Props {
    bgImg: string
    title: string
    width?: number
    height?: number
    onEvent: () => void
}

const ButtonImage = ({ bgImg, width, height, title = '', onEvent }: Props) => {
    return (
        <ButtonStyled width={width} height={height} onClick={onEvent}>
            <img src={bgImg} />
            <div className='text-title'>
                <h4>
                    {title}
                </h4>
            </div>
        </ButtonStyled>
    )
}

export default ButtonImage

const ButtonStyled = styled.div<{ width?: number; height?: number }>`
    cursor: unset;
    width: ${(props) => `${props.width}px` || '100%'};
    height: ${(props) => `${props.height}px` || '100%'};
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
    img{
        width:100%;
        height:100%
    }
`