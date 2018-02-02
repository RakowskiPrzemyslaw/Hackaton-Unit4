import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { fetchUser } from '../../actions';
import { setCookie } from '../../utils/cookies';
import {Container, StyledInput, StyledButton, Title, Background} from './Login_styles';

import { Icon } from 'antd';


@connect(
  null,
  dispatch => bindActionCreators({ fetchUser }, dispatch),
)
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }
  emitEmpty = () => {
      this.userNameInput.focus();
      this.setState({ userName: '' });
    }
  onChangeUserName = (e) => {
      this.setState({ userName: e.target.value });
    }

  sendForm = () => {
    if (this.state.userName === 'BradleyDavis@gmail.com') {
      this.props.fetchUser('32453245', () => {
        setCookie('id', '32453245');
        this.props.history.push('/');
      });
    }
  }

  render() {
    const { userName, password } = this.state;
    const suffixUser = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    const suffixPassword = password ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;

    return (
      <Background>
        <Container>
          <Title>Login</Title>
          <StyledInput
            placeholder="E-mail"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={suffixUser}
            value={userName}
            onChange={this.onChangeUserName}
          />
          <StyledInput
            placeholder="Password"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={suffixPassword}
          />
          <StyledButton type="primary" onClick={this.sendForm}>Login</StyledButton>
        </Container>
      </Background>
    );
  }
}
