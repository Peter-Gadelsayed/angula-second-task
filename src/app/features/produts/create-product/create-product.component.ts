import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { noSpacesValidator } from 'src/app/shared/validators/no-space-validators';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  product!: FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.product = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), noSpacesValidator]],
      price: ['', [Validators.required, Validators.minLength(1), noSpacesValidator]],
      productData: this.fb.group({
        info: [''],
        desc: [''],
      })
    });
  }

  onSubmit() {
    console.log('Form Data:', this.product.value);
  }
}
