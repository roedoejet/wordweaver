// Core
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
    selector: 'error-snack',
    templateUrl: 'error.snack.html',
    styles: [`
      button.mat-simple-snackbar-action {
        color: white;
      }
    `],
})
export class ErrorSnackComponent {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
        console.log(this.data)
    }

    dismiss(){
        
    }
}