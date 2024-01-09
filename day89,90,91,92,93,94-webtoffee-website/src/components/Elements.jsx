import styled from "styled-components";

export default function Elements({ icon, alternate, title, miniTitle }) {
    return (
        <Container>
            <div className="elementLeft">
                <div className="iconFrame">
                    <img src={icon} alt={alternate} />
                </div>
            </div>
            <div className="elementRight">
                <p className="title">{title}</p>
                <p className="miniTitle">{miniTitle}</p>
            </div>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    gap: 16px;
    .elementLeft {
        display: flex;
        align-items: center;
        border-radius: 8px;
        border: 1px solid #007fff;
        padding: 10px;
        .iconFrame {
            width: 20px;
        }
    }
    .elementRight {
        font-size: 16px;
        .title {
            color: #747474;
            font-family: 'nunito-bold';
        }
        .miniTitle {
            color: #747474;
            font-family: 'nunito-medium';
        }
    }
`;
