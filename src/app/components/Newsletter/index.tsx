'use client'

import { HttpClient } from '@/app/core/infra/http'

export default function Newsletter() {
  async function handleSave() {
    const responseApi = await HttpClient.api({
      input: 'test',
    })

    console.log('$ json', await responseApi.json())
  }

  return (
    <div className="w-[80%] lg:w-[550px] flex flex-col gap-4 bg-gray-700 p-4 rounded-lg">
      <h1 className="text-xl font-semibold">Newsletter</h1>

      <form className="flex flex-col gap-2">
        <input
          className="p-2 rounded-lg border-0"
          type="text"
          placeholder="Digite seu e-mail"
        />

        <button
          className="w-full text-lg font-semibold bg-green-500 py-2 rounded-lg"
          type="button"
          onClick={handleSave}
        >
          Assinar Agora
        </button>
      </form>
    </div>
  )
}
