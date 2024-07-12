import AWS from 'aws-sdk'
import bcrypt from 'bcrypt'

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const createUser = async (item, tableName) => {
  try {
    const timestamp = new Date().toISOString();
    const params = {
      "TableName": tableName,
      "Item": {
        ...item,
        createdAt: timestamp,
        updatedAt: timestamp
      },
    };

    return dynamoDb.put(params).promise()

  } catch (error) {
    console.error(error)
    throw error
  }
}
