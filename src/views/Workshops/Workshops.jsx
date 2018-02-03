import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Select, Button, Icon } from 'antd';
import { skillList } from '../MySkills/SkillList';
import { Header } from '../../utils/styledComponents';
import { Filter, FilterText, EventsList, Event, Title, Description, Bottom, Left, Row, Text, Right, Label } from './Workshops_styles';

const Option = Select.Option;
const skills = skillList.map(skill => <Option key={skill}>{skill}</Option>);

export default class Events extends Component {
  state = {
    workshops: [],
  }

  componentWillMount() {
    axios.get('http://localhost:3000/workshops').then(({ data }) => {
      this.setState({ workshops: data });
    });
  }

  handleChange = (value) => {

  }

  renderEvent = (event) => {
    console.log(event);
    if (event.isWorkshops) {
      return (
        <Event id={event.id}>
          <Title>{event.name} <Label color="#69C0FF">Workshops</Label></Title>
          <Description>{(event.description.length > 150) ? `${event.description.slice(0, 146)}...` : event.description}</Description>
          <Bottom>
            <Left>
              <Row>
                <Icon type="calendar" />
                <Text>{event.date}</Text>
              </Row>
              <Row>
                <Icon type="user" />
                <Text>{`${event.atendees.length}/${event.maxAtendees}`}</Text>
              </Row>
            </Left>
            <Right>
              <Button type="primary">Join</Button>
            </Right>
          </Bottom>
        </Event>
      );
    }
    return (
      <Event id={event.id}>
        <Title>{event.name} <Label color="#91D5FF">Proposal</Label></Title>
        <Description>{(event.description.length > 150) ? `${event.description.slice(0, 146)}...` : event.description}</Description>
        <Bottom>
          <Left>
            <Row>
              <Icon type="user" />
              <Text>{`${event.atendees.length}/${event.maxAtendees}`}</Text>
            </Row>
          </Left>
          <Right>
            <Button type="primary">{'I\'m interested'}</Button>
          </Right>
        </Bottom>
      </Event>
    );
  }

  render() {
    return (
      <Fragment>
        <Header>Workshops</Header>
        <Filter>
          <FilterText>Limit to several skills</FilterText>
          <Select
            allowClear
            onChange={this.handleChange}
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Write your skills"
          >
            {skills}
          </Select>
        </Filter>
        <EventsList>
          {this.state.workshops && this.state.workshops.length > 0 && this.state.workshops.map(this.renderEvent)}
        </EventsList>
      </Fragment>
    );
  }
}
