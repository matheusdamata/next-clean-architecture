import { Email } from "./value-objects/email"

interface NewsletterProps {
  email: string
  status: boolean
}

export class Newsletter {
  protected email: Email
  protected status: boolean
  
  protected constructor({email, status}: NewsletterProps) {
    this.email = Email.create(email)
    this.status = status
  }

  static create(value: string) {
    const status = true

    return new Newsletter({
      email: value,
      status,
    })
  }

  get mail() {
    return this.email.value
  }
}

const news = Newsletter.create('mat@mail.com')