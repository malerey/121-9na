import useFetchPeliculas from "../hooks/useFetchPeliculas"

const Populares = () => {
  const series = useFetchPeliculas("popular", "tv")

  return (
    <div>
      <h2>Series Populares</h2>
      {series.map(serie => (
        <h3 key={serie.id}>{serie.name}</h3>
        ))}
    </div>
  )
}

export default Populares
