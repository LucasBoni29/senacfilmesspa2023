import CardFilme from "../CardFilme";

export default function SecaoFilmes(props) {
    const {titulo} = props
    const {filmes} = props
    return (
        <>
            <h2 className="text-2xl">{titulo}</h2>
            <section className="flex flex-wrap">
                {filmes.map(filme => <CardFilme filme={filme}/> )}
            </section>
        </>
    )
}