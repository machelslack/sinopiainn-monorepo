import { todaysDate } from "../../../utils/date";

const mandrill = require("mandrill-api/mandrill");

export const mailchimp_client = (enquiry: any,resolve:any,reject:any) => {
  const mandrill_client = new mandrill.Mandrill("fix_HqmjREpZnCAHR_Dhaw");

  var template_name = "Enquiry received";

  var template_content = [
    {
      name: "",
      content: ""
    }
  ];

  var message = {
    subject: "Sinopia Inn New Enquiry",
    from_email: "info@sinopiainn.com",
    from_name: "Sinopia Inn",
    to: [
      {
        email: enquiry.email,
        name: `${enquiry.fname} ${enquiry.lname}`,
        type: "to"
      }
    ],

    headers: {
      "Reply-To": "beverley.bryan@sinopiainn.com"
    },

    important: false,
    track_opens: null,
    track_clicks: null,
    auto_text: null,
    auto_html: null,
    inline_css: null,
    url_strip_qs: null,
    preserve_recipients: null,
    view_content_link: null,
    bcc_address: "machel.slack@icloud.com",
    tracking_domain: null,
    signing_domain: null,
    return_path_domain: null,
    merge: true,
    merge_language: "handlebars",
    global_merge_vars: [
      {
        name: "name",
        content: `${enquiry.fname} ${enquiry.lname}`
      },
      {
        name: "message",
        content: enquiry.message
      },
      {
        name: "date",
        content: todaysDate()
      },
      {
        name: "email",
        content: enquiry.email
      }
    ],
    merge_vars: [
      {
        rcpt: "recipient.email@example.com",
        vars: [
          {
            name: "merge2",
            content: "merge2 content"
          }
        ]
      }
    ],

    metadata: {
      website: "www.sinopiainn.com"
    }
  };

  var async = false;
  var ip_pool = "Main Pool";
  var send_at = "2016-10-10 23:59:59";

  mandrill_client.messages.sendTemplate(
    {
      template_name: template_name,
      template_content: template_content,
      message: message,
      async: async,
      ip_pool: ip_pool,
      send_at: send_at
    },
    (result: any) => {

        console.log(`💃💃💃💃💃`,result);
        resolve(result)
    },
    (e: any) => {

        console.log(`💃💃💃💃💃`,e);
      if (e) {
        reject({ ERROR: e.message });
      }

      /* return  console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message); */
    }
  );
};
