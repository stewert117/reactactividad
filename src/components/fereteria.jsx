import React, { useState } from "react";
import erramienta1 from "../assets/eramienta1.png";
import erramienta2 from "../assets/eramieta2.jpg";
import erramienta3 from "../assets/eramienta3.jpg";
import "./Section.css";

const sedes = ["Centro", "Norte", "Sur"];

const productos = [
  {
    id: 1,
    nombre: "martillo",
    descripcion: "erramienta para clavar",
    imagen: erramienta1,
  },
  {
    id: 2,
    nombre: "Destornillador",
    descripcion: "rramienta para atornillar",
    imagen: erramienta2,
  },
  {
    id: 3,
    nombre: "Serrucho",
    descripcion: "erramienta para cortar madera",
    imagen: erramienta3,
  },
];

export default function Fereteria() {
  const [count, setCount] = useState(0);

  const handleClick = (nombre) => {
    alert(`Estás contactando a ${nombre}`);
    setCount(count + 1);
  };

  return (
    <div className="cards-container">
      {}
      <h2>sedes de la ferreteria</h2>
      <ul>
        {sedes.map((sede, idx) => (
          <li key={idx}>{sede}</li>
        ))}
      </ul>
      <h2>{count}</h2>
      {productos.map(({ id, nombre, descripcion, imagen }) => (
        <div className="card" key={id}>
          <img className="image" src={imagen} alt={nombre} />
          <h2 className="name">{nombre}</h2>
          <p className="description">{descripcion}</p>
          <button onClick={() => handleClick(nombre)}>Contactar</button>
        </div>
      ))}
    </div>
  );
}