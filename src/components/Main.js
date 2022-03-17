import useFetchPeliculas from "../hooks/useFetchPeliculas"

const Main = () => {
  const peliculas = useFetchPeliculas("popular", "movie")

  return (
    <div>
        <h2>Peliculas Populares</h2>
      {peliculas.map(pelicula => (
        <h3 key={pelicula.id}>{pelicula.title}</h3>
      ))}
    </div>
  )
}

export default Main
