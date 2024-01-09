import styled from "styled-components";
export default function Footer() {
    return (
        <Container>
            <Wrapper className="wrapper">
                <div className="footerContainer">
                    <div className="left">
                        <div className="logo">
                            <img src="high-range-logo.svg" alt="Logo" />
                        </div>
                        <div className="address">
                            <p>
                                Parakkadavu, Bypass Rd, near ration kada,
                                Pallikavala, Kattappana, Kerala 685508
                            </p>
                        </div>
                    </div>
                    <div className="right">
                        <ul>
                            <li>
                                <span>Explore</span>
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span>Contact</span>
                                <ul>
                                    <li>
                                        <a href="#">+91 000 000 0000</a>
                                    </li>
                                    <li>
                                        <a href="#">+91 000 000 0000</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span>Social medias</span>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img
                                                src="public/instagram.svg"
                                                alt="Instagram"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img
                                                src="public/facebook.svg"
                                                alt="Facebook"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img
                                                src="public/inkedin.svg"
                                                alt="Linked In"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>© Copyright 2023. All Rights Reserved </p>
                </div>
            </Wrapper>
        </Container>
    );
}
const Container = styled.section`
    background-color: #eaf5ef;
    padding: 3.5% 0;
`;
const Wrapper = styled.div`
    .footerContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .left {
            width: 30%;
            @media all and (max-width: 980px) {
                width: 100%;
            }
            .logo {
                display: flex;
                align-items: center;
                width: 15%;
                @media all and (max-width: 980px) {
                    width: 7%;
                }
                img {
                    width: 100%;
                }
            }
            .address {
                margin: 32px 0;
                @media all and (max-width: 980px) {
                    width: 50%;
                }
                p {
                    font-size: 18px;
                    color: #747474;
                    @media all and (max-width: 980px) {
                        font-size: 15px;
                    }
                }
            }
        }
        .right {
            width: 50%;
            @media all and (max-width: 980px) {
                width: 100%;
            }
            ul {
                display: flex;
                justify-content: space-between;
                li {
                    span {
                        color: #747474;
                        font-size: 20px;
                        font-family: "DMSansmedium";
                        @media all and (max-width: 980px) {
                            font-size: 15px;
                        }
                    }
                    ul {
                        margin-top: 32px;
                        display: flex;
                        flex-direction: column;
                        gap: 16px;
                        @media all and (max-width: 980px) {
                            font-size: 15px;
                        }
                    }
                }
                :last-child {
                    ul {
                        flex-direction: row;
                        li {
                            a {
                                display: flex;
                                align-items: center;
                            }
                        }
                    }
                }
            }
        }
    }
    .copyright {
        margin-top: 68px;
        @media all and (max-width: 980px) {
                margin-top: 25px;
            }
        
        p {
            color: #aaa;
            @media all and (max-width: 980px) {
                text-align: center;
            }
        }
    }
`;
