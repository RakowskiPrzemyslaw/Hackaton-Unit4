import React, { Component, Fragment } from 'react';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import axios from 'axios';
import { Modal, Select, Slider, Icon } from 'antd';
import { Header } from '../../utils/styledComponents';
import { StyledButton, WantToLearn, WantToLearnButton } from './MySkills_styles';
import Skill from '../../components/Skill/Skill';
import { addWant, addSkill } from '../../actions';
import { skillList } from './SkillList';

const Option = Select.Option;

// import { Header } from './MySkills_styles';
@connect(
  state => ({ user: state.user }),
  dispatch => bindActionCreators({ addWant, addSkill }, dispatch),
)
export default class MySkills extends Component {
  state = {
    visible1: false,
    visible2: false,
    sliderValue: 0,
    wantLearn: null,
    skill: null,
  }

  renderSkill = (skill, i) => <Skill {...skill} updateUser={this.updateUser} key={skill.name} />;
  renderWantToLearn = (Wtl, i) => <WantToLearn {...Wtl} key={Wtl}>{Wtl}</WantToLearn>;

  updateUser = (x) => {
    console.log(x);
    const url = `http://localhost:3000/users/${x.id}`;
    axios.put(url, x);
  }

  showModal1 = () => {
    this.setState({
      visible1: true,
    });
  }

  onSliderChange = (value) => {
    this.setState({
      sliderValue: value,
    });
  }

  handleOk1 = (e) => {
    this.props.addSkill({
      name: this.state.skill,
      value: this.state.sliderValue,
    }, this.updateUser);
    this.setState({
      visible1: false,
    });
  }
  handleCancel1 = (e) => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  }

  showModal2 = () => {
    this.setState({
      visible2: true,
    });
  }

  handleOk2 = (e) => {
    this.props.addWant(this.state.wantLearn, this.updateUser);
    this.setState({
      visible2: false,
    });
  }
  handleCancel2 = (e) => {
    this.setState({
      visible2: false,
    });
  }

  handleWantChange = (val) => {
    this.setState({ wantLearn: val });
  }

  handleSkillChange = (val) => {
    this.setState({ skill: val });
  }

  render() {
    const min = 0;
    const max = 5;
    const { sliderValue } = this.state;
    const mid = ((max - min) / 2).toFixed(1);
    const preColor = sliderValue >= mid ? '' : 'rgba(0, 0, 0, .45)';
    const nextColor = sliderValue >= mid ? 'rgba(0, 0, 0, .45)' : '';

    return this.props.user.id
    ? (
      <Fragment>
        <Header>My Skills</Header>
        {this.props.user.skills.map(this.renderSkill)}
        <StyledButton type="dashed" onClick={this.showModal1}>Add Skill</StyledButton>
        <div style={{ clear: 'both' }} />
        <Header>Want to learn</Header>
        {this.props.user.wantToLearn.map(this.renderWantToLearn)}
        <WantToLearnButton type="dashed" onClick={this.showModal2}>Add</WantToLearnButton>


        <Modal
          title="Add your skills"
          visible={this.state.visible1}
          onOk={this.handleOk1}
          onCancel={this.handleCancel1}
        >
          <Select
            showSearch
            style={{ width: '100%', marginBottom: 20 }}
            placeholder="Select your skills"
            optionFilterProp="children"
            onChange={this.handleSkillChange}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            {skillList.map(skill => <Option {...skill} value={skill} key={skill}>{skill}</Option> )}
          </Select>
          <p>Pick level of your skill</p>
          <Slider min={1} max={5} onChange={this.onSliderChange} value={this.state.sliderValue} />

        </Modal>

        <Modal
          title="What you want to learn"
          visible={this.state.visible2}
          onOk={this.handleOk2}
          onCancel={this.handleCancel2}
        >
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder="Select what you want to learn?"
            optionFilterProp="children"
            onChange={this.handleWantChange}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            {skillList.map(skill => <Option {...skill} value={skill}>{skill}</Option> )}
          </Select>
        </Modal>

      </Fragment>
    ) : null;
  }
}
