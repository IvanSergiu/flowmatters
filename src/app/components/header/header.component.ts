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
    // $(document).ready(function () {
    //   var $header = $('#header'),
    //     $clone = $header.before($header.clone().addClass('clone'));

    //   $(window).on('scroll', function () {
    //     var fromTop = $(window).scrollTop();
    //     $('body').toggleClass('down', fromTop > 200);
    //   });
    // });
    $(window).scroll(function () {
      if ( $(this).scrollTop() > 200 && !$('header').hasClass('fixed-header ') ) {
        $('header').addClass('fixed-header ');
        $('header').removeClass('display-block');
        $('header').slideDown();
       } else if ( $(this).scrollTop() <= 0 ) {
        $('header').addClass('display-block');
        $('header').removeClass('fixed-header ');
      }
    });
  }
  openNav() {
    document.getElementById("sidemenu").style.width = "250px";
    document.getElementById("sidemenu-content").style.marginLeft = "250px";
  }
  
  closeNav() {
    document.getElementById("sidemenu").style.width = "0";
    document.getElementById("sidemenu-content").style.marginLeft= "0";
  }
}
