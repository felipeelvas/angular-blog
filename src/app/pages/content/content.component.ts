import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  @Input()
  photoCover:string = "https://scontent.fbsb8-2.fna.fbcdn.net/v/t39.30808-6/322716926_1869000883454000_4249630144138935912_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dtRfNH1OwY8Q7kNvgFcxGCl&_nc_ht=scontent.fbsb8-2.fna&oh=00_AfAmDNWVSNJey4gXcRXEmLXtPdHSGSn1k0cWsRyckw5N_A&oe=662F78E0"
  @Input()
  contentTitle:string= "Seu cabelo loiro com brilho e saúde com técnica profissonal"
  @Input()
  contentDescription:string= "Cabelos renovados e na a cor desejada com saúde e integridade dos fios em primeiro lugar."
  constructor(){}
  ngOnInit(): void {
  }

}
