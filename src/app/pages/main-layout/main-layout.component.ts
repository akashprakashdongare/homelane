import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor() {
    // this.loadScript() 
   }

  ngOnInit() {
     

    if (!localStorage.getItem('foo')) {

      localStorage.setItem('foo', 'no reload')



      location.reload()

    } else {

      // localStorage.removeItem('foo')

    }
  }
  public loadScript() {



    var dynamicScripts = ["assets/js/app-menu.js"];



    for (var i = 0; i < dynamicScripts.length; i++) {

      let node = document.createElement('script');

      node.src = dynamicScripts[i];

      node.type = 'text/javascript';

      node.async = false;

      node.charset = 'utf-8';

      document.getElementsByTagName('head')[0].appendChild(node);

    }

  }

}
