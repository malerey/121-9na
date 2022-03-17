import useFetchPeliculas from "../hooks/useFetchPeliculas"

const UltimosLanzamientos = () => {
  const peliculas = useFetchPeliculas("upcoming", "movie")

  return (
    <div>
      <h2>Ultimos lanzamientos PELICULAS</h2>
      {peliculas.map(pelicula => (
        <h3 key={pelicula.id}>{pelicula.title}</h3>
      ))}
    </div>
  );
};

export default UltimosLanzamientos;
