import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { upDateProduct } from "../Redux/Apis";

const EditProduct = () => {
  const products = useSelector((state) => state.product.products);
  const { id } = useParams();
  const Navigate = useNavigate();
  //////////////////////////////////////////////////
  const [name, setName] = useState(null);
  const [img, setImg] = useState(null);
  const [category, setCategory] = useState(null);
  const [desc, setDesc] = useState(null);
  const [price, setPrice] = useState(null);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  useEffect(() => {
    const product = products.find((item) => item._id === id);
    setName(product.name);
    setImg(product.img);
    setCategory(product.category);
    setDesc(product.desc);
    setPrice(product.price);
    setSize(product.size);
    setColor(product.color);
  }, [id]);

  const Submit = (e) => {
    e.preventDefault();
    if (name && img && category && desc && price && size && color) {
      const newProduct = {
        name,
        img,
        category,
        desc,
        price,
        size,
        color,
      };

      upDateProduct(newProduct, id);
      Navigate("/products");
    }
  };

  return (
    <Container>
      <EditFORM onSubmit={Submit}>
        <Input
          type="text"
          placeholder="name of the product"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="url img of the product"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <Input
          type="text"
          placeholder="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Sizes"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Colors"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <Button>Submit</Button>
      </EditFORM>
      <Right>
        <Wrapped>
          <InContent>
            <Image src={img} />
          </InContent>
        </Wrapped>
      </Right>
    </Container>
  );
};
export default EditProduct;

const Container = styled.div`
  width: 85%;
  color: white;
  height: 90%;
  background: hsla(160, 17%, 7%, 0.469);
  // background: rgba(43, 53, 44, 0.502);
  display: flex;
  justify-content: center;
  align-items: center;
  // gap: 10px;
  color: white;
`;

const EditFORM = styled.form`
  margin-top: 20px;
  height: 90%;
  flex: 3.5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;
const Input = styled.input`
  margin: 5px 20px;
  padding: 10px 10px;
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
  color: #0c9605;
  background: #293029;
  // background:  #77c03b;
  font-weight: 600;
  font-size: 22px;
  // color: #c4d0c2;
  cursor: pointer;
  transition: all 0.6s;
  &:hover {
    color: #10b807;
    background: #353e35;
  }
`;

const Right = styled.div`
  flex: 1.5;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapped = styled.div`
  width: 100%;
  height: 50%;
  margin-right: 20px;
  background: rgba(43, 53, 44, 0.4);
  // border-radius: 20px;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InContent = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
