import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { categories, categoryDetails } from "../../fakedata/products";
import { withRouter } from "react-router-dom";
import { zoomIn } from "react-animations";

const ContainerDiv = styled.div`
  padding: 9%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Photodiv = styled.div`
  animation: 2s ${keyframes`${zoomIn}`};
  background-image: url(${props => props.photoUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  width: 200px;
  height: 250px;
  &:hover {
    overflow: hidden;
    transition: transform 0.5s ease;
    transform: scale(2);
  }
`;

const OuterDiv = styled.div`
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
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
`;

const ProductDetail = props => {
  const [category, updateCategory] = useState([]);
  useEffect(() => {
    const id = props.match.params.id;
    categories.forEach(item => {
      if (item.id === parseInt(id)) {
        updateCategory(item.category);
      }
    });
  });

  return (
    <OuterDiv>
      <ContainerDiv>
        {categoryDetails[category] &&
          categoryDetails[category].map(item => {
            return (
              <Photodiv photoUrl={item.backgroundUrl} key={item.id}></Photodiv>
            );
          })}
      </ContainerDiv>
    </OuterDiv>
  );
};
export default withRouter(ProductDetail);
