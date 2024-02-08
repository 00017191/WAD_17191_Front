import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, from, mergeMap, of, throwError } from "rxjs";


@Injectable({
    providedIn: 'root',
  })

  // Main service for making request

export class HttpService {
    constructor(private httpClient: HttpClient){}
    getUsers(): Observable<UserModel[]> {
        let url_ = 'http://localhost:5249/api/User';
        let options_: any = {observe: 'response', headers: new HttpHeaders({'Content-Type': 'application/json', Accept: 'text/json' })};
        return this.httpClient.request('get', url_, options_).pipe(mergeMap((response: any): Observable<UserModel[]> => {
                let data: UserModel[] = [];
                if (response.body !== null) {
                    data = response.body;
                }
                return of(data);}));
    }
    deleteUserById(id: number): Observable<any> {
        const url = `http://localhost:5249/api/user/${id}`;
    
        let options: any = {
          body: [url],
          observe: 'response',
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              Accept: 'text/json',
          }),
        };
    
        return this.httpClient.delete<any>(url, options);
    }
    createUser(data: UserCreateAndUpdateModel): Observable<any> {
        const url = 'http://localhost:5249/api/user';
        const form = new FormData();
        form.append('Name', data.name);
        form.append('Email', data.email);
        form.append('Weight', data.weight.toString());
        form.append('Age', data.age.toString());
        let options_: any = { body: form };
        return this.httpClient.request('post', url, options_).pipe(
            catchError((error) => {
                return throwError(() => error.error);
            })
        );
    }
    updateUser(id: number, data: UserCreateAndUpdateModel): Observable<any> {
        const url = `http://localhost:5249/api/user/${id}`
        const form = new FormData();
        form.append('Name', data.name);
        form.append('Email', data.email);
        form.append('Weight', data.weight.toString());
        form.append('Age', data.age.toString());
        let options_: any = { body: form };
        return this.httpClient.request('put', url, options_).pipe(
            catchError((error) => {
                return throwError(() => error.error);
            })
        );
    }
    getOneUser(id: number): Observable<UserModel> {
        const url = `http://localhost:5249/api/user/${id}`
        let options_: any = { observe: 'response', headers: new HttpHeaders({ 'Content-Type': 'application/json', Accept: 'text/json' })};
        return this.httpClient.request('get', url, options_).pipe(
            mergeMap((response: any): Observable<UserModel> => {
                if (response.body !== null) {
                    let data: UserModel = response.body;
                    return of(data);
                } else return throwError(() => new Error('data is empty!'));
            })
        );
    }
    getActivities(): Observable<ActivityModel[]> {
        let url_ = 'http://localhost:5249/api/activity';
        let options_: any = {observe: 'response', headers: new HttpHeaders({'Content-Type': 'application/json', Accept: 'text/json' })};
        return this.httpClient.request('get', url_, options_).pipe(mergeMap((response: any): Observable<ActivityModel[]> => {
                let data: ActivityModel[] = [];
                if (response.body !== null) {
                    data = response.body;
                }
                return of(data);}));
    }
    deleteActivityById(id: number): Observable<any> {
        const url = `http://localhost:5249/api/activity/${id}`;
    
        let options: any = {
          body: [url],
          observe: 'response',
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              Accept: 'text/json',
          }),
        };
    
        return this.httpClient.delete<any>(url, options);
    }
    createActivity(data: ActivityCreateAndUpdateModel): Observable<any> {
        const url = 'http://localhost:5249/api/activity';
        const form = new FormData();
        form.append('ActivityType', data.activityType);
        form.append('CaloriesBurned', data.caloriesBurned.toString());
        form.append('Distance', data.distance.toString());
        form.append('Duration', data.duration.toString());
        form.append('UserId', data.userId.toString());
        let options_: any = { body: form };
        return this.httpClient.request('post', url, options_).pipe(
            catchError((error) => {
                return throwError(() => error.error);
            })
        );
    }
    updateActivity(id: number, data: ActivityCreateAndUpdateModel): Observable<any> {
        const url = `http://localhost:5249/api/activity/${id}`
        const form = new FormData();
        form.append('ActivityType', data.activityType);
        form.append('CaloriesBurned', data.caloriesBurned.toString());
        form.append('Distance', data.distance.toString());
        form.append('Duration', data.duration.toString());
        form.append('UserId', data.userId.toString());
        let options_: any = { body: form };
        return this.httpClient.request('put', url, options_).pipe(
            catchError((error) => {
                return throwError(() => error.error);
            })
        );
    }
    getOneActivity(id: number): Observable<ActivityModel> {
        const url = `http://localhost:5249/api/activity/${id}`
        let options_: any = { observe: 'response', headers: new HttpHeaders({ 'Content-Type': 'application/json', Accept: 'text/json' })};
        return this.httpClient.request('get', url, options_).pipe(
            mergeMap((response: any): Observable<ActivityModel> => {
                if (response.body !== null) {
                    let data: ActivityModel = response.body;
                    return of(data);
                } else return throwError(() => new Error('data is empty!'));
            })
        );
    }
}

export interface UserCreateAndUpdateModel {
    name: string;
    email: string;
    weight: number;
    age: number;
}

export interface ActivityCreateAndUpdateModel {
    userId: number;
    activityType: string;
    duration: string;
    distance: string;
    caloriesBurned: number;
}

export interface UserModel {
    id: number
    name: string;
    email: string;
    weight: number;
    age: number;
}

export interface ActivityModel {
    id: number;
    userId: number;
    activityType: string;
    duration: string;
    distance: string;
    caloriesBurned: number;
}

