import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // attributs
  nom = "";
  prenom = "";
  numero = "";
  email = "";
  pass = "";
  formChoice=true;


  // methodes
  verifierLogin() {

    if (this.email == "" || this.pass == "") {
      this.showMessage("error","Sorry",'Veuillez saisir tous les champs');
    }else if(this.email == "" || this.pass.length<8){
        this.showMessage("error","Sorry",'Le password doit être > ou = à 8 caractère');
      }
      else {
          this.showMessage('success','Thanks','Connexion faite avec succès');
    }

  }
  verifierRegister() {

    if (this.nom == "" || this.prenom == "" || this.email == "" || this.pass == "" || this.numero == "") {
      Swal.fire({
        icon: 'error',
        title: 'Sorry',
        text: 'Veuillez saisir tous les champs',
      })
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Thanks',
        text: 'Connexion faite avec succès',
      })
      this.showForm()


    }

  }

  showMessage(icon:any,title:any,message:any){
    Swal.fire({
      icon: icon,
      title: title,
      text: message,
    })
  }


  showForm(){
    this.formChoice=!this.formChoice;
    this.nom="";
    this.prenom="";
    this.numero="";
    this.email="";
    this.pass="";
  }

}
