import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import { LG } from '../grid/media';
import { Route } from 'react-router';
import Homepage from '../homepage/Homepage';
import ComponentWithContext from '../shared/ComponentWithContext';
import Demo from '../../mobx-bits/Demo';

const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  min-height: calc(100vh - 16rem);
  margin-top: ${p => p.theme.headerHeight};
  padding-top: ${p => p.theme.headerHeight};
  background: ${p => p.theme.background};
  ${LG`  
    min-height: calc(100vh - 12rem);
  `}
`;

@observer
export default class MainContent extends ComponentWithContext {
  render() {
    return (
      <Container className="theme-transition">
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/demo" component={Demo}></Route>
      </Container>
    );
  }
}
