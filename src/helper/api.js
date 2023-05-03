import axios from 'axios';

const GET = 'get';
const PUT = 'put';
const POST = 'post';
const DELETE = 'delete';

export const api = ({ url, method, body, headers, isDownload }) => {
  let config = {
    url: `${process.env.REACT_APP_API_URL}/${url}`,
    method: method,
    data: body,
    headers: headers,
  };

  if (isDownload) {
    config = {
      ...config,
      responseType: 'blob',
    };
  }

  return axios(config);
};

const apiRequest = async ({ method, url, payload = {}, isDownload }) => {
  let body = null;
  let headers = {
    'Content-Type': 'application/json',
  };

  const user = localStorage.getItem('user');

  if (user?.token) {
    headers = {
      ...headers,
      Authorization: `Token ${user.token}`,
    };
  }

  if (method !== GET) {
    body = payload;
  }

  try {
    const response = await api({ url, method, body, headers, isDownload });
    return response.data;
  } catch ({ response }) {
    throw response.data;
  }
};

const get = ({ url, isDownload = false, fileName, format }) =>
  apiRequest({ url: url, method: GET, isDownload, fileName, format });

const deleteRequest = ({ url, payload }) =>
  apiRequest({ method: DELETE, url: url, payload: payload });

const post = ({ url, payload }) => apiRequest({ method: POST, url: url, payload: payload });

const put = ({ url, payload }) => apiRequest({ method: PUT, url: url, payload: payload });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get,
  deleteRequest,
  post,
  put,
};
