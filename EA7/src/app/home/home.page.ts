import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  items: { id: number; name: string; year: string; producer: string; house: string; prota: string; }[] = [];
  nextId: number = 1;
  dataError: boolean = false;
  constructor() { }

  validateAndAdd(name: string, year: string, producer: string, house: string, prota: string) {
    this.dataError = false;

    if (!name.trim()) {
      this.dataError = true;
    }

    if (!year.trim()) {
      this.dataError = true;
    }

    if (!producer.trim()) {
      this.dataError = true;
    }

    if (!house.trim()) {
      this.dataError = true;
    }

    if (!prota.trim()) {
      this.dataError = true;
    }

    if (!this.dataError) {
      this.addItem(name, year, producer, house, prota);
    }
  }

  addItem(name: string, year: string, producer: string, house: string, prota: string): void {
    if (name.trim() && year.trim() && producer.trim() && house.trim() && prota.trim()) {
      this.items.push({
        id: this.nextId++,
        name: name.trim(),
        year: year.trim(),
        producer: producer.trim(),
        house: house.trim(),
        prota: prota.trim(),
      });
    } else {
      alert('Uno de los campos esta vacio');
    }
  }

}
