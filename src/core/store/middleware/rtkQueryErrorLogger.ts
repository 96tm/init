import {
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
} from '@reduxjs/toolkit';

import {
  AppNotification,
  NotificationType,
} from '../../../components/Notification/Notification';
import { changeState as changeUserState } from '../user/userSlice';
import { changeState as changeAdminState } from '../admin/adminSlice';

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      if (action.payload.status === 401) {
        api.dispatch(changeUserState({ token: '', userId: null }));
        api.dispatch(changeAdminState({ token: '' }));
      } else {
        AppNotification({
          msg: JSON.stringify(
            action.payload.data
              ? action.payload.data?.errors &&
                  action.payload.data?.errors[0]?.detail
              : action.payload
          ),
          type: NotificationType.error,
        });
      }
    }

    return next(action);
  };
