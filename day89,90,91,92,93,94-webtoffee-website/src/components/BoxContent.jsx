import styled from "styled-components"

export default function BoxContent({boxtext,boxtextcolor,boxtextfont,boxtextsize}) {
    return (
        <Container boxtextcolor={boxtextcolor} boxtextfont={boxtextfont} boxtextsize={boxtextsize}>
            <p>{boxtext}</p>
        </Container>
    )
}
const Container = styled.div`
    padding: 10px 16px;
    border: 1px dashed #B3D9F6;
    border-radius: 4px;
    position: relative;
    &::before { 
        content: "";
        height: 60%;
        width: 3px;
        background-color: #007FFF;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-75%, -50%);
        border-radius: 4px;
    }
    p {
        color: ${props=> props.boxtextcolor ? props.boxtextcolor : "#747474"};
        font-family: ${props=> props.boxtextfont ? props.boxtextfont : "nunito-medium"};
        font-size: ${props=> props.boxtextsize ? props.boxtextsize : "17px"};
    }
`