import styled from "styled-components";
import Heading from "../Heading";
import Star from "./Star";
import TrustPilotReviewCard from "../TrustPilotReviewCard";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function TrustpilotReview() {
    var settings = {
        dots: false,
        // infinite: true,
        // speed: 500,
        arrows: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        // initialSlide: .5
    };
    const arrow = useRef()

    const handleLeftClick = (e) => {
        e.preventDefault()
        arrow.current.slickPrev();
    }
    const handleRightClick = (e) => {
        e.preventDefault()
        arrow.current.slickNext();
    }
    return (
        <Container className="background">
            <div className="heading wrapper">
                <Heading
                    lefttitle="See what our customers have to say about GDPR plugin on "
                    midtitle="Trustpilot"
                />
            </div>
            <div className="bottom">
                <div className="rating">
                    <p className="excellent">excellent</p>
                    <Star star="/icons/Gold-star.svg" />
                    <p className="reviewNumber">
                        Based on <span>702 reviews</span>
                    </p>
                    <div className="trustpilotLogo">
                        <img
                            src="/icons/Trust-Pilot-Icon.svg"
                            alt="Trust pilot Icon"
                        />
                    </div>
                </div>
                <div className="userReviews">
                    <Slider {...settings} style={{ display: 'flex', width: '100%' }} ref={arrow}>
                            <TrustPilotReviewCard
                                title="The best cookie system for WordPress"
                                description="For me it is the best cookie system for WordPress. I recommend it to all my clients. It avoids a lot of work in a very efficient way."
                                name="Jidnjidun"
                                date="22 Jun 2023"
                                image="/images/Trustpilot-person-image.svg"
                            />
                            <TrustPilotReviewCard
                                title="The best cookie system for WordPress"
                                description="For me it is the best cookie system for WordPress. I recommend it to all my clients. It avoids a lot of work in a very efficient way."
                                name="Jidnjidun"
                                date="22 Jun 2023"
                                image="/images/Trustpilot-person-image.svg"
                            />
                            <TrustPilotReviewCard
                                title="The best cookie system for WordPress"
                                description="For me it is the best cookie system for WordPress. I recommend it to all my clients. It avoids a lot of work in a very efficient way."
                                name="Jidnjidun"
                                date="22 Jun 2023"
                                image="/images/Trustpilot-person-image.svg"
                            />
                    </Slider>
                    <div className="reviewButtons">
                        <a className="arrow" onClick={handleLeftClick}>
                            <img src="/icons/arrow-left.svg" alt="Left Arrow" />
                        </a>
                        <a className="arrow" onClick={handleRightClick}>
                            <img
                                src="/icons/arrow-right.svg"
                                alt="right arrow"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    background-color: #f0f7fd;
    padding-top: 100px;
    padding-bottom: 80px;
    .heading {
        width: 60%;
        text-align: center;
    }
    .bottom {
        margin-top: 80px;
        width: 100%;
        height: 620px;
        background-image: url("/images/Trust-Pilot-background.svg");
        background-repeat: no-repeat;
        background-size: contain;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .rating {
            margin-left: 6%;
            width: 14%;
            .excellent {
                color: #f3f5f9;
                text-transform: capitalize;
                font-family: "nunito-medium";
                font-size: 37px;
                margin-bottom: 8px;
            }
            .reviewNumber {
                color: #f3f5f9;
                font-size: 20px;
                margin-top: 16px;
                margin-bottom: 20px;
                span {
                    color: #fff;
                    font-size: 20px;
                    text-decoration: underline;
                }
            }
            .trustpilotLogo {
                width: 128px;
            }
        }
        .userReviews {
            overflow: hidden;
            /* flex: 1; */
            width: 73%;

            .reviewButtons {
                display: flex;
                gap: 16px;
                margin-top: 16px;
                .arrow {
                    border-radius: 4px;
                    border: 1px solid var(--Neutral-100, #eee);
                    background: #05122a;
                    padding: 10px;
                    width: 40px;
                    cursor: pointer;
                }
            }
        }
        .slick-track {
            display: flex;
            flex-direction: row-reverse;
        }
    }
`;
