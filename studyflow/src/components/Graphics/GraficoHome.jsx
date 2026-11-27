import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";
import React from 'react'

const dados = [
  { dia: "Seg", minutos: 120 },
  { dia: "Ter", minutos: 150 },
  { dia: "Qua", minutos: 65 },
  { dia: "Qui", minutos: 40 },
  { dia: "Sex", minutos: 160 },
  { dia: "Sáb", minutos: 180 },
  { dia: "Dom", minutos: 87 }
];



export const GraficoHome = () => {

    const totalMinutos = dados.reduce(
    (total, dia) => total + dia.minutos,
    0);
   const horas = Math.floor(totalMinutos / 60);
   const minutos = totalMinutos % 60;
  return (
    <div className="w-full max-w-[440px] rounded-2xl border border-indigo-100 bg-white p-5">


      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">
            Esta semana
          </p>

          <h2 className="text-2xl font-bold text-gray-800">
            {horas}h {minutos}min
          </h2>
        </div>

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          +12%
        </span>
      </div>

      <div className="mt-6 h-[80px] w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={dados}
            margin={{ top: 4, right: 0, left: 0, bottom: 0 }}
          >
            <Bar
              dataKey="minutos"
              radius={[6, 6, 0, 0]}
              maxBarSize={48}
              isAnimationActive={false}
            >
              {dados.map((dia, index) => (
                <Cell
                  key={dia.dia}
                  fill={
                    index === dados.length - 1
                      ? "#625CF5"
                      : "#C7D2FE"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* TAREFA */}
      <div className="mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-4">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#625CF5]" />

          <span className="truncate text-xs text-gray-800">
            Lista 6 — Integrais por partes
          </span>
        </div>

        <span className="shrink-0 rounded-full bg-red-50 px-2 py-1 text-xs text-red-600">
          Hoje
        </span>
      </div>
    </div>
  )
}
