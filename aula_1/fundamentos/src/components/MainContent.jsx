import React from 'react';
import Article from './Article';
import Sidebar from './Sidebar';

function MainContent({name, idade}) {
  return (
    <main>
      <h1>Hello, {name}!</h1> {/* Acessando a prop 'name' */}
      <p>You are {idade} years old.</p>

      <Article />
      <Sidebar />
    </main>
  );
}



export default MainContent;
