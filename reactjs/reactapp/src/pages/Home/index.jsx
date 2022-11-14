import React, { useState } from "react";

import "./style.css";

import { Card } from "../../components/Card";

export function Home() {
  const [studentName, setStudentName] = useState("");

  return (
    <div className="container">
      <h1>Nome: {studentName}</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button">Adicionar</button>

      <Card name="Mateus Silva" time="10:08:08" />
      <Card name="Rodrigo Gonçalves" time="10:10:02" />
    </div>
  );
}
