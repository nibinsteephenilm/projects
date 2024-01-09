import styled from "styled-components";
export default function Heading({
    minititle,
    title,
    titlefontfamily,
    titlefontsize,
    titlecolor,
    minititlecolor,
    gap,
}) {
    return (
        <Container
            titlefontsize={titlefontsize}
            titlefontfamily={titlefontfamily}
            titlecolor={titlecolor}
            minititlecolor={minititlecolor}
            gap={gap}
        >
            <h3>{minititle}</h3>
            <h2>{title}</h2>
        </Container>
    );
}

const Container = styled.div`
    h3 {
        font-size: 40px;
        font-family: "Montez";
        color: ${(props) =>
            props.minititlecolor ? props.minititlecolor : "#E2C216"};
        margin-bottom: ${(props) => (props.gap ? props.gap : "40px")};
        @media all and (max-width: 1280px) {
            font-size: 35px;
        }
    }
    h2 {
        font-family: ${(props) =>
            props.titlefontfamily ? props.titlefontfamily : "DMSansbold"};
        color: ${(props) => (props.titlecolor ? props.titlecolor : "#0F5E28")};
        font-size: ${(props) =>
            props.titlefontsize ? props.titlefontsize : "48px"};
        @media all and (max-width: 1280px) {
            font-size: 45px;
        }

    }
`;
