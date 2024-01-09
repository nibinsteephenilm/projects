import styled from "styled-components";
import Heading from "../Heading";
import ProductCard from "../ProductCard";
import { RetailProducts } from "../../utils/RetailProducts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ViewAll from "../ViewAll";
import { useRef } from "react";

export default function Products() {
    var settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: false,
        dots: false,
        arrows: false,
        autoplaySpeed: 2000,
        
    };
    const carousel = useRef();
    return (
        <Container>
            <Wrapper className="wrapper">
                <div className="productHeading">
                    <Heading minititle="Products" title="Our retail products" />
                    <div className="productDetails">
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Orci
                            tristique tellus semper donec suscipit. Condimentum
                            donec semper aliquam semper hac.
                        </p>
                    </div>
                </div>
                <div className="slickContainer">
                    <span onClick={(e) => carousel.current.slickNext()}>
                        <div className="leftArrow">
                            <img
                                src="public/Product-left-arrow.svg"
                                alt="Left Arrow"
                            />
                        </div>
                    </span>
                    <div className="sliderContainer">
                        <Slider {...settings} ref={carousel}>
                            {RetailProducts.map(
                                ({ image, title, quantity, price }, i) => {
                                    return (
                                        <div className="cardContainer" key={i}>
                                            <ProductCard
                                                
                                                image={image}
                                                title={title}
                                                quantity={quantity}
                                                price={price}
                                            />
                                        </div>
                                    );
                                }
                            )}
                        </Slider>
                    </div>
                    <span onClick={(e) => carousel.current.slickPrev()}>
                        <div className="rightArrow">
                            <img
                                src="public/Product-right-arrow.svg"
                                alt="Right arrow"
                            />
                        </div>
                    </span>
                </div>
                <div className="viewAll">
                    <ViewAll />
                </div>
            </Wrapper>
        </Container>
    );
}

const Container = styled.section`
    background-color: #eeeeee;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
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
    padding: 7.5% 0;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: #dde1df;
    }
    .productHeading {
        text-align: center;
        margin-bottom: 80px;
        @media all and (max-width:1280px) {
                margin-bottom: 50px;
            }
        .productDetails {
            display: flex;
            justify-content: center;
            margin-top: 48px;

            p {
                width: 45%;
            }
        }
    }
    .slickContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
        span {
            padding: 20px 10px;
            cursor: pointer;
            transition: 0.1s;
            &:hover {
                background-color: #ffffff;
            }
            .leftArrow {
                display: flex;
                align-items: center;
                img {
                    width: 100%;
                }
            }
            .rightArrow {
                display: flex;
                align-items: center;
                img {
                    width: 100%;
                }
            }
        }
        .sliderContainer {
            width: 90%;
            
            .cardContainer {
                padding-top: 20px;
                transition: transform 0.3s ease-in-out;
                &:hover {
                    transform: translateY(-20px);
                }
            }
            .slick-track {
                display: flex;
            }
        }
    }
    .viewAll {
    }
`;
