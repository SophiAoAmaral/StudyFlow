
import React, { useState } from 'react'
import { login, register } from '../../services/auth';
import { useNavigate, Link } from 'react-router';

export const Login = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [message, setMessage] = useState("");
        const [loading, setLoading] = useState(false);
        const navigate = useNavigate();
        const [showPassword, setShowPassword] = useState(false)
    
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
    <main className="mt-20 ml-20 flex flex-col gap-5 w-[400px]">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold">Entrar no StudyFlow</h1>
        <p className="text-lg text-black/50 mt-3">
          Que bom ter você de volta. Continue de onde parou.
        </p>
        <div className="flex flex-col gap-3 mt-8">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <label htmlFor="password">Senha</label>
              <Link
                to="/esquecisenha"
                className="text-xs font-bold text-primary hover:text-primary/60 transition"
              >
                Esqueci minha senha
              </Link>
            </div>
            <div className="flex items-center border border-line-strong py-2 px-4 rounded-lg focus-within:border-primary">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[100%] w-full outline-0"
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
          <p>{message}</p>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="w-4 h-4 accent-indigo-600 cursor-pointer"
            />
            <span className="text-gray-600">
              Manter conectado neste dispositivo
            </span>
          </label>
          <button
            type="submit"
            className="button mt-5"
          >
            Entrar
          </button>
        </div>
      </form>

      <span className="text-center relative detail1 mt-6">Novo por aqui?</span>

      <Link
        to="/cadastro"
        className="mt-6 border  border-line-strong font-semibold py-2 px-4 rounded-lg text-center w-full"
      >
        Criar uma conta gratuita
      </Link>

      <p className="text-center text-black/50 mt-10">
        Ao continuar, você concorda com os Termos de Uso e a Política de
        Privacidade.
      </p>
    </main>
  );
}
