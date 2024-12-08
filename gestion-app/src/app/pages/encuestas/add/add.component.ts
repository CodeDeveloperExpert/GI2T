import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EncuestasService } from './../../../services/encuestas.service';
import { EncuestasModel } from '../../../models/encuestasModel';
import { RouterModule, Router } from '@angular/router';
 
@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {
  public encuestasList: EncuestasModel[] = [];
  public newEcuesta: EncuestasModel = new EncuestasModel();
  public nextId: string = "";
  items: any;
  isFormReady: boolean = true;
 
 
  constructor(private encuestasService: EncuestasService, private router: Router) { }
 
  ngOnInit(): void {
    this.encuestasService.getEncuestas().subscribe((res: any) => {
      console.log(res);
      this.encuestasList = res;
      this.nextId = String(this.encuestasList.length + 1);
      this.newEcuesta.id = this.nextId;
    });
  }
 
  onGuardar() {
    this.encuestasService.postEncuestas(this.newEcuesta).subscribe((res: any) => {
      console.log(res);
      this.encuestasList.push(res);
      this.newEcuesta = new EncuestasModel();
      this.nextId = String(this.encuestasList.length + 1);
      this.newEcuesta.id = this.nextId;
 
    });
  }
    back(){
      this.router.navigate(['/encuestas']);
    }
}