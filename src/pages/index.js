import SecaoFilmes from "@/components/SecaoFilmes";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTkyMjY2NzQ4MWFiMjA3ZDY0MjQ1MGIwZWZiNDYxZSIsInN1YiI6IjVlYTA5ZTZiYmU0YjM2MDAxYzU5NWExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vhu0pPCiIwmtrpyOHdBlQid8HJJllaHthn1MERS_ANg'
      }
    };

    fetch('https://api.themoviedb.org/3/trending/movie/week?language=pt-BR', options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setFilmes(response.results)
      })
      .catch(err => console.error(err));
  }, [])



  // const filmes = [
  //   {
  //     titulo: "Super Mario Bros.: O Filme",
  //     poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/i9XdxHsFrcqLkRWSF1coOHo4R39.jpg"
  //   },
  //   {
  //      titulo: "Creed III",
  //      poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/wDugyjvDQsuwm9j9hkmK4whCOti.jpg"
  //    }
  // ]


  return (
    <>
      <h1>Senac Filmes</h1>

      { filmes ?  
        <SecaoFilmes titulo="Filmes em alta" filmes={filmes} /> :
        <>
          <CircularProgress /> 
          <p className="text-white-500">Carregando...</p>
        </>
      }


    </>
  )
}
