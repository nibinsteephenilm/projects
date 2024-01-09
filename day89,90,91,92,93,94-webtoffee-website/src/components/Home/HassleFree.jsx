import styled from "styled-components";
import Heading from "../Heading";
import Button from "../Button";

export default function HassleFree() {
    return (
        <Container>
            <Wrapper className="wrapper">
                <div className="left">
                    <Heading
                        lefttitle="Make your WordPress website GDPR and CCPA"
                        midtitle="compliant easy and hassle free!"
                        leftrightcolor="#EEE"
                        fontSize="32px"
                        lineheight="50px"
                    />
                    <p className="hassleContent">
                        Get a cookie consent banner set up on your website in
                        minutes!
                    </p>
                    <Button
                        text="Browse plugins"
                        width="195px"
                        padding="12px 20px"
                    />
                </div>

                <div className="right">
                    <div className="position">
                        <div className="hassleImage">
                            <img
                                src="/images/Hasslefree-Image.svg"
                                alt="Hasslefree Image"
                            />
                        </div>
                        <a href="#">Explore More</a>
                    </div>
                </div>
            </Wrapper>
        </Container>
    );
}
const Container = styled.div`
    background-color: #01112d;
    padding: 90px 0;
`;
const Wrapper = styled.div`
    position: relative;
    .left {
        width: 55%;
        .hassleContent {
            color: #adadad;
            font-size: 17px;
            margin-top: 24px;
            margin-bottom: 64px;
        }
    }
    .right {
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(10%, -32%);
        .position {

            display: flex;
            align-items: center;
            position: relative;
            .hassleImage {
                width: 900px;
            }

            a {
                position: absolute;
                transform: rotate(90deg);
                color: #eee;
                font-size: 16px;
                right: 0;
            }
        }
    }
`;
