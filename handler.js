'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      message: 'Go Serverless v4.0! Your function executed successfully!',
      input: event,
    })
  };

  callback(null, response);
};
