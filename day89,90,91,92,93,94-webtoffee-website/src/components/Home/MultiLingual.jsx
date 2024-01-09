import styled from "styled-components";
import Heading from "../Heading";
import BoxContent from "../BoxContent";
import Button from "../Button";
import Specifications from "../Specification";

export default function MultiLingual() {
    const MultiLingualKey = [
        "Bulgarian",
        "Czech",
        "Danish",
        "German(Deutsch)",
        "Spanish",
        "Swedish",
        "French",
        "Lcelandic",
        "Dutch",
        "Slovenian",
        "Italian",
        "Finnish",
        "Norwegian",
        "Bulgarian",
    ];
    return (
        <Container className="background">
            <Wrapper className="wrapper">
                <div className="left">
                    <div className="headingContainer">
                        <Heading
                            lefttitle="Cache plugin compatible and"
                            midtitle="multilingual support"
                        />
                    </div>
                    <BoxContent boxtext="And additional themes and plugins compatibility" />
                    <p className="firstParagraph">
                        Assured compatibility with the plugins like Official
                        Facebook Pixel, Google Analytics Dashboard Plugin for
                        WordPress by MonsterInsights, Smash Balloon, etc
                    </p>
                    <p className="lastParagraph">
                        Change the language of the banner according to the
                        language of your website. The GDPR Cookie Consent plugin
                        is made to be compatible with popular multilingual
                        websites like WPML, qTranslate, Polylang, etc.
                    </p>
                    <Button
                        text="Get plugin now"
                        width="195px"
                        padding="12px 20px"
                    />
                </div>
                <div className="right">
                    {MultiLingualKey.map((item, i) => (
                        <div className="eachSpecification" key={i}>
                            <Specifications
                                text={item}
                                fontcolor="#01112D"
                                fontSize="20px"
                                fontfamily="nunito-medium"
                                containerpadding="20px 17px"
                                containerwidth="575px"
                                containerbackground="#F2F6FC"
                            />
                        </div>
                    ))}
                </div>
            </Wrapper>
        </Container>
    );
}
const Container = styled.div`
    border-radius: 16px;
    border: 1px solid #acd8fb;
    padding: 100px 0;
    /* height: 100vh;
    overflow: scroll; */
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    .left {
        width: 45%;
        position: sticky;
        top: 200px;
        left: 0;
        height: max-content;

        .headingContainer {
            margin-bottom: 48px;
        }
        .firstParagraph {
            margin-top: 32px;
            color: #747474;
            font-size: 17px;
            margin-bottom: 32px;
        }
        .lastParagraph {
            color: #747474;
            margin-bottom: 64px;
            font-size: 17px;
        }
    }
    .right {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .eachSpecification {
            border: 1px solid #FFF;
            border-radius: 8px;
        }
    }
`;
