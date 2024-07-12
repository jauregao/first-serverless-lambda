import 'dotenv/config'
import response from '../../utils/response'

const usersTable = process.env.USER_TABLE

export async function createUser(event, context) {
  try {
    const body = JSON.parse(event.body);
    const res = await createUser(body, usersTable);

    return {
      response: response.sucess,
      body: JSON.stringify(res)
    };
  } catch (error) {
    return { ...response.error, body: JSON.stringify(error) }
  }
}
