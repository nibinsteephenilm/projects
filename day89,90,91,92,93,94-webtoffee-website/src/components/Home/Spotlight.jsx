import styled from "styled-components";
import Heading from "../Heading";
import Button from "../Button";
import Elements from "../Elements";

export default function Spotlight() {
    return (
        <Container className="background">
            <Wrapper className="wrapper">
                <div className="left">
                    <Heading
                        lefttitle="The Fastest Growing WordPress"
                        midtitle="GDPR Cookie Consent"
                        righttitle="Plugin"
                        fontSize="55px"
                        lineheight="82px"
                    />
                    <p className="content">
                        Join the <span>1 Million+</span> WordPress websites that
                        use the GDPR Cookie Consent plugin to create a cookie
                        consent banner and manage cookie consent.
                    </p>
                    <Button text="Get plugin now" />
                    <div className="elements">
                        <Elements
                            icon="/icons/Star-Icon.svg"
                            alternate="Star Icon"
                            title="GDPR"
                            miniTitle="Ready"
                        />
                        <Elements
                            icon="/icons/Lock-Icon.svg"
                            alternate="Lock Icon"
                            title="CCPA"
                            miniTitle="Ready"
                        />
                        <Elements
                            icon="/icons/Shield-Icon.svg"
                            alternate="Shield Icon"
                            title="Trusted by"
                            miniTitle="Trusted by 1.5 Million Developers"
                        />
                    </div>
                </div>
                <div className="right">
                    <div className="spotlightFrame">
                        <img
                            src="/images/Spotlight-Image.png"
                            alt="Spotlight Image"
                        />
                    </div>
                </div>
            </Wrapper>
        </Container>
    );
}
const Container = styled.div`
    background-color: #f0f7fd;
    overflow: hidden;
    position: relative;
    &::after {
        content: url("/images/Background-TopCorner.svg");
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(8%,-8%);
    }
    &::before {
        content: url("/images/Background-TopCorner.svg");
        position: absolute;
        bottom: 0;
        left: 0;
        transform: rotate(180deg) translate(8%,-8%);
    }
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
    padding: 60px 0;
    .left {
        width: 50%;
        .content {
            font-size: 19px;
            color: #747474;
            letter-spacing: 0.24px;
            margin-top: 24px;
            margin-bottom: 48px;
            span {
                font-family: "nunito-medium";
            }
        }
        .elements {
            display: flex;
            gap: 45px;
            margin-top: 96px;
        }
    }
    .right {
        width: 45%;
        z-index: 1;
        .spotlightFrame {
            width: 800px;
            transform: rotate(-7deg);
        }
    }

`;
