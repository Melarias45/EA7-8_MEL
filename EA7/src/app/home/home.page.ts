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

  //agregar un elemento con nombre, fecha y estado inicial (no completado)
  addItem(name: string, date: string): void {
    if (name.trim() && date.trim()) {
      this.items.push({
        id: this.nextId++,
        name: name.trim(),
        date: date.trim(),
        completed: false //Por defecto no esta completado.
      });
    } else {
      alert('El nombre y la fecha no pueden estar vacios');
    }
  }

  //cambiar el estado de "completado"
  toggleCompleted(id: number): void {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.completed = !item.completed;
    }
  }
  //eliminar elemento de la lista
  removeItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

}
