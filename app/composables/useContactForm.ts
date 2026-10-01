export type ContactField = 'name' | 'email' | 'message'

const MIN_NAME = 2
const MIN_MESSAGE = 10
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function useContactForm() {
  const { t } = useI18n()
  const contactEmail = useRuntimeConfig().public.contactEmail

  const values = reactive<Record<ContactField, string>>({ name: '', email: '', message: '' })
  const errors = reactive<Record<ContactField, string>>({ name: '', email: '', message: '' })
  const isSent = ref(false)

  function validate(): ContactField | null {
    const name = values.name.trim()
    const email = values.email.trim()
    const message = values.message.trim()

    errors.name = !name
      ? t('contact.errors.required')
      : name.length < MIN_NAME
        ? t('contact.errors.tooShort', { min: MIN_NAME })
        : ''
    errors.email = !email
      ? t('contact.errors.required')
      : !EMAIL_PATTERN.test(email)
        ? t('contact.errors.invalidEmail')
        : ''
    errors.message = !message
      ? t('contact.errors.required')
      : message.length < MIN_MESSAGE
        ? t('contact.errors.tooShort', { min: MIN_MESSAGE })
        : ''

    const fields: ContactField[] = ['name', 'email', 'message']
    return fields.find((field) => errors[field]) ?? null
  }

  function buildMailto() {
    const subject = t('contact.mail.subject', { name: values.name.trim() })
    const body = `${values.message.trim()}\n\n${values.name.trim()} (${values.email.trim()})`
    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  function submit(): ContactField | null {
    isSent.value = false
    const firstInvalid = validate()
    if (firstInvalid) return firstInvalid

    window.location.href = buildMailto()
    isSent.value = true
    return null
  }

  return { values, errors, isSent, submit }
}
