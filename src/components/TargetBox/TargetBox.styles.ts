import styled from "styled-components";
import {IListStyledProps, ITargetBoxStyledProps} from "../../types/Main.types";
import arrow from "../../assets/arrow.png";

export const TargetBox = styled.div`
  position: absolute;
  top: ${ (props: ITargetBoxStyledProps) =>  (props.coords.yPos - 40) + "px"};
  left: ${ (props: ITargetBoxStyledProps) =>  (props.coords.xPos - 50) + "px"};
  display: flex;
  flex-direction: row;
  
  .reticle {
    height: 100px;
    width: 100px;
    background-image: url(${arrow});
  }

  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 100;
    }
  }
`

export const Dropdown = styled.div`
  width: 200px;
  height: auto;
  min-height: 375px;
  background: linear-gradient(to bottom, rgb(62, 81, 81), rgb(222, 203, 164));
  font-family: Baskerville, sans-serif;
  text-align: center;
  margin-left: 10px;
  border-radius: 1em;
  
  .dropDownHeader {
    font-size: 2em;
    margin: 5px 0;
    color: goldenrod;
  }

  ul {
    width: 100%;
    list-style: none;
    margin: 5px 0 0 0;
    padding: 0;
  }
`

export const LiStyled = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  color: #FFF;
  font-size: 1.5em;
  letter-spacing: 1px;
  padding: 15px 0;
  cursor: pointer;
  text-decoration: ${ (props: IListStyledProps) =>  props.found ? "line-through" : "none"};

  img {
    width: 75px;
    height: 75px;
    border-radius: 5px;
  }

  :hover {
    font-size: 1.7em;
    background-color: rgba(178, 176, 176, 0.29);
  }

  transition: all 0.2s cubic-bezier(0.35, 0.95, 0.72, 0.81);
`
