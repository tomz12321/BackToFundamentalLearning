const aws = require('aws-sdk')
const ses = new aws.SES({region: 'us-east-1'});
var moment = require('moment');


const fromEmail = process.env.EMAIL_FWW
const toEmail = process.env.RECIPIENT_FWW
const itsEmail = process.env.ITS_FWW
const myDomain = process.env.DOMAIN


function generateResponse (code, payload) {
  return {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': myDomain,
      'Access-Control-Allow-Headers': 'x-requested-with',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(payload)
  }
}

function generateError (code, err) {
  console.log(err)
  return {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': myDomain,
      'Access-Control-Allow-Headers': 'x-requested-with',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(err.message)
  }
}

function generate_email_content(form_name, message_content) {
  let content = `
  <html>
  <h1>Web submission</h1>
  <h2>${form_name}</h2>
  <hr>
  <p>
      A submission has been made on the www.forexworldwide.com website.
  </p>
  <p>
      This submission is in regard to 
      <span style="font-weight: 600">
          ${form_name}
      </span>
  </p>

  <table>
    ${generate_date_time()}
    ${message_content}
  </table>
  <hr/>
  </html>
  `;
  return content;
}

function generate_date_time() {
  let content = `
      <tr>
          <th style="text-align: left">Submission Date</th>
          <td>${moment().utcOffset("+11:00").format('D MMM, YYYY')}</td>
      </tr>
      <tr>
          <th style="text-align: left">Submission Time</th>
          <td>${moment().utcOffset("+11:00").format('HH:mm:ss')}</td>
      </tr>
      `;
      return content;
}

function generate_contact_us_sidebar (body) {
  const { email, name, telephone, message } = JSON.parse(body)
  console.log(email, name, telephone, message)
  if (!(email)) {
    throw new Error('Missing parameters! Make sure to add parameters \'email\'.')
  }

  let message_content = `
      <tr>
          <th style="text-align: left">name</th>
          <td>${name}</td>
      </tr>
      <tr>
          <th style="text-align: left">email</th>
          <td>${email}</td>
      </tr>
      <tr>
          <th style="text-align: left">telephone</th>
          <td>${telephone}</td>
      </tr>
      <tr>
          <th style="text-align: left">message</th>
          <td>${message}</td>
      </tr>
  `;
  let html_content = generate_email_content("Contact Us SideBar", message_content);

  return {
    Source: fromEmail,
    ReplyToAddresses: [fromEmail],
    Destination: { ToAddresses: [toEmail], BccAddresses: [itsEmail] },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: html_content
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Web Submission: Contact Us Sidebar`
      }
    }
  }
}

function generate_introducers_enquiry (body) {
  const { email, name, telephone } = JSON.parse(body)
  console.log(email, name, telephone)
  if (!(email)) {
    throw new Error('Missing parameters! Make sure to add parameters \'email\'.')
  }

  let message_content = `
      <tr>
          <th style="text-align: left">name</th>
          <td>${name}</td>
      </tr>
      <tr>
          <th style="text-align: left">email</th>
          <td>${email}</td>
      </tr>
      <tr>
          <th style="text-align: left">telephone</th>
          <td>${telephone}</td>
      </tr>
  `;
  let html_content = generate_email_content("Introducers Enquiry", message_content);

  return {
    Source: fromEmail,
    ReplyToAddresses: [fromEmail],
    Destination: { ToAddresses: [toEmail], BccAddresses: [itsEmail] },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: html_content
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Web Submission: Introducers Enquiry`
      }
    }
  }
}


