
import React, { useState } from 'react'
import { login, register } from '../../services/auth';

export const Login = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [message, setMessage] = useState("");
        const [loading, setLoading] = useState(false);
    
        async function handleSubmit(e) {
            e.preventDefault();
            setMessage("");
            setLoading(true);
    
            try{
                const data = await login(email, password);
    
                if(data.session){
                    setMessage("Entrou na conta");
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
            <h1>Entrar</h1>
            <div>
                <label htmlFor="email">Fazer Login</label>
                <input type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)} 
                
                />
                <label htmlFor="password">Senha</label>
                <input type="password" required value={password}
                onChange={(e) => setPassword(e.target.value)} 
                
                />
                <button type='submit'>Entrar</button>
            </div>
        </form>

        <p>{message}</p>
    </main>
  )
}
