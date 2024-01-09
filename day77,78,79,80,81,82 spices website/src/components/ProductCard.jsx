import styled from "styled-components";
import GreenButton from "./GreenButton";

export default function ProductCard({ image, title, quantity, price }) {
    return (
        <Container>
            <div className="productImage">
                <img src={image} alt={title} />
            </div>
            <div className="productDetails">
                <div className="top">
                    <div className="left">
                        <h5>{title}</h5>
                        <p>Quantity : {quantity}</p>
                    </div>
                    <div className="right">
                        <p>
                            Price :{" "}
                            <span>
                                <p>₹</p>
                                {price}
                            </span>
                        </p>
                    </div>
                </div>
                <div className="bottom">
                    <GreenButton text="View" />
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    margin-right: 16px;

    .productImage {
        display: flex;
        align-items: center;
        width: 362px;
        @media all and (max-width: 1080px) {
                        width: 325px;
                    }
        img {
            width: 100%;
        }
    }
    .productDetails {
        padding: 16px 18px 24px 18px;
        background-color: #ffffff;
        .top {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            @media all and (max-width: 1280px) {
                margin-bottom: 10px;
            }
            .left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                h5 {
                    font-family: "DMSansmedium";
                    font-size: 20px;
                    margin-bottom: 4px;
                    color: #0a0a0a;
                    @media all and (max-width: 1280px) {
                        font-size: 18px;
                    }
                }
                p {
                    font-size: 14px;
                    color: #747474;
                    @media all and (max-width: 1080px) {
                        font-size: 10px;
                    }
                }
            }
            .right {
                display: flex;
                align-items: center;
                font-size: 20px;

                p {
                    color: #747474;
                    font-family: "DMSansbold";
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    span {
                        color: #59bc76;
                        font-family: "DMSansbold";
                        display: flex;
                        align-items: center;
                        p {
                            color: #59bc76;
                            font-family: none;
                            font-size: 20px;
                            font-weight: 700;
                        }
                    }
                }
            }
        }
    }
`;
