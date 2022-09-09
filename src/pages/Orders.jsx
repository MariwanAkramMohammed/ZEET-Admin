import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
const URL=process.env.REACT_APP_API_URL

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await fetch(`${URL}/order`);
        const ordersData = await res.json();
        setOrders(ordersData);
      } catch (er) {
        console.log(er);
      }
    };
    getOrders();
  }, []);
  console.log(orders, "         <          orders     ");
  return (
    <Container>
      <Left>
        {orders.map((order, index) => (
          <EachOrder key={index}>
            {order.products.map((item) => (
              <OrderBody key={item}>
                <Imgaecon>
                  <Imgae src={item.img} />
                </Imgaecon>

                <Content>
                  <Lable>name</Lable>
                  <Title>{item.name}</Title>
                </Content>

                <Content>
                  <Lable>price</Lable>
                  <Title>{item.price}</Title>
                </Content>
                <Content>
                  <Lable>quantity</Lable>
                  <Title>{item.quantity}</Title>
                </Content>
                <Content>
                  <Lable>total price</Lable>
                  <Title>{item.Totalprice} </Title>
                </Content>
              </OrderBody>
            ))}
            <BottomOrder>
              <Title type="order">{order.userEmail}</Title>
              <Title type="order">{order.userId}</Title>
              <Title type="order">TOTAL: ${order.allPrice}</Title>
            </BottomOrder>
          </EachOrder>
        ))}
      </Left>
      <Right>
        <Wrapped>
          <Top>
            <OrderTitle>ORDERS</OrderTitle>
          </Top>
          <Center>
            <OrderCount>Number Of Orders Now</OrderCount>
            <Counte>{orders.length}</Counte>
          </Center>
          <Bottom>
            <TrendingUpIcon style={{ fontSize: 50, color: "green" }} />
          </Bottom>
          <Under>Compare To Last Month</Under>
        </Wrapped>
      </Right>
    </Container>
  );
};
export default Orders;

const Container = styled.div`
  width: 85%;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // overflow-Y: hidden;
  padding-top: 50px;
  overflow: auto;
  text-align: justify;
`;
const EachOrder = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const OrderBody = styled.div`
  margin: 17px;
  width: 85%;
  flex: 1;
  // min-height: 10vh;
  background: rgba(43, 53, 44, 0.4);
  overflow: hidden;
  box-shadow: 0px 5px 11px 7px #111b11;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-right: 3px solid #1a381a;
`;
const BottomOrder = styled.div`
  flex: 0.7;
  width: 100%;
  display: flex;

  justify-content: space-around;
  align-items: center;
  background: #293029;
  color: white;
`;
const Imgaecon = styled.div`
  width: 10vh;
  height: 10vh;
`;
const Imgae = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  flex: 1;
  height: 8vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const Lable = styled.p`
  font-size: 15px;
  margin: 0;
  color: #6f8075;
  font-weight: 350;
`;
const Title = styled.p`
  margin: 0;
  font-weight: ${(props) => (props.type ? 700 : 350)};
  color: ${(props) =>
    props.type ? "rgba(204, 215, 221,0.8);" : "rgba(173, 186, 171, 0.848)"};
`;

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
const OrderTitle = styled.h1`
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
const OrderCount = styled.h3`
  color: rgba(173, 186, 171, 0.3);
`;
const Counte = styled.h1`
  font-size: 70px;
  color: #77c03b;
  margin: 0;
`;

const Bottom = styled.div`
  flex: 0.8;
  background: #293029;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Under = styled.div`
  flex: 0.6;
  // background: red;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(173, 186, 171, 0.3);
  font-size: 16px;
  font-weight: 500;
`;
