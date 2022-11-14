import "./style.css";

import { Card } from "../../components/Card";

export function Home() {
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>

      <Card name="Mateus Silva" time="10:08:08" />
      <Card name="Rodrigo Gonçalves" time="10:10:02" />
    </div>
  );
}
