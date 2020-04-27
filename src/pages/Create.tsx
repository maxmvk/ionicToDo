import React, { useState } from 'react';
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
import axios from 'axios';


const Create: React.FC = () => {

  const [text, setText] = useState<string>();
  const todo = {id: Math.random(), name: text}

  const addTodo = () => {
    axios.post(`https://angular-test-calendar-a724b.firebaseio.com/.json`, todo)
  }

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
        <IonList lines="full" class="ion-no-margin ion-no-padding">
          <IonItem>
            <IonInput value={text} placeholder="What needs to be done?" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem>
        </IonList>
      </IonContent>
      <IonButton onClick={() => { addTodo() }} expand="full">Create</IonButton>
    </IonPage>
  );
};

export default Create;
