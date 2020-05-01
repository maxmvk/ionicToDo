import React from 'react';
import { 
  IonContent,
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react';
import './Todos.css';
import { TodoType } from '../../types/types';
import { closeCircle } from 'ionicons/icons';

type PropsType = {
  todos: Array<TodoType>
  onDeleteTodo: (index:number) => void
}

const Todos: React.FC<PropsType> = ({todos, onDeleteTodo}) => {
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todos page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" color="primary">Needs to be done</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList lines="full" class="ion-no-margin ion-no-padding">
          {
            todos
            ?todos.map((t, index) => {
              return (
                <IonItem>
                  <IonLabel>{t.name}</IonLabel>
                  <IonIcon color="primary" icon={closeCircle} onClick={() => { onDeleteTodo(index) }}></IonIcon>
                </IonItem>
              );
            })
            :null
          }
        </IonList>
      </IonContent>
    </IonPage>
  )
};

export default Todos;
