import styled from "styled-components";
import {ITargetBoxStyledProps} from "../../types/Main.types";

export const Main = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: goldenrod;
  position: relative;
  display: grid;
  place-items: center;
`

export const TryAgain = styled.div`
  position: fixed;
  top: 75px;
  background-color: red;
  border-radius: 20px;
  color: #FFF;
  margin: 5px auto;
  padding: 5px 20px;
  font-size: 1.2em;
  line-height: 1.2em;
  img {
    width: 100vw;
    height: auto;
  }
`

export const FoundBox = styled.div`
  position: absolute;
  top: ${(props: ITargetBoxStyledProps) => (props.coords.yPos) + "px"};
  left: ${(props: ITargetBoxStyledProps) => (props.coords.xPos - 50) + "px"};
  height: 100px;
  width: 100px;
  border: 8px solid #1dda1d;
  border-radius: 20px;

  h3 {
    color: #FFF;
    font-size: 1.5em;
    margin: -1.5em 0 0 0;
  }
`
