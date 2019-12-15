import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { categories, categoryDetails } from "../../fakedata/products";
import { withRouter } from "react-router-dom";
import { zoomIn } from "react-animations";

const ContainerDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Photodiv = styled.div`
  animation: 5s ${keyframes`${zoomIn}`};
  background-image: url(${props => props.photoUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  width: 200px;
  height: 250px;
  &:hover {
    width: 300px;
    height: 350px;
    overflow: hidden;
    transition: transform 0.5s ease;
    transform: scale(1.5);
  }
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
  if (categoryDetails[category] === []) {
    return <div>No data here</div>;
  } else
    return (
      <ContainerDiv>
        {categoryDetails[category] &&
          categoryDetails[category].map(item => {
            return (
              <Photodiv photoUrl={item.backgroundUrl} key={item.id}></Photodiv>
            );
          })}
      </ContainerDiv>
    );
};
export default withRouter(ProductDetail);
