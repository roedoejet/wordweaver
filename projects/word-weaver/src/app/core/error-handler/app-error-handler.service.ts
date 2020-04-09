import { Injectable, ErrorHandler } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { environment } from "../../../environments/environment";

import { NotificationService } from "../notifications/notification.service";

import { marker } from "@biesbjerg/ngx-translate-extract-marker";

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
      displayMessage = marker("ww.error.dev");
    } else {
      displayMessage = marker("ww.error.general");
    }

    this.notificationsService.translated(displayMessage, {}, "error");

    super.handleError(error);
  }
}
