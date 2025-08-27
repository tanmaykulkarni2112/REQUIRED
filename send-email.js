const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Your Gmail address
    pass: 'your-app-password'    // Your App Password (not your regular password)
  }
});

// Function to send the verification code
async function sendVerificationCode(recipientEmail, verificationCode) {
  const mailOptions = {
    from: 'your-email@gmail.com', // Sender address
    to: recipientEmail,            // List of receivers
    subject: 'Your Verification Code', // Subject line
    text: `Your verification code is: ${verificationCode}`, // Plain text body
    html: `<b>Your verification code is: ${verificationCode}</b>` // HTML body
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// Example usage:
const recipient = 'recipient-email@example.com';
const code = '123456'; // Generate a random code in a real application

sendVerificationCode(recipient, code);
