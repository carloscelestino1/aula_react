import { useState } from 'react';

// Função para o botão de clique
function ClickButton() {
  function handleClick() {
    alert('O botão foi clicado!');
  }

  return <button onClick={handleClick}>Click me</button>;
}

// Função para o campo de input
function InputField() {
  const [value, setValue] = useState('');
  
  function handleChange(event) {
    setValue(event.target.value);
  }
  
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Você digitou: {value}</p>
    </div>
  );
}


//O evento onSubmit é usado para capturar o envio de formulários.
function FormSubmit() {
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página
    alert(`Form submitted with name: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}


function KeyDownComponent() {
  function handleKeyDown(event) {
    console.log(`Key pressed: ${event.key}`);
  }

  return <input type="text" onKeyDown={handleKeyDown} />;
}

// Aqui, o console irá registrar uma mensagem sempre que o campo de entrada receber ou perder o foco.
function FocusBlurComponent() {
  function handleFocus() {
    console.log('Input focused');
  }

  function handleBlur() {
    console.log('Input lost focus');
  }

  return <input type="text" onFocus={handleFocus} onBlur={handleBlur} />;
}

function HoverComponent() {
  function handleMouseEnter() {
    console.log('Mouse entrou na div!');
  }

  function handleMouseLeave() {
    console.log('Mouse saiu!');
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      Hover over this text
    </div>
  );
}

function SimpleForm() {
  // Definindo o estado para armazenar o valor do campo de entrada
  const [name, setName] = useState('');

  // Função que será chamada sempre que o valor do input mudar
  const handleInputChange = (event) => {
    setName(event.target.value); // Atualiza o estado com o valor do input
  };

  // Função chamada quando o formulário for submetido
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página
    alert(`Nome submetido: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={name} onChange={handleInputChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}



function MultiFieldForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Função genérica para lidar com a mudança em qualquer campo de entrada
  const handleInputChange = (event) => {
    const { name, value } = event.target; // Extrai o nome do campo e o valor
    setFormData({
      ...formData,
      [name]: value, // Atualiza o campo correspondente no estado
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Dados submetidos: ${JSON.stringify(formData)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Mensagem:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}


function FormWithSelectCheckbox() {
  const [formData, setFormData] = useState({
    favoriteFruit: 'apple',
    receiveNewsletter: false
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form Data: ${JSON.stringify(formData)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Fruta favorita:
        <select name="favoriteFruit" value={formData.favoriteFruit} onChange={handleInputChange}>
          <option value="apple">Maçã</option>
          <option value="banana">Banana</option>
          <option value="orange">Laranja</option>
        </select>
      </label>
      <label>
        Receber newsletter:
        <input
          type="checkbox"
          name="receiveNewsletter"
          checked={formData.receiveNewsletter}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

function ValidatedForm() {
  const [nome, setNome] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nome.includes('@')) {
      setError('O nome deve conter um "@"');
    } else {
      setError('');
      alert('Formulário enviado com sucesso!');

      // Zera o valor do campo nome
      setNome('');  // Limpa o campo após o envio
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        NOME:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}


export { ClickButton, InputField, FormSubmit, KeyDownComponent, FocusBlurComponent, HoverComponent, SimpleForm, MultiFieldForm, FormWithSelectCheckbox, ValidatedForm };
