import styled from "styled-components";
import MainRouter from "./routing/router/MainRouter";
import Home from "./screens/Home";
function App() {
    
    return (
       <MainRouter/>
    );
}

export default App;

const Container = styled.div`
    background-color: aqua;
    margin: 0 auto;
    width: 90%;
`;
