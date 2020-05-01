import { TodoType } from "../types/types";

const SET_TODOS = "SET_TODOS";
const SET_TODOS_KEYS = "SET_TODOS_KEYS";
const SET_NAME = "SET_NAME";
const SET_NEW_TODO = "SET_NEW_TODO";
const DELETE_TODO = "DELETE_TODO";

export type InitialStateType = {
    todos: Array<TodoType>
    todosKeys: Array<string>
    name: string
}

let initialState: InitialStateType = {
    todos: [] as Array<TodoType>,
    todosKeys: [] as Array<string>,
    name: ""
}

const todosReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case SET_TODOS: {
            return {...state, todos: action.todos}
        }

        case SET_TODOS_KEYS: {
            return {...state, todosKeys: action.todosKeys}
        }

        case SET_NEW_TODO: {
            return {...state, todos: [...state.todos, action.todo.todo], todosKeys: [...state.todosKeys, action.todo.name]}
        }

        case SET_NAME: {
            return {...state, name: action.name}
        }

        case DELETE_TODO: {
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, action.index),
                    ...state.todos.slice(action.index + 1, state.todos.length),
                ],
                todosKeys: [
                    ...state.todosKeys.slice(0, action.index),
                    ...state.todosKeys.slice(action.index + 1, state.todosKeys.length),
                ]
            }
        }

        default:
            return state;
    }
}

type SetTodosActionType = {
    type: typeof SET_TODOS
    todos: Array<TodoType>
}

type SetTodosKeysActionType = {
    type: typeof SET_TODOS_KEYS
    todosKeys: Array<string>
}

type SetNewTodoActionType = {
    type: typeof SET_NEW_TODO
    todo: any
}

type SetNameActionType = {
    type: typeof SET_NAME
    name: string
}

type DeleteTodoActionType = {
    type: typeof DELETE_TODO
    index: number
}

export const setTodos = (todos: Array<TodoType>):SetTodosActionType => ({ type: SET_TODOS, todos })
export const setTodosKeys = (todosKeys: Array<string>):SetTodosKeysActionType => ({ type: SET_TODOS_KEYS, todosKeys })
export const setNewTodo = (todo: any):SetNewTodoActionType => ({ type: SET_NEW_TODO, todo })
export const setName = (name: string):SetNameActionType => ({ type: SET_NAME, name })
export const deleteTodo = (index: number):DeleteTodoActionType => ({ type: DELETE_TODO, index })

export default todosReducer;