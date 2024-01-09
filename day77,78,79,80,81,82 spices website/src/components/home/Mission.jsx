import styled from "styled-components";
import Heading from "../Heading";
import LeafText from "../LeafText";
export default function Mission() {
    return (
        <Container>
            <Wrapper className="wrapper">
                <div className="left">
                    <div className="welcomeImg">
                        <img
                            src="Mission-Image.svg"
                            alt="Mission Image"
                        />
                    </div>
                </div>
                <div className="right">
                    <Heading
                        minititle="Our Mission"
                        title="Quality products & service"
                    />
                    <span>
                        <p>
                            Our mission is to provide high quality products at
                            the best price. and the cornerstone of our business
                            in which we strive to provide quality products and
                            flavourful memories and satisfaction for our
                            coustomers. We offer high quality and diverse
                            assortment of products in a sensory shopping
                            experience
                        </p>
                        <p>
                            When purchasing spices, it is best to look for those
                            that have been recently harvested and packaged, and
                            to avoid those that are old or have an off smell.
                            Indian cuisine is known for its extensive use of a
                            wide variety of spices. We as a team work together
                            to ensure we deliver the top most quality spices for
                            our customers.
                        </p>
                    </span>
                    <div className="leaf">
                        <LeafText text="Export quality products" />
                    </div>
                </div>
            </Wrapper>
        </Container>
    );
}
const Container = styled.div`
    background-color: #EAF5EF;
    position: relative;
    &::after{
        content: "" ;
        position: absolute;
        bottom: 0;
        height: 180px;
        width: 240px;
        background-image: url('Whole-Cardamom-Towards-Right.svg');
        background-size: 100%;
        background-repeat: no-repeat;
        transform: translateY(44%);
        z-index: 2;
        @media all and (max-width: 980px) {
                        height: 113px;
                        width: 150px;
                    }
    }
`;
const Wrapper = styled.div`
    display: flex;
    padding: 9% 0; 
    justify-content: space-between;
    .right {
        width: 50%;
        @media all and (max-width: 980px) {
                width: 55%;
                }
        span {
            margin-top: 80px;
            margin-bottom: 40px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            @media all and (max-width: 980px) {
                    margin-top: 50px;
                }
            p {
                color: #5c6562;
                font-size: 20px;
                @media all and (max-width: 1280px) {
            line-height: 27px;
            font-size: 18px;
            @media all and (max-width: 980px) {
                    line-height: normal;
                    font-size: 17px;
                }
        }
            }
        }
    }
    .left {
        width: 35%;
        @media all and (max-width: 980px) {
                    width: 38%;
                }
        display: flex;
        align-items: center;
        .welcomeImg {
            display: flex;
            align-items: center;
            img {
                width: 100%;
            }
        }
    }
`;
