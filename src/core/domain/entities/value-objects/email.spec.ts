import { Email } from "./email"

describe('Email (Value-objects)', () => {
  it('should be able to create a valid email', () => {
    const email = Email.create('matheusdamatag@gmail.com')
    expect(email).toEqual('matheusdamatag@gmail.com')
  })

  it('should not be able to create an invalid email', () => {
    expect(() => Email.create('matheusdamatag.com.br')).toThrowError(Error)
  })
})