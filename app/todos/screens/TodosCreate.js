import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import TodosForm from '../components/TodosForm';

export default class TodosCreate extends Component {

  handleSubmit = (value) => {
    alert(JSON.stringify(value))
  }

  render() {
    return (
      <Container>
        <Content>
          <TodosForm {...this.props} onSubmit={this.handleSubmit} />
        </Content>
      </Container>
    )
  }
}