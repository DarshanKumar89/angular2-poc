import {View, Component} from 'angular2/angular2';

let template = require('./app.html');

@Component({
  selector: 'app'
})
@View({
  template: template
})
export class App {

  title:string;

  constructor(){
      this.title = 'Jurassic Park';
  }

  
}
