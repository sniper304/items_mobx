import React, { useEffect } from "react";
import { inject, observer, PropTypes as MobxPropTypes } from "mobx-react";
import { Layout } from "antd";
import styled from "styled-components";
import Header from "./components/Header";
import Content from "./components/Content";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 600px;
  margin: 0 auto;
`;

const App = ({ OrderStore }) => {
  const {
    data: orders,
    getRequest: getOrders,
    setFilterValue,
    state,
  } = OrderStore;

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <StyledDiv>
      <Layout>
        <Header setFilterValue={setFilterValue} />
        <Content orders={orders} state={state} />
      </Layout>
    </StyledDiv>
  );
};

App.propTypes = {
  OrderStore: MobxPropTypes.observableObject,
};

export default inject("OrderStore")(observer(App));
