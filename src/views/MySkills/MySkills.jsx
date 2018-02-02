import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import { Header } from '../../utils/styledComponents';
// import { Header } from './MySkills_styles';

@connect(state => ({ user: state.user }))
export default class MySkills extends Component {
  render() {
    return (
      <Header>MySkills</Header>
    );
  }
}
