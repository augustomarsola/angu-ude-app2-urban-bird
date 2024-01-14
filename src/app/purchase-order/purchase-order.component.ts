import { CurrencyPipe, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Order } from '../models/order.model';
import { CartService } from '../services/cart.service';
import { PurchaseOrderService } from '../services/purchase-order.service';
import { SuccessOrderComponent } from './success-order/success-order.component';

@Component({
  selector: 'app-purchase-order',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, SuccessOrderComponent, CurrencyPipe],
  templateUrl: './purchase-order.component.html',
})
export class PurchaseOrderComponent implements OnInit {
  private _fb = inject(FormBuilder);
  private _purchaseOrderService = inject(PurchaseOrderService);

  public purchaseOrderForm = this._fb.nonNullable.group({
    address: ['', Validators.required],
    number: ['', Validators.required],
    complement: [''],
    paymentMethod: ['', Validators.required],
  });
  public idOrder = 0;
  public cartItems = this._cartService.cartItens();

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

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    console.log(this._cartService.cartItens());
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
