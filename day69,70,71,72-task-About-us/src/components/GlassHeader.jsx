import styled from "styled-components";

export default function GlassHeader({
    minititle = "About",
    title = "Us",
    linewidth,
}) {
    return (
        <Container linewidth={linewidth}>
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
    position: relative;
    z-index: 2;
    .left {
        color: #bbb;
        font-size: 48px;
        @media all and (max-width: 980px) {
            font-size: 35px;
        }
        @media all and (max-width: 640px) {
            font-size: 22px;
        }
    }
    .right {
        color: #f3f3f3;
        font-family: "Satoshi-Medium";
        font-size: 48px;
        @media all and (max-width: 980px) {
            font-size: 35px;
        }
        @media all and (max-width: 640px) {
            font-size: 22px;
        }
    }
    .underline {
        height: 1.5px;
        background-color: #eee;
        width: ${(props) => (props.linewidth ? props.linewidth : "60%")};
        margin-top: 8px;
        @media all and (max-width: 640px) {
            margin-top: 1px;
        }
    }
    &::after {
        content: "";
        border-radius: 2px;
        width: 225px;
        height: 130px;
        @media all and (max-width: 980px) {
            height: 104px;
            transform: translate(-20%, -25%);
        }
        @media all and (max-width: 640px) {
            transform: translate(-28%, -25%);
            width: 200px;
            height: 73px;
        }
        border: 1px solid rgba(248, 248, 248, 0.19);
        border-image: linear-gradient(
            to right,
            #f8f8f80f,
            #2b2b2b10,
            #2b2b2b10
        );
        border-image-slice: 1;
        background: rgba(255, 255, 255, 0.01);
        backdrop-filter: blur(25px);
        position: absolute;
        top: 0;
        transform: translate(-30%, -25%);
        z-index: -1;
    }
    &::before {
        content: url("../../public/images/Ellipse 4928.svg");
        position: absolute;
        z-index: -2;
        bottom: 0;
        transform: translate(-8%, -2%);
        @media all and (max-width: 980px) {
            transform: translate(-36%, 13%);
        }
        @media all and (max-width: 640px) {
            transform: translate(-36%, 30%);
        }
    }
`;
