import styled from "styled-components";
export default function Poster({
    type = "sm",
    name = "Libin V",
    position = "Mobile App Developer",
    imgPath = "../../public/images/team/Libin.png",
}) {
    return (
        <Container>
            <div className={type}>
                <div className="imageFrame">
                    <img src={imgPath} alt={name} />
                </div>
                <div className="info">
                    <div className="data">
                        <span className="name">{name}</span>
                        <span className="position">{position}</span>
                    </div>
                    <div className="img">
                        <div className="linkedin">
                            <img
                                src="../../public/images/linkedin icon.png"
                                alt="Linkedin"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    .lg {
        position: relative;
        .imageFrame {
            img {
                width: 100%;
            }
        }
        .info {
            border-top: 4px solid #fff;
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(25.5px);
            padding: 30px;
            position: absolute;
            bottom: 0;
            width: 100%;
            box-sizing: border-box;
            transform: translateY(75%);
            transition: 1.5s;
            @media all and (max-width: 1080px) {
                padding: 25px;
            }
            @media all and (max-width: 980px) {
                padding: 22px;
            }
            .data {
                .name {
                    font-size: 36px;
                    margin-bottom: 10px;
                    @media all and (max-width: 1080px) {
                        font-size: 25px;
                    }
                    @media all and (max-width: 980px) {
                        font-size: 21px;
                        margin-bottom: 8px;
                    }
                }
                .position {
                    font-size: 22px;
                    @media all and (max-width: 1080px) {
                        font-size: 17px;
                    }
                    @media all and (max-width: 980px) {
                        font-size: 15px;
                    }
                }
            }
        }
        .linkedin {
            width: 44px;
            @media all and (max-width: 1080px) {
                width: 28px;
            }
        }
        &:hover {
            .info {
                transform: translateY(98%);
            }
        }
    }

    .md {
        position: relative;
        @media all and (max-width: 1280px) {
            padding: 14px;
        }
        &:hover {
            .imageFrame {
                transition: transform 0.5s ease;
                transform: scale(1.03);
                transform-origin: center top;
            }
            .info {
                width: 104%;
                transform: translate(-7%, 25%);
                @media all and (max-width: 640px) {
                    transform: translate(-7%, 3%);
                }
            }
        }

        .imageFrame {
            transition: 0.5s ease;
            img {
                display: block;
                width: 100%;
            }
        }
        .info {
            background: rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(50px);
            padding: 16px;
            position: absolute;
            width: 90%;
            bottom: 0;
            left: 5%;
            box-sizing: border-box;
            transform: translateY(22%);
            transition: 0.5s;
            @media all and (max-width: 640px) {
                width: 100%;
                transform: translateX(-5.5%);
            }
            .data {
                .name {
                    font-size: 26px;
                    margin-bottom: 10px;
                    @media all and (max-width: 1280px) {
                        font-size: 24px;
                    }
                    @media all and (max-width: 1080px) {
                        font-size: 20px;
                    }
                    @media all and (max-width: 980px) {
                        font-size: 18px;
                        margin-bottom: 8px;
                    }
                }
                .position {
                    font-size: 18px;
                    color: #c09aff;
                    @media all and (max-width: 1280px) {
                        font-size: 16px;
                    }
                    @media all and (max-width: 1280px) {
                        font-size: 14px;
                    }
                }
            }
            .linkedin {
            }
        }
        .img {
            display: flex;
            align-items: end !important;
            .linkedin {
                width: 26px;
            }
        }
    }

    .sm {
        position: relative;
        /* width: 40%; */
        &:hover {
            .imageFrame {
                transition: transform 0.5s ease;
                transform: scale(1.05);
                transform-origin: center top;
            }
            .info {
                width: 107%;
                transform: translate(-3%, 50%);
            }
        }
        .imageFrame {
            img {
                width: 100%;
            }
        }
        .info {
            background: rgba(10, 10, 10, 0.1);
            backdrop-filter: blur(30px);
            padding: 16px;
            position: absolute;
            width: 100%;
            box-sizing: border-box;
            bottom: 0;
            transform: translateY(50%);
            transition: 0.5s;
            .data {
                .name {
                    font-size: 16px;
                    margin-bottom: 8px;
                }
                .position {
                    font-size: 14px;
                }
            }
        }
        .linkedin {
            width: 28px;
        }
    }

    .imageFrame {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .info {
        display: flex;
        justify-content: space-between;
        .img {
            display: flex;
            align-items: center;
            .linkedin {
                display: flex;
                align-items: center;
                img {
                    width: 100%;
                }
            }
        }
        .data {
            display: flex;
            flex-direction: column;
            text-transform: capitalize;
            color: #fff;
        }
    }
`;
