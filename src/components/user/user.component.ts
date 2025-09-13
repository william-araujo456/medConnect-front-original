import {Component, OnInit} from '@angular/core';
import {
  MatTableDataSource,
  MatTableModule
} from '@angular/material/table';
import {DatePipe, NgClass} from '@angular/common';
import {MatCard} from '@angular/material/card';
import {User} from '../../shared/models/user';
import {HttpClient} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  imports: [
    MatTableModule,
    NgClass,
    MatCard,
    DatePipe,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  public displayedColumns: string[] = ['id', 'name','date_birth', 'created_at', 'modified_at', 'active'];
  public dataSource = new MatTableDataSource<User>();
}
