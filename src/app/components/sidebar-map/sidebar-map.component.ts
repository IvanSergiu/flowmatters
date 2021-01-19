import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar-map',
  templateUrl: './sidebar-map.component.html',
  styleUrls: ['./sidebar-map.component.scss'],
})
export class SidebarMapComponent implements OnInit {
  constructor() {}
  srcURL;
  alt;
  ngOnInit(): void {
    var fixmeTop = $('.fixme').offset().top;
    $(window).scroll(function () {
      var currentScroll = $(window).scrollTop();
      if (currentScroll >= fixmeTop) {
        $('.fixme').css({
          position: 'sticky',
          top: '50px',
        });
      } else {
        $('.fixme').css({
          position: 'static',
        });
      }
    });

    var closeModal = <HTMLElement>document.getElementsByClassName('close')[0];
    closeModal.onclick = function () {
      document.getElementById('fullImgModal').style.display = 'none';
    };
  }
  getImage(event) {
    console.log(event.srcElement.currentSrc);
    this.srcURL = event.srcElement.currentSrc;
    var modalImg = <HTMLImageElement>document.getElementById('modalImg');
    document.getElementById('fullImgModal').style.display = 'block';
    modalImg.src = this.srcURL;
    console.log(modalImg);
  }
}
