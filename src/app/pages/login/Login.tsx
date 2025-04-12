import { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleEntrar = () => {
       console.log(email)
       console.log(senha)


    }
    return (
        <div>
            <form>
                <label>
                    <span>Email</span>
                    <input/>
                </label>

                <label>
                    <span>Senha</span>
                    <input type="senha"/>
                </label>

                <button type="button" onClick={handleEntrar}>Entrar</button>
            </form>
        </div>
    )
}