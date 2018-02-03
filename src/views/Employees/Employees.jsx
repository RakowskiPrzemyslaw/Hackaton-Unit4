import React, { Component, Fragment } from 'react';
import { Header } from '../../utils/styledComponents';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import {fetchUserList} from '../../actions/index';
import {Container, Image, Name, Title, Profile, Skill, SkillContainer, Wraper} from './Employees_styles';
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
  renderSkills = (skill, i) => i<3
    ? <Skill key={skill.name}>{skill.name}</Skill>
    : null;

  renderUsers = (user, i) =>(
    <Container>
      <Image src={user.image}/>
      <Name>{user.name}</Name>
      <Title>{user.position}</Title>
      <SkillContainer>
        {user.skills.map(this.renderSkills)}
        {user.skills.length > 3 &&
          <Skill>{`+ ${user.skills.length - 3}`}</Skill>
        }
      </SkillContainer>
      <Profile>See a profile</Profile>
    </Container>
);

  render() {
    console.log(this.props.userList);
    return (
      <Fragment>
        <Header>Employees</Header>
        <Wraper>
          {this.props.userList.map(this.renderUsers)}
        </Wraper>
      </Fragment>
    );
  }
}
