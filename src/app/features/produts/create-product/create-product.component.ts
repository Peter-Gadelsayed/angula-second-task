import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { noSpacesValidator } from 'src/app/shared/validators/no-space-validators';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  product: FormGroup;

  constructor(private fb: FormBuilder) {
    this.product = this.fb.group({
      name: ['Iphone 16', [Validators.required, Validators.minLength(3), Validators.maxLength(50), noSpacesValidator]],
      price: ['1258', [Validators.required, Validators.minLength(1), noSpacesValidator]],
      productData: this.fb.group({
        info: ['Alex'],
        desc: ['Iphone'],
      })
    });
  }

  onSubmit() {
    console.log('Form Data:', this.product.value);
  }
}
