import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HowToUse } from '../../models/offers.model';
import { OffersService } from '../../services/offers.service';

@Component({
  selector: 'app-how-to-use',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './how-to-use.component.html',
})
export class HowToUseComponent implements OnInit {
  public howToUse$: Observable<HowToUse> = new Observable<HowToUse>();
  constructor(
    private _offersService: OffersService,
    private _activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.howToUse$ = this._offersService.getHowToUseById(
      this._activatedRoute.snapshot.parent?.params['id'],
    );
  }
}
