import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";

function Home({toggle}) {
  return (
    <>
      <Container>
        <div>
        <img src="/images/dices.png" alt="Dice-Game" />
        </div>
        <div className="content">
          <h1>Dice Game</h1>
          <Button onClick={toggle}>Play Now</Button>
          {/* <Button>Play Now</Button> */}
        </div>
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  .content {
    h1 {
        font-size: 96px;
        white-space: nowrap;
    }
  }
`;

// const Button = styled.button`
//   padding: 10px 18px;
//   background: #000000;
//   border-radius: 5px;
//   color: white;
//   min-width: 220px;
//   border: none;
//   font-size: 16px;
//   border: 1px transparent;
//   transition: 0.3s background ease-in;
//   cursor: pointer;

//   &:hover {
//     background-color: white;
//     border: 1px solid black;
//     color: black;
//     transition: 0.3s background ease-in;
//   }
// `;

