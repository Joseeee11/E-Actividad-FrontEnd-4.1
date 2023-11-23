import React, { useState, useEffect, useRef } from "react";
import { BuscarAPI } from "./BuscarAPI";
import { RenderUsers } from "./RenderUsers";

export function Busqueda() {
    // sacamos variables del react para saber el estado
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [userResults, setUserResults] = useState([]); // Nuevo estado para los resultados de la búsqueda
    
    

    // Creamos la función que mandará al componente de la api de github
    async function handleChange() {
        const userInput = await inputValue.trim();
        if (userInput) {
          const results = await BuscarAPI(userInput);
          setUserResults(results); // Guarda los resultados de la búsqueda en el estado
        } else {
          setUserResults([]);
        }
      }
}  