import styled from "styled-components";
export default function Footer() {
    return (
        <FooterSection>
            <div className="top">
                <div className="solutions">
                    <img
                        src="../../public/images/ruppellssolutions.png"
                        alt="Ruppells Solutions Logo"
                    />
                </div>
                <p className="powered">powered by</p>
                <div className="group">
                    <img
                        src="../../public/images/ruppellsgroup.png"
                        alt="Ruppells Group Logo"
                    />
                </div>
            </div>
            <div className="mid">
                <div className="address">
                    Ruppells Group, Manorama Junction,
                    <br /> Panampally Nagar, Kochi, Kerala, India
                    <br /> Pin: 682016
                </div>
                <div className="links">
                    <ul className="contact">
                        <li>Contact</li>
                        <li>
                            <a href="#">+91 884 864 8147</a>
                        </li>
                        <li>
                            <a href="#">+91 884 866 1943</a>
                        </li>
                        <li>
                            <a href="#">info@ruppellssolutions.com</a>
                        </li>
                    </ul>
                    <ul className="quickLink">
                        <li>Quick Links</li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Privacy & Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms & Conditions</a>
                        </li>
                    </ul>
                    <ul>
                        <li>Services</li>
                        <li>
                            <a href="#">Web & App Development</a>
                        </li>
                        <li>
                            <a href="#">Digital Marketing</a>
                        </li>
                        <li>
                            <a href="#">Brand Building</a>
                        </li>
                    </ul>
                </div>
                <div className="socialMedia">
                    <span>Follow us</span>
                    <ul>
                        <li>
                            <a href="#">
                                <img
                                    src="../../public/images/linkedin.png"
                                    alt="Linkedin icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="../../public/images/instagram.png"
                                    alt="Instagram icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="../../public/images/facebook.png"
                                    alt="Facebook icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="../../public/images/youtube.png"
                                    alt="youtube icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="../../public/images/threds.png"
                                    alt="threads icon"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom">
                <span>
                    © Copyright 2023. All Rights Reserved @ruppells solutions
                </span>
            </div>
        </FooterSection>
    );
}
const FooterSection = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 0.5px solid #3e3e3e;
    padding-top: 120px;
    @media all and (max-width: 1280px) {
        padding-top: 50px;
    }
    @media all and (max-width: 640px) {
        padding-top: 30px;
    }

    a {
        text-decoration: none;
        color: #949494;
    }
    .top {
        display: flex;
        align-items: center;
        gap: 32px;
        margin-bottom: 100px;
        @media all and (max-width: 1280px) {
            margin-bottom: 60px;
        }
        @media all and (max-width: 480px) {
            gap: 20px;
        }
    }
    .solutions {
        display: flex;
        align-items: center;
        width: 165px;
        @media all and (max-width: 768px) {
            width: 130px;
        }
        @media all and (max-width: 480px) {
            width: 100px;
        }
        img {
            width: 100%;
        }
    }
    .powered {
        text-transform: capitalize;
        color: #f3f3f3;
        display: flex;
        font-size: 18px;
        @media all and (max-width: 768px) {
            font-size: 16px;
        }
        @media all and (max-width: 480px) {
            font-size: 14px;
        }
    }
    .group {
        display: flex;
        align-items: center;
        width: 165px;
        @media all and (max-width: 768px) {
            width: 130px;
        }
        @media all and (max-width: 480px) {
            width: 100px;
        }
        img {
            width: 100%;
        }
    }
    .mid {
        display: flex;
        color: #949494;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 48px;
        border-bottom: 1px solid #3e3e3e;
        @media all and (max-width: 1280px) {
            flex-direction: column;
            gap: 40px;
        }
        .address {
            font-size: 20px;
            color: #949494;
            @media all and (max-width: 768px) {
                font-size: 16px;
            }
            @media all and (max-width: 480px) {
                font-size: 14px;
            }
        }
        .links {
            display: flex;
            width: 50%;
            justify-content: space-between;
            @media all and (max-width: 1280px) {
                width: 100%;
            }
            .quickLink {
                @media all and (max-width: 768px) {
                    display: none;
                }
            }
            .contact {
                li:last-child {
                    @media all and (max-width: 480px) {
                        display: none;
                    }
                }
            }
            ul {
                padding: 0;
                margin: 0;

                li {
                    display: flex;
                    margin-bottom: 16px;
                    a {
                        font-size: 16px;
                        @media all and (max-width: 480px) {
                            font-size: 14px;
                        }
                    }
                }
                li:nth-child(1) {
                    font-size: 20px;
                    color: #f3f3f3;
                    cursor: default;
                    margin-bottom: 24px;
                }
            }
        }
        .socialMedia {
            span {
                font-size: 20px;
                color: #f3f3f3;
            }
            ul {
                display: flex;
                padding: 0;
                gap: 16px;
                margin-top: 24px;
                li {
                    a {
                        display: flex;
                        align-items: center;
                        width: 20px;
                        padding: 2px;
                        img {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
    .bottom {
        width: 100%;
        display: flex;
        justify-content: center;
        color: var(--neutral-300-paragraph, #747474);
        margin-top: 48px;
        font-size: 18px;
        text-transform: uppercase;
        @media all and (max-width: 1080px) {
            font-size: 15px;
        }
        @media all and (max-width: 980px) {
            font-size: 14px;
        }
        @media all and (max-width: 480px) {
            font-size: 10px;
        }
    }
`;