function generate_app_interest_enquiry (body) {
  const { email, name } = JSON.parse(body)
  console.log(email, name, telephone)
  if (!(email)) {
    throw new Error('Missing parameters! Make sure to add parameters \'email\'.')
  }

  let message_content = `
      <tr>
          <th style="text-align: left">name</th>
          <td>${name}</td>
      </tr>
      <tr>
          <th style="text-align: left">email</th>
          <td>${email}</td>
      </tr>
  `;
  let html_content = generate_email_content("Mobile App Expression of Interest", message_content);

  return {
    Source: fromEmail,
    ReplyToAddresses: [fromEmail],
    Destination: { ToAddresses: [toEmail], BccAddresses: [itsEmail] },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: html_content
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Web Submission: Mobile App Expression of Interest`
      }
    }
  }
}

function generate_forward_enquiry (body) {
  const { email, name, telephone, currency_pair, message } = JSON.parse(body)
  if (!(email)) {
    throw new Error('Missing parameters! Make sure to add parameters \'email\'.')
  }

  let message_content = `
      <tr>
          <th style="text-align: left">name</th>
          <td>${name}</td>
      </tr>
      <tr>
          <th style="text-align: left">email</th>
          <td>${email}</td>
      </tr>
      <tr>
          <th style="text-align: left">telephone</th>
          <td>${telephone}</td>
      </tr>
      <tr>
        <th style="text-align: left">currency_pair</th>
        <td>${currency_pair}</td>
      </tr>
      <tr>
       <th style="text-align: left">message</th>
       <td>${message}</td>
      </tr>
      `;
  let html_content = generate_email_content("FX Forward Enquiry", message_content);

  return {
    Source: fromEmail,
    ReplyToAddresses: [fromEmail],
    Destination: { ToAddresses: [toEmail], BccAddresses: [itsEmail] },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: html_content
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Web Submission: FX Forward Enquiry`
      }
    }
  }
}


function generate_limit_order_enquiry (body) {
  const { email, name, telephone, currency_pair, rate, message } = JSON.parse(body)
  if (!(email)) {
    throw new Error('Missing parameters! Make sure to add parameters \'email\'.')
  }

  let message_content = `
      <tr>
          <th style="text-align: left">name</th>
          <td>${name}</td>
      </tr>
      <tr>
          <th style="text-align: left">email</th>
          <td>${email}</td>
      </tr>
      <tr>
          <th style="text-align: left">telephone</th>
          <td>${telephone}</td>
      </tr>
      <tr>
          <th style="text-align: left">currency_pair</th>
          <td>${currency_pair}</td>
      </tr>
      <tr>
          <th style="text-align: left">rate</th>
          <td>${rate}</td>
      </tr>
      <tr>
          <th style="text-align: left">message</th>
          <td>${message}</td>
      </tr>
  `;
  let html_content = generate_email_content("FX Limit Order Enquiry", message_content);

  return {
    Source: fromEmail,
    ReplyToAddresses: [fromEmail],
    Destination: { ToAddresses: [toEmail], BccAddresses: [itsEmail] },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: html_content
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Web Submission: FX Limit Order Enquiry`
      }
    }
  }
}


function generate_country_detail_dialog_partial (body) {
  const { name, email, telephone, country_from_name, country_to_name, base_currency, terms_currency, from_amount, to_amount } = JSON.parse(body)
  if (!(email)) {
    throw new Error('Missing parameters! Make sure to add parameters \'email\'.')
  }

  let message_content = `
      <tr>
          <th style="text-align: left">name</th>
          <td>${name}</td>
      </tr>
      <tr>
          <th style="text-align: left">email</th>
          <td>${email}</td>
      </tr>
      <tr>
          <th style="text-align: left">telephone</th>
          <td>${telephone}</td>
      </tr>
      <tr>
          <th style="text-align: left">country_from_name</th>
          <td>${country_from_name}</td>
      </tr>
      <tr>
          <th style="text-align: left">country_to_name</th>
          <td>${country_to_name}</td>
      </tr>
      <tr>
          <th style="text-align: left">base_currency</th>
          <td>${base_currency}</td>
      </tr>
      <tr>
          <th style="text-align: left">terms_currency</th>
          <td>${terms_currency}</td>
      </tr>
      <tr>
          <th style="text-align: left">from_amount</th>
          <td>${from_amount}</td>
      </tr>
      <tr>
          <th style="text-align: left">to_amount</th>
          <td>${to_amount}</td>
      </tr>
  `;
  let html_content = generate_email_content("INTERACTION: Country Detail Dialog", message_content);

  return {
    Source: fromEmail,
    ReplyToAddresses: [fromEmail],
    Destination: { ToAddresses: [itsEmail] },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: html_content
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Website Interaction: Country Detail Dialog`
      }
    }
  }
}


