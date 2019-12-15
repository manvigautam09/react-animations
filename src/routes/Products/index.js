import React, { useState } from "react";
import { categories } from "../../fakedata/products";
import styled, { keyframes } from "styled-components";
import { flipInX, hinge } from "react-animations";
import { withRouter } from "react-router-dom";

const Containerdiv = styled.div`
  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
`;
const Productdiv = styled.div`
  width: 300px;
  height: 200px;
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const flipInXAnimation = keyframes`${flipInX}`;
const hingeAnimation = keyframes`${hinge}`;

const Photodiv = styled.div`
  width: inherit;
  height: inherit;
  background-image: url(${props => props.photoUrl || " "});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  animation: 2s
    ${props =>
      props.animationApplied === "flip" ? flipInXAnimation : hingeAnimation}
    infinite;
  &:hover {
    cursor: pointer;
  }
`;

const TextDiv = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  align-self: center;
`;

function changeRoute(id, history) {
  return new Promise(resolve => {
    setTimeout(() => {
      history.push(`/products/${id}`);
      resolve();
    }, 2000);
  });
}

async function changeAnimation(id, history) {
  await changeRoute(id, history);
}

const Products = props => {
  const [animation, updateAnimation] = useState("flip");

  return (
    <Containerdiv>
      {categories.map(item => {
        return (
          <Productdiv key={item.category}>
            <Photodiv
              photoUrl={item.backgroundUrl}
              animationApplied={animation}
              onClick={() => {
                updateAnimation("hinge");
                changeAnimation(item.id, props.history);
              }}
            />
            <TextDiv>{item.category}</TextDiv>
          </Productdiv>
        );
      })}
    </Containerdiv>
  );
};
export default withRouter(Products);
