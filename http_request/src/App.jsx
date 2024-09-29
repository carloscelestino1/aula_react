// App.js
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';

// URL da API simulada com json-server
const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // useEffect para buscar os produtos ao montar o componente
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(url);
      const data = await resp.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  // Função para adicionar ou editar produto
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, price: parseFloat(price) };
    let res;

    if (editMode) {
      res = await fetch(`${url}/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product),
      });

      setEditMode(false);
      setEditId(null);
    } else {
      res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product),
      });
    }

    const data = await res.json();
    setProducts((prevProducts) => {
      if (editMode) {
        return prevProducts.map((p) => (p.id === data.id ? data : p));
      } else {
        return [...prevProducts, data];
      }
    });

    setName("");
    setPrice("");
  };

  // Função para deletar um produto
  const handleDelete = async (id) => {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });

    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  // Função para iniciar a edição de um produto
  const handleEdit = (product) => {
    setName(product.name);
    setPrice(product.price);
    setEditMode(true);
    setEditId(product.id);
  };

  return (
    <>
      <Header />
      <Body 
        products={products}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        name={name}
        price={price}
        setName={setName}
        setPrice={setPrice}
        editMode={editMode}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </>
  );
}

export default App;
