import request from 'axios';
import {toast} from 'react-toastify';
import { HTTP_CODE } from '../types/enums/route.enum';
import { ErrorType } from '../types/error';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }
  const {response} = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
      case HTTP_CODE.UNAUTHORIZED:
      case HTTP_CODE.NOT_FOUND:
        toast.info(response.data.error);
        break;
    }
  }
};
