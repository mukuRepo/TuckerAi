// // pages/api/contact.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'your@gmail.com', // replace with your Gmail email
//     pass: 'your_password',  // replace with your Gmail password or an app-specific password
//   },
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const { name, email, message } = req.body;

//       // Compose the email message
//       const mailOptions = {
//         from: 'your@gmail.com',   // replace with your Gmail email
//         to: 'destination@example.com',  // replace with the recipient email
//         subject: 'New Contact Form Submission',
//         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//       };

//       // Send the email
//       await transporter.sendMail(mailOptions);

//       res.status(200).json({ message: 'Email sent successfully!' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Error sending email.' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }
