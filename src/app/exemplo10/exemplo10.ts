import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-exemplo10',
  styleUrl: './exemplo10.css',
  templateUrl: './exemplo10.html',
})
export class Exemplo10 {

  email='';
  enviar() { alert(`Email enviado para: ${this.email}`);
}
}
