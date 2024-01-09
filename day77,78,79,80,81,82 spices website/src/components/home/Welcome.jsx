import styled from "styled-components";
import Heading from "../Heading";
import LeafText from "../LeafText";

export default function Welcome() {
    return (
        <Container>
            <Wrapper className="wrapper">
                <div className="left">
                    <Heading
                        minititle="Welcome to"
                        title="Highrange Valley Tea & Spices"
                    />
                    <span>
                        <p>
                            Highrange Valley is a B to B company located in
                            Kerala, Idukki, We are the leading wholesale
                            suppliers. We export and import of spices including
                            Tea, Honey, Cof fee, Dry Fruits etc. The entire
                            range is known all across the globe for its unique
                            taste, rich aroma, purity and longer shelf life.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Et aliquet
                            semper at elementum vitae sollicitudin ut ut. Donec
                            amet metus luctus neque viverra risus praesent. Nibh
                            nec adipiscing sit quis risus faucibus. At sed
                            scelerisque at justo urnam.
                        </p>
                    </span>
                    <div className="leaf">
                        <LeafText text="Whole Sale" />
                        <LeafText text="Retail" />
                    </div>
                </div>
                <div className="right">
                    <div className="welcomeImg">
                        <img src="welcome-Image.svg" alt="Welcome Image" />
                    </div>
                </div>
            </Wrapper>
        </Container>
    );
}
const Container = styled.section`
    position: relative;
    background-color: #eeeeee;
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        height: 111px;
        width: 200px;
        background-image: url("Whole-clove.svg");
        background-size: 100%;
        background-repeat: no-repeat;
        transform: translateY(35%);
        z-index: 2;
        @media all and (max-width: 980px) {
                    height: 86px;
                    width: 150px;
                }
    }
`;

const Wrapper = styled.div`
    display: flex;
    padding: 9% 0;
    justify-content: space-between;
    .left {
        width: 50%;
        @media all and (max-width: 980px) {
            width: 54%;
        }
        span {
            margin-top: 80px;
            margin-bottom: 40px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            p {
                color: #5c6562;
                font-size: 20px;
                @media all and (max-width: 1280px) {
                    line-height: 27px;
                    font-size: 18px;
                }
                @media all and (max-width: 980px) {
                    line-height: normal;
                    font-size: 17px;
                }
            }
        }
        .leaf {
            display: flex;
            gap: 32px;
            text-transform: capitalize;
            @media all and (max-width: 1280px) {
                gap: 25px;
            }
        }
    }
    .right {
        width: 35%;
        display: flex;
        align-items: center;
        @media all and (max-width: 980px) {
            width: 41%;
        }
        .welcomeImg {
            display: flex;
            align-items: center;
            img {
                width: 100%;
            }
        }
    }
`;
