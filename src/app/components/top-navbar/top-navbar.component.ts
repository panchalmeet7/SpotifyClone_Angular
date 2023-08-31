import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css'],
})
export class TopNavbarComponent implements OnInit {
  // isSearchVissible: boolean = false;
  constructor(private router: Router, private searchService: SearchService) {}

  ngOnInit(): void {
    // this.searchService.isSearchVissible.subscribe((status) => {
    //   this.isSearchVissible = status;
    // });
  }

  onNavigateLoginIn() {
    this.router.navigate(['login']);
  }
}
