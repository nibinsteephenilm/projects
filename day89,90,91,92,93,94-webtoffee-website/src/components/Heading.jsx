import styled from "styled-components";

export default function Heading({ lefttitle, righttitle, midtitle , leftrightcolor, fontSize, lineheight }) {
    return (
        <Container leftrightcolor={leftrightcolor} fontSize={fontSize} lineheight={lineheight}>
            <p>
                {lefttitle} <span>{midtitle}</span> {righttitle}
            </p>
        </Container>
    );
}
const Container = styled.div`
    p {
        font-size: ${props=>props.fontSize ? props.fontSize : "38px"};
        line-height: ${props=>props.lineheight ? props.lineheight : "55px"};
        letter-spacing: 0.64px;
        font-family: "nunito-bold";
        color: ${props=>props.leftrightcolor ? props.leftrightcolor : "#0A0A0A"};
        span {
            font-size: ${props=>props.fontSize ? props.fontSize : "38px"};
            line-height: ${props=>props.lineheight ? props.lineheight : "55px"};
            letter-spacing: 0.64px;
            font-family: "nunito-bold";
            color: #007FFF;
        }
    }
`;
