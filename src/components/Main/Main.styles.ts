import styled from "styled-components";
import {ITargetBoxStyledProps} from "../../types/Main.types";

export const Main = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: goldenrod;
  position: relative;
  
  img {
    width: 1000px;
    height: auto;
  }

`

export const FoundBox = styled.div`
  position: absolute;
  top: ${(props: ITargetBoxStyledProps) => (props.coords.yPos - 50) + "px"};
  left: ${(props: ITargetBoxStyledProps) => (props.coords.xPos - 50) + "px"};
  height: 100px;
  width: 100px;
  border: 8px solid #1dda1d;
  border-radius: 20px;

  h3 {
    color: #000;
    font-size: 1.5em;
    margin: -1.5em 0 0 0;
  }
`
