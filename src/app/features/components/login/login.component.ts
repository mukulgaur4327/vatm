import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from '../../../shared/services/toaster.service';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule , SpinnerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private router = inject(Router)
  private toasterService = inject(ToasterService);
  isLoading = false;
  user = {
    name: '',
    email: '',
    phone: '',
    partnerArtistID:'',
    partnerUUID : ''
  };

  goToDashboard(){
    this.isLoading = true;
    if(this.user.name == '' || this.user.email == '' || this.user.phone == '' || !this.user.partnerArtistID || !this.user.partnerUUID){
      this.toasterService.show('Please enter all details', 'error');
      this.isLoading = false;
    }
    else{
      localStorage.setItem('userDetails',JSON.stringify(this.user))
      this.router.navigate(['dashboard'])
      this.isLoading = false;

    }
  }
}
