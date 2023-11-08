import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";

import { environment } from "../../../environments/environment";

import { NotificationService } from "../notifications/notification.service";

import { marker } from "@colsen1991/ngx-translate-extract-marker";

/** Application-wide error handler that adds a UI notification to the error handling
 * provided by the default Angular ErrorHandler.
 */
@Injectable()
export class AppErrorHandler extends ErrorHandler {
  constructor(private notificationsService: NotificationService) {
    super();
  }

  handleError(error: Error | HttpErrorResponse) {
    let displayMessage;

    if (!environment.production) {
      displayMessage = marker("ww.common.notifications.error.dev");
    } else {
      displayMessage = marker("ww.common.notifications.error.general");
    }

    this.notificationsService.translated(displayMessage, {}, "error");

    super.handleError(error);
  }
}
