import { Injectable, NgZone } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  config: object = { duration: 2000, verticalPosition: "top" };
  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly zone: NgZone
  ) {}

  default(message: string) {
    const config: object = {
      ...this.config,
      ...{ panelClass: "default-notification-overlay" }
    };
    this.show(message, config);
  }

  info(message: string) {
    const config: object = {
      ...this.config,
      ...{ panelClass: "info-notification-overlay" }
    };
    this.show(message, config);
  }

  success(message: string) {
    const config: object = {
      ...this.config,
      ...{ panelClass: "success-notification-overlay" }
    };
    this.show(message, config);
  }

  warn(message: string) {
    const config: object = {
      ...this.config,
      ...{ panelClass: "warning-notification-overlay" }
    };
    this.show(message, config);
  }

  error(message: string) {
    const config: object = {
      ...this.config,
      ...{
        panelClass: "error-notification-overlay",
        duration: 3000,
        verticalPosition: "bottom"
      }
    };
    this.show(message, config);
  }

  private show(message: string, configuration: MatSnackBarConfig) {
    // Need to open snackBar from Angular zone to prevent issues with its position per
    // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
    this.zone.run(() => this.snackBar.open(message, null, configuration));
  }
}
