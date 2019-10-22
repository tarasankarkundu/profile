import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
  }
)
export class ApiService {

  constructor(private http: HttpClient) { }
  getTimelineData(url) {
     return new Promise(resolve => {
            this.http.get(url).pipe(map(res => res))
                .subscribe(data => {
                    resolve(data);
                });
        });
  }

   downloadPdf(): any {
  const url = 'assets/tarasankar-kundu-resume.pdf';

  return this.http.get(url, { responseType: 'blob' }).pipe(
    map((res) => {
        return new Blob([res.toString()], { type: 'application/pdf' });
    }));
  }
}
