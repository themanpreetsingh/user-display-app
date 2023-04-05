import { BooleanInput } from '@angular/cdk/coercion';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent {

  @Input() name: string = "";
  @Input() mail: string = "";
  @Input() disabledStatus: boolean = false;
  @Input() roles: string[] = [];

}
