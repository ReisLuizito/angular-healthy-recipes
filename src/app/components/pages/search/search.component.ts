import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { SearchService } from 'src/app/services/search/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  loading = false;
  query = '';
  foods: any = [];

  constructor(private service: SearchService) {}

  ngOnInit(): void {}

  getSearch(): any {
    this.loading = true;
    this.service
      .search(this.query)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((data: any) => {
        this.foods = data.results;
      });
  }
}
