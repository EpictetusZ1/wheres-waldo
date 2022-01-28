import styled from "styled-components";

export const Main = styled.div`
  background-color: #9a1a1a;
  position: relative;
  overflow: auto;
  
  h2 {
    position: fixed;
    text-align: center;
    width: 100vw;
    color: #FFF;
    user-select: none;
  }
  
  .mainImage {
    width: 3000px;
    object-fit: cover;
    user-select: none;
    overflow: auto;
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

