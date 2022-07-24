import styled from "styled-components";

function Card({
    title = 'Insert title here',
    imageSrc = 'https://cdn.motor1.com/images/mgl/bpAqn/s3/logo.jpg',
    imageAlt = 'alternative image text',
    subtitle = 'Insert subtitle here',
    key,
    onClick
}) {
    return (
        <>
            <CardContainer key={key} onClick={onClick}>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardImageContainer>
                    <CardImage
                        src={imageSrc}
                        alt={imageAlt}
                        height={150} />
                </CardImageContainer>
                <CardSubtitle>
                    {subtitle}
                </CardSubtitle>
            </CardContainer>
        </>
    )
}

export default Card;


const CardTitle = styled.p`
    position: absolute;
    font-size: 14px;
    padding: 1em 3em 1em 3em;
    color: white;
    background-color: black;
    margin-top: 0;
    opacity: 0;
    transition: .3s ease;
    overflow: hidden;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    max-width: 250px;
`


const CardSubtitle = styled.p`
    font-size: 12px;
    padding: 0 1em 1em 1em;
`

const CardImageContainer = styled.div`
    max-width: 300px;
    max-height: 150px;
    border-radius: 25px;
    overflow: hidden;
`

const CardImage = styled.img`
    display: block;
    width: 100%;
    object-fit: contain;
`

const CardContainer = styled.div`
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        max-width: 300px;
        width: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 25px;
        margin: 0 1em 2em 1em;
        cursor: pointer;
        &:hover ${CardTitle} {
            opacity: 1;
            transition: .3s ease;
        }
    `