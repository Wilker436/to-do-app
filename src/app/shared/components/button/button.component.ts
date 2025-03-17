import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: false,
})
export class ButtonComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}


  @Input() text: string = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button'; 
  @Input() disabled: boolean = false; // Estado del botón
}
