import { Email } from "./email"

describe('Email (Value-objects)', () => {
  it('should be able to create a valid email', () => {
    const email = Email.create('matheusdamatag@gmail.com')
    expect(email.isValid).toEqual(true)
  })

  it('should not be able to create an invalid email', () => {
    const email = Email.create('matheusdamatag.com.br')
    expect(email.isValid).toEqual(false)
  })
})