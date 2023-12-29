import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  private searchSubject = new Subject<string>();

  constructor(private _offersService: OffersService) {}

  ngOnInit(): void {
    this.searchSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((searchText) => this._offersService.searchOffer(searchText)),
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  public onInputChange(searchText: string) {
    this.searchSubject.next(searchText);
  }
}
