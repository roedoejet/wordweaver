import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "decapitalize" })
export class DecapitalizePipe implements PipeTransform {
  transform(value: any) {
    // Move all uppercase characters to lowercase except 'I'
    const find = /([A-H,J-Z]|I\w)/;
    const re = new RegExp(find, "g");
    value = value.replace(re, function (v) {
      return v.toLowerCase();
    });
    return value;
  }
}
