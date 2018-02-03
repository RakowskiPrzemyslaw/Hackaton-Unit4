import React, { Component, Fragment } from 'react';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { Modal, Input, Icon } from 'antd';
import { getBoards, addBookmark } from '../../actions';
import { Header } from '../../utils/styledComponents';
import { Item, IconWrapper, Favicon, Right, Title, Description, Category, CategoryTitle, AddItem, Categories, StyledInput } from './Board_styles';


@connect(
  state => ({ boards: state.boards }),
  dispatch => bindActionCreators({ getBoards, addBookmark }, dispatch),
)
export default class Knowledge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: props.boards.filter(({ id }) => id === this.props.match.params.id)[0],
      visible: false,
      confirmLoading: false,
      url: '',
      title: '6 myths of Progressive Web Apps – Samsung Internet Developers – Medium',
      description: 'Terms like “Progressive Web Apps” (PWAs) are useful to help spread concepts, but they come with a risk of misuse and misunderstanding.',
      addFields: false,
      loadFields: false,
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

  openModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
      this.props.addBookmark(this.state.board.id, 'Progressive Web Apps', {
        url: this.state.url,
        title: this.state.title,
        description: this.state.description,
        favicon: 'https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico',
      });
    }, 2000);
  }

  handleCancel = () => {
    this.setState({
      visible: false,
      url: '',
    });
  }

  changeUrl = (e) => {
    if (e.target.value === 'https://medium.com/samsung-internet-dev/6-myths-of-progressive-web-apps-81e28ca9d2b1') {
      this.setState({ url: e.target.value, loadFields: true }, () => {
        setTimeout(() => {
          this.setState({ addFields: true, loadFields: false });
        }, 1500);
      });
    } else {
      this.setState({ url: e.target.value });
    }
  }

  changeTitle = (e) => {
    this.setState({ title: e.target.value });
  }

  changeDescription = (e) => {
    this.setState({ description: e.target.value });
  }

  emitEmpty = (num) => {
    if (num === 1) this.setState({ url: '' });
    if (num === 2) this.setState({ title: '' });
    if (num === 3) this.setState({ description: '' });
  }

  renderItem = ({ title, description, url, favicon }, i) => (
    <Item onClick={() => { window.open(url, '_blank'); }}>
      <IconWrapper>
        <Favicon src={favicon} />
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
        <AddItem onClick={() => this.openModal(category.name)}>+ Dodaj link</AddItem>
      </Category>
    );
  }

  render() {
    const suffix1 = this.state.url && !this.state.loadFields  ?
      <Icon type="close-circle" onClick={() => this.emitEmpty(1)} />
      : (this.state.loadFields)
        ? <Icon type="loading" onClick={() => this.emitEmpty(1)} />
        : null;
    const suffix2 = this.state.title ? <Icon type="close-circle" onClick={() => this.emitEmpty(2)} /> : null;
    const suffix3 = this.state.description ? <Icon type="close-circle" onClick={() => this.emitEmpty(3)} /> : null;

    return (this.state.board)
      ? (
        <Fragment>
          <Header>{this.state.board.name}</Header>
          <Categories>
            {this.state.board.categories.map(this.renderCategory)}
          </Categories>
          <Modal
            title="Dodaj link"
            visible={this.state.visible}
            onOk={this.handleOk}
            confirmLoading={this.state.confirmLoading}
            onCancel={this.handleCancel}
          >
            <div>
              <Input
                placeholder="Enter URL address"
                prefix={<Icon type="link" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={suffix1}
                value={this.state.url}
                onChange={this.changeUrl}
              />
              {this.state.addFields && this.state.url &&
                <Input
                  placeholder="Enter title"
                  prefix={<Icon type="tag-o" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={suffix2}
                  value={this.state.title}
                  onChange={this.changeTitle}
                />
              }
              {this.state.addFields && this.state.url &&
                <Input
                  placeholder="Enter description"
                  prefix={<Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={suffix3}
                  value={this.state.description}
                  onChange={this.changeDescription}
                />
              }
            </div>
          </Modal>
        </Fragment>
      )
      : null;
  }
}
