import styled from "styled-components";

export const Main = styled.div`
  background-color: goldenrod;
  position: relative;
  
  h2 {
    position: fixed;
    top: 60px;
    text-align: center;
    width: 100vw;
    color: #FFF;
  }
  
  img {
    width: 100%;
    object-fit: cover;
  }
`

export const TryAgain = styled.div`
  position: fixed;
  top: 75px;
  background-color: #c40404;
  border-radius: 20px;
  color: #FFF;
  margin: 5px 35%;
  padding: 5px 20px;
  font-size: 1.2em;
  line-height: 1.2em;
  overflow: hidden;
`

