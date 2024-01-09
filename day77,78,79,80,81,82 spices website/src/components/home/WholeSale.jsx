import styled from "styled-components";
import Heading from "../Heading";
import WholeSaleCard from "../WholeSaleCard";
import ViewAll from "../ViewAll";

export default function WholeSale() {
    return (
        <Container>
            <Wrapper className="wrapper">
                <div className="wholeSaleHeading">
                    <Heading
                        minititle="Wholesale products"
                        title="Our wholesale products"
                        gap="25px"
                    />
                </div>
                <div className="cards">
                    <div className="firstColumn">
                        <WholeSaleCard
                            imageurl="cardamom.svg"
                            title="Cardamom"
                        />
                    </div>
                    <div className="firstColumnResponsive">
                        <WholeSaleCard
                            imageurl="public/cardamomResponsive.svg"
                            title="Cardamom"
                        />
                    </div>
                    <div className="secondColumn">
                        <WholeSaleCard
                            imageurl="cinamon.svg"
                            title="Cinnamon"
                        />
                        <WholeSaleCard
                            imageurl="pepper.svg"
                            title="Black pepper"
                        />
                    </div>
                    <div className="thirdColumn">
                        <WholeSaleCard imageurl="ginger.svg" title="Ginger" />
                    </div>
                    <div className="thirdColumnResponsive">
                        <WholeSaleCard imageurl="public/gingerResponsive.svg" title="Ginger" />
                    </div>
                </div>
                <div className="viewAll">
                    <ViewAll />
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
        height: 147px;
        width: 240px;
        background-image: url("Whole-Pepper.svg");
        background-size: 100%;
        background-repeat: no-repeat;
        transform: translateY(56%);
        z-index: 2;
        @media all and (max-width: 1280px) {
                height: 93px;
                width: 150px;
            }
    }
`;
const Wrapper = styled.div`
    position: relative;
    padding: 7.5% 0;
    z-index: 2;
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: #dde1df;
    }

    .wholeSaleHeading {
        margin-bottom: 80px;
    }
    .cards {
        display: flex;
        gap: 16px;
        margin-bottom: 40px;
        @media all and (max-width: 980px) {
            flex-direction: column;
            padding: 0 10%;
        }
        .firstColumn {
            @media all and (max-width: 980px) {
                display: none;
            }
        }
        .firstColumnResponsive {
            display: none;
            @media all and (max-width: 980px) {
                display: block;
            }
        }
        .secondColumn {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media all and (max-width: 980px) {
                gap: 16px;
            }
        }
        .thirdColumn {
            @media all and (max-width: 980px) {
                display: none;
            }
        }
        .thirdColumnResponsive {
            display: none;
            @media all and (max-width: 980px) {
                display: block;
            }
        }
    }
    .viewAll {
        margin-bottom: 70px;
        @media all and (max-width: 980px) {
                margin-bottom: 25px;
            }
    }
`;
