import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {
  @Input() icon: string = ''; 
  @Input() label: string = '';
  @Input() bgColor: string = '';
  @Output() selected = new EventEmitter<void>();

  onClick() {
    this.selected.emit();
  }
}
