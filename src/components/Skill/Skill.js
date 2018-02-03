import React, { Component } from 'react';
import { Progress, Button } from 'antd';
import { SkillTitle, SkillContainer } from './Skill_styles';
import { changeSkillLevel } from '../../actions/index';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';


const ButtonGroup = Button.Group;


@connect(
  null,
  dispatch => bindActionCreators({ changeSkillLevel }, dispatch),
)
export default class Skill extends Component {

  state = {
    percent: this.props.value * 20,
  }
  increase = () => {
    let percent = this.state.percent + 20;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
    this.props.changeSkillLevel(this.props.name, this.props.value + 1, this.props.updateUser);
  }
  decline = () => {
    let percent = this.state.percent - 20;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
    this.props.changeSkillLevel(this.props.name, this.props.value - 1, this.props.updateUser);
  }

  render(){
    return(
      <SkillContainer>
        <SkillTitle>{this.props.name}</SkillTitle>
        <Progress percent={this.state.percent} />
        <ButtonGroup>
          <Button onClick={this.decline} icon="minus" />
          <Button onClick={this.increase} icon="plus" />
        </ButtonGroup>
      </SkillContainer>
    );
  };
}
