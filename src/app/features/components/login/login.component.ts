import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from '../../../shared/services/toaster.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private router = inject(Router)
  private toasterService = inject(ToasterService)
  user = {
    name: '',
    email: '',
    phone: '',
    partnerArtistID:''
  };

  goToDashboard(){
    if(this.user.name == '' || this.user.email == '' || this.user.phone == ''){
      this.toasterService.show('Please enter all details', 'error');
    }
    else{
      localStorage.setItem('userDetails',JSON.stringify(this.user))
      this.router.navigate(['dashboard'])
    }
  }
}
