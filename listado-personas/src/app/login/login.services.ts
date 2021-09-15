import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Injectable()
export class LoginService {

  token: string;

  constructor(private router: Router) {}

  login(email: string, password:string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(
        response => {
          auth.currentUser?.getIdToken().then(
            token => {
              this.token = token;
              this.router.navigate(['/']);
            }
          )
        }
      );
  }

  getIdToken() {
    return this.token;
  }
}
