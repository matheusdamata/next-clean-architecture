import { InMemoryNewsletterRepository } from "../../../../__test__/repositories/in-memory-newsletter-repository"
import type { NewsletterRepository } from "../repositories/newsletterRepository"
import { CreateNewsletterUseCase } from "./create-newsletter"
import { faker } from '@faker-js/faker'

let newsletterRepository: NewsletterRepository
let sut: CreateNewsletterUseCase

describe('Create Newsletter Use Case', () => {
  beforeEach(() => {
    newsletterRepository = new InMemoryNewsletterRepository()
    sut = new CreateNewsletterUseCase(newsletterRepository)
  })

  it('should be able to create a newsletter', async () => {

    const { message } = await sut.execute({
      mail: faker.internet.email()
    })

    expect(message).toEqual('Newsletter created successfully')
  })
})