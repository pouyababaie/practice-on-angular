import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '@app/core/services/api.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-pokemon-report',
  templateUrl: './pokemon-report.component.html',
  styleUrls: ['./pokemon-report.component.scss'],
})
export class PokemonReportComponent {
  pokemonName: FormControl<string> = new FormControl<string>('');
  pokemonNameList: {
    name: string;
    url: string;
  }[] = null;
  pokmonDetail: any = [];
  loading: boolean = true;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService
      .get('https://pokeapi.co/api/v2/pokemon/')
      .pipe(
        map((data: any) => {
          this.pokemonNameList = data.results;
          return data;
        })
      )
      .subscribe((result: any) => {});
  }

  search(event?) {
    this.pokemonNameList = this.pokemonNameList.filter((poke) => {
      return poke.name.includes(event.query);
    });
  }

  getPokemonDetail(event?) {
    this.apiService.get(event.url).subscribe((poke) => {
      this.loading = false;
      this.pokmonDetail.push(poke);
    });
  }

  popPoke(id: number) {
   
    if (id > -1) {
      this.pokemonNameList.splice(id);
    }
  }
}
