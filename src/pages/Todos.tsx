import React from 'react';
import { 
  IonContent,
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react';
import './Todos.css';
import axios from 'axios';

const Todos: React.FC = () => {

  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
 
    axios.get(`https://angular-test-calendar-a724b.firebaseio.com/.json`).then(response => {
      setTodos(Object.values(response.data))
    })
 
  }, []);

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
          todos!==null
          ?todos.map(t => {
            return (
              <IonItem>
                <IonLabel>{t.name}</IonLabel>
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
