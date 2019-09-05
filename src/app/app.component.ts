import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridAngular;
  title = 'app';

  columnDefs = [
    {
      headerName: 'make', field: 'make', sortable: true, filter: true, headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true,
    },
    { headerName: 'model', field: 'model', editable: true, sortable: true, filter: true},
    { headerName: 'price', field: 'price', sortable: true, filter: true }
    
  ];
    
   rowData: any;
   gridApi: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
  }
  onRemoveSelected() {
    var selectedRowData = this.gridApi.getSelectedRows();
    this.gridApi.updateRowData({ remove: selectedRowData });
  }
}


