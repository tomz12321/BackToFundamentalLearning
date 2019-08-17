
import { generateResponse, generateError } from '../../../library/responses';
var mysql = require("../../../library/database.js");
import axios from "axios";


module.exports.in_database = async (event, context, callback) => {
  try {
    const cognitoAuthenticationProvider = event.requestContext.identity.cognitoAuthenticationProvider.split(":");
    const aws_cognito_id = cognitoAuthenticationProvider[2];
    const condition = {aws_cognito_id: aws_cognito_id}
    let results = await mysql.query('SELECT id FROM staff_members WHERE ?', condition);
    await mysql.quit()
    const staff_id = results[0].id;

    const data = JSON.parse(event.body);

    data["record_created_datetime"] = new Date().toISOString().slice(0, 19).replace('T', ' ');
    data["record_modified_datetime"] = new Date().toISOString().slice(0, 19).replace('T', ' ');
    data["record_modified_staff"] = staff_id;

    let database_result = await mysql.query('INSERT INTO clients SET ?', data);
    await mysql.quit();

    // return generateResponse(200, database_result)
    var dte = new Date();
    var sec_keys = dte.getUTCFullYear() +'-'+ dte.getDate().toString().padStart(4, '0')+'-'+
        dte.getDay().toString().padStart(4, '0')+'-'+ dte.getDate().toString().padStart(4, '0');

    data.secret_keys = sec_keys;
    data.ben_crm_id = database_result.insertId;

    let axiosConfig = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    };

    const res = await axios.post('https://forexsport.com/API/add_client.php', {data: data}, axiosConfig)
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
      },
      body: JSON.stringify(database_result),
    };

    callback(null, response);

  } catch (err) {
    // return generateError(500, err)
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
      },
      body: JSON.stringify(database_result),
    };

    callback(null, response);
  }


};

