import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Container, StyledInput, StyledButton, Title, Background} from './Login_styles';

import { Icon } from 'antd';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      Password: '',
    };
  }
  emitEmpty = () => {
      this.userNameInput.focus();
      this.setState({ userName: '' });
    }
  onChangeUserName = (e) => {
      this.setState({ userName: e.target.value });
    }

  render() {

    const { userName } = this.state;
    const { Password } = this.state;
    const suffixUser = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    const suffixPassword = Password ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;

    return (
      <Background>
        <Container>
          <Title>Login</Title>
          <StyledInput
            placeholder="E-mail"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={suffixUser}
            value={userName}
          />
          <StyledInput
            placeholder="Password"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={suffixPassword}
            value={Password}
          />
          <StyledButton type="primary">Login</StyledButton>
        </Container>
      </Background>
    );
  }
}
