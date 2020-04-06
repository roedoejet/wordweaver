import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
  stagger,
  sequence
} from "@angular/animations";

export const fadeAnimation = trigger("fadeAnimation", [
  transition("* <=> *", [
    query(
      ":enter",
      [style({ opacity: 0 }), animate("3000ms", style({ opacity: 1 }))],
      { optional: true }
    ),
    query(
      ":leave",
      [style({ opacity: 1 }), animate("3000ms", style({ opacity: 0 }))],
      { optional: true }
    )
  ])
]);

export const listAnimation = trigger("listAnimation", [
  transition("* <=> *", [
    query(
      ":enter",
      [
        style({ opacity: 0 }),
        stagger("10ms", animate("300ms ease-out", style({ opacity: 1 })))
      ],
      { optional: true }
    )
    // query(':leave',
    // [style({ opacity: 1 }), stagger('10ms', animate('50ms ease-out', style({ opacity: 0 })))],
    // { optional: true }
    // )
  ])
]);
