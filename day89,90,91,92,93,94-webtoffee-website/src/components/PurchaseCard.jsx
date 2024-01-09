import styled from "styled-components";
import Button from "./Button";
export default function PurchaseCard({ count, cost, recommended }) {
    return (
        <Container recommended={recommended}>
            <p className="sitecount">
                {count} <span>Recommended</span>
            </p>
            <p className="cost">
                ${cost}
                <span> per year</span>
            </p>
            <ButtonContainer>
                <Button
                    text="Add to cart"
                    arrow="flex"
                    backgroundcolor="none"
                    width="100%"
                />
            </ButtonContainer>
        </Container>
    );
}
const ButtonContainer = styled.div`
    
`
const Container = styled.div`
    border-radius: 8px;
    border: 1px solid rgba(116, 116, 116, 0.4);
    background: #01112d;
    padding: 36px;
    flex: 1;
    cursor: pointer;
    transition: .25s;
    &:hover {
        background-color: #fff;
        border: 1px solid #FFF;
        transform: scale(1.05);
        .sitecount {
            color: #000;
        }
        .cost {
            color: #000;
            span {
                color: #000;
            }
        }
        ${ButtonContainer}{
            background-color: #007FFF;
            color: blue;
        }
    }
    .sitecount {
        color: #eee;
        font-size: 25px;
        font-family: "nunito-medium";
        letter-spacing: 0.3px;
        margin-bottom: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        span {
            display: ${(props) =>
                props.recommended ? props.recommended : "none"};
            font-size: 14px;
            color: #007fff;
            padding: 10px 18px;
            border-radius: 4px;
            border: 1px solid var(--Prm, #007fff);
        }
    }
    .cost {
        font-size: 40px;
        color: #eee;
        letter-spacing: 0.48px;
        font-family: "nunito-bold";
        padding-bottom: 24px;
        border-bottom: 0.5px solid #747474;
        margin-bottom: 28px;
        span {
            color: #eee;
            font-size: 18px;
            font-family: "nunito-medium";
        }
    }
`;
