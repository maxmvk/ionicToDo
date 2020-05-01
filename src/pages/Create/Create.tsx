import React from 'react';
import { 
  IonContent,
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonInput,
  IonList,
  IonItem,
  IonButton,
} from '@ionic/react';
import './Create.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
  name: string
  handleUserInput: (e:any) => void
  addTodo: () => void
}

const Create: React.FC<PropsType> = ({name, handleUserInput, addTodo}) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create Todo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" color="primary">Create Todo</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList lines="full" class="ion-no-padding listInput">
          <IonItem>
            <IonInput value={name} placeholder="What needs to be done?" onIonChange={ handleUserInput }></IonInput>
          </IonItem>
          {
            name
            ?<NavLink to="/todos">
              <IonButton onClick={() => { addTodo() }} expand="full" disabled={false}>Create</IonButton>
            </NavLink>
            :<IonButton onClick={() => { addTodo() }} expand="full" disabled={true}>Create</IonButton>
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Create;
