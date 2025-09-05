// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create an email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your public key from the account settings
// 6. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  serviceId: 'service_proofsec', // Replace with your EmailJS service ID
  templateId: 'template_audit_request', // Replace with your EmailJS template ID
  publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
  toEmail: 'blockchaindevwork@gmail.com'
};

// Email template should include these variables:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{company}} - Company/project name
// {{project_type}} - Type of audit requested
// {{message}} - Message content
// {{to_email}} - Recipient email (blockchaindevwork@gmail.com)
