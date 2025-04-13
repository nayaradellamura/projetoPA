import { useState, useEffect } from "react"

export const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleEntrar = () => {
       console.log(email)
       console.log(senha)
    }

    useEffect(() => {
        console.log(email)
      },[email]);

      useEffect(() => {
       console.log(senha)
      },[senha]);

    return (
        <div>
            <form>
                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>

                <label>
                    <span>Senha</span>
                    <input type="password" value={senha} onChange={e => setSenha (e.target.value)}/>
                </label>

                <button type="button" onClick={handleEntrar}>Entrar</button>
            </form>
        </div>
    )
}