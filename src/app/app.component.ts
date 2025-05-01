import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { ToasterService } from './shared/services/toaster.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SpinnerComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'vatm';
  isLoading = false;

  constructor(private toasterService: ToasterService) {}
  
  ngOnInit(){
    // this.showSuccessMessage()
    // this.showErrorMessage()
    this.isLoading = true;  // Show spinner
    setTimeout(() => {
      this.isLoading = false; // Hide spinner after 3 seconds
    }, 1000);
  }

  showSuccessMessage() {
    this.toasterService.show('Data loaded successfully!', 'success');
  }

  showErrorMessage() {
    this.toasterService.show('There was an error while loading data', 'error');
  }
}
