import styled from "styled-components";
import {IToolTipStyledProps} from "../../types/Main.types";

export const ToolTip = styled.div`
  position: fixed;
  width: 25px;
  height: 25px;
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
    margin: 0;
    font-size: 1.2em;
    font-weight: bold;
    line-height: 1.2em;
  }

`

export const Instructions = styled.div`
  position: absolute;
  width: 200px;
  background: rgba(0, 0, 0, 0.82);
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  top: calc(-350%);
  left: -250px;

  .rulesHeader {
    text-decoration: underline;
    font-size: 1.2em;
  }
  
  ul {
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