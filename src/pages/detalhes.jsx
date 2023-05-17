import { useRouter } from "next/router"
import { useEffect, useState } from "react";


export default function Detalhes(){
    const router = useRouter()
    const { id } = router.query
    const [ data, setData ] = useState({})

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTkyMjY2NzQ4MWFiMjA3ZDY0MjQ1MGIwZWZiNDYxZSIsInN1YiI6IjVlYTA5ZTZiYmU0YjM2MDAxYzU5NWExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vhu0pPCiIwmtrpyOHdBlQid8HJJllaHthn1MERS_ANg'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, options)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.error(err));
    }, [id])

   

    return (
        <>
        <h1 className="text-4xl">Detalhes do Filme {data.title}</h1>
        <strong>{data.vote_average}</strong>
        <p className="text-ambar-400">{data.status}</p>
        <p>{data.overview}</p>
        </>
    )
}