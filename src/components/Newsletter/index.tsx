'use client'

import { HttpClient } from "@/core/infra/http"


export default function Newsletter() {
  async function handleSave() {
    const responseApi = await HttpClient.api({
      input: 'test',
    })

    console.log('$ json', await responseApi.json())
  }

  return (
    <div className="w-[80%] lg:w-[550px] flex flex-col gap-4 p-6 rounded-xl bg-white shadow-xl">
      <div>
        <h1 className="text-2xl font-semibold text-gray-700">Newsletter ✉️</h1>
        <p className="text-sm text-gray-500">Quer receber insights valiosos, dicas práticas e as últimas novidades do mundo da tecnologia diretamente no seu e-mail?</p>
      </div>

      <form className="flex flex-col gap-2">
        <input
          className="px-2 py-3 rounded-lg border-0 bg-emerald-50 text-gray-700 outline-emerald-700 placeholder:text-emerald-700"
          type="email"
          placeholder="Digite seu e-mail"
        />

        <button
          className="w-full text-lg bg-emerald-700 py-2 rounded-lg"
          type="button"
          onClick={handleSave}
        >
          Assine Agora
        </button>
      </form>
    </div>
  )
}
