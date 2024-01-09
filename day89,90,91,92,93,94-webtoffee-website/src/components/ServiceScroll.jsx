import styled from "styled-components"

export default function ServiceScroll({icon,name}) {
    return (
        <Container>
            <div className="icon">
                <img src={icon} alt={name} />
            </div>
            <p>{name}</p>
        </Container>
    )
}
const Container =styled.div`
    display: flex;
    gap: 10px;
    padding: 12px 0;
    align-items: center;
    border-radius: 8px;
    border: 2.29px solid #112C5A;
    width: 230px;
    justify-content: center;
    height: 100%;
    margin-right: 15px;
    .icon {
        display: flex;
        width: 30px;
    }
    p {
        color: #A7AEBC;
        font-size: 17px;
        font-family: 'nunito-medium';
    }
    
`