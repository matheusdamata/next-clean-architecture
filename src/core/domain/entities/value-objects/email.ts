import { z } from "zod"

const emailValidation = z.string().email()

export class Email {
  public value: string

  private constructor(value: string) {
    this.value = value
  }

  static create(value: string) {
    const email = new Email(value)

    if (!email.isValid) throw new Error('Invalid email.')

    return email.value
  }

  get isValid(): boolean {
    const { success } = emailValidation.safeParse(this.value)

    return success
  }
}
