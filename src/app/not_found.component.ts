
import { Component} from '@angular/core';


declare var $:any;

@Component({
  selector: 'not-found',
  template: '<div class=not-found><h1>不温馨的提示：你所找的页面是不存在的。</h1></div>',
  styles: ['.not-found{margin:50px 20px;}']
})

export class NotFountComponent{

  constructor(){

  }
}
