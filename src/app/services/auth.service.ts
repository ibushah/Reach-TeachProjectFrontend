import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<any> {
    return this.http.get(environment.baseUrl + "token/allusers");
  }

  public forgotPassword(obj: any): Observable<any> {

    return this.http.post(environment.baseUrl + "token/forgotpassword", obj);
  }

  public createNewUser(obj: any): Observable<any> {
    return this.http.post(environment.baseUrl + "token/newuser", obj);
  }

  public deleteUser(id): Observable<any> {
    return this.http.delete(environment.baseUrl + "token/deleteuser/" + id);
  }
  public getUser(id): Observable<any> {
    return this.http.get(environment.baseUrl + "token/getuser/" + id);
  }

  public updateUser(id: Number, obj: any): Observable<any> {
    return this.http.put(environment.baseUrl + "token/updateuser/" + id, obj);
  }


  public resetPassword(email): Observable<any> {
    return this.http.get(environment.baseUrl + "authenticate/reset-password/" + email);
  }



  public tokenChecker(token): Observable<any> { return this.http.get(environment.baseUrl + "authenticate/token-check/" + token); }


  public changePassword(token, obj): Observable<any> { return this.http.post(environment.baseUrl + "authenticate/change-password/" + token, obj); }


  public resetChecker(token): Observable<any> {
    return this.http.get(environment.baseUrl + "authenticate/changepassword/" + token)
  }
  public isUser(email): Observable<any> {
    return this.http.get(environment.baseUrl + "token/checkuser/" + email);
  }
}
