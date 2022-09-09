import React from "react";
import styled from "styled-components";
import { Link, Routes, Route } from "react-router-dom";
import Users from "./Users";
import Products from "./Products";
import Orders from "./Orders";
import AddProducts from "../Components/AddProducts";
import EditProduct from "../Components/EditProduct";
const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: #142014;
`;
const AdminPage = () => {
  return (
    <Container>
      <DashBoard>
        <Left>
          <AdminUser>
            <AdminAcount>
              <UserName>MARIWNA</UserName>
            </AdminAcount>
          </AdminUser>
          <Display>
            <Links to="/">USERS</Links>
            <Links to="/products">Products</Links>
            <Links to="/orders">Orders</Links>
          </Display>
          <Display type="add">
            <Links to="/Addproducts">Add Product</Links>
          </Display>

          <Logout>
            <Log>logout</Log>
          </Logout>
        </Left>
        <Right>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/Addproducts" element={<AddProducts />} />
            <Route path="/EditProduct/:id" element={<EditProduct />} />
          </Routes>
        </Right>
      </DashBoard>
    </Container>
  );
};
export default AdminPage;

const DashBoard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Log = styled.h2`
  color: #77c03b;
  magrin-bottom: 30px;
`;
const Left = styled.div`
  flex: 1.3;
  height: 100%;
  background: #141a18;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  // gap: 50px;
`;
const AdminUser = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AdminAcount = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const UserName = styled.h1`
  font-weight: 700;
  // font-size: 16px;
  color: white;
  border-bottom: 2px solid rgba(196, 208, 194, 0.2);
`;

const Display = styled.div`
  width: 85%;
  border-radius: ${(props) => (props.type ? 0 : 10)}px;
  height: ${(props) => (props.type ? 2 : 18)}vh;
  display: flex;
  flex-direction: column;
  border-bottom: ${(props) => (props.type ? 2 : 2)}px solid
    ${(props) => (props.type ? " rgba(196, 208, 194, 0.2)" : "green")};
  border-bottom: ${(props) => (props.none ? 0 : 2)}px solid
    ${(props) => (props.type ? " rgba(196, 208, 194, 0.2)" : "green")};
  justify-content: space-around;
  align-items: flex-start;

  background: ${(props) =>
    props.none ? "rgba(26, 30, 29, 0.5)" : "rgba(26, 30, 29, 0.9)"};
  padding: 20px 0px;
  margin-bottom: 40px;
`;

const Links = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  color: #6f8075;
  transition: all 1s;
  border-left: 3px solid rgba(26, 30, 29, 0.5);
  padding-left: 20px;

  &:hover {
    color: #c4d0c2;
    border-left: 3px solid #c4d0c2;
    background-image: linear-gradient(
      to right,
      rgba(196, 208, 194, 0.1),
      rgba(26, 30, 29, 0.5),
      rgba(26, 30, 29, 0.5)
    );
  }
`;
const Logout = styled.div`
  height: 55vh;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Right = styled.div`
  flex: 8;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
