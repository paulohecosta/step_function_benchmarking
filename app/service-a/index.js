const mockResponse = () => {
    return {
        "statusCode": 200,
        "body": JSON.stringify({
            "message": "Service A Completed!!!"
        })
    }
}

const fakeService = () => {
    return new Promise(function(resolve) {
        setTimeout(resolve, 1000);
    });
}

const lambdaHandler = async () => {
    console.log('Fake service calls starts!');
    await fakeService();
    await fakeService();
    await fakeService();
    await fakeService();
    console.log('Fake service calls ends!');
    return mockResponse();
}

module.exports = {
    lambdaHandler
}