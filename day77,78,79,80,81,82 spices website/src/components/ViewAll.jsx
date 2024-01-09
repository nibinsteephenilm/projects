import styled from "styled-components";

export default function ViewAll() {
    return (
        <Container>
            <a href="#">
                <div className="frame">
                    <p>view all</p>
                    <div className="arrowImg">
                        <img src="WholeSale-Arrow.svg" alt="Green arrow" />
                    </div>
                </div>
            </a>
        </Container>
    );
}
const Container = styled.div`
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        .frame {
            display: flex;
            align-items: center;
            position: relative;
            gap: 8px;
            &::after {
                content: "";
                width: 0;
                height: 1px;
                background-color: #47ac65;
                position: absolute;
                bottom: 0;
                transition: 0.1s;
            }
            &:hover::after {
                width: 100%;
                transition: width 0.1s ease-in-out;
            }
            p {
                color: #47ac65;
                text-transform: capitalize;
            }
            .arrowImg {
                display: flex;
                align-items: center;
                img {
                    width: 100%;
                }
            }
        }
    }
`;
