import moment from 'moment';
import 'moment/locale/id';

const monthYear = (date) => {
  return moment(date).format('MMMM YYYY');
};

const fullDate = (date) => {
  return moment(date).format('DD MMMM YYYY');
};

const fullDateWithDash = (date) => {
  return moment(date).format('DD-MMMM-YYYY');
};

const twoDigitWithDash = (date) => {
  return moment(date).format('DD-MM-YYYY');
};

const fullDateFromUnix = (unix) => {
  return moment.unix(unix / 1000).format('DD MMMM YYYY');
};

const logDate = (date) => {
  return moment(date).format('DD/MM/YYYY HH:mm:ss');
};

const parseTimeAgo = (date) => {
  return moment(date).fromNow();
};

export default {
  monthYear,
  fullDate,
  fullDateFromUnix,
  logDate,
  fullDateWithDash,
  twoDigitWithDash,
  parseTimeAgo,
};
