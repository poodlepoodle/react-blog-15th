import React, { useState } from 'react';
import styled from 'styled-components';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

const MainWrapper = styled.div`
  display: flex;

  width: 1000px;
  height: 550px;
  border-radius: 14px;
  overflow: hidden;

  background: white;
  box-shadow: 0 1rem 4rem hsl(0 0% 0% / 15%);
`;

const MainContainer = () => {
  return <MainWrapper></MainWrapper>;
};

export default MainContainer;
