import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import GreenButton from "../components/GreenButton";

const SharedLayout = () => {

    return (
        <Container>
            <header className="wrapper">
                <nav>
                    <ul>
                        <li>
                            <a href="#">home</a>
                        </li>
                        <li>
                            <a href="#">products</a>
                        </li>
                        <li>
                            <a href="#">contact us</a>
                        </li>
                    </ul>
                    <div className="right">
                        <div className="headerLogo">
                            <img src="high-range-logo.svg" alt="Header Logo" />
                        </div>
                        <GreenButton text="Contact Us" hover={false} />
                    </div>
                </nav>
            </header>
            <Outlet />
        </Container>
    );
};

export default SharedLayout;

const Container = styled.div`
    header {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 8px 0;

            ul {
                display: flex;
                gap: 48px;
                text-transform: capitalize;
                li {
                    a {
                        font-family: "DMSansregular";
                        color: #d4d4d4;
                    }
                }
            }
            .right {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 52%;
                font-family: "DMSansmedium";
                .headerLogo {
                    width: 50px;
                    display: flex;
                    align-items: center;
                    img {
                        width: 100%;
                    }
                }
                .contactUs {
                    color: #d4d4d4;
                }
            }
        }
    }
`;
