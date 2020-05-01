import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { addCircle, list } from 'ionicons/icons';
import { connect } from 'react-redux';
import { setTodos, setTodosKeys } from './redux/todos-reducer';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import TodosContainer from './pages/Todos/TodosContainer';
import CreateContainer from './pages/Create/CreateContainer';
import axios from 'axios';
import { TodoType } from './types/types';
import { AppStateType } from './redux/redux-store';

type PropsType = {
  setTodos: (todos: Array<TodoType>) => void
  setTodosKeys: (todosKeys: Array<string>) => void
}

class App extends React.Component<PropsType> {

  componentDidMount() {
    axios.get(`https://angular-test-calendar-a724b.firebaseio.com/.json`).then(response => {
        this.props.setTodos(Object.values(response.data))
        this.props.setTodosKeys(Object.keys(response.data))
    })
  }

  render() {
    return (
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/create" component={CreateContainer} exact={true} />
              <Route path="/todos" component={TodosContainer} exact={true} />
              <Route path="/" render={() => <Redirect to="/todos" />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="create" href="/create">
                <IonIcon icon={addCircle} />
                <IonLabel>Create</IonLabel>
              </IonTabButton>
              <IonTabButton tab="todos" href="/todos">
                <IonIcon icon={list} />
                <IonLabel>All Todos</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    )
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
      todos: state.todosState.todos
  }
}

export default connect( mapStateToProps, { setTodos, setTodosKeys })(App);
