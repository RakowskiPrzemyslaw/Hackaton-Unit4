import React, { Component, Fragment } from 'react';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { Select } from 'antd';
import { getBoards } from '../../actions';
import { Header } from '../../utils/styledComponents';
import { skillList } from '../MySkills/SkillList';
import { Boards, Container, Icon, Right, Top, Title, Heart, Bottom, Author, Image, Name, Filter, FilterText } from './Knowledge_styles';

const Option = Select.Option;

const skills = skillList.map(skill => <Option key={skill}>{skill}</Option>);

@connect(
  state => ({ user: state.user, boards: state.boards }),
  dispatch => bindActionCreators({ getBoards }, dispatch),
)
export default class Knowledge extends Component {
  state = {
    boards: this.props.boards || [],
    options: skills,
  }

  boards = this.props.boards;

  componentWillMount() {
    if (this.props.boards.length === 0) {
      this.props.getBoards();
    }
  }

  componentWillReceiveProps(np) {
    if (this.state.boards.length === 0 && np.boards.length > 0) {
      this.setState({ boards: np.boards });
      this.boards = np.boards;
    }
  }

  handleChange = (value) => {
    console.log(value);
    const boards = this.boards.filter((b) => {
      this.leave = false;
      value.map((v) => {
        if (b.skills.includes(v)) {
          this.leave = true;
        }
      });
      return value.length === 0 ? true : this.leave;
    });
    console.log(boards);
    this.setState({ boards });
  }

  renderBoard = (board, i) => {
    const isFavourite = this.props.user.favouriteBoards.includes(board.id);
    return (
      <Container onClick={() => { this.props.history.push(`/knowledge/${board.id}`); }}>
        <Icon>
          <i className={`fas fa-${board.icon}`} />
        </Icon>
        <Right>
          <Top>
            <Title>{board.name}</Title>
            <Heart><i className={isFavourite ? 'fas fa-heart' : 'far fa-heart'} /></Heart>
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
    if (this.state.boards.length > 0) {
      return (
        <Fragment>
          <Header>Knowledge</Header>
          <Filter>
            <FilterText>Ogranicz do konkretnych umiejętności</FilterText>
            <Select
              allowClear
              onChange={this.handleChange}
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Wpisz nazwy umiejętności"
            >
              {this.state.options}
            </Select>
          </Filter>
          <Boards>
            {this.state.boards.map(this.renderBoard)}
          </Boards>
        </Fragment>
      );
    }
    return null;
  }
}
