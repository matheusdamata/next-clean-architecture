import { env } from '@/app/env'

interface ApiProps {
  input: RequestInfo
  init?: RequestInit
}

export class HttpClient {
  private static instance: HttpClient

  constructor(private readonly apiUrl: string) {}

  static getInstance(): HttpClient {
    if (!this.instance)
      HttpClient.instance = new HttpClient(env.NEXT_PUBLIC_API_URL)

    return HttpClient.instance
  }

  static async api({ input, init }: ApiProps): Promise<Response> {
    const client = HttpClient.getInstance()

    return await fetch(`${client.apiUrl}/${input}`, init)
  }
}
