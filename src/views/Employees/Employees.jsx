import React, { Component } from 'react';
import { Header } from '../../utils/styledComponents';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import {fetchUserList} from '../../actions/index';
// import { Header } from './Employees_styles';

@connect(
  state => ({
    userList: state.userList,
  }),
  dispatch => bindActionCreators({ fetchUserList }, dispatch),
)
export default class Employees extends Component {
  componentWillMount(){
    this.props.fetchUserList();
  }
  render() {
    console.log(this.props.userList);
    return (
      <Header>Employees</Header>

    );
  }
}
