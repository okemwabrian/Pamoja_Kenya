import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registrationData: any = null;

  setData(data: any): void {
    this.registrationData = data;
  }

  getData(): any {
    return this.registrationData;
  }

  clearData(): void {
    this.registrationData = null;
  }
}
