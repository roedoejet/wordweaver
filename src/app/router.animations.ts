import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';

// export const routerTransition = trigger('routerTransition', [
//   transition('* <=> *', [
//     /* order */
//     /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%' })
//       , { optional: true }),
//     /* 2 */ group([  // block executes in parallel
//       query(':enter', [
//         style({ transform: 'translateX(5%)' }),
//         animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
//       ], { optional: true }),
//       query(':leave', [
//         style({ transform: 'translateX(0%)' }),
//         animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
//       ], { optional: true }),
//     ])
//   ])
// ])

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', [
            //   style({ position: 'relative' }),
            //   query(':enter, :leave', [
            //     style({
            //       position: 'absolute',
            //       top: 0,
            //       left: 0,
            //       width: '100%',
            //       display: 'none'
            //     })
            //   ]),
            query('div', [
                style({ opacity: 0, display: 'none' }),
                stagger(200, [ // or -200 to animate things in reverse
                    animate(600, style({ opacity: 1, display: 'none' }))
                ])
            ]),
            //   query(':enter', [
            //     style({ left: '-100%'})
            //   ]),
            //   query(':leave', animateChild()),
            //   group([
            //     query(':leave', [
            //       animate('300ms ease-out', style({ left: '100%'}))
            //     ]),
            //     query(':enter', [
            //       animate('300ms ease-out', style({ left: '0%'}))
            //     ])
            //   ]),
            //   query(':enter', animateChild()),
        ]),
        // transition('* <=> TableviewerPage', [
        //   style({ position: 'relative' }),
        //   query(':enter, :leave', [
        //     style({
        //       position: 'absolute',
        //       top: 0,
        //       left: 0,
        //       width: '100%'
        //     })
        //   ]),
        //   query(':enter', [
        //     style({ left: '-100%'})
        //   ]),
        //   query(':leave', animateChild()),
        //   group([
        //     query(':leave', [
        //       animate('200ms ease-out', style({ left: '100%'}))
        //     ]),
        //     query(':enter', [
        //       animate('300ms ease-out', style({ left: '0%'}))
        //     ])
        //   ]),
        //   query(':enter', animateChild()),
        // ])
    ]);