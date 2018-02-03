import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Select, Button, Icon } from 'antd';
import { skillList } from '../MySkills/SkillList';
import { Header } from '../../utils/styledComponents';
import { Filter, FilterText, EventsList, Event, Title, Description, Bottom, Left, Row, Text, Right } from './Events_styles';

const Option = Select.Option;
const skills = skillList.map(skill => <Option key={skill}>{skill}</Option>);

export default class Events extends Component {
  state = {
    events: [],
  }

  componentWillMount() {
    axios.get('http://localhost:3001/api/events').then(({ data }) => {
      this.setState({ events: data.data });
    });
  }

  handleChange = (value) => {
    if (value.length > 0) {
      axios.post('http://localhost:3001/api/events', {
        tags: value,
      }).then(({ data }) => {
        this.setState({ events: data.data[0] });
      });
    } else {
      axios.get('http://localhost:3001/api/events').then(({ data }) => {
        this.setState({ events: data.data });
      });
    }
  }

  renderEvent = (event) => {
    return (
      <Event id={event._id}>
        <Title>{event.name}</Title>
        <Description>{(event.description.length > 150) ? `${event.description.slice(0, 146)}...` : event.description}</Description>
        <Bottom>
          <Left>
            <Row>
              <Icon type="calendar" />
              <Text>{event.start}</Text>
            </Row>
            <Row>
              <Icon type="user" />
              <Text>{event.place}</Text>
            </Row>
          </Left>
          <Right>
            <Button onClick={() => { window.open(event.url, '_blank'); }} type="primary">Details</Button>
          </Right>
        </Bottom>
      </Event>
    );
  }

  render() {
    return (
      <Fragment>
        <Header>Events</Header>
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
          {this.state.events && this.state.events.length > 0 && this.state.events.map(this.renderEvent)}
        </EventsList>
      </Fragment>
    );
  }
}
