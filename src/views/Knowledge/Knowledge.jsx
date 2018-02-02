import React, { Component, Fragment } from 'react';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { getBoards } from '../../actions';
import { Header } from '../../utils/styledComponents';
import { Boards, Container, Icon, Right, Top, Title, Heart, Bottom, Author, Image, Name } from './Knowledge_styles';


@connect(
  state => ({ user: state.user, boards: state.boards }),
  dispatch => bindActionCreators({ getBoards }, dispatch),
)
export default class Knowledge extends Component {
  componentWillMount() {
    if (this.props.boards.length === 0) {
      this.props.getBoards();
    }
  }

  renderBoard = (board, i) => {
    return (
      <Container onClick={() => { this.props.history.push(`/boards/${board.id}`); }}>
        <Icon>
          <i className={`fas fa-${board.icon}`} />
        </Icon>
        <Right>
          <Top>
            <Title>{board.name}</Title>
            <Heart><i className="far fa-heart" /></Heart>
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
  }

  render() {
    console.log(this.props.boards);
    return this.props.boards.length > 0
      ? (
        <Fragment>
          <Header>Knowledge</Header>
          <Boards>
            {this.props.boards.map(this.renderBoard)}
          </Boards>
        </Fragment>
      )
      : null;
  }
}
