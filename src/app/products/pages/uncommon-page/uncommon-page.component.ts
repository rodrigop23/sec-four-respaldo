import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [],
})
export class UncommonPageComponent {
  //i18nSelect
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Juan', 'Fernando', 'Eduardo'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClients(): void {
    this.clients.pop();
  }

  //KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 35,
    address: 'Ottawa, Canada',
  };

  //Async Pipe
  public myObservable: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
