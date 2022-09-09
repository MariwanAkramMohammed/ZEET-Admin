import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import ProductItem from "../Components/ProductItem";
import { AddingSucceed } from "../Redux/ProductSlice";
const URL = process.env.REACT_APP_API_URL;
const Products = () => {
  let dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`${URL}/product`);
      const allProducts = await response.json();
      setProducts(allProducts);
      dispatch(AddingSucceed(allProducts));
    };
    getProducts();
  }, []);

  return (
    <Container>
      <Left>
        <ProductsCon>
          {products.length &&
            products.map((product, index) => (
              <ProductItem key={index} product={product} />
            ))}
        </ProductsCon>
      </Left>
      <Right>
        <Wrapped>
          <Top>
            <ProductTitle>PRODUCTS</ProductTitle>
          </Top>
          <Center>
            <ProductCount>Number Of Products</ProductCount>
            <Counte>{products.length}</Counte>
          </Center>
        </Wrapped>
      </Right>
    </Container>
  );
};
export default Products;
const Container = styled.div`
  width: 85%;
  color: white;
  height: 90%;
  background: hsla(160, 17%, 7%, 0.469);
  // background: rgba(43, 53, 44, 0.502);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  & ::-webkit-scrollbar {
    width: 6px;
  }

  & ::-webkit-scrollbar-track {
    background: rgba(43, 53, 44, 0.502);
  }

  & ::-webkit-scrollbar-thumb {
    background: green;
  }

  & ::-webkit-scrollbar-thumb:hover {
    background: green;
  }
`;

const Left = styled.div`
  flex: 3;
  height: 100%;
  // background: red;
  display: flex;

  justify-content: center;
  align-items: center;
  // flex-wrap: wrap;
  overflow: auto;
  text-align: justify;
`;

const ProductsCon = styled.div`
  margin: 17px;
  width: 100%;
  height: 100%;

  overflow: hidden;
  box-shadow: 0px 5px 11px 7px #111b11;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  // border-right: 3px solid #1a381a;
`;

///////

const Right = styled.div`
  flex: 1.2;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Wrapped = styled.div`
  width: 90%;
  height: 50%;
  background: rgba(43, 53, 44, 0.4);
  // border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Top = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid rgba(173, 186, 171, 0.1);
`;
const ProductTitle = styled.h1`
  margin: 0;
  letter-spacing: 2px;
  color: #c4d0c2;
`;
const Center = styled.div`
  margin: 20px 0px;
  flex: 2.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProductCount = styled.h3`
  color: rgba(173, 186, 171, 0.3);
`;
const Counte = styled.h1`
  font-size: 70px;
  color: #77c03b;
  margin: 0;
`;
