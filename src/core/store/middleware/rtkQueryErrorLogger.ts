import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';

import {
  AppNotification,
  NotificationType,
} from '../../../components/Notification/Notification';

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
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

  return next(action);
};
