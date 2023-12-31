import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase-order',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './purchase-order.component.html',
})
export class PurchaseOrderComponent {
  private _fb = inject(FormBuilder);
  public purchaseOrderForm = this._fb.group({
    address: ['', Validators.required],
    number: ['', Validators.required],
    complement: [''],
    paymentMethod: ['', Validators.required],
  });

  public get address() {
    return this.purchaseOrderForm.get('address');
  }

  public get isAddressInvalid() {
    return this.address?.invalid && this.address?.touched;
  }

  public get number() {
    return this.purchaseOrderForm.get('number');
  }

  public get isNumberInvalid() {
    return this.number?.invalid && this.number?.touched;
  }

  public get paymentMethod() {
    return this.purchaseOrderForm.get('paymentMethod');
  }

  public get isPaymentMethodInvalid() {
    return this.paymentMethod?.invalid && this.paymentMethod?.touched;
  }

  public get formIsInvalid() {
    return this.purchaseOrderForm.invalid;
  }

  public onSubmit() {
    this.purchaseOrderForm.markAllAsTouched();
    console.log(this.purchaseOrderForm.value);
  }
}
