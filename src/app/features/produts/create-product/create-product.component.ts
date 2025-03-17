import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  product: FormGroup;

  constructor(private fb: FormBuilder) {
    this.product = this.fb.group({
      name: 'Iphone 16',
      price: '1258',
      productData: this.fb.group({
        info: 'Alex',
        desc: 'Iphone'
      })
    });
  }

  onSubmit() {
    console.log('Form Data:', this.product.value);
  }
}
