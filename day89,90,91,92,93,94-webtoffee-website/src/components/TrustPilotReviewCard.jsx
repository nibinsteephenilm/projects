import styled from "styled-components";
import Star from "./Home/Star";

export default function TrustPilotReviewCard({
    title,
    description,
    image,
    name,
    date,
}) {
    return (
        <Container>
            <div className="icon">
                <img src="/icons/Quote-Icon.svg" alt="Quote Icon" />
            </div>
            <p className="title">{title}</p>
            <p className="description">{description}</p>
            <div className="user">
                <div className="userDetails">
                    <div className="userImage">
                        <img src={image} alt={name} />
                    </div>
                    <div className="nameDate">
                        <p className="name">{name}</p>
                        <p className="date">{date}</p>
                    </div>
                </div>
                <div className="navyBlueStar">
                    <Star star="/icons/Navy-Blue-Star.svg" width="20px" />
                </div>
                <div className="whiteStar">
                    <Star star="/icons/White-Star.svg" width="20px" />
                </div>
            </div>
        </Container>
    );
}
const Container = styled.div`
    border-radius: 4px;
    border: 1px solid #010e25;
    background: #fcfeff;
    padding: 30px;
    position: relative;
    width: 420px;
    margin-right: 30px;
    transition: 0.25s;
    &::after {
        content: url("/images/Trust-Pilot-right-top.svg");
        position: absolute;
        top: 4%;
        right: 3%;
    }
    &:hover {
        background-color: #061632;
        border: 1px solid #ececec;
        .icon {
            border: 1px solid #ececec;
        }
        .title {
            color: #fbfbfb;
        }
        .description {
            color: #E1E1E1;
        }
        .user {
            .userDetails {
                .nameDate {
                    .name {
                        color: #EEE;
                    }
                }
            }
            .navyBlueStar {
                display: none;
            }
            .whiteStar {
                display: block;
            }
        }
    }
    .icon {
        width: 50px;
        padding: 13px;
        border-radius: 2px;
        border: 1px solid #3283ff;
        margin-bottom: 32px;
    }
    .title {
        color: #747474;
        font-size: 18px;
        font-family: "nunito-semibold";
        margin-bottom: 8px;
    }
    .description {
        color: #747474;
        font-size: 16px;
        margin-bottom: 14px;
    }
    .user {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid #d4d4d4;
        padding-top: 14px;
        .userDetails {
            display: flex;
            align-items: center;
            gap: 16px;
            .userImage {
                width: 50px;

                img {
                    width: 100%;
                    height: auto;
                    border-radius: 40px;
                }
            }
            .nameDate {
                .name {
                    color: #0a0a0a;
                    font-size: 18px;
                    font-family: "nunito-medium";
                }
                .date {
                    color: #747474;
                    font-size: 16px;
                }
            }
        }

        .navyBlueStar {
        }
        .whiteStar {
            display: none;
        }
    }
`;
