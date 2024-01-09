import styled from "styled-components";
import Heading from "../Heading";
import PurchaseCard from "../PurchaseCard";
import Star from "./Star";
import Specifications from "../Specification";
export default function Purchase() {
    return (
        <Container className="background">
            <div className="purchaseHeading">
                <div className="purchaseTitle">
                    <Heading
                        lefttitle="The Best Plugin for CCPA and GDPR"
                        midtitle="Cookie Consent"
                        leftrightcolor="#EEE"
                    />
                </div>
                <div className="moneyback">
                    <p className="guarantee">
                        100% no-risk Money Back guarantee
                    </p>
                    <div className="moneybackFrame">
                        <img
                            src="/images/Moneyback-image.svg"
                            alt="Money back image"
                        />
                    </div>
                </div>
            </div>
            <Wrapper className="wrapper">
                <div className="cardContainer">
                    <PurchaseCard count="Single Site" cost="69.00" />
                    <PurchaseCard
                        count="Upto 25 Sites"
                        cost="399.00"
                        recommended="block"
                    />
                    <PurchaseCard count="Upto 5 Sites" cost="199.00" />
                </div>
                <div className="consent">
                    <div className="plugin">
                        <div className="pluginHeading">
                            <Heading
                                lefttitle="GDPR Cookie Consent Plugin"
                                midtitle="(CCPA Ready)"
                                leftrightcolor="#EEE"
                                fontSize="24px"
                                lineheight="35px"
                            />
                        </div>
                        <div className="review">
                            <Star star="/icons/Gold-star.svg" />
                            <p className="reviewText">119 Reviews</p>
                        </div>
                    </div>
                    <ul className="purchaseSpecifications">
                        <li>
                            <Specifications
                                text="Extensive Cookie banner customization"
                                radius="27px"
                                fontSize="17px"
                            />
                        </li>
                        <li>
                            <Specifications
                                text="Automatically block cookies/script"
                                radius="27px"
                                fontSize="17px"
                            />
                        </li>
                        <li>
                            <Specifications
                                text="Scan and list cookies"
                                radius="27px"
                                fontSize="17px"
                            />
                        </li>
                        <li>
                            <Specifications
                                text="User Consent logging"
                                radius="27px"
                                fontSize="17px"
                            />
                        </li>
                        <li>
                            <Specifications
                                text="Granular consent based on cookie categories"
                                radius="27px"
                                fontSize="17px"
                            />
                        </li>
                        <li>
                            <Specifications
                                text="Location based exclusion for banner"
                                radius="27px"
                                fontSize="17px"
                            />
                        </li>
                        <li>
                            <Specifications
                                text="Explicit/Implicit consent"
                                radius="27px"
                                fontSize="17px"
                            />
                        </li>
                    </ul>
                </div>
                <div className="moreInfo">
                    <p className="updateDetails">A subscription entitles you to 1 year of updates and support from the date of purchase.</p>
                    <ul>
                        <li>Version 2.4.0</li>
                        <li><a href="#">Changelog</a></li>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
            </Wrapper>
        </Container>
    );
}
const Container = styled.section`
    padding: 115px 0;
    border-radius: 16px;
    background: radial-gradient(43.84% 50% at 50% 50%, #0D2759 0%, #01112D 100%);
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
    .purchaseHeading {
        display: flex;
        justify-content: center;
        position: relative;
        margin-bottom: 80px;
        .purchaseTitle {
            width: 40%;
            text-align: center;
        }
        .moneyback {
            display: flex;
            align-items: center;
            position: absolute;
            left: 0;
            .guarantee {
                font-size: 17px;
                color: #eee;
                border-top: 1px solid #f5f5f5;
                border-bottom: 1px solid #f5f5f5;
                width: 228px;
                padding: 10px 34px;
                display: flex;
            }
            .moneybackFrame {
                transform: translatex(-13%);
                width: 140px;
                display: flex;
            }
        }
    }
`;
const Wrapper = styled.div`
    .cardContainer {
        display: flex;
        gap: 32px;
        margin-bottom: 32px;
    }
    .consent {
        display: flex;
        justify-content: space-between;
        padding: 32px;
        border-radius: 8px;
        border: 1px solid rgba(116, 116, 116, 0.40);
        background: #01112D;
        .plugin {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 32%;
            .pluginHeading {
            }
            .review {
                display: flex;
                gap: 16px;
                align-items: center;
                p {
                    color: #f3f3f3;
                    font-size: 18px;
                    font-family: "nunito-bold";
                    text-decoration: underline;
                }
            }
        }
        .purchaseSpecifications {
            column-count: 2;
            li {
                margin-bottom: 20px;
            }
        }
    }
    .moreInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 48px;
        p {
            color: #C3C3C3;
            font-size: 22px;
            margin-bottom: 16px;
        }
        ul {
            display: flex;
            li {
                color: #ECECEC;
                font-family: 'nunito-medium';
                border-right: 1px solid #7383A0;
                line-height: 12px;
                display: flex;
                align-items: center;
                padding: 0 65px;

                a {
                    color: #007FFF;
                    font-family: 'nunito-medium';
                }
            }
            :nth-child(1) {
                padding-left: 0;
            }
            :last-child {
                padding-right: 0;
                border-right: none;
            }
        }
    }
`;
