const mockResponse = () => {
    return {
        "statusCode": 200,
        "body": JSON.stringify({
            "message": "Microservice Completed!!!"
        })
    }
}

const fakeService = () => {
    return new Promise(function(resolve) {
        setTimeout(resolve, 1000);
    });
}

const lambdaHandler = async () => {
    console.log('Fake microservice calls starts!');
    await fakeService();
    console.log('Fake microservice calls ends!');
    return mockResponse();
}

module.exports = {
    lambdaHandler
}