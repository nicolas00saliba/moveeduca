/* eslint-disable max-len */
/* eslint-disable indent */

const sgMail = require("@sendgrid/mail");
const functions = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

exports.sendEmail = onRequest((request, response) => {
  if (request.method !== "POST") {
    return response.status(405).send({error: "Method Not Allowed"});
  }

  logger.info(`Form submitted by: ${request.body.email}`);
  sgMail.setApiKey(functions.config().sendgrid.apikey);
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "danrleywillian@gmail.com",
    from: `taurussoftwaredev@gmail.com`,
    subject: request.body.subject,
    text: `${request.body.name} wants you to contact through the 
      number ${request.body.phone} to talk about the 
      subject ${request.body.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 15px; border: 1px solid #eee; border-radius: 5px;">
        <h2>Contact Request</h2>
        <p><strong>Name:</strong> ${request.body.name}</p>
        <p><strong>Email:</strong> ${request.body.email}</p>
        <p><strong>Phone:</strong> ${request.body.phone}</p>
        <p><strong>Subject:</strong> ${request.body.subject}</p>
        <p>They would like to discuss the above subject. Please reach out to them as soon as possible.</p>
      </div>
    `,
  };

  sgMail
    .send(msg)
    .then(() => {
      logger.info("Email sent");
      response.status(200).send({success: true, message: "Email Sent!"});
    })
    .catch((error) => {
      logger.error(error);
      response
        .status(500)
        .send({success: false, message: "Failed to send the email!"});
    });
});
