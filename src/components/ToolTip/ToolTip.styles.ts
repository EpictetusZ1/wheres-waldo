import styled from "styled-components";
import {IToolTipStyledProps} from "../../types/Main.types";

export const ToolTip = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  bottom: 20px;
  right: 20px;
  background-color: goldenrod;
  padding: 5px;
  text-align: center;
  font-family: Baskerville, sans-serif;
  border-radius: 50%;
  display: grid;
  place-items: center;
  
  p {
    margin: 2px 0;
    font-size: 1.2em;
    font-weight: bold;
    line-height: 1.2em;
  }

`

export const Instructions = styled.div`
  position: absolute;
  height: 150px;
  width: 300px;
  background: rgba(0, 0, 0, 0.87);
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  top: calc(-350%);
  left: -300px;

  .rulesHeader {
    font-size: 1.2em;
  }
  
  hr {
    width: 85%;
  }

  ul {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 2px 0;
    text-align: center;
    padding: 0;

  }

  li {
    padding: 2px 0;
    list-style: none;
  }

  p {
    font-size: 1em;
    font-weight: normal;
  }

  visibility: ${(props: IToolTipStyledProps) => props.visible ? "visible" : "hidden"};

`