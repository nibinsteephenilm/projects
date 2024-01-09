import styled from "styled-components";
import "../assets/css/satoshi.css";
import GlassHeader from "../components/GlassHeader";
import SubHeading from "../components/SubHeading";
import TeamMembers from "../components/TeamMembers";
import Footer from "../components/Footer";

export default function AboutUs() {
    return (
        <Container>
            <AboutSection>
                <div className="aboutHeading">
                    <GlassHeader minititle="about" title="us" linewidth="78%" />
                </div>
                <div className="aboutContent">
                    <SubHeading
                        minititle="about"
                        title="ruppells solutions"
                        lineheight="0"
                    />
                </div>
                <p className="content">
                    Ready to Elevate Your Business to New Heights? Choose
                    Ruppells Solutions, Your Digital Partner of Excellence. Our
                    dedicated team of experts specializes in delivering
                    top-notch IT services and innovative digital marketing
                    solutions. With our strategic approach and cutting-edge
                    expertise, we are committed to unlocking the true potential
                    of your business. From creating stunning websites and
                    Branding to managing social media and driving online
                    advertising, we possess the tools and knowledge to propel
                    your brand forward. Say goodbye to mediocrity and soar to
                    success with Ruppells Solutions. Take the first step towards
                    excellence today and witness the transformation of your
                    business.
                </p>
            </AboutSection>
            <Team>
                <div className="directorsHeading">
                    <SubHeading
                        minititle="managing"
                        title="directors"
                        linewidth="65%"
                    />
                </div>
                <TeamMembers />
            </Team>
            <Footer />
        </Container>
    );
}
const Container = styled.div`
    width: 85%;
    max-width: 1325px;
    margin: 0 auto;
    margin-bottom: 56px;
    font-family: "Satoshi-Regular";

    @media all and (max-width: 1280px) {
        width: 90%;
    }
    @media all and (max-width: 640px) {
        width: 100%;
        overflow: hidden;
        padding: 0 50px;
    }
`;
const AboutSection = styled.div`
    margin-top: 112px;
    padding: 80px;
    /* border: 1px solid #fff; */
    position: relative;
    overflow: hidden;
    color: #9e9e9e;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Satoshi-Regular";
    font-size: 18px;
    font-style: normal;
    line-height: 36px;
    letter-spacing: 0.22px;
    border: 1px solid;
    border-image: linear-gradient(to right, #f8f8f80f, #2b2b2b10, #f8f8f80f);
    border-image-slice: 1;
    @media all and (max-width: 980px) {
        line-height: 30px;
        padding: 60px;
    }
    @media all and (max-width: 640px) {
        line-height: 25px;
        /* padding: 60px 30px 0 30px; */
        padding: 60px 0;
        border: none;
        overflow: visible;
        margin-top: 30px;
    }
    .aboutHeading {
        display: flex;
        justify-content: center;
        margin-bottom: 125px;
        @media all and (max-width: 1080px) {
            margin-bottom: 70px;
        }
    }

    .aboutContent {
        display: flex;
        align-items: center;
        gap: 32px;
        margin-top: 40px;
        &::after {
            content: "";
            display: block;
            height: 1px;
            flex: 1;
            background-color: #3b3a40;
            @media all and (max-width: 1080px) {
                display: none;
            }
        }
    }

    &::after {
        content: "";
        position: absolute;
        /* border-radius: 200px; */
        background: linear-gradient(180deg, #15bbef 0%, #e600eb 100%);
        filter: blur(290px);
        width: 415px;
        height: 415px;
        flex-shrink: 0;
        z-index: -1;
        top: 0;
        left: 0;
        transform: translateY(50%);
        @media all and (max-width: 640px) {
            width: 200px;
            height: 200px;
            filter: blur(150px);
            z-index: -1;
            left: 45%;
        }
    }
    .content {
        @media all and (max-width: 640px) {
            font-size: 16px;
        }
    }
`;

const Team = styled.div`
    margin-top: 112px;
    margin-bottom: 80px;
    .directorsHeading {
        display: flex;
        justify-content: center;
    }
    @media all and (max-width: 640px) {
        margin-top: 60px;
    }
    @media all and (max-width: 1280px) {
        margin-bottom: 5px;
    }
`;
