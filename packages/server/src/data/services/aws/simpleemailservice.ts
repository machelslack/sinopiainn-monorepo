require("dotenv").config();

const AWS = require("aws-sdk");

const ses = new AWS.SES();

const params = {
  Destination: {
    ToAddresses: [process.env.TO_EMAIL]
  },
  Message: {
    Body: {
      Html: {
        Charset: "UTF-8",
        Data:
          'This message body contains HTML formatting. It can, for example, contain links like this one: <a class="ulink" href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide" target="_blank">Amazon SES Developer Guide</a>.'
      },
      Text: {
        Charset: "UTF-8",
        Data: "This is the message body in text format."
      }
    },
    Subject: {
      Charset: "UTF-8",
      Data: "Test email from code"
    }
  },
  ReturnPath: process.env.FROM_EMAIL,
  Source: process.env.FROM_EMAIL
};

export const aws_ses_client = (enquiry: any, resolve: any, reject: any) => {
  console.log('🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨')
  resolve(enquiry);
  // ses.sendEmail(params, (err: any, data: any) => {
  //   if (err) {reject(err),console.log('🚨🚨🚨',err, err.stack)}
  //   else {resolve(data),console.log(data)};
  // });
};

// // Load the AWS SDK for Node.js
// var AWS = require("aws-sdk");
// // Set the region
// AWS.config.update({ region: "REGION" });

// // Create sendEmail params
// var params = {
//   Destination: {
//     /* required */
//     CcAddresses: [
//       "EMAIL_ADDRESS"
//       /* more items */
//     ],
//     ToAddresses: [
//       "machel.slack@icloud.com"
//       /* more items */
//     ]
//   },
//   Message: {
//     /* required */
//     Body: {
//       /* required */
//       Html: {
//         Charset: "UTF-8",
//         Data: "HTML_FORMAT_BODY"
//       },
//       Text: {
//         Charset: "UTF-8",
//         Data: "TEXT_FORMAT_BODY"
//       }
//     },
//     Subject: {
//       Charset: "UTF-8",
//       Data: "Test email"
//     }
//   },
//   Source: "SENDER_EMAIL_ADDRESS" /* required */,
//   ReplyToAddresses: [
//     "EMAIL_ADDRESS"
//     /* more items */
//   ]
// };

// export const aws_ses_client = (enquiry: any, resolve: any, reject: any) => {
//   // Create the promise and SES service object
//   var sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
//     .sendEmail(params)
//     .promise();

//   // Handle promise's fulfilled/rejected states
//   sendPromise
//     .then(function(data: any) {
//       console.log(data.MessageId);
//       console.log(`💃💃💃💃💃`, data.MessageId);
//       resolve(data);
//     })
//     .catch(function(err: any) {
//       console.error(err, err.stack);
//       reject({ ERROR: err.message });
//     });
// };
