import React, { useMemo, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Spin } from "antd";
import { PropTypes as MobxPropTypes } from "mobx-react";
import styled from "styled-components";
import Order from "./components/Order";

const StyledCOntentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  overflow: scroll;
  align-items: center;

  div {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const SpinDiv = styled.div`
  margin: 1em;
`;

const ContentComponent = ({ orders, state }) => {
  const [activeOrderId, setActiveOrderId] = useState(null);

  const setActiveOrder = useCallback(
    (id) => {
      if (id !== activeOrderId) {
        return setActiveOrderId(id);
      }

      setActiveOrderId(null);
    },
    [activeOrderId, setActiveOrderId]
  );

  const renderOrders = useMemo(() => {
    if (state === "loading") {
      return (
        <SpinDiv>
          <Spin />
        </SpinDiv>
      );
    }
    if (!orders.length) {
      return <h3>Заказы не найдены</h3>;
    }

    return orders.map((order) => {
      const { id } = order;
      return (
        <Order
          order={order}
          key={id}
          activeOrderId={activeOrderId}
          setActiveOrderId={setActiveOrder}
        />
      );
    });
  }, [orders, activeOrderId, setActiveOrder, state]);

  return <StyledCOntentWrapper>{renderOrders}</StyledCOntentWrapper>;
};

ContentComponent.propTypes = {
  orders: MobxPropTypes.observableArray,
  state: PropTypes.string,
};

export default ContentComponent;
