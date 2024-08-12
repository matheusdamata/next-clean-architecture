import type { Email } from './value-objects/email'

interface SaveProps {
  email: Email
}

interface CancelProps {
  email: Email
}

export class Newsletter {
  save({ email }: SaveProps) {
    console.log('Saving email', email.value)
  }

  cancel({ email }: CancelProps) {
    console.log('Canceling email', email.value)
  }
}
