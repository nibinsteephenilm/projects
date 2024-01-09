import styled from "styled-components";
import GreenButton from "./GreenButton";
export default function WholeSaleCard({
    imageurl,
    title,
    minititle = "Cardamom",
}) {
    return (
        <Container>
            <div className="image">
                <img src={imageurl} alt="Cardamom" />
            </div>
            <div className="details">
                <div className="item">
                    <h5>{title}</h5>
                    <p>{minititle}</p>
                </div>
                <div className="button">
                    <GreenButton text="view" />
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    
    .image {
        position: relative;
        z-index: -1;
        display: flex;
        align-items: center;
        border-radius: 4px;
        
        img {
            width: 100%;
            
        }
        &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            border-radius: 4px;
            background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.48) 0%,
                rgba(0, 0, 0, 0) 100%
            );
            z-index: 1;
        }
    }
    .details {
        display: flex;
        justify-content: space-between;
        padding: 0 32px 32px 32px;
        position: absolute;
        bottom: 0;
        width: 100%;
        @media all and (max-width: 1280px) {
            padding: 0 15px 15px 15px;

        }

        .item {
            font-family: "DMSansregular";
            text-transform: capitalize;
            h5 {
                color: #eee;
                font-size: 32px;
                margin-bottom: 4px;
                @media all and (max-width: 1280px) {
           font-size: 26px;
           margin-bottom: 0;
        }
        @media all and (max-width: 1080px) {
                        font-size: 20px;
                    }
            }
            p {
                color: #d4d4d4;
                font-size: 16px;
                @media all and (max-width: 1280px) {
            font-size: 14px;
        }
        @media all and (max-width: 1080px) {
                        font-size: 13.5px;
                    }
            }
        }
        .button {
            display: flex;
            align-items: center;
        }
    }
`;
