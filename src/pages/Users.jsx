import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
const URL = process.env.REACT_APP_API_URL;
const Users = () => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(`${URL}/user/`, {
        method: "POST",
      });
      const Users = await res.json();
      setItem(Users);
    };
    getUsers();
  }, []);
  console.log(items);
  return (
    <Container>
      <Left>
        {items.length &&
          items
            .filter((item, index) => index < 4)
            .map((item, indexs) => (
              <UsersAcount key={indexs}>
                <Imgae src="https://res.cloudinary.com/teepublic/image/private/s--8HDTyrHy--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_484849,e_outline:48/co_484849,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_313,q_90,w_313/v1611114952/production/designs/18672438_0" />
                <Content>
                  <Lable>Name</Lable>
                  <Title>{item.email.split("@")[0]}</Title>
                </Content>
                <Content>
                  <Lable>email</Lable>
                  <Title>{item.email}</Title>
                </Content>
                <Content>
                  <Lable>Id</Lable>
                  <Title>{item._id} </Title>
                </Content>
              </UsersAcount>
            ))}
      </Left>
      <Right>
        <Wrapped>
          <Top>
            <UserTitle>USERS</UserTitle>
          </Top>
          <Center>
            <UserCount>Number Of Users Now</UserCount>
            <Counte>{items.length}</Counte>
          </Center>
          <Bottom>
            <TrendingDownIcon style={{ fontSize: 50, color: "red" }} />
          </Bottom>
          <Under>Compare To Last Month</Under>
        </Wrapped>
      </Right>
    </Container>
  );
};
export default Users;
const Container = styled.div`
  width: 85%;
  height: 90%;
  background: hsla(160, 17%, 7%, 0.469);
  // background: rgba(43, 53, 44, 0.502);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
const Left = styled.div`
  flex: 3;
  height: 90%;
  // background: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  text-align: justify;
`;

const UsersAcount = styled.div`
  margin: 17px;
  width: 85%;
  height: 10vh;
  background: rgba(43, 53, 44, 0.4);
  display: flex;
  overflow: hidden;
  box-shadow: 0px 5px 11px 7px #111b11;
  justify-content: center;
  align-items: center;
  border-right: 3px solid #1a381a;
`;
const Imgae = styled.img`
  width: 10vh;
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
  margin: 0;
  color: #6f8075;
  font-weight: 450;
`;
const Title = styled.p`
  margin: 0;
  font-weight: 450;
  color: rgba(173, 186, 171, 0.848);
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
const UserTitle = styled.h1`
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
const UserCount = styled.h3`
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
