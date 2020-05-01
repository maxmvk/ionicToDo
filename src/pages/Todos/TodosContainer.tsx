import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../../redux/todos-reducer';
import { TodoType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';
import Todos from './Todos';
import axios from 'axios';

type PropsType = {
    todos: Array<TodoType>
    todosKeys: Array<string>
    deleteTodo: (index: number) => void
}

class TodosContainer extends React.Component<PropsType> {

    onDeleteTodo = (index: number) => {
        axios.delete(`https://angular-test-calendar-a724b.firebaseio.com/${this.props.todosKeys[index]}.json`)
        this.props.deleteTodo(index);
    }

    render() {
        return (
            <Todos todos={this.props.todos}
                   onDeleteTodo={this.onDeleteTodo}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        todos: state.todosState.todos,
        todosKeys: state.todosState.todosKeys
    }
}

export default connect(mapStateToProps, { deleteTodo })(TodosContainer);