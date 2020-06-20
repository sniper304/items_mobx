import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Spin } from "antd";
import styled from "styled-components";
import { inject, observer, PropTypes as MobxPropTypes } from "mobx-react";

const OrderListMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const OrderListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  align-items: flex-end;
  div {
    &:last-child {
      margin-bottom: 1em !important;
    }
  }
`;

const OrderItem = styled.div`
  width: 80%;
  min-height: 3em;
  display: flex;
  align-items: center;
  background-color: white;
  margin: 1em 0 1em;
  border: 1px solid black;
  padding-left: 1em;
`;

const OrderItemList = (props) => {
  const { OrderItemsStore, id } = props;
  const { data, state, getOrderItems } = OrderItemsStore;

  useEffect(() => {
    getOrderItems(id);
  }, []);

  const listItems = useMemo(() => {
    switch (state) {
      case "pending":
      case "loading":
        return <Spin />;
      case "error":
        return <h2>Произошла ошибка при получении товаров</h2>;
      default:
        return (
          <OrderListWrapper>
            {data.map((el) => {
              const { id, name, price, qty, sum } = el;

              return (
                <OrderItem key={id}>
                  {name},&nbsp;{qty},&nbsp;{price},&nbsp;{sum}
                </OrderItem>
              );
            })}
          </OrderListWrapper>
        );
    }
  }, [state, data]);

  return <OrderListMainWrapper>{listItems}</OrderListMainWrapper>;
};

OrderItemList.propTypes = {
  OrderItemsStore: MobxPropTypes.observableObject,
  id: PropTypes.number,
};

export default inject("OrderItemsStore")(observer(OrderItemList));
