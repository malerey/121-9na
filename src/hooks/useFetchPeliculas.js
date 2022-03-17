import { useState, useEffect } from "react"

// esto es un custom hook
// un custom hook es una funcion reutilizable que permite usar un estado
// lo manejamos igual que a otra funcion de javascript 

const useFetchPeliculas = (categoria, tipo) => {
  const [peliculas, setPeliculas] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${tipo}/${categoria}?api_key=07b7fbf0aa198d742f7f3020308675d2&language=es`)
    .then(res=> res.json())
    .then(data => setPeliculas(data.results))
  }, [])
  
  return peliculas
}

export default useFetchPeliculas
