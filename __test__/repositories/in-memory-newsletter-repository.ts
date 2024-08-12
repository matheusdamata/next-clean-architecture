import {NewsletterRepository} from '@/core/application/repositories/newsletterRepository'

export class InMemoryNewsletterRepository implements NewsletterRepository {
  private items: string[] = []

  async save(email: string) {
    this.items.push(email)
  }
}