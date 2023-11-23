import React, { useState, useEffect, useRef } from "react";
import { BuscarAPI } from "./BuscarAPI";
import { RenderUsers } from "./RenderUsers";

export function Busqueda() {
    // sacamos variables del react para saber el estado
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [userResults, setUserResults] = useState([]); // Nuevo estado para los resultados de la búsqueda
    
}  