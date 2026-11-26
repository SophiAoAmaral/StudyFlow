import React, { useState } from 'react'
import { register } from '../../services/auth';

export const Cadastro = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setMessage("");
        setLoading(true);

        try{
            const data = await register(email, password);

            if(data.session){
                setMessage("Conta criada com sucesso!");
            }else {
        setMessage(
          "Cadastro realizado! Verifique seu e-mail para confirmar a conta."
        );
      }
        }catch(err){
            setMessage(err.message);
        }finally {
      setLoading(false);
    }
    }



  return (
    <main>
        <form onSubmit={handleSubmit}>
            <h1>Criar conta</h1>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)} 
                
                />
                <label htmlFor="password">Senha</label>
                <input type="password" required value={password}
                onChange={(e) => setPassword(e.target.value)} 
                
                />
                <button type='submit'>Criar conta</button>
            </div>
        </form>

        <p>{message}</p>
    </main>
  )
}
