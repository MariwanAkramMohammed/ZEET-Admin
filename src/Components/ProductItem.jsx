import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeleteProduct } from "../Redux/Apis";
const ProductItem = ({ product }) => {
  const Nav = useNavigate();

  const DeleteClick = (id) => {
    DeleteProduct(id);
  };

  return (
    <Container>
      <ImageCon>
        <Image src={product.img} />
      </ImageCon>
      <Desc>
        <Title>{product.name}</Title>
        <Con>
          <Button onClick={() => Nav(`/EditProduct/${product._id}`)}>
            Edit
          </Button>
          <DeleteIcon
            style={{ color: " #fe480c", cursor: "pointer" }}
            onClick={() => DeleteClick(product._id)}
          />
        </Con>
      </Desc>
    </Container>
  );
};
export default ProductItem;
const Container = styled.div`
  width: 10.4vw;
  height: 25vh;
  background: rgba(43, 53, 44, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 5px;
  margin: 10px 5px;
`;
const ImageCon = styled.div`
  width: 100%;
  flex: 1.3;
  background: gray;
  overflow: hidden;
`;
const Image = styled.img`
  object-fit: cover;
  width: 105%;
  height: 105%;
`;
const Desc = styled.div`
  // background: red;
  width: 100%;
  flex: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const Title = styled.h3`
  margin: 0;
  flex: 1;
  display: flex;

  justify-content: center;
  align-items: center;
  color: rgb(173, 186, 171);
`;

const Con = styled.div`
  flex: 0.5;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Button = styled.button`
  cursor: pointer;

  color: #bdd8d8;
  border: none;
  background: #3c7d26;
  // width: 100%;
  width: 70%;
  font-weight: bold;
  height: 86%;
  transition: all 1s;
  &:hover {
    color: white;
    background: #63c344;
  }
`;
