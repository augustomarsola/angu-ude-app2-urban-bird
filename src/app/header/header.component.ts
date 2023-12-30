import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { Offers } from '../models/offers.model';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe, ReactiveFormsModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public searchInput = new FormControl('', { nonNullable: true });
  public offersSearch$ = new Observable<Offers[]>();
  public isNotEmptySearchInput = false;

  private _offersService = inject(OffersService);

  ngOnInit(): void {
    this.offersSearch$ = this.searchInput.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchText) => this._offersService.searchOffer(searchText)),
    );
  }

  public clickOnOffer() {
    this.searchInput.setValue('');
  }

  public onChangeSearchInput() {
    this.isNotEmptySearchInput = !!this.searchInput.value;
  }
}
