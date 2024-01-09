import styled from "styled-components";
import ServiceScroll from "./ServiceScroll";
import FirstServiceScrollKey from "../util/ServiceScrollkey";

export default function Services() {
    const infiniteScrollItems = [...FirstServiceScrollKey, ...FirstServiceScrollKey, ...FirstServiceScrollKey];

    return (
        <Container>
            <div className="firstScroll" >
                {infiniteScrollItems.map((item, i) => (
                    <div className="serviceCard" key={i}>
                        <ServiceScroll icon={item.icon} name={item.name} />
                    </div>
                ))}
            </div>
            <div className="secondScroll">
                {infiniteScrollItems.reverse().map((item, i) => (
                    <div className="serviceCard" key={i}>
                        <ServiceScroll icon={item.icon} name={item.name} />
                    </div>
                ))}
            </div>
        </Container>
    );
}
const Container = styled.div`
        cursor: default;
        /* overflow-x: scroll; */
        overflow-x: hidden;
    .firstScroll {
        display: flex;
        margin-bottom: 25px;         
        animation: scrollAnimation 35000ms linear infinite;
    }

    .secondScroll {
        display: flex;
        animation: scrollAnimation2 35000ms linear infinite;
    }
    
    @keyframes scrollAnimation {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-10000px); /* Adjust the percentage based on your content */
        }
    }
    @keyframes scrollAnimation2 {
        0% {
            transform: translateX(-100px);
        }
        100% {
            transform: translateX(-10000px); /* Adjust the percentage based on your content */
        }
    }
`;
