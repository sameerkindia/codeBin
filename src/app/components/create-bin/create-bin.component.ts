import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DbService } from '../../services/db.service';
import { Snippet } from '../../../models/snippets';

@Component({
  selector: 'app-create-bin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-bin.component.html',
  styleUrl: './create-bin.component.css',
})
export class CreateBinComponent {
  title = new FormControl('', [Validators.required]);
  code = new FormControl('', [Validators.required]);

  constructor(private dbService: DbService) {}

  binForm = new FormGroup({
    title: this.title,
    code: this.code,
  });

  async save() {
    console.log(this.binForm.value);

    await this.dbService.createSnippit(this.binForm.value as Snippet);
  }
}
