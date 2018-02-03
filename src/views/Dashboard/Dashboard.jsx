import React, { Component, Fragment } from 'react';
import { Header } from '../../utils/styledComponents';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { addWant, addSkill, getBoards } from '../../actions';
import Skill from '../../components/Skill/Skill';
import { Boards, Container, Icon, Right, Top, Title, Heart, Bottom, Author, Image, Name, Filter, FilterText } from '../Knowledge/Knowledge_styles';

@connect(
  state => ({ user: state.user, boards: state.boards }),
  dispatch => bindActionCreators({ addWant, addSkill, getBoards }, dispatch),
)
export default class Dashboard extends Component {
  state={
    skill: [],
  }
  renderSkill = (skill, i) => i<3
  ? <Skill {...skill} key={skill.name} />: null;

  boards = this.props.boards;

  componentWillMount() {
    if (this.props.boards.length === 0) {
      this.props.getBoards();
    }
  }

  componentWillReceiveProps(np) {
    if (this.props.boards.length === 0 && np.boards.length > 0) {
      this.setState({ boards: np.boards });
      this.boards = np.boards;
    }
  }

  renderBoard = (board, i) => {
    const isFavourite = this.props.user.favouriteBoards.includes(board.id);
    if (i<6) {
    return(
      <Container>
        <Icon>
          <i className={`fas fa-${board.icon}`} />
        </Icon>
        <Right>
          <Top>
            <Title>{board.name}</Title>
            <Heart><i className="fas fa-heart" /></Heart>
          </Top>
          <Bottom>
            <Author>
              <Image src={board.author.image} />
              <Name>{board.author.name}</Name>
            </Author>
          </Bottom>
        </Right>
      </Container>
    );
  } else {
      return null;
    }
  }

  render() {
    console.log(this.props.user);
    return (
      <Fragment>
        <Header>Dashboard</Header>
        {this.props.user.skills && this.props.user.skills.map(this.renderSkill)}
        <Boards>
          {this.props.boards && this.props.boards.map(this.renderBoard)}
        </Boards>
      </Fragment>

    );
  }
}
