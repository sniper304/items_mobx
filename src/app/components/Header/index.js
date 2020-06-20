import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Layout, Input } from "antd";
import styled from "styled-components";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  background-color: white;
`;

const StyledDivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80vh;

  p {
    margin: 0;
  }
`;

const SearchDivWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderComponent = ({ setFilterValue }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setFilterValue(inputValue);
  }, [inputValue]);

  const changeInputValue = (event) => {
    const { target } = event;
    const { value } = target;

    setInputValue(value);
  };

  return (
    <StyledHeader>
      <StyledDivWrapper>
        <p>ЗАКАЗЫ</p>
        <SearchDivWrapper>
          <p>Поиск:&nbsp;</p>
          <Input value={inputValue} onChange={changeInputValue} />
        </SearchDivWrapper>
      </StyledDivWrapper>
    </StyledHeader>
  );
};

HeaderComponent.propTypes = {
  setFilterValue: PropTypes.func,
};

export default HeaderComponent;
