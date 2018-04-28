import React, {Component} from 'react'
import {Container, Content, Text, List, ListItem, Fab, Icon} from 'native-base'
import {connect} from 'react-redux'
import { allTodos } from '../actions';

class TodosList extends Component{

  componentDidMount(){
    this.props.dispatch(allTodos())
  }

  render(){
    return (
      <Container>
        <Content>
          {this.props.todosReducer.todos.map(todo=>(
            <ListItem>
              <Text>{todo.title}</Text>
            </ListItem>
          ))}
        </Content>
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('TodosCreate')}>
          <Icon name="add" />
        </Fab>
      </Container>
    )
  }
}

const mapStateToProps = (state)=>({
  todosReducer: state.todosReducer
})

export default connect(mapStateToProps)(TodosList)