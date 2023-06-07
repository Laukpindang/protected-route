import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal, Button } from 'antd';
import axios from 'axios';
import cookie from './cookie.js';

const { confirm } = Modal;

const onClose = () => {
  Modal.destroyAll();
  window.location.href = '/';
  cookie.removeCookie('user');
};

const interceptor = () => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        confirm({
          title: 'Sesi Anda Telah Berakhir',
          icon: <ExclamationCircleFilled />,
          content: 'Anda akan dialihkan ke halaman login',
          onClose: onClose,
          footer: (
            <div className="flex justify-end">
              <Button type="primary" height="36px" onClick={onClose}>
                Ok
              </Button>
            </div>
          ),
        });
      }
      throw error;
    }
  );
};

export default interceptor;
