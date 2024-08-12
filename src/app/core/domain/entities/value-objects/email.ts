export class Email {
  public value: string

  private constructor(value: string) {
    this.value = value
  }

  static create(email: string) {
    return new Email(email)
  }

  get isValid(): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(this.value)
  }
}
