import styled from "styled-components";
import Poster from "./Poster";
import { Members } from "./Members";
import SubHeading from "./SubHeading";

export default function TeamMembers() {
    return (
        <Person>
            <DirectorContainer>
                {Members.map((member, i) => {
                    if (member.type === "lg") {
                        return (
                            <div className="directors" key={i}>
                                <Poster
                                    type={member.type}
                                    name={member.name}
                                    position={member.position}
                                    imgPath={member.imgPath}
                                />
                            </div>
                        );
                    }
                })}
            </DirectorContainer>
            <OurTeam>
                <div className="ourTeamImg">
                    <img
                        src="../../public/images/ourteam icon.png"
                        alt="Our team image"
                    />
                </div>
                <div className="teamHeading">
                    <SubHeading minititle="our" title="team" />
                </div>
            </OurTeam>
            <ChiefContainer>
                {Members.map((member, i) => {
                    if (member.type === "md") {
                        return (
                            <div className="chief" key={i}>
                                <Poster
                                    type={member.type}
                                    name={member.name}
                                    position={member.position}
                                    imgPath={member.imgPath}
                                />
                            </div>
                        );
                    }
                })}
            </ChiefContainer>
            <TeamContainer>
                {Members.map((member, i) => {
                    if (member.type === "sm") {
                        return (
                            <div className="team" key={i}>
                                <Poster
                                    type={member.type}
                                    name={member.name}
                                    position={member.position}
                                    imgPath={member.imgPath}
                                />
                            </div>
                        );
                    } else if (member.type === "twentyPlus") {
                        return (
                            <div className="twentyPlus" key={i}>
                                <img src={member.imgPath} alt="20+" />
                            </div>
                        );
                    }
                })}
            </TeamContainer>
        </Person>
    );
}
const Person = styled.div``;
const DirectorContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 80px;
    margin-top: 147px;
    position: relative;
    @media all and (max-width: 980px) {
        margin-top: 80px;
    }
    .directors {
        width: 40%;
        @media all and (max-width: 768px) {
            width: 60%;
            margin-bottom: 30px;
        }
        @media all and (max-width: 640px) {
            width: 90%;
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
        /* top: 0; */
        transform: translateY(50%);
        @media all and (max-width: 640px) {
            display: none;
        }
    }
`;
const OurTeam = styled.div`
    display: flex;
    margin-top: 320px;
    align-items: center;
    gap: 61px;
    margin-bottom: 76px;
    @media all and (max-width: 1280px) {
        margin-top: 250px;
        margin-bottom: 50px;
    }
    @media all and (max-width: 980px) {
        margin-top: 137px;
        margin-bottom: 30px;
        gap: 30px;
    }
    .ourTeamImg {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 13%;
        @media all and (max-width: 640px) {
            display: none;
        }
        img {
            width: 100%;
        }
    }
    .teamHeading {
        display: flex;
        width: 100%;
        gap: 32px;
        align-items: center;
        @media all and (max-width: 640px) {
            justify-content: center;
        }
        &::after {
            content: "";
            flex: 1;
            height: 1px;
            background-color: #3b3a40;
            @media all and (max-width: 640px) {
                display: none;
            }
        }
    }
`;
const ChiefContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 80px;
    flex-wrap: wrap;
    margin-bottom: 123px;
    position: relative;
    z-index: 0;
    @media all and (max-width: 1080px) {
        gap: 50px;
    }
    @media all and (max-width: 980px) {
        gap: 40px;
    }
    @media all and (max-width: 640px) {
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
            right: -50%;
            transform: translateY(50%);
        }
    }
    .chief {
        width: 28%;
        @media all and (max-width: 1080px) {
            width: 32%;
        }
        @media all and (max-width: 1280px) {
            width: 35%;
        }
        @media all and (max-width: 768px) {
            width: 50%;
        }
        @media all and (max-width: 640px) {
            width: 80%;
        }
    }
    @media all and (max-width: 1280px) {
        margin-bottom: 70px;
    }
`;
const TeamContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 80px 62px;
    column-gap: 32px;
    row-gap: 88px;
    position: relative;
    border: 1px solid;
    border-image: linear-gradient(
        to right,
        #f8f8f80f,
        #2b2b2b10,
        #2b2b2b10,
        #f8f8f80f
    );
    border-image-slice: 1;
    background: rgba(255, 255, 255, 0.01);
    @media all and (max-width: 1280px) {
        padding: 60px 20px;
        grid-template-columns: repeat(3, 1fr);
    }
    @media all and (max-width: 980px) {
        /* padding: 60px 20px; */
        grid-template-columns: repeat(2, 1fr);
    }
    @media all and (max-width: 640px) {
        border: none;
        grid-template-columns: repeat(1, 1fr);
        background: none;
        &::before {
            content: "";
            position: absolute;
            /* border-radius: 200px; */
            background: linear-gradient(180deg, #15bbef 0%, #e600eb 100%);
            filter: blur(150px);
            width: 200px;
            height: 200px;
            flex-shrink: 0;
            top: 13%;
            z-index: -1;
            left: -50%;
            /* bottom: 0; */
            transform: translateY(50%);
        }
        &::after {
            content: "";
            position: absolute;
            /* border-radius: 200px; */
            background: linear-gradient(180deg, #15bbef 0%, #e600eb 100%);
            filter: blur(150px);
            width: 200px;
            height: 200px;
            top: 35%;
            z-index: -1;
            left: 100%;
            /* bottom: 0; */
            transform: translateY(50%);
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
        /* top: 0; */
        z-index: -1;
        right: 10%;
        bottom: 0;
        transform: translateY(50%);
        @media all and (max-width: 1280px) {
            filter: blur(250px);
        }
    }
    .team {
        z-index: 1;
    }
    .twentyPlus {
        img {
            width: 100%;
        }
    }
`;
