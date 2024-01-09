import styled from "styled-components";

export default function SubHeading({
    minititle = "About",
    title = "Us",
    linewidth,
    lineheight,
}) {
    return (
        <Container linewidth={linewidth} lineheight={lineheight}>
            <div className="text">
                <span className="left">{minititle}&nbsp;</span>
                <span className="right">{title}</span>
            </div>
            <div className="underline"></div>
        </Container>
    );
}
const Container = styled.div`
    text-transform: capitalize;
    .left {
        color: #bbb;
        font-size: 48px;
        transform: translate(-30%, -25%);
        @media all and (max-width: 1080px) {
            font-size: 35px;
        }
        @media all and (max-width: 640px) {
            font-size: 28px;
        }
    }
    .right {
        color: #f3f3f3;
        font-family: "Satoshi-Medium";
        font-size: 48px;
        @media all and (max-width: 1080px) {
            font-size: 35px;
        }
        @media all and (max-width: 640px) {
            font-size: 28px;
        }
    }
    .underline {
        height: 2px;
        background-color: #eee;
        width: ${(props) => (props.linewidth ? props.linewidth : "60%")};
        height: ${(props) => (props.lineheight ? props.lineheight : "1.5px")};
        margin-top: 8px;
    }
`;
