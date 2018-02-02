import React, { Fragment } from 'react';
import { Container } from '../../utils/styledComponents';
import { Header } from './Home_styles';

export default () => (
  <Fragment>
    <Header>Simple React Starter</Header>
    <img src="img/image.jpg" style={{ maxWidth: '100%' }} />
  </Fragment>
);
