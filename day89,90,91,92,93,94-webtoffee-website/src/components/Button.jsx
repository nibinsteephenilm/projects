import styled from "styled-components";

export default function Button({
    backgroundcolor,
    arrow,
    width,
    textcolor,
    text,
    padding,
    fontSize,
}) {
    return (
        <Container
            width={width}
            backgroundcolor={backgroundcolor}
            textcolor={textcolor}
            padding={padding}
            fontSize={fontSize}
            arrow={arrow}
        >
            <button>
                {text}
                <span className="arrow">
                    <img src="/icons/butttonArrow.svg" alt="Right Arrow" />
                </span>
            </button>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    align-items: center;
    button {
        &:hover {
            &::after {
                opacity: 1;
                transform: translate(2%, 5%);
            }
        }
        cursor: pointer;
        display: flex;
        justify-content: center;
        border-radius: 4px;
        border: 1px solid #007fff;
        color: ${(props) => (props.textcolor ? props.textcolor : "#FFF")};
        padding: ${(props) => (props.padding ? props.padding : "12px 32px")};
        font-family: "nunito-medium";
        font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
        width: ${(props) => (props.width ? props.width : "220px")};
        position: relative;
        background-color: ${(props) =>
            props.backgroundcolor ? props.backgroundcolor : "#007fff"};
        gap: 6px;
        &::after {
            content: "";
            width: 100%;
            border: 1px solid #007fff;
            color: #007fff;
            position: absolute;
            height: 100%;
            border-radius: 4px;
            top: 0;
            left: 0;
            opacity: 0;
            transition: 0.1s ease-in-out;
        }
        span {
            display: ${(props) => (props.arrow ? props.arrow : "block")};
        }
    }
`;
