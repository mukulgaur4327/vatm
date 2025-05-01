import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor() {}

  show(message: string, type: 'success' | 'error' | 'info' | 'warning' = 'success') {
    const toast = document.createElement('div');
    toast.classList.add('toast', type);

    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 4000); // Toast disappears after 3 seconds
  }
}