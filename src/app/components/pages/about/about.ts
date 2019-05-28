import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MetaData } from '../../../global'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: [
    './about.scss']
})
export class AboutPage implements OnInit {
  title = MetaData.title;
  constructor(public router: Router) { }

  ngOnInit() {
  }

}
