import React from 'react';
import { connect } from 'react-redux';
import { setName, setNewTodo } from '../../redux/todos-reducer';
import { AppStateType } from '../../redux/redux-store';
import axios from 'axios';
import Create from './Create';

type PropsType = {
    name: string
    setName: (name: string) => void
    setNewTodo: (todo: any) => void
}

class CreateContainer extends React.Component<PropsType> {

    handleUserInput = (e:any) => {
        const value = e.target.value;
        this.props.setName(value);
    }

    addTodo = () => {
        const todo = {id: Math.random(), name: this.props.name}
        axios.post(`https://angular-test-calendar-a724b.firebaseio.com/.json`, todo).then((res) => 
            this.props.setNewTodo({todo: todo, name: res.data.name})
        )
        this.props.setName("");
    }

    render() {
        return (
            <Create name={this.props.name}
                    handleUserInput={this.handleUserInput}
                    addTodo={this.addTodo}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        name: state.todosState.name
    }
}

export default connect(mapStateToProps, { setName, setNewTodo })(CreateContainer);