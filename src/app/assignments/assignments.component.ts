import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css',
})
export class AssignmentsComponent  {
titre = "Mon application sur les Assignments !"
assignments = [
{
  nom:"TP1 sur WebComponents, un lecteur audio amélioré",
  dateDeRendu:'2023-11-17',
  rendu : true
},
{
  nom:"TP2 sur Angular, un joli gestionnaire de devoirs (Assignments)",
  dateDeRendu:'2024-01-15',
  rendu : false
},
{
  nom:"TP3 sur Angular, utilisation du routeur et de web services",
  dateDeRendu:'2024-01-17',
  rendu : false
}

];
}
