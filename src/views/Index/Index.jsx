import React, { Component, Fragment } from 'react';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { Layout, Icon } from 'antd';
import Menu from 'antd/es/menu';
import { toggleSidebar } from '../../actions';
import { Container } from '../../utils/styledComponents';

const { SubMenu, Item } = Menu;
const { Header, Content, Sider } = Layout;

@connect(
  state => ({
    collapsed: state.ui.sidebar,
  }),
  dispatch => bindActionCreators({ toggleSidebar }, dispatch),
)
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.lastPathname = '';
  }

  state = {
    isLogin: this.props.location.pathname === '/login',
  };

  componentWillMount() {
    this.props.history.listen((e) => {
      if (e.pathname === '/login') {
        this.setState({ isLogin: true });
      } else if (this.state.login) {
        this.setState({ isLogin: false });
      }
    });
  }

  render() {
    return this.state.isLogin
    ? (
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
          <Sider
            collapsible
            collapsed={this.props.collapsed}
            onCollapse={this.props.toggleSidebar}
            style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
          >
            <div className="logo" />
            <Menu defaultSelectedKeys={['1']} mode="inline">
              <Item key="1">
                <Icon type="pie-chart" />
                <span>Option 1</span>
              </Item>
              <Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Item>
              <SubMenu
                key="sub1"
                title={<span><Icon type="user" /><span>User</span></span>}
              >
                <Item key="3">Tom</Item>
                <Item key="4">Bill</Item>
                <Item key="5">Alex</Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={<span><Icon type="team" /><span>Team</span></span>}
              >
                <Item key="6">Team 1</Item>
                <Item key="8">Team 2</Item>
              </SubMenu>
              <Item key="9">
                <Icon type="file" />
                <span>File</span>
              </Item>
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: this.props.collapsed ? 80 : 200, transition: 'all 0.3s' }}>
            <Content style={{ background: '#F8F8FF', margin: 0, minHeight: 280 }}>
              <Container sidebar={this.props.collapsed}>
                {this.props.children}
              </Container>
            </Content>
          </Layout>
        </Layout>
      </Layout>
      )
      : (
        <Fragment>
          {this.props.children}
        </Fragment>
      );
  }
}
