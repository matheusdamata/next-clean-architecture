import { Newsletter } from "@/core/domain/entities/newsletter";
import type { NewsletterRepository } from "../repositories/newsletterRepository";

interface CreateNewsletterRequest {
  mail: string
}

interface CreateNewsletterResponse {
  message: string
}

export class CreateNewsletterUseCase {
  constructor(private newsletterRepository: NewsletterRepository) {}

  async execute(props: CreateNewsletterRequest): Promise<CreateNewsletterResponse> {
    const { mail } = Newsletter.create(props.mail)

    await this.newsletterRepository.save(mail)

    return {
      message: 'Newsletter created successfully'
    }
  }
}