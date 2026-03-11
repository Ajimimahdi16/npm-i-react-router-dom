import { useEffect, useState } from "react";
import axios from "axios";

export default function Prodotti() {
  const [prodotti, setProdotti] = useState([]);

  const fetchProdotti = () => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        setProdotti(res.data);
      })
      .catch(error => console.error("Errore nel caricamento prodotti", error));
  };

  useEffect(() => {
    fetchProdotti();
  }, []);

  return (
    <>
      <button onClick={fetchProdotti}>Aggiorna Prodotti</button>
      <main>
        <h1 className='titolo'>Lista dei prodotti</h1>
        <section className='prodotti'>
          {prodotti.map(product => (
            <article key={product.id} className="prodotti-card">
              <div className='info'>
                <h2>{product.title}</h2>
                <p>Prezzo: {product.price}€</p>
                <p>{product.description}</p>
                <p>Categoria: {product.category}</p>
                <img src={product.image} alt={product.title} />
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}