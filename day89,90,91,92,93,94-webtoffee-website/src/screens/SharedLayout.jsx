import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

export default function SharedLayout() {
    return (
        <>
            <Wrapper className="wrapper">
                <a href="#" className="logo">
                    <img src="/icons/Logo.svg" alt="Logo" />
                </a>
                <ul>
                    <li>
                        <a href="#" className="active">
                            home
                        </a>
                    </li>
                    <li>
                        <a href="#">plugins</a>
                    </li>
                    <li>
                        <a href="#">shopify app</a>
                    </li>
                    <li>
                        <a href="#">bundles</a>
                    </li>
                    <li>
                        <a href="#">blog</a>
                    </li>
                    <li>
                        <a href="#">documentation</a>
                    </li>
                    <li>
                        <a href="#">support</a>
                    </li>
                </ul>
                <Button text="login" backgroundcolor="none" textcolor="#007fff" width="140px" arrow="none"/>
            </Wrapper>

            <Outlet />
        </>
    );
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 64px;
    padding-top: 28px;
    .logo {
        display: flex;
        align-items: center;
        width: 250px;
    }
    ul {
        display: flex;
        align-items: center;
        gap: 16px;
        li {
            .active {
                position: relative;
                display: flex;
                font-family: "nunito-bold";
                color: #007fff;
                &::after {
                    content: "";
                    width: 15px;
                    height: 2px;
                    background-color: #007fff;
                    position: absolute;
                    bottom: 20%;
                    left: 7px;
                    border-radius: 10px;
                }
            }
            a {
                padding: 6px;
                text-transform: capitalize;
                color: #747474;
                position: relative;
                &:hover {
                    display: flex;
                    font-family: "nunito-bold";
                    color: #007fff;
                    &::after {
                        content: "";
                        width: 15px;
                        height: 2px;
                        background-color: #007fff;
                        position: absolute;
                        bottom: 20%;
                        left: 7px;
                        border-radius: 10px;
                    }
                }
            }
        }
    }
`;
