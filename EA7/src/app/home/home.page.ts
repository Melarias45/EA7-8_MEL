import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  items: { id: number; name: string; phone: string}[] = [];
  nextId: number = 1;

  nameError: boolean = false;
  phoneError : boolean = false;
  editingItem: { id: number; name: string; phone: string } | null = null;
 //almacen termporal del usuario que se esta editando

  

  constructor(public navCtrl: NavController) { }

  validateAndAdd(name: string, phone: string): void {
    this.nameError = false;
    this.phoneError = false;

    
    if (!name.trim() || name.trim().length < 3) {
      this.nameError = true;
    }

  
    const phoneRegex = /^\d{10}$/; //con 10 digits soloo
    if (!phone.trim() || !phoneRegex.test(phone)) {
      this.phoneError = true;
    }

    //agrega cuando no hay errores
    if (!this.nameError && !this.phoneError) {
      this.addItem(name, phone); //usa la funcion add item :)
    }
  }


  addItem(name: string, phone: string): void {
    if (name.trim() && phone.trim()) {
      this.items.push({
        id: this.nextId++,
        name: name.trim(),
        phone: phone.trim(),
      });
    } else {
      alert('El nombre y la fecha no pueden estar vacios');
    }
  }

  //funcion para activar la edicion
  enableEdit(item: { id: number; name: string; phone: string }): void {
    this.editingItem = { ...item };
  }

  // Guardar cambios de la edicion
  saveEdit(): void {
    if (!this.editingItem) return;

    const { id, name, phone } = this.editingItem;

    if (!name.trim() || name.trim().length < 3) {
      alert('El nombre es obligatorio y debe tener al menos 3 caracteres.');
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phone.trim() || !phoneRegex.test(phone)) {
      alert('El teléfono es obligatorio y debe tener 10 dígitos.');
      return;
    }

    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items[index] = { id, name: name.trim(), phone: phone.trim() };
    }

    this.editingItem = null;
  }

  cancelEdit(): void {
    this.editingItem = null;
  }



  //eliminar elemento de la lista
  removeItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

}
