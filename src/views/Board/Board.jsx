import React, { Component, Fragment } from 'react';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { getBoards } from '../../actions';
import { Header } from '../../utils/styledComponents';
import { Item, IconWrapper, Icon, Right, Title, Description, Category, CategoryTitle, AddItem, Categories } from './Board_styles';


@connect(
  state => ({ boards: state.boards }),
  dispatch => bindActionCreators({ getBoards }, dispatch),
)
export default class Knowledge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: props.boards.filter(({ id }) => id === this.props.match.params.id)[0],
    };
  }

  componentWillMount() {
    if (this.props.boards.length === 0) {
      this.props.getBoards();
    }
  }

  componentWillReceiveProps(np) {
    if (!this.state.board && np.boards.length > 0) {
      this.setState({ board: np.boards.filter(({ id }) => id === np.match.params.id)[0] });
    }
  }

  renderItem = ({ title, description, url, favicon }, i) => (
    <Item onClick={() => { window.open(url, '_blank'); }}>
      <IconWrapper>
        <Icon src={favicon} />
      </IconWrapper>
      <Right>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Right>
    </Item>
  );

  renderCategory = (category, i) => {
    console.log(category);
    return (
      <Category key={category.name}>
        <CategoryTitle>{category.name}</CategoryTitle>
        {category.bookmarks.map(this.renderItem)}
        <AddItem>+ Dodaj link</AddItem>
      </Category>
    );
  }

  render() {
    return (this.state.board)
      ? (
        <Fragment>
          <Header>{this.state.board.name}</Header>
          <Categories>
            {this.state.board.categories.map(this.renderCategory)}
          </Categories>
        </Fragment>
      )
      : null;
  }
}
