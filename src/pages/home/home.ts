import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  testRadioOpen: boolean;
  testRadioResult: any;

  testCheckboxOpen: boolean;
  testCheckboxResult;
  constructor(private alertCtrl: AlertController, public navCtrl: NavController) {

  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Do you want to buy this book?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
  
  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          // handler: data => {
          //   if (User.isValid(data.username, data.password)) {
          //     // logged in!
          //   } else {
          //     // invalid login
          //     return false;
          //   }
          // }
        }
      ]
    });
    alert.present();
  }
  doRadio() {
    let alert = this.alertCtrl.create();
      alert.setTitle('Lightsaber color');
  
      alert.addInput({
        type: 'radio',
        label: 'Blue',
        value: 'blue',
        checked: true
      });
  
      alert.addInput({
        type: 'radio',
        label: 'Green',
        value: 'green'
      });
  
      alert.addInput({
        type: 'radio',
        label: 'Red',
        value: 'red'
      });
  
      alert.addInput({
        type: 'radio',
        label: 'Yellow',
        value: 'yellow'
      });
  
      alert.addInput({
        type: 'radio',
        label: 'Purple',
        value: 'purple'
      });
  
      alert.addInput({
        type: 'radio',
        label: 'White',
        value: 'white'
      });
  
      alert.addInput({
        type: 'radio',
        label: 'Black',
        value: 'black'
      });
  
      alert.addButton('Cancel');
      alert.addButton({
        text: 'Ok',
        handler: data => {
          console.log('Radio data:', data);
          this.testRadioOpen = false;
          this.testRadioResult = data;
        }
      });
  
      alert.present().then(() => {
        this.testRadioOpen = true;
      });
    }
// -------------------------------------------------------
    showAlert(){      
      let alert = this.alertCtrl.create({
        title: 'Alert Title!',
        subTitle: 'This is subtitle',
        buttons: ['Ok']
      });
  
      alert.present();
  
    }
  
    showConfirm(){
      let alert = this.alertCtrl.create({
        title: 'Confirm Title!',
        message: 'Hello From Confirm!',
        buttons: [
          
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Canceled');
          }
  
          },
  
          {
            text:'Ok',
            handler: () => {
              console.log('Ok')
            }
          }  
  
        ]
      });
  
      alert.present();
    }
  
    showPrompt(){
      let alert = this.alertCtrl.create({
        title: 'Login',
        inputs: [
          {
            name: 'username',
            placeholder: 'Enter your username'
          },
          {
            name: 'password',
            placeholder: 'password',
            type: 'password'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Canceled');
            }
          },
          {
            text: 'Login',
            handler: () => {
              console.log('Logined!');
            }
          }
        ]
      });
      alert.present();
    }
  
    showRadio(){
      
      let alert = this.alertCtrl.create();
      
      alert.setTitle('Radio Alert!');
  
      alert.addInput({
        type: 'radio',
        label: 'Radio 1',
        value: 'radio1'
      });
  
      alert.addInput({
        type: 'radio',
        label: 'Radio 2',
        value: 'radio2',
        checked: true
      });
      
      alert.addInput({
        type: 'radio',
        label: 'Radio 3',
        value: 'radio3'
      });
      
      alert.addButton('Cancel');
  
      alert.addButton({
        text: 'Ok',
        handler: data => {
          console.log('Radio:', data);
          this.testRadioOpen = false;
          this.testRadioResult = data;
        }
      });
  
      alert.present().then ( () => {
        this.testRadioOpen = true;
      });
  
    }
  
    showCheckbox(){
      
      let alert = this.alertCtrl.create();
      
      alert.setTitle('Checkbox Alert!');
  
      alert.addInput({
        type: 'checkbox',
        label: 'Checkbox 1',
        value: 'checkbox1'
      });
  
      alert.addInput({
        type: 'checkbox',
        label: 'Checkbox 2',
        value: 'checkbox2',
        checked: true
      });
      
      alert.addInput({
        type: 'checkbox',
        label: 'Checkbox 3',
        value: 'checkbox3'
      });
      
      alert.addButton('Cancel');
  
      alert.addButton({
        text: 'Ok',
        handler: data => {
          console.log('Radio:', data);
          this.testCheckboxOpen = false;
          this.testCheckboxResult = data;
        }
      });
  
      alert.present().then ( () => {
        this.testCheckboxOpen = true;
      });
  
    }
      
}
