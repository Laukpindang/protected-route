import axios from 'axios';
import { Cookie, Date as dt } from '.';
import interceptor from './interceptor';

const GET = 'get';
const PATCH = 'patch';
const PUT = 'put';
const POST = 'post';
const DELETE = 'delete';

const downloadFile = (response, file = 'Format', format = 'xlsx') => {
  const fileName = file + '-' + dt.logDate(Date.now());

  const url = window.URL.createObjectURL(new Blob([response]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${fileName}.${format}`);
  document.body.appendChild(link);
  link.click();
};

export const api = ({ url, method, body, headers, isDownload }) => {
  let config = {
    url: `${process.env.REACT_APP_API_URL}/${url}`,
    method: method,
    data: body,
    headers: headers,
    timeout: 300000,
  };

  if (isDownload) {
    config = {
      ...config,
      responseType: 'blob',
    };
  }

  return axios(config);
};

const apiRequest = async ({ method, url, payload = {}, isDownload, format = 'xlsx', fileName }) => {
  let body = null;
  let headers = {
    'Content-Type': 'application/json',
  };

  interceptor();

  const user = Cookie.getCookie('user');

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
    if (isDownload) {
      downloadFile(response?.data, fileName, format);
    }
    return response.data;
  } catch ({ response }) {
    throw response.data;
  }
};

// function to execute the http get request
const get = ({ url, isDownload = false, fileName, format }) =>
  apiRequest({ url: url, method: GET, isDownload, fileName, format });

// function to execute the http delete request
const deleteRequest = ({ url, payload }) =>
  apiRequest({ method: DELETE, url: url, payload: payload });

// function to execute the http post request
const post = ({ url, payload }) => apiRequest({ method: POST, url: url, payload: payload });

// function to execute the http put request
const put = ({ url, payload }) => apiRequest({ method: PUT, url: url, payload: payload });

// function to execute the http path request
const patch = ({ url, payload }) => apiRequest({ method: PATCH, url: url, payload: payload });

export default {
  get,
  deleteRequest,
  post,
  put,
  patch,
};
