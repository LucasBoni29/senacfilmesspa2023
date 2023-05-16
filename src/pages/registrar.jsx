import { useRouter } from "next/router"
import { useState } from "react"


export default function Registrar(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState("")
    const router = useRouter()

    function handleSubmit(e){
        e.preventDefault()
        if (email.length == 0 || senha.length == 0) 
            setErro("Preencha todos os campos")
        //window.location.href = '/'
        router.push('/')
    }

    function handleSenha(value){
        setSenha(value)
        if (value.length < 6) {
            setErro("Senha muito curta")
        }else{
            setErro("")
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-800">
            <h1 className="text-4xl font-bold text-amber-400">Criar Conta</h1>
            <form className="flex flex-col w-1/3" onSubmit={handleSubmit}>
                <label htmlFor="email" className="text-amber-400 font-bold">Email</label>
                <input 
                    className="rounded border-2 text-white border-slate-600 bg-slate-800 p-2 mb-4 focus:border-amber-400 focus:outline-none" 
                    id="email" 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="senha" className="text-amber-400 font-bold">Senha</label>
                <input 
                    className="rounded border-2 text-white border-slate-600 bg-slate-800 p-2 focus:border-amber-400 focus:outline-none" 
                    id="senha" 
                    type="password" 
                    value={senha}
                    onChange={e => handleSenha(e.target.value)}
                />
                <p className="mb-4 text-red-400">{erro}</p>
                <button 
                    className="rounded bg-amber-400 text-black px-5 py-2 hover:bg-amber-300 disabled:opacity-50" 
                    disabled={erro}
                >
                    Criar Contar
                </button>
            </form>

        </div>
    )

}