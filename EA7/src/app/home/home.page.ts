import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  items: { id: number; name: string; date: string, completed: boolean }[] = [];
  nextId: number = 1;

  constructor(public navCtrl: NavController) { }

}
