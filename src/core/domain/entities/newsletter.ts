import { Email } from "./value-objects/email"

interface NewsletterProps {
  email: string
}

export class Newsletter {
  protected email: Email
  protected status: boolean
  
  protected constructor({ email }: NewsletterProps) {
    this.email = Email.create(email)
    this.status = true
  }

  static create(value: string) {
    return new Newsletter({
      email: value,
    })
  }

  get mail() {
    return this.email.value
  }
}