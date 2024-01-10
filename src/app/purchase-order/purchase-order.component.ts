import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Order } from '../models/order.model';
import { PurchaseOrderService } from '../services/purchase-order.service';
import { SuccessOrderComponent } from './success-order/success-order.component';

@Component({
  selector: 'app-purchase-order',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, SuccessOrderComponent],
  templateUrl: './purchase-order.component.html',
})
export class PurchaseOrderComponent {
  private _fb = inject(FormBuilder);
  private _purchaseOrderService = inject(PurchaseOrderService);

  public purchaseOrderForm = this._fb.nonNullable.group({
    address: ['', Validators.required],
    number: ['', Validators.required],
    complement: [''],
    paymentMethod: ['', Validators.required],
  });
  public idOrder = 0;

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
    if (this.purchaseOrderForm.valid) {
      this._purchaseOrderService
        .makePurchase(this.purchaseOrderForm.value as Order)
        .subscribe((order) => {
          this.idOrder = order.id;
        });
    }
  }
}
