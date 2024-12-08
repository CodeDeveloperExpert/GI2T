import { Component, OnInit } from "@angular/core";
import { EncuestasService } from "../../../services/encuestas.service";
import { EncuestasModel } from "../../../models/encuestasModel";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
 
 
@Component({
  selector: "app-list",
  standalone: true,
  imports: [ RouterModule, CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass'
})
export class ListComponent implements OnInit {
public encuestasList: EncuestasModel [] = [];
string: any;
 
 
  constructor(private encuestasService: EncuestasService) {
  }
  ngOnInit() {
    this.encuestasService.getEncuestas().subscribe((res: any) => {
      console.log(res);
      this.encuestasList = res;
 
    });
  }
  deleteEncuestas(id: string) {
    // Eliminar de la lista local
    this.encuestasList = this.encuestasList.filter((encuesta: EncuestasModel) => encuesta.id !== id);
  
    // Eliminar del servidor
    this.encuestasService.deleteEncuestas(id).subscribe(
      () => {
        console.log('Encuesta eliminada con éxito');
      },
      (error) => {
        console.error('Error al eliminar la encuesta:', error);
        // Opcional: Revertir la eliminación local si falla en el servidor
        //this.loadEncuestas();
      }
    );
  }
}