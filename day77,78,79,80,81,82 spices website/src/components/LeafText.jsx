import styled from "styled-components"
export default function LeafText({text,textcolor}) {
    return (
        <Container textcolor={textcolor}>
            <div className="leaf">
                <img src="leaf.svg" alt="Leaf image" />
            </div>
            <p>{text}</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    @media all and (max-width: 1280px) {
            gap: 8px;
        }

    .leaf{
        width: 22px;
        display: flex;
        align-items: center;
        img {
            width: 100%;
        }
        @media all and (max-width: 1280px) {
            width: 21px;
        }
        @media all and (max-width: 980px) {
                    width: 18px;
                }

    }
    p {
        font-family: 'DMSansmedium';
        font-size: 24px;
        color: ${(props)=>(props.textcolor ? props.textcolor : '#59BC76')};
        @media all and (max-width: 1280px) {
            font-size: 20px;
        }
        @media all and (max-width: 980px) {

                    font-size: 17px;
                }

    }
`