var AWS = require("aws-sdk");
var querystring = require('querystring');

AWS.config.region = "us-east-1";

module.exports.handler = (event, context, callback) => {
  var sns = new AWS.SNS();
  var eventData = JSON.parse(event.body)
  
  console.log("**************Event data**************", eventData);

  var params = {
    TargetArn: "arn:aws:sns:us-east-1:531830737663:professionalWebsite",
    Message: eventData.data,
    Subject: "Website Contact Form"
  };

  sns.publish(params, function(err, data) {
    if (err) {
      console.log("Error sending a message", err);
    } else {
      console.log("Sent message:", data.MessageId);
      callback(null, {
        statusCode: 200
      });
    }
  });
};
