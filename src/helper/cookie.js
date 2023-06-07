import cookie from 'js-cookie';

const setCookie = (name, value) => {
  const json = JSON.stringify(value);
  cookie.set(name, json, { expires: 1 });
};

const removeCookie = (name) => {
  cookie.remove(name);
};

const getCookie = (name) => {
  const data = cookie.get(name);
  return data ? JSON.parse(data) : { full_name: '' };
};

export default {
  setCookie,
  removeCookie,
  getCookie,
};
