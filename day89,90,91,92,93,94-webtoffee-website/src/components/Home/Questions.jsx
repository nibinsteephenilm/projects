import styled from "styled-components";
import Heading from "../Heading";
import { QuestionsKey } from "../../util/QuestionsKey";
import { useState } from "react";

export default function Questions() {
    const [activeQuestion, setActiveQuestion] = useState("");

    const handleClick = (index) => {
        if (index === activeQuestion) {
            setActiveQuestion("");
        } else {
            setActiveQuestion(index);
        }
    };
    return (
        <Container className="background">
            <Wrapper className="wrapper">
                <div className="top">
                    <Heading lefttitle="Frequently Ask" midtitle="Questions" />
                    <p className="questionContent">
                        Do you have a question about the ‘GDPR Cookie Consent?
                        See the list below for our most frequently asked
                        questions.
                    </p>
                </div>
                <div className="bottom">
                    {QuestionsKey.map((item, i) => (
                        <div
                            className={`eachQuestion ${i === activeQuestion ? "active" : null}`}
                            key={i}
                            onClick={() => handleClick(i)}
                        >
                            <div className="head">
                                <div className="title">{item.title}</div>
                                <div className="arrow">
                                    <img
                                        src="/icons/Show-More-Arrow.svg"
                                        alt="Show more Arrow"
                                    />
                                </div>
                            </div>
                            <div className="description">
                                <p className="first">{item.first}</p>
                                <p className="second">{item.second}</p>
                                <p className="third">{item.third}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </Container>
    );
}
const Container = styled.div`
    padding-bottom: 400px;
    position: relative;
    &::after {
        content: "";
        background-image: url("/images/Question-lap.svg");
        background-size: contain;
        background-repeat: no-repeat;
        width: 1229px;
        height: 782px;
        position: absolute;
        left: 50%;
        transform: translate(-50%,0);
    }
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 60px;
        .questionContent {
            width: 49%;
            font-size: 18px;
            color: #747474;
            margin-top: 24px;
        }
    }
    .bottom {
        width: 75%;
        .eachQuestion {
            border-bottom: 1px solid #d4d4d4;
            padding: 24px 0;
            .head {
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                .title {
                    color: #0a0a0a;
                    font-family: "nunito-semibold";
                    font-size: 22px;
                }
                .arrow {
                    width: 28px;
                    transition: .5s;
                }
            }

            .description {
                height: 0;
                visibility: hidden;
                transition: height 0.3s ease-in-out;
                p {
                    color: #747474;
                    font-size: 18px;
                    line-height: 30px;
                }
            }
        }
        .active {
            .head {
                margin-bottom: 16px;
                .arrow {
                    transform: rotate(180deg);
                }
                .title {
                    color: #3182ff;
                    font-family: "nunito-semibold";
                    font-size: 22px;
                }
            }
            .description {
                height: 200px;
                visibility: visible;
            }
        }
        .eachQuestion:nth-child(2).active {
            .description {
                height: 100px;
            }
        }
    }
`;
