import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    title: String = "Product List"
    userProfilePic: String = "https://media.istockphoto.com/id/1248639576/photo/portrait-of-kids-hanging-out-playing-together.jpg?s=612x612&w=0&k=20&c=eV4ZPWsYmQZWTprXJKycQKD0XpgbXN8L-OqUxB1GIgI="
    cityName: String= "Chennai"
  


    namesStyle : String = "color: green; font-size: 30px; font-weight: 200;";


    showFirstName:boolean = false;
    showLastName:boolean = true;

    names: string[] = ["John", "Martin", "Kelvin", "Pradeep", "Sana", "Venkat", "Pratap"]
}
