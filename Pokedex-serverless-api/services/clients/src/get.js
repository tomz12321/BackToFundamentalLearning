import { generateResponse, generateError } from '../../../library/responses';
//var mysql = require("../../../library/database.js");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

// const fields_for_list = `id, aws_cognito_id, first_name, last_name, email, telephone_mobile, residential_street_suburb, residential_street_country`;

export function all(event, context, callback) {
  // Request body is passed in as a JSON encoded string in 'event.body'
  // const data = JSON.parse(event.body);

  const params = {
    TableName: "notes",
    // 'Item' contains the attributes of the item to be created
    // - 'userId': user identities are federated through the
    //             Cognito Identity Pool, we will use the identity id
    //             as the user id of the authenticated user
    // - 'noteId': a unique uuid
    // - 'content': parsed from request body
    // - 'attachment': parsed from request body
    // - 'createdAt': current Unix timestamp
    Item: {
      userid: "1",
      noteid: "2"
    }
  };

  dynamoDb.put(params, (error, data) => {
    // Set response headers to enable CORS (Cross-Origin Resource Sharing)
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    };

    // Return status code 500 on error
    if (error) {
      const response = {
        statusCode: 500,
        headers: headers,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
      return;
    }

    // Return status code 200 and the newly created item
    const response = {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify(params.Item)
    };
    callback(null, response);
  });
}

module.exports.all2 = async (event) => {
  try {
    // let results = await mysql.query('SHOW tables');
    // await mysql.quit();
      
      return generateResponse(200, mysql)//results)
  } catch (err) {
    return generateError(500, err)
  }
};

// module.exports.list_not_deleted = async (event) => {
//   try {
//     let sql = `SELECT clients.id,
//        clients.aws_cognito_id,
//        clients.first_name,
//        clients.last_name,
//        clients.email,
//        clients.telephone_mobile,
//        clients.residential_street_suburb,
//        clients.residential_street_country,
//        clients.team_id as "team_id",
//        teams.nickname as "team_nickname",
//        teams.division_id as "division_id",
//        divisions.nickname as "division_nickname",
//        divisions.entity_id as "entity_id",
//        entities.nickname as "entity_nickname"
// FROM clients, teams, divisions, entities
// WHERE clients.team_id = teams.id
//   AND teams.division_id = divisions.id
//   AND divisions.entity_id = entities.id
//       AND clients.deleted = "FALSE";`;
//     let results = await mysql.query(sql);
//     await mysql.quit();
    
//     return generateResponse(200, results)
//   } catch (err) {
//     return generateError(500, err)
//   }
// };


module.exports.list_not_deleted = async (event) => {
  try {
    const cognitoAuthenticationProvider = event.requestContext.identity.cognitoAuthenticationProvider.split(":");
    const cognitoId = cognitoAuthenticationProvider[2];
    var condition = {aws_cognito_id: cognitoId};
    let staff_results = await mysql.query(`SELECT * FROM staff_members WHERE ?`, [condition])
    await mysql.quit()
    const staff_id = staff_results[0].id;

    let sql = `SELECT DISTINCT clients.id,
                  clients.aws_cognito_id,
                  clients.first_name,
                  clients.last_name,
                  clients.nickname,
                  clients.email,
                  clients.telephone_mobile,
                  clients.residential_street_suburb,
                  clients.residential_street_country,
                  clients.team_id as "team_id",
                  teams.nickname as "team_nickname",
                  teams.division_id as "division_id",
                  divisions.nickname as "division_nickname",
                  divisions.entity_id as "entity_id",
                  entities.nickname as "entity_nickname"
                FROM clients, teams, divisions, entities, staff_team_access, staff_division_access, staff_entity_access
  WHERE clients.team_id = teams.id
    AND teams.division_id = divisions.id
    AND divisions.entity_id = entities.id
    AND clients.deleted = "false"
    AND (
         clients.responsible_staff_member = ?
        OR
          ( staff_team_access.staff_id = ? 
            AND staff_team_access.team_id = clients.team_id
            AND staff_team_access.access > 2)
          OR
          ( staff_division_access.staff_id = ? 
            AND staff_division_access.division_id = teams.division_id
            AND staff_division_access.access > 2)
          OR
          ( staff_entity_access.staff_id = ? 
            AND staff_entity_access.entity_id = divisions.entity_id
            AND staff_entity_access.access > 2)
        )`;

    if (staff_results[0].super_admin === 1) {
      sql = `SELECT DISTINCT clients.id,
                  clients.aws_cognito_id,
                  clients.first_name,
                  clients.last_name,
                  clients.nickname,
                  clients.email,
                  clients.telephone_mobile,
                  clients.residential_street_suburb,
                  clients.residential_street_country,
                  clients.team_id as "team_id",
                  teams.nickname as "team_nickname",
                  teams.division_id as "division_id",
                  divisions.nickname as "division_nickname",
                  divisions.entity_id as "entity_id",
                  entities.nickname as "entity_nickname"
                FROM clients, teams, divisions, entities
                WHERE clients.team_id = teams.id
                  AND teams.division_id = divisions.id
                  AND divisions.entity_id = entities.id
                  AND clients.deleted = "false"`;
    }


    let results = await mysql.query(sql, [staff_id, staff_id, staff_id, staff_id]);
    await mysql.quit();
    
    return generateResponse(200, results)
  } catch (err) {
    return generateError(500, err)
  }
};

module.exports.list_deleted = async (event) => {
  try {
    let results = await mysql.query(`SELECT ${fields_for_list} FROM clients WHERE deleted = "true"`);

    await mysql.quit();

    return generateResponse(200, results)
  } catch (err) {
    return generateError(500, err)
  }
};

module.exports.list = async (event) => {
  try {
    let results = await mysql.query(`SELECT ${fields_for_list} FROM clients`);

    await mysql.quit();

    return generateResponse(200, results)
  } catch (err) {
    return generateError(500, err)
  }
};

module.exports.by_aws_id = async (event) => {
  try {
    const aws_cognito_id = event.pathParameters.aws_cognito_id;

    let results = await mysql.query('SELECT * FROM clients WHERE ?', {aws_cognito_id: aws_cognito_id});
    await mysql.quit();

    return generateResponse(200, results[0])
  } catch (err) {
    return generateError(500, err)
  }
};

module.exports.by_id = async (event) => {
  try {
    const id = event.pathParameters.id;

    let results = await mysql.query('SELECT * FROM clients WHERE ?', {id: id});
    await mysql.quit();

    return generateResponse(200, results[0])
  } catch (err) {
    return generateError(500, err)
  }
};

