import React, { useState } from 'react'
import { register } from '../../services/auth';
import { Link } from 'react-router';
import { ChevronLeft } from 'lucide-react';

export const Cadastro = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
     const [showPassword, setShowPassword] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();
        setMessage("");
        setLoading(true);

        try{
            const data = await register(name.trim(), email.trim(), password);

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
    <main className="mt-20 ml-20 flex flex-col gap-5 w-[400px]">
      <Link to='/' className='flex items-center gap-3'> <ChevronLeft size={24} /> Voltar para o login</Link>
      <form onSubmit={handleSubmit}>
        <h1 className='text-4xl font-bold mb-2'>Crie sua conta</h1>
        <p className='text-lg text-black/50'>Leva menos de um minuto. Depois é só cadastrar suas matérias.</p>
        <div className="flex flex-col gap-3 mt-5">
          <div className="flex flex-col">
            <label htmlFor="nome">Nome</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='input' placeholder='Como você quer ser chamado(a)' />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder='voce@email.com'
            />
          </div>
          <div>
            <div className="flex justify-between">
              <label htmlFor="password">Senha</label>
            </div>
            <div className="flex items-center border border-line-strong py-2 px-4 rounded-lg focus-within:border-primary">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[100%] w-full outline-0"
                placeholder='Mínimo de 8 caracteres'
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-xs font-semibold"
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>
          </div>
          <button type="submit" className='button mt-3'>Criar conta</button>
        </div>
      </form>
       <span className="text-center relative detail1 mt-3">Ja possui conta?</span>
       <Link
               to="/"
               className="border  border-line-strong font-semibold py-2 px-4 rounded-lg text-center w-full mt-3 hover:text-black/50 transition"
             >
               Entrar com sua conta
             </Link>

      <p>{message}</p>
    </main>
  );
}
