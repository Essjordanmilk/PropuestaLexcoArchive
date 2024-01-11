import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private optionGeneral = new Subject<string>();

  setOption(option: string) {
    this.optionGeneral.next(option);
  }

  getOption() {
    return this.optionGeneral.asObservable();
  }
}

