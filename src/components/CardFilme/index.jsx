import { useState } from "react"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from "next/link";


export default function CardFilme({filme}) {
    //const {filme} = props
    const [favorito, setFavorito] = useState(false)
    const poster = "https://www.themoviedb.org/t/p/w220_and_h330_face" + filme.poster_path

    return (
        <div className="p-4 w-56">
            <p className="text-center w-full text-xl cursor-pointer" onClick={() => setFavorito(!favorito) }>
                {favorito ? 
                <FavoriteIcon className="text-red-500" /> : 
                <FavoriteBorderIcon />
                } 
            </p>
            <img className="rounded-lg" src={poster} alt="poster do filme" />
            <h3 className="text-xl my-3 line-clamp-1">{filme.title}</h3>
            <Link 
                className="bg-amber-500 text-black px-5 py-1 rounded" 
                href={`/detalhes?id=${filme.id}`}>
                    detalhes
            </Link>
        </div>
    )
}