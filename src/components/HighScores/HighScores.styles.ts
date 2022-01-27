import styled from "styled-components";

export const HighScores = styled.div`
  white-space: nowrap;
  display: grid;
  place-items: center;

  .headers {
    width: 70%;
    font-size: 1.5em;
    font-family: Baskerville, sans-serif;
    padding: 0;

    p {
      margin: 0;
    }

    hr {
      width: 100%;
      margin: 2px 0;
    }
  }

  .left {
    float: left;
  }

  .right {
    float: right
  }

  ul {
    height: 150px;
    margin: 5px 0;
    padding: 0;
    width: 75%;
    overflow: hidden;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background: #3a7971;
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 2em;
      background: #888;
    }

    li:nth-child(odd) {
      background: rgba(169, 168, 168, 0.3);
    }

  }

  li {
    color: #FFF;
    list-style: none;
    padding: 5px 0;

    p {
      padding: 0 10px;
      margin: 0;
    }
  }

`