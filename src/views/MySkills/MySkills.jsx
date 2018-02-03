import React, { Component, Fragment } from 'react';
import connect from 'react-redux/lib/connect/connect';
import { Modal } from 'antd';
import { Header } from '../../utils/styledComponents';
import { StyledButton, WantToLearn, WantToLearnButton } from './MySkills_styles';
import Skill from '../../components/Skill/Skill';
import axios from 'axios';
// import { Header } from './MySkills_styles';

@connect(state => ({ user: state.user }))
export default class MySkills extends Component {

  renderSkill = (skill, i) => <Skill {...skill} updateUser={this.updateUser} key={skill.name} />;
  renderWantToLearn = (Wtl, i) => <WantToLearn {...Wtl} key={Wtl}>{Wtl}</WantToLearn>;

  updateUser = (x) => {
    console.log(x);
    const url = `http://localhost:3000/users/${x.id}`;
    axios.put(url, x);
  }

  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    console.log(this.props.user);
    return this.props.user.id
    ? (
      <Fragment>
        <Header>MySkills</Header>
        {this.props.user.skills.map(this.renderSkill)}
        <StyledButton type="dashed">Add Skill</StyledButton>
        <Header>Want to learn</Header>
        {this.props.user.wantToLearn.map(this.renderWantToLearn)}
        <WantToLearnButton type="dashed">Add</WantToLearnButton>


        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>


      </Fragment>
    ) : null;
  }
}
