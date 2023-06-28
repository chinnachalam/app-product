import { Component } from '@angular/core';

@Component({
  selector: 'app-routing-home',
  templateUrl: './routing-home.component.html',
  styleUrls: ['./routing-home.component.css']
})
export class RoutingHomeComponent {

  constructor(){

    var userData = {
      "name": "sara",
      "email": "sara@gmail.com"
    }

    localStorage.setItem("name", "sara");
    localStorage.setItem("phoneNumber", "7894562137");
    localStorage.setItem("userData", JSON.stringify(userData));

    // JSON.parse("json string") ==> it will convert string to json
    // JSON.stringify(userData) => it will convert json to string

    for(var i=0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key!);

        console.log(key + ':' + value);
    }

    var jsonValue =  JSON.parse(localStorage.getItem("userData")!);

    // localStorage.clear();

    for(var i=0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key!);

      console.log(key + ':' + value);
    }
  }

}
