import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import styled from "styled-components";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import OrderItemList from "./OrderItemList";

const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
`;

const StyledButton = styled(Button)`
  display: flex;
  min-height: 3em;
  align-items: center;
`;

const StyledIconWrapper = styled.div`
  margin: 0 1em;
`;

const StyledDescriptionWrapper = styled.div`
  max-height: ${(props) => (props.open ? "100%" : "0")};
  overflow: auto;
  transition: all 0.3s;
`;

const Order = ({ order, activeOrderId, setActiveOrderId }) => {
  const [isOrderInfoBlockOpen, setOrderInfoBlockOpen] = useState(false);
  const { description, docNum, docDate, id } = order;

  useEffect(() => {
    if (!activeOrderId || activeOrderId !== id) {
      setOrderInfoBlockOpen(false);
    } else {
      setOrderInfoBlockOpen(true);
    }
  }, [id, activeOrderId, isOrderInfoBlockOpen]);

  const title = `${docDate}, ${docNum}, ${description}`;

  const hideShowDescriptionBlock = () => {
    setActiveOrderId(id);
  };

  const icon = (
    <StyledIconWrapper>
      {isOrderInfoBlockOpen ? <DownOutlined /> : <UpOutlined />}
    </StyledIconWrapper>
  );

  const orderInfo = useMemo(() => {
    if (!isOrderInfoBlockOpen) {
      return null;
    }
    return <OrderItemList id={id} />;
  }, [isOrderInfoBlockOpen, id]);

  return (
    <OrderWrapper>
      <StyledButton
        onClick={hideShowDescriptionBlock}
        type="primary"
        icon={icon}
      >
        {title}
      </StyledButton>
      <StyledDescriptionWrapper open={isOrderInfoBlockOpen}>
        {orderInfo}
      </StyledDescriptionWrapper>
    </OrderWrapper>
  );
};

Order.propTypes = {
  order: PropTypes.object,
  activeOrderId: PropTypes.number,
  setActiveOrderId: PropTypes.func,
};

export default Order;
