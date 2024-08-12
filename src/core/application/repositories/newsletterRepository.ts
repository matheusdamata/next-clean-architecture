export interface NewsletterRepository {
  save(email: string): Promise<void>
}