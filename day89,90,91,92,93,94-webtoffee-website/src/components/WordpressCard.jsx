import styled from "styled-components";
import Star from "./Home/Star";

export default function WordpressCard({ image, title, description,other=false}) {
    return (
        <Container other={other}>
            <div className="iconFrame">
                <div className="icon">
                    <img src={image} alt={title} />
                </div>
            </div>
            <div className="ratingAndPrice">
                <div className="star">
                    <Star star="/icons/Blue-star.svg" />
                </div>
                <p className="price">$69 - $199</p>
            </div>
            <p className="title">{title}</p>
            <p className="description">{description}</p>
        </Container>
    );
}
const Container = styled.div`
    border-radius: 8px;
    border: 1px solid #ececec;
    background: #fff;
    position: relative;
    padding: ${props => props.other ? "32px" : "90px"} 30px 40px 30px;
    height: 100%;
    transition: all 1s ease-in-out;
    position: relative;
    &::after {
        content: url("/icons/Features-Card-Corner.svg");
        position: absolute;
        right: 2%;
        bottom: 2%;
    }
    .iconFrame {
        transition: all 1s ease-in-out;
        padding: 20px;
        border-radius: 8px;
        background: #e6edfa;
        position: absolute;
        top: 0;
        transform: translateY(-40%);
        .icon {
            width: 40px;
            img {
                width: 100%;
            }
        }
    }
    .ratingAndPrice {
        display: ${props => props.other ? "flex" : "none"};
        align-items: center;
        gap: 24px;
        justify-content: end;
        margin-bottom: 34px;
        .price {
            border-radius: 4px;
            background-color: #e6edfa;
            padding: 12px 24px;
            font-family: 'nunito-medium';
            font-size: 18px;
            transition: .25s;
        }
    }
    .title {
        /* transition: all 1s ease-in-out; */
        font-size: 26px;
        font-family: "nunito-semibold";
        margin-bottom: 16px;
        cursor: default;
    }
    .description {
        /* transition: all 1s ease-in-out; */
        color: #747474;
        line-height: 24px;
        font-size: 15px;
        cursor: default;
    }
    &:hover {
        background: linear-gradient(103deg, #01112d 0.55%, #071e45 100.85%);
        .iconFrame {
            border: 1px solid #eee;
            background: linear-gradient(103deg, #01112d 0.55%, #071e45 100.85%);
            img {
                filter: ${props => props.other ? "none" : "brightness(0) invert(1)"};
            }
        }
        .ratingAndPrice {
            .price {
                background-color:#b3d9f6;
            }
        }
        .title {
            color: #eee;
        }
        .description {
            color: #d9d9d9;
        }
    }
`;
