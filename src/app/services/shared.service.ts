import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private optionGeneral = new Subject<string>();
  option$ = this.optionGeneral.asObservable();

  setOption(option: string) {
    this.optionGeneral.next(option);
  }
}
