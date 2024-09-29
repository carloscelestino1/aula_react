// Body.js
import React from 'react';

function Body({ 
  products, handleEdit, handleDelete, name, price, setName, setPrice, editMode, handleSubmit 
}) {
  return (
    <main className="body">
      {/* Container dos cards */}
      <div className="container">

        {/* Card para a lista de produtos */}
        <div className="products-card">
          <h2>Lista de Produtos</h2>
          <ul className="product-list">
            {products.map((product) => (
              <li key={product.id} className="product-item">
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>R$ {product.price}</p>
                </div>
                <div className="product-actions">
                  <button onClick={() => handleEdit(product)}>Editar</button>
                  <button onClick={() => handleDelete(product.id)}>Deletar</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Card para o formulário */}
        <div className='form-card'>
          <h2>{editMode ? "Editar Produto" : "Adicionar Produto"}</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input
                type="text"
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                required
                minLength="3"
              />
            </label>
            <label>
              Preço:
              <input
                type="number"
                value={price}
                name='price'
                onChange={(e) => setPrice(e.target.value)}
                required
                min="0.01"
              />
            </label>
            <input type="submit" value={editMode ? "Atualizar" : "Criar"} />
          </form>
        </div>
      </div>
    </main>
  );
}

export default Body;
