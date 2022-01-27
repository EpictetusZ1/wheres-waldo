import styled from "styled-components";

export const GameOverStyles = styled.div`
  position: absolute;
  top: 100px;
  left: 33%;
  width: 33%;
  min-height: 33%;
  height: auto;
  background-color: #399b8e;
  border-radius: 2em;
  text-align: center;
  
  > button {
    cursor: pointer;
    margin: 25px 0;
    border-radius: 5px;
    border: none;
    padding: 5px 10px;
    font-family: Verdana, sans-serif;
  }

  .gameOHeader {
    font-size: 1.8em;
    color: #FFF;
    font-weight: bold;
  }
  
  h5 {
    font-size: 1.2em;
    margin: 0;
  }
  
  .finalTime {
    font-family: Baskerville, sans-serif;
    color: #FFF;
    font-size: 3em;
    margin: 5px 0;
  }

  sup {
    font-size: 0.5em;
  }
  
  form {
    display: grid;
    place-items: center;
    border: inherit;
  }
`

export const FormEl = styled.div`
  display: inline-flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 75%;
  border-radius: 2em;
  background-color: #5cccbe;
  padding: 10px 25px;
  font-family: Verdana, sans-serif;

  input {
    border: inherit;
    border-radius: 5px;
  }

  button {
    cursor: pointer;
    border-radius: 5px;
    border: none;
    padding: 5px 10px;
  }
`
