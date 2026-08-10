import { site } from '../config/site'

/**
 * Contact form submission — delivers messages straight to WhatsApp.
 *
 * The form builds a wa.me link with the visitor's name, email and message
 * prefilled and opens it in a new tab. Works on any static host with no
 * backend required.
 */

export function submitContactMessage({ name, email, message }) {
  const text = [
    'New message from your portfolio',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    message,
  ].join('\n')

  return { whatsappUrl: `${site.whatsappUrl}?text=${encodeURIComponent(text)}` }
}

export const isDemoMode = false

export const mailtoHref = `mailto:${site.email}?subject=Project%20or%20Opportunity%20Enquiry`
