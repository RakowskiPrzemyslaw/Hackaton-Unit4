import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import { Header } from '../../utils/styledComponents';
import Skill from '../../components/Skill/Skill';
// import { Header } from './MySkills_styles';

@connect(state => ({ user: state.user }))
export default class MySkills extends Component {

  renderSkill = (skill, i) => <Skill {...skill} key={skill.name} />;

  render() {
    console.log(this.props.user.skills);
    return this.props.user.id
    ? (
      <div>
        <Header>MySkills</Header>
        {this.props.user.skills.map(this.renderSkill)}
      </div>
    ) : null;
  }
}
