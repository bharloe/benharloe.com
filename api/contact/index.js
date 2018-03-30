var AWS = require("aws-sdk");
var querystring = require('querystring');

AWS.config.region = "us-east-1";

module.exports.handler = (event, context, callback) => {
  var sns = new AWS.SNS();
  var name = querystring.parse(event.body).name;
  var email = querystring.parse(event.body).email;
  var category = querystring.parse(event.body).category;
  var message = querystring.parse(event.body).message;
  var eventData = `
  Sender: ${name}
  Email: ${email}
  Category: ${category}
  Message: ${message}
  `

  console.log("**************Event data**************", eventData);

  var params = {
    TargetArn: "arn:aws:sns:us-east-1:531830737663:professionalWebsite",
    Message: eventData,
    Subject: "Website Contact Form"
  };

  sns.publish(params, function(err, data) {
    if (err) {
      console.log("Error sending a message", err);
      callback(null, {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
        }
      });
    } else {
      console.log("Sent message:", data.MessageId);
      callback(null, {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
        },
        body: "Success"
      }); 
    }
  });
};
