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
import { AnimationsService } from "./animations.service";

export const ROUTE_ANIMATIONS_ELEMENTS = "route-animations-elements";

const STEPS_ALL: any[] = [
  query(":enter > *", style({ opacity: 0, position: "fixed" }), {
    optional: true
  }),
  query(":enter ." + ROUTE_ANIMATIONS_ELEMENTS, style({ opacity: 0 }), {
    optional: true
  }),
  sequence([
    query(
      ":leave > *",
      [
        style({ transform: "translateY(0%)", opacity: 1 }),
        animate(
          "0.2s ease-in-out",
          style({ transform: "translateY(-3%)", opacity: 0 })
        ),
        style({ position: "fixed" })
      ],
      { optional: true }
    ),
    query(
      ":enter > *",
      [
        style({
          transform: "translateY(-3%)",
          opacity: 0,
          position: "static"
        }),
        animate(
          "0.5s ease-in-out",
          style({ transform: "translateY(0%)", opacity: 1 })
        )
      ],
      { optional: true }
    )
  ]),
  query(
    ":enter ." + ROUTE_ANIMATIONS_ELEMENTS,
    stagger(75, [
      style({ transform: "translateY(10%)", opacity: 0 }),
      animate(
        "0.5s ease-in-out",
        style({ transform: "translateY(0%)", opacity: 1 })
      )
    ]),
    { optional: true }
  )
];

export const stepperAnimation = trigger("specialAnimations", [
  transition("Wordmaker => Stepper", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateX(100%)" }),
          animate("1s ease-in-out", style({ transform: "translateX(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateX(0%)" }),
          animate("1s ease-in-out", style({ transform: "translateX(-100%)" }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition("* => Wordmaker", [STEPS_ALL[0], STEPS_ALL[2]])
]);

const STEPS_NONE = [];
const STEPS_PAGE = [STEPS_ALL[0], STEPS_ALL[2]];
const STEPS_ELEMENTS = [STEPS_ALL[1], STEPS_ALL[3]];

export const isRouteAnimationsAll = () =>
  AnimationsService.isRouteAnimationsType("ALL");

export const isRouteAnimationsNone = () =>
  AnimationsService.isRouteAnimationsType("NONE");

export const isRouteAnimationsPage = () =>
  AnimationsService.isRouteAnimationsType("PAGE");

export const isRouteAnimationsElements = () =>
  AnimationsService.isRouteAnimationsType("ELEMENTS");

export const routeAnimations = trigger("routeAnimations", [
  transition(isRouteAnimationsAll, STEPS_ALL),
  transition(isRouteAnimationsNone, STEPS_NONE),
  transition(isRouteAnimationsPage, STEPS_PAGE),
  transition(isRouteAnimationsElements, STEPS_ELEMENTS)
]);

export const specialAnimations = [stepperAnimation];
