import React, { Component, Fragment } from 'react';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { withRouter } from 'react-router';
import { Layout, Icon } from 'antd';
import Menu from 'antd/es/menu';
import { toggleSidebar, fetchUser } from '../../actions';
import { getCookie } from '../../utils/cookies';
import { Container } from '../../utils/styledComponents';
import  Login  from '../Login/Login';


const { SubMenu, Item } = Menu;
const { Header, Content, Sider } = Layout;

@withRouter
@connect(
  state => ({
    collapsed: state.ui.sidebar,
  }),
  dispatch => bindActionCreators({ toggleSidebar, fetchUser }, dispatch),
)
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.firstPath = this.props.location.pathname === '/login' ? '/dashboard' : this.props.location.pathname;
  }

  state = {
    isLogin: this.props.location.pathname === '/login',
  };

  componentWillMount() {
    const id = getCookie('id');
    if (id) {
      this.props.fetchUser(id, () => {});
        if (this.state.isLogin) {
          this.setState({ isLogin: false });
          this.props.history.push('/');
        }
    } else if (!this.state.isLogin) {
      this.setState({ isLogin: true }, () => console.log('sdf'));
      this.props.history.push('/login');
    }

    this.props.history.listen((e) => {
      console.log(1);
      if (e.pathname === '/login') {
        this.setState({ isLogin: true });
      } else if (this.state.isLogin) {
        console.log(2);
        this.setState({ isLogin: false });
      }
    });
  }

  changeRoute = ({ key }) => {
    if (key.includes('/')) {
      this.props.history.push(key);
    }
  }

  render() {
    return this.state.isLogin
    ? (
        <Fragment>
          {this.props.children}
        </Fragment>
      )
      : (
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
              <Menu
                defaultSelectedKeys={[this.firstPath]}
                mode="inline"
                onSelect={this.changeRoute}
              >
                <Item key="/dashboard">
                  <Icon type="pie-chart" />
                  <span>Dashboard</span>
                </Item>
                <Item key="/myskills">
                  <Icon type="area-chart" />
                  <span>My Skills</span>
                </Item>
                <Item key="/workshops">
                  <Icon type="solution" />
                  <span>Workshops</span>
                </Item>
                <Item key="/events">
                  <Icon type="calendar" />
                  <span>Events</span>
                </Item>
                <Item key="/knowledge">
                  <Icon type="desktop" />
                  <span>Knowledge</span>
                </Item>
                <SubMenu
                  key="hrpanel"
                  title={<span><Icon type="team" /><span>HR Panel</span></span>}
                >
                  <Item key="/employees">Employees</Item>
                  <Item key="/stats">Stats</Item>
                </SubMenu>
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
      );
  }
}
