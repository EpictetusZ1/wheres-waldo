import styled from "styled-components";

export const Header = styled.div`
  height: 70px;
  width: 100%;
  background-color: #9a1a1a;
  display: flex;
  justify-content: space-around;
  font-family: Baskerville, sans-serif;
  
  
  .timerContainer {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 2em;
    line-height: 2em;
    text-align: center;
    color: #FFF;
    
    p {
      font-size: 0.8em;
      line-height: 0.8em;
      margin: 0 10px;
    }
  }
  
  h1 {
    margin: auto 0;
    font-weight: 500;
  }

  sup {
    color: goldenrod;
    font-size: 0.7em;
  }
`