import AWS from 'aws-sdk';

AWS.config.update({
    region: 'us-east-1',
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:bb0f4c96-69f5-4bd7-ae9d-9d297ee8da98',
    }),
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();
export default dynamoDb;