function generate_country_detail_dialog_quotation (body) {
  const { name, email, telephone, country_from_name, country_to_name, base_currency, terms_currency, from_amount, to_amount, quick_select_override } = JSON.parse(body)
  if (!(email)) {
    throw new Error('Missing parameters! Make sure to add parameters \'email\'.')
  }

  let message_content = `
      <tr>
          <th style="text-align: left">name</th>
          <td>${name}</td>
      </tr>
      <tr>
          <th style="text-align: left">email</th>
          <td>${email}</td>
      </tr>
      <tr>
          <th style="text-align: left">telephone</th>
          <td>${telephone}</td>
      </tr>
      <tr>
          <th style="text-align: left">country_from_name</th>
          <td>${country_from_name}</td>
      </tr>
      <tr>
          <th style="text-align: left">country_to_name</th>
          <td>${country_to_name}</td>
      </tr>
      <tr>
          <th style="text-align: left">base_currency</th>
          <td>${base_currency}</td>
      </tr>
      <tr>
          <th style="text-align: left">terms_currency</th>
          <td>${terms_currency}</td>
      </tr>
      <tr>
          <th style="text-align: left">from_amount</th>
          <td>${from_amount}</td>
      </tr>
      <tr>
          <th style="text-align: left">to_amount</th>
          <td>${to_amount}</td>
      </tr>
      <tr>
          <th style="text-align: left">quick_select_override</th>
          <td>${quick_select_override}</td>
      </tr>
  `;
  let html_content = generate_email_content("Country Detail Dialog", message_content);

  return {
    Source: fromEmail,
    ReplyToAddresses: [fromEmail],
    Destination: { ToAddresses: [toEmail], BccAddresses: [itsEmail] },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: html_content
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Website Submission: Country Detail Dialog`
      }
    }
  }
}

function generate_currency_detail_dialog_partial (body) {
  const { name, email, telephone, currency_from_code, currency_to_code, message } = JSON.parse(body)
  if (!(email)) {
    throw new Error('Missing parameters! Make sure to add parameters \'email\'.')
  }

  let message_content = `
      <tr>
          <th style="text-align: left">name</th>
          <td>${name}</td>
      </tr>
      <tr>
          <th style="text-align: left">email</th>
          <td>${email}</td>
      </tr>
      <tr>
          <th style="text-align: left">telephone</th>
          <td>${telephone}</td>
      </tr>
      <tr>
          <th style="text-align: left">currency_from_code</th>
          <td>${currency_from_code}</td>
      </tr>
      <tr>
          <th style="text-align: left">currency_to_code</th>
          <td>${currency_to_code}</td>
      </tr>
      <tr>
          <th style="text-align: left">message</th>
          <td>${message}</td>
      </tr>
  `;
  let html_content = generate_email_content("INTERACTION: Currency Calculator", message_content);

  return {
    Source: fromEmail,
    ReplyToAddresses: [fromEmail],
    Destination: { ToAddresses: [itsEmail] },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: html_content
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Website Interaction: Currency Calculator`
      }
    }
  }
}


function generate_currency_detail_dialog_quotation (body) {
  const { name, email, telephone, currency_from_code, currency_to_code, message } = JSON.parse(body)
  if (!(email)) {
    throw new Error('Missing parameters! Make sure to add parameters \'email\'.')
  }

  let message_content = `
      <tr>
      <th style="text-align: left">name</th>
      <td>${name}</td>
    </tr>
    <tr>
      <th style="text-align: left">email</th>
      <td>${email}</td>
    </tr>
    <tr>
      <th style="text-align: left">telephone</th>
      <td>${telephone}</td>
    </tr>
    <tr>
      <th style="text-align: left">currency_from_code</th>
      <td>${currency_from_code}</td>
    </tr>
    <tr>
      <th style="text-align: left">currency_to_code</th>
      <td>${currency_to_code}</td>
    </tr>
    <tr>
      <th style="text-align: left">message</th>
      <td>${message}</td>
    </tr>
  `;
  let html_content = generate_email_content("Currency Calculator", message_content);

  return {
    Source: fromEmail,
    ReplyToAddresses: [fromEmail],
    Destination: { ToAddresses: [toEmail], BccAddresses: [itsEmail] },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: html_content
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Website Submission: Currency Calculator`
      }
    }
  }
}


function generate_registration_interaction (body) {
  const { values } = JSON.parse(body)
  // if (!(email)) {
  //   throw new Error('Missing parameters! Make sure to add parameters \'email\'.')
  // }

  let message_content = ``;
  Object.keys(values).forEach(function (key) {
    console.log(key, values[key]);
    message_content += `
    <tr>
        <th style="text-align: left">${key}</th>
        <td>${values[key]}</td>
    </tr>
    `;
  });

  let html_content = generate_email_content("WEB INTERACTION: Registration", message_content);

  return {
    Source: fromEmail,
    ReplyToAddresses: [fromEmail],
    Destination: { ToAddresses: [itsEmail] },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: html_content
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Website Interaction: Registration`
      }
    }
  }
}


