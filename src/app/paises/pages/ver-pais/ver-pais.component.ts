import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { PaisInterface } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: PaisInterface;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisporAlpha(id)),
        tap(console.log)
      )
      .subscribe((resp) => {
        this.pais = resp[0];
      });
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);
    //   this.paisService.getPaisporAlpha(id).subscribe({
    //     next: (pais) => {
    //       console.log(pais);
    //     },
    //   });
    // });
  }
}
