require("dotenv").config();

const AWS = require("aws-sdk");

const ses = new AWS.SES();

export const aws_ses_client = (enquiry: any, resolve: any, reject: any) => {
  const params = {
    Destination: {
      ToAddresses: [process.env.TO_EMAIL]
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `${enquiry['Message']}`
        },
        Text: {
          Charset: "UTF-8",
          Data: "This is the message body in text format."
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: `New enquiry from ${enquiry['First Name']} ${enquiry['Last Name']}`
      }
    },
    ReturnPath: process.env.FROM_EMAIL,
    Source: `${enquiry['Email']}`
  };
  ses.sendEmail(params, (err: any, data: any) => {
    if (err) {
      reject(err), console.log("🚨🚨🚨", err, err.stack);
    } else {
      resolve(data), console.log(data);
    }
  });
};
