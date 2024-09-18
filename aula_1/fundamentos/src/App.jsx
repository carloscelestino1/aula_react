import "./App.css";
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { ClickButton, InputField, FormSubmit, KeyDownComponent, FocusBlurComponent, HoverComponent, SimpleForm, MultiFieldForm, FormWithSelectCheckbox, ValidatedForm } from './components/Events';
import jogo from './assets/jogo.jpg'; // Importa a imagem como um módulo



function App() {
  return (
    <div>
      
      <ValidatedForm />

    </div>
  );
}

export default App;



{/* <div>
<img src="/teste.jpg" alt="tigre" />
<img src={jogo} alt="Jogo" />

<Header />

<MainContent name="Carlos" idade={28} />
<MainContent name="Chico" idade={28} />
<MainContent name="Bob" idade={28} />
<MainContent name="Jhon" idade={28} />


<Footer />
<ClickButton />
<InputField />
<FormSubmit />
<h5>Digita e verifica no console!!</h5>
<KeyDownComponent />
<FocusBlurComponent />
<HoverComponent />
</div> */}