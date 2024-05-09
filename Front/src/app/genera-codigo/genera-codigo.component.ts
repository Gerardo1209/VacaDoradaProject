import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genera-codigo',
  standalone: true,
  imports: [],
  templateUrl: './genera-codigo.component.html',
  styleUrl: './genera-codigo.component.css'
})
export class GeneraCodigoComponent implements OnInit{
  datos!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.datos = params['dato'];
    });
  }
}