import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as anime from 'animejs';

@Component({
  selector: 'logo-anime',
  templateUrl: 'logo.html',
  styleUrls: [
    './logo.scss'
  ]
})
export class LogoAnime {
  constructor(public router: Router) { 
 
  }
  ngAfterViewInit() {
    anime({
        targets: '#lineDrawing .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutCubic',
        color: "#000",
        duration: 550,
          complete: function(anim) {
            document.getElementById('svgGroup').classList.add('animated')
          },
        delay: function(el, i) { return i * 450 },
      });
  }
}