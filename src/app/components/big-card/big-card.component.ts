import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = "Projeto Blog da beleza Studio F"
  @Input()
  cardDescription: string = "Salão de beleza e barbearia onde vc encontra serviços completos de beleza e cuidados pessoais, incluindo depilação, design de sobrancelhas, estética, manicure, pedicure e uma variedade de perfumes nacionais e importados. Visite-nos para uma experiência de qualidade e bem-estar."
  @Input()
  Id:string = "0"
  constructor(){}

  ngOnInit(): void {

  }

}
