import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public alertButtons = ['OK', "Cancel", "Maybe"];

  constructor(private alertController: AlertController, private toastController: ToastController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'This is an alert!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('OK button clicked');
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel button clicked');
          }
        }
      ],
    });

    await alert.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}
