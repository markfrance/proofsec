# Contact Form Setup

The contact form is currently set up to simulate email sending. To enable real email sending, you need to integrate with an email service.

## Current Status:
- ✅ Form works and shows success message
- ✅ No email client opens
- ⚠️ Emails are logged to console (for testing)
- ❌ Real emails not sent yet

## To Enable Real Email Sending:

### Option 1: Web3Forms (Recommended - Free)
1. Go to https://web3forms.com/
2. Create a free account
3. Get your access key
4. Replace the access key in App.js line 50
5. Emails will be sent to blockchaindevwork@gmail.com

### Option 2: Formspree
1. Go to https://formspree.io/
2. Create a free account
3. Create a new form
4. Set recipient to blockchaindevwork@gmail.com
5. Get your form endpoint
6. Replace the fetch URL in App.js

### Option 3: EmailJS
1. Go to https://www.emailjs.com/
2. Create a free account
3. Set up email service and template
4. Get your service ID, template ID, and public key
5. Update the configuration in App.js

## Form Data Structure:
```javascript
{
  name: "User's name",
  email: "user@example.com", 
  company: "Company name",
  projectType: "Standard Audit",
  message: "Project details",
  subject: "New Audit Request from [Name]"
}
```

## Testing:
- Form currently logs data to browser console
- Success message shows after 2 seconds
- No email client opens
- Ready for real email service integration

Choose your preferred email service and follow their setup instructions!
