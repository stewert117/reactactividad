export default function Card({ nombre, precio, imagen }) {
  return (
    <div className="card" style={{border: '1px solid #ccc', padding: 10, margin: 10, width: 200}}>
      <img src={imagen} alt={nombre} width={100} />
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
    </div>
  );
}