import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(document).ready(function () {
      var $header = $('header'),
        $clone = $header.before($header.clone().addClass('clone'));

      $(window).on('scroll', function () {
        var fromTop = $(window).scrollTop();
        $('body').toggleClass('down', fromTop > 200);
      });
    });
  }
}
