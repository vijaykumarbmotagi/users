import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@/app/store/user/user.model';
import { Post } from '@/app/store/post/post.model';

@Injectable({
  providedIn: 'root'
})
export class UserList {

  Base_Url = "https://jsonplaceholder.typicode.com/";
  ALL_USER = this.Base_Url + "users"; 
  ALL_POST = this.Base_Url + "posts";
  COMMENTS = this.Base_Url + "comments?postId="

  constructor(private http: HttpClient){

  }

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(this.ALL_USER)
  }

  getSingleUser(id: string){
    return this.http.get(this.ALL_USER+"/"+id)
  }

  getPost(): Observable<Post []>{
    return this.http.get<Post []>(this.ALL_POST)
  }

  getComments(postId: Number){
    return this.http.get(this.COMMENTS + postId);
  }

  saveOrUpdatePost(params: any): Observable<any>{
    const headers  = new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8'
    })

    const body = JSON.stringify(params);
    return this.http.post(this.ALL_POST, body, {headers})
  }

  deletePost(id: number): Observable<any>{
    return this.http.delete(this.ALL_POST+"/"+id);
  }
  
}
