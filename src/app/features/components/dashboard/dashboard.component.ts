import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, SpinnerComponent, ReactiveFormsModule,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  private router = inject(Router)
  dropdownOpen = false;
  isLoading = false;
  userDetails: any = {}

  ngOnInit() {
    this.isLoading = true;
    let details: any = localStorage.getItem('userDetails')
    this.userDetails = JSON.parse(details)
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  accessUserPanel() {
    // Placeholder for logic — you can navigate or open a modal
    alert('User Panel Accessed!');
  }

  logout() {
    this.router.navigate([''])
    localStorage.clear()
  }

  /** *@Start of javascript functions for partner website */

  /**
    * Sends a POST request to a specified URL with the given data.
    *
    * @param {string} url - The endpoint URL where data should be posted.
    * @param {Object} data - The data object to be sent in the POST request body.
    * @returns {Promise<Object>} - A promise that resolves to the response data.
    */
  //  function postData(url, data) {
  //   return new Promise((resolve, reject) => {
  //     if (typeof url !== 'string' || !url.trim()) {
  //       reject(new Error('Invalid URL provided.'));
  //       return;
  //     }
  //     if (typeof data !== 'object' || data === null) {
  //       reject(new Error('Data must be a non-null object.'));
  //       return;
  //     }

  //     const xhr = new XMLHttpRequest();
  //     xhr.open('POST', url, true);
  //     xhr.setRequestHeader('Content-Type', 'application/json');

  //     xhr.onload = function () {
  //       if (xhr.status >= 200 && xhr.status < 300) {
  //         try {
  //           const response = JSON.parse(xhr.responseText);
  //           resolve(response);
  //         } catch (error) {
  //           reject(new Error('Failed to parse server response.'));
  //         }
  //       } else {
  //         reject(new Error('Request failed with status ' + xhr.status));
  //       }
  //     };

  //     xhr.onerror = function () {
  //       reject(new Error('Network error occurred.'));
  //     };

  //     xhr.send(JSON.stringify(data));
  //   });
  // }

  // Button click handler
  // document.getElementById('postButtonForVatmUserInterface').addEventListener('click', function () {
  // const payload = {
  //   email: this.userDetails.email,
  //   cellNumber: this.userDetails.phone,
  //   fullLegalName: this.userDetails.name,
  //   partnerUUID: '0A9BB6B1-6C88-47A5-B2D0-ADB17E069490',
  //   partnerUserUID: 'abc123'
  // };
  // const apiUrl = 'https://apigateway20250430200434-azh2caase7a0hnb6.eastus2-01.azurewebsites.net/gateway/user/Capture/';

  //   postData(apiUrl, payload)
  //     .then(response => {
  // window.open(`https://tspldemo.triazinesoft.com/VATM_app/introduction?${response.data.userOptInCode}`, '_blank');
  //       console.log('Success:', response);
  //       // You can update the UI here
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //       // Handle error gracefully
  //     });
  // });

  /** *@end of javascript functions for partner website */


  /** *@start of typescript function for current use */

  /**
 * Sends a POST request to a specified URL with the given data.
 *
 * @param url - The endpoint URL where data should be posted.
 * @param data - The data object to be sent in the POST request body.
 * @returns A promise that resolves to the response data.
 */
  postData(url: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      if (typeof url !== 'string' || !url.trim()) {
        reject(new Error('Invalid URL provided.'));
        return;
      }
      if (typeof data !== 'object' || data === null) {
        reject(new Error('Data must be a non-null object.'));
        return;
      }

      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
          } catch (error) {
            reject(new Error('Failed to parse server response.'));
          }
        } else {
          reject(new Error('Request failed with status ' + xhr.status));
        }
      };

      xhr.onerror = function () {
        reject(new Error('Network error occurred.'));
      };

      xhr.send(JSON.stringify(data));
    });
  }

  onPostButtonClick(): void {
    const payload = {
      email: this.userDetails.email,
      cellNumber: this.userDetails.phone,
      fullLegalName: this.userDetails.name,
      partnerUUID: '0A9BB6B1-6C88-47A5-B2D0-ADB17E069490',
      partnerUserUID: this.userDetails.partnerArtistID
    };
    const apiUrl = 'https://apigateway20250430200434-azh2caase7a0hnb6.eastus2-01.azurewebsites.net/gateway/user/Capture/';
    // ?${response.data.userOptInCode}
    this.postData(apiUrl, payload)
      .then(response => {
        window.open(`https://purple-desert-0543b770f.6.azurestaticapps.net/#/introduction?userOptInCode=${response.data.userOptInCode}`, '_blank');
        console.log('Success:', response);
        // Optionally show a success message
      })
      .catch(error => {
        console.error('Error:', error);
        // Optionally show an error message
      });
  }

  /** *@end of typesctipt functions */
}
