import { Component } from '@angular/core';

class Dish {
  constructor(
    public name: string,
    public description: string,
    public price: number
  ) {
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ourMenu = [
    new Dish("Tempura Appetizer", "Shrimp [2pc], Vegetable [5pc]", 7.5),
    new Dish("Tempura Shrimp", "Shrimp", 7.5),
    new Dish("Fried Banana", "Deep fried jumbo shrimp [5pc]", 3.99),
    new Dish("Mixed Mushroom Butter Yaki", "Pan-fried mixed Japanese mushroom with herbs and butter", 8.99),
    new Dish("Gyoza", "Japanese vegetable fried dumplings [5pc]", 4.99),
    new Dish("Enoki beef roll", "Grilled beef wrapped around enoki mushroom", 7),
    new Dish("Yam tempura", "Deep fried sweet potato [8pc]", 5),
    new Dish("Beef with spring onion", "Grilled beef wrapped around spring onion", 9),
  ];
}
