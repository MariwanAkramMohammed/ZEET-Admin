import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { AddProduct } from "../Redux/Apis";

const AddProducts = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const Admin = useSelector((state) => state.Admin.currentAdmin);
  const HandelSubmit = (e) => {
    e.preventDefault();
    if (name && img && category && desc && price && size && color) {
      const product = {
        name,
        img,
        category: category.split(" "),
        desc,
        price,
        size: size.split(" "),
        color: color.split(" "),
      };
      AddProduct(dispatch, product, Admin);
      setName("");
      setImg("");
      setCategory("");
      setDesc("");
      setPrice("");
      setSize("");
      setColor("");
    }
  };

  return (
    <Container>
      <Left>
        <Lable>
          <Title>Add Your Products</Title>
        </Lable>
        <ProductInputs onSubmit={HandelSubmit}>
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="name of your product"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            name="img"
            value={img}
            placeholder="image url or file"
            required
            onChange={(e) => setImg(e.target.value)}
          />
          <Input
            type="text"
            name="category"
            value={category}
            placeholder="Category"
            required
            onChange={(e) => setCategory(e.target.value)}
          />
          <Input
            type="text"
            name="desc"
            value={desc}
            placeholder="Descriprion "
            required
            onChange={(e) => setDesc(e.target.value)}
          />
          <Input
            type="Number"
            name="price"
            value={price}
            placeholder="Price of the product "
            required
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            type="text"
            name="size"
            value={size}
            placeholder="Size of the product "
            required
            onChange={(e) => setSize(e.target.value)}
          />
          <Input
            type="text"
            name="color"
            value={color}
            placeholder="Color of the product "
            required
            onChange={(e) => setColor(e.target.value)}
          />
          <Button>Submit</Button>
        </ProductInputs>
      </Left>
    </Container>
  );
};
export default AddProducts;

const Container = styled.div`
  width: 85%;
  height: 90%;
  background: hsla(160, 17%, 7%, 0.469);
  // background: rgba(43, 53, 44, 0.502);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
`;
const Left = styled.div`
  width: 45vw;
  height: 90%;
  // background: red;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  // overflow: auto;
  // text-align: justify;
`;
const Lable = styled.div`
  height: 6%;
  margin: 0;
  color: #6f8075;
  font-weight: 450;
`;
const Title = styled.h1`
  margin: 0;
  // font-weight: 450;
  color: rgba(173, 186, 171, 0.848);
`;
const ProductInputs = styled.form`
  margin-top: 20px;
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;
const Input = styled.input`
  margin: 10px 20px;
  padding: 15px 10px;
  font-weight: 650;
  font-size: 30;

  border: none;
  width: 80%;
  background: rgba(43, 53, 44, 0.502);
  color: rgba(173, 186, 171, 0.848);
  border-bottom: 2px solid rgba(27, 84, 27, 0.803);
`;
const Button = styled.button`
  margin-top: 25px;
  margin-left: 20%;
  padding: 10px 10px;
  width: 50%;
  // height: 50%;
  border: none;
  background: #0c9605;
  // background:  #77c03b;
  font-weight: 600;
  font-size: 22px;
  color: #c4d0c2;
  cursor: pointer;
  transition: all 0.6s;
  &:hover {
    background: #10b807;
  }
`;
