import React, { Component, Fragment } from 'react';
import axios from 'axios';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { Header } from '../../utils/styledComponents';
// import { Header } from './Knowledge_styles';


@connect(state => ({ user: state.user }))
export default class Knowledge extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <Fragment>
        <Header>Knowledge</Header>
        <div>
          {this.props.user.id}
        </div>
      </Fragment>
    );
  }
}
