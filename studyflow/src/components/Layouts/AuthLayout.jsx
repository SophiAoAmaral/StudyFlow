import React from 'react'
import { Outlet } from 'react-router'
import { SquareCheck, Timer, ChartNoAxesColumn } from "lucide-react";
import { GraficoHome } from '../Graphics/GraficoHome';


export const AuthLayout = () => {
  return (
<main className="grid min-h-screen lg:grid-cols-2 ">

  
  <section className="bg-primary-50 flex ">
    <div className=" md:w-[600px] ml-70 p-15 flex flex-col gap-3">

      <img src="/logo.png" alt="logo-studyflow" className='w-70'/>

      <span className='text-primary font-bold text-sm '>Organização de estudos para quem quer constância</span>

      <h1 className='text-4xl font-semibold  '>Seus estudos em um fluxo leve e contínuo.</h1>

      <p className='text-lg '>
        Organize matérias, acompanhe prazos e registre cada sessão de estudo.
        Veja seu progresso semana a semana, sem complicação.
      </p>

      <article className='my-5 flex flex-col gap-5'>
        <div className='flex items-center gap-3'> 
          <SquareCheck size={19} color="#5146E9" />
          <span>Tarefas com prazo, matéria e status em um só quadro</span>
        </div>

        <div  className='flex items-center gap-3'>
          <Timer size={19} color="#5146E9" />
          <span>Cronômetro que registra suas sessões automaticamente</span>
        </div>

        <div  className='flex items-center gap-3'>
          <ChartNoAxesColumn size={19} color="#5146E9" />
          <span>Metas semanais e estatísticas claras de evolução</span>
        </div>
      </article>

      <article className=''>
        <GraficoHome />
      </article>

    </div>
  </section>

  <section className="bg-[#F8F9FC]">
    <div className="w-full max-w-[800px] mr-auto  p-15">
      <Outlet />
    </div>
  </section>

</main>
  );
}
