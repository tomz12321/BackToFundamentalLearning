// import AWS from "aws-sdk";
// AWS.config.update({ region: "ap-southeast-2" });

import { generateResponse, generateError } from '../../../library/responses';
var mysql = require("../../../library/database.js");
import axios from "axios";


module.exports.by_id = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  try {
      var condition = {id: event.pathParameters.id};
      let results = await mysql.query("UPDATE clients SET ? WHERE ?", [data, condition])
      await mysql.quit()

      //return generateResponse(200, results)

      var dte = new Date();
      var sec_keys = dte.getUTCFullYear() +'-'+ dte.getDate().toString().padStart(4, '0')+'-'+
                     dte.getDay().toString().padStart(4, '0')+'-'+ dte.getDate().toString().padStart(4, '0');

      data.secret_keys = sec_keys;
      data.id = event.pathParameters.id;

      let axiosConfig = {
         headers: {
            "Access-Control-Allow-Origin": "*",
         }
      };

      const res = await axios.post('https://forexsport.com/API/update_client.php', {data: data}, axiosConfig)
      const response = {
          statusCode: 200,
          headers: {
             "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
          },
          body: JSON.stringify(database_result),
      };

      callback(null, response);

  } catch (err) {
    //return generateError(500, err)

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

export async function by_aws_id(event, context) {
  const data = JSON.parse(event.body);
  try {
    var condition = {aws_cognito_id: event.pathParameters.aws_cognito_id};
    let results = await mysql.query("UPDATE clients SET ? WHERE ?", [data, condition])
    await mysql.quit()
  return generateResponse(200, results)
  } catch (err) {
    return generateError(500, err)
  }
}