function generate_registration_submission (body) {
  const { values } = JSON.parse(body)
  // if (!(email)) {
  //   throw new Error('Missing parameters! Make sure to add parameters \'email\'.')
  // }

  let message_content = ``;
  Object.keys(values).forEach(function (key) {
    console.log(key, values[key]);
    message_content += `
    <tr>
        <th style="text-align: left">${key}</th>
        <td>${values[key]}</td>
    </tr>
    `;
  });

  let html_content = generate_email_content("Registration", message_content);

  return {
    Source: fromEmail,
    ReplyToAddresses: [fromEmail],
    Destination: { ToAddresses: [toEmail], BccAddresses: [itsEmail] },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: html_content
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Website Submission: Registration`
      }
    }
  }
}


module.exports.contact_us_sidebar = async (event) => {
  try {
    const emailParams = generate_contact_us_sidebar(event.body)
    const data = await ses.sendEmail(emailParams).promise()
    return generateResponse(200, data)
  } catch (err) {
    return generateError(500, err)
  }
}

module.exports.introducers_enquiry = async (event) => {
  try {
    const emailParams = generate_introducers_enquiry(event.body)
    const data = await ses.sendEmail(emailParams).promise()
    return generateResponse(200, data)
  } catch (err) {
    return generateError(500, err)
  }
}

module.exports.app_interest = async (event) => {
  try {
    const emailParams = generate_app_interest_enquiry(event.body)
    const data = await ses.sendEmail(emailParams).promise()
    return generateResponse(200, data)
  } catch (err) {
    return generateError(500, err)
  }
}

module.exports.fx_forward_enquiry = async (event) => {
  try {
    const emailParams = generate_forward_enquiry(event.body)
    const data = await ses.sendEmail(emailParams).promise()
    return generateResponse(200, data)
  } catch (err) {
    return generateError(500, err)
  }
}

module.exports.fx_limit_order_enquiry = async (event) => {
  try {
    const emailParams = generate_limit_order_enquiry(event.body)
    const data = await ses.sendEmail(emailParams).promise()
    return generateResponse(200, data)
  } catch (err) {
    return generateError(500, err)
  }
}

module.exports.country_detail_dialog_partial = async (event) => {
  try {
    const emailParams = generate_country_detail_dialog_partial(event.body)
    const data = await ses.sendEmail(emailParams).promise()
    return generateResponse(200, data)
  } catch (err) {
    return generateError(500, err)
  }
}

module.exports.country_detail_dialog_quotation = async (event) => {
  try {
    const emailParams = generate_country_detail_dialog_quotation(event.body)
    const data = await ses.sendEmail(emailParams).promise()
    return generateResponse(200, data)
  } catch (err) {
    return generateError(500, err)
  }
}

module.exports.currency_detail_dialog_partial = async (event) => {
  try {
    const emailParams = generate_currency_detail_dialog_partial(event.body)
    const data = await ses.sendEmail(emailParams).promise()
    return generateResponse(200, data)
  } catch (err) {
    return generateError(500, err)
  }
}

module.exports.currency_detail_dialog_quotation = async (event) => {
  try {
    const emailParams = generate_currency_detail_dialog_quotation(event.body)
    const data = await ses.sendEmail(emailParams).promise()
    return generateResponse(200, data)
  } catch (err) {
    return generateError(500, err)
  }
}

module.exports.registration_interaction = async (event) => {
  try {
    const emailParams = generate_registration_interaction(event.body)
    const data = await ses.sendEmail(emailParams).promise()
    return generateResponse(200, data)
  } catch (err) {
    return generateError(500, err)
  }
}

module.exports.registration_submission = async (event) => {
  try {
    const emailParams = generate_registration_submission(event.body)
    const data = await ses.sendEmail(emailParams).promise()
    return generateResponse(200, data)
  } catch (err) {
    return generateError(500, err)
  }
}
