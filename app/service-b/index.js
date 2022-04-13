const AWS = require('aws-sdk');

const mockResponse = () => {
    return {
        "statusCode": 200,
        "body": JSON.stringify({
            "message": "Service B Completed!!!"
        })
    }
}

const invokeStepFunSync = () => {
    return new Promise(function (resolve, reject) {
        const stepfunctions = new AWS.StepFunctions({apiVersion: '2016-11-23'});
        const smArn = process.env.SFUN_ARN;
        const params = {
            stateMachineArn: smArn,
            input: '{}'
        };
        console.log(`starting ${smArn}...`);
        stepfunctions.startSyncExecution(params, function (err, data) {
            if (err) {
                console.log(err);
                reject(err)
            }
            else {
                console.log(data);
                resolve(true)
            };
        });
    });
}

const lambdaHandler = async () => {
    console.log('Fake service calls starts!');
    await invokeStepFunSync();
    console.log('Fake service calls ends!');
    return mockResponse();
}

module.exports = {
    lambdaHandler
}