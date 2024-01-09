import styled from "styled-components";
import Heading from "../Heading";
import wordpressCardKey from "../../util/WordpressCardKey";
import WordpressCard from "../WordpressCard";
export default function WordpressFeatures() {
    return (
        <Container className="background">
            <Wrapper className="wrapper">
                <div className="featuresHeading">
                    <Heading
                        lefttitle="The fastest growing WordPress GDPR"
                        midtitle="cookie consent plugin"
                    />
                </div>
                <p className="featuresContent">
                    Making your journey to compliance with GDPR and CCPA easier
                    with powerful features
                </p>
                <div className="cardContainer">
                    {wordpressCardKey.map((item, i) => (
                        <div className="cards" key={i}>
                            <WordpressCard
                                image={item.image}
                                title={item.title}
                                description={item.description}
                            />
                        </div>
                    ))}
                </div>
            </Wrapper>
        </Container>
    );
}
const Container = styled.div`
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .featuresHeading {
        width: 45%;
        text-align: center;
        margin-bottom: 12px;
    }
    .featuresContent {
        letter-spacing: 0.22px;
        font-size: 18px;
        color: #747474;
        margin-bottom: 80px;
    }
    .cardContainer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 60px 24px;
    }
`;
