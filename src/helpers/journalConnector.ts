import axios from 'axios';

// interface IAxios {
//   url: string,
//   headers: object,
//   method: string,
//   data: object
// }

const journalConnectors = async ({ url = '', headers= {}, method = 'GET', ...rest }) => {
  try {
    const { data } = await axios({
      url,
      method,
      ...headers,
      data: rest.body,
      ...rest
    });
    return data;
  } catch(err: any) {
    console.log(err);
    throw err;
  }
}

export default journalConnectors;