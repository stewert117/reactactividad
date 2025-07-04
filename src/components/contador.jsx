import { useState } from "react";

export default function Contador() {
  const [valor, setValor] = useState(0);
  return (
    <div>
      <p>valor: {valor}</p>
      <button onClick={() => setValor(valor + 1)}>Aumentar</button>
    </div>
  );
}
