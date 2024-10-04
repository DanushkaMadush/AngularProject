import { HttpClient } from '@angular/common/http';
import { Component , inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, Irole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  roleList : Irole [] = [];
  http = inject(HttpClient);
  isLoader : boolean = true;

  ngOnInit(): void {
    this.getAllRoles()
  }

getAllRoles() {
  this.http.get<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res:APIResponseModel)=> {
    this.roleList = res.data;
    this.isLoader = false;
  })
}

}
