import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { WhereIs } from '../../models/offers.model';
import { OffersService } from '../../services/offers.service';

@Component({
  selector: 'app-where-is',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './where-is.component.html',
})
export class WhereIsComponent implements OnInit {
  public whereIs$: Observable<WhereIs> = new Observable<WhereIs>();

  constructor(
    private _offersService: OffersService,
    private _activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.whereIs$ = this._offersService.getWhereIsById(
      this._activatedRoute.snapshot.parent?.params['id'],
    );
  }
}
