import styled from "styled-components"

export default function Star({star,width}) {
    return (
        <Container width={width}>
                <div className="starFrame"><img src={star} alt="Star" /></div>
                <div className="starFrame"><img src={star} alt="Star" /></div>
                <div className="starFrame"><img src={star} alt="Star" /></div>
                <div className="starFrame"><img src={star} alt="Star" /></div>
                <div className="starFrame"><img src={star} alt="Star" /></div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    .starFrame {
        width: ${props=> props.width ? props.width :"24px"};
    }
`