import styled from "styled-components";

export default function UnderlineButton() {
    return (
        <Container href="#">
            <p>View all reviews</p>
            <div className="arrow">
                <img src="/icons/butttonArrow.svg" alt="Right arrow" />
            </div>
        </Container>
    );
}
const Container = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    &::after {
        content: "";
        width: 13%;
        height: 1px;
        background-color: #EEE;
        position: absolute;
        bottom: -8px;
        transition: .5s;

    }
    &:hover {
        &::after{
            width: 100%;
        }
    }
    p {
        color: #fff;
        font-family: 'nunito-semibold';
        font-size: 20px;
    }
`;
