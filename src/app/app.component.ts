import { Component } from '@angular/core';
import { ColDef, Module, ModuleRegistry } from 'ag-grid-community';
import { FiltersToolPanelModule } from '@ag-grid-enterprise/filter-tool-panel';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'design-challenge';

  isExpanded = false;
  selectedItem = '';

  rowHeight = 45;

  fundArray = [
    'Onshore growth fund lP',
    'Offshore Growth Funds LLC',
    'Event Driven Fund UK LLC',
    'Event Driven Fund US LP',
    'Opportunistic Fund LP',
    'What the Fund LP',
    'Statistical Arb Fund LP',
    'Venator Fund LP',
    'Venless LLC',
    'VenRad LP',
    'Infiltrator Fund LLC',
    'Supremacy fund LLC',
    'Tantive IV Fund LP',
    'Tydirium Fund LLC',
    'Razor Crest Fund LP',
    'Corvus Fund LP',
    'Finalizer fund LP',
    'Adjudicator Fund LP',
    'Virulence Fund LLC',
    'Executor Fund LP',
    'Sentinel Fund LLC',
    'Phantom II Fund LLC',
    'Dreadnought V Fund LP',
    'The fulminatrix Fund LLC',
    'Ninka Fund LP',
    'The Raddus Fund LP',
    'Liberator Fund LLC',
    'Triumph Fund LP',
  ];

  defaultTemplate =
    '<div class="ag-cell-label-container" role="presentation">' +
    '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
    '  <div ref="eLabel" class="ag-header-cell-label header-cell-style" role="presentation">' +
    '    <span ref="eText" class="ag-header-cell-text" role="columnheader"></span>' +
    '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
    '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>' +
    '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>' +
    '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>' +
    '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon"></span>' +
    '  </div>' +
    '</div>';

  numTemplate =
    '<div class="ag-cell-label-container cell-num-header-flex-style" role="presentation">' +
    '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
    '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
    '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
    '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>' +
    '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon cell-num-header-sort-style"></span>' +
    '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon cell-num-header-sort-style"></span>' +
    '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon"></span>' +
    '    <span ref="eText" class="ag-header-cell-text cell-num-header-style" role="columnheader"></span>' +
    '  </div>' +
    '</div>';

  columnDefs: ColDef[] = [
    {
      field: 'fund',
      cellClass: 'text-blue',
    },
    {
      field: 'pending actions',
      cellRenderer: () => {
        return `<img class="icon-pending" src="assets/pending_actions_black_24dp.svg" />`;
      },
      cellClass: 'cell-style',
      headerComponentParams: {
        template: this.defaultTemplate,
      },
    },
    {
      field: 'daily book P&L',
      cellClass: 'cell-style',
      headerComponentParams: {
        template: this.defaultTemplate,
      },
    },
    {
      field: 'MTD book p&L',
      cellClass: 'cell-num-style',
      headerComponentParams: {
        template: this.numTemplate,
      },
    },
    {
      field: 'YTD book P&L',
      cellClass: 'cell-num-style',
      headerComponentParams: {
        template: this.numTemplate,
      },
    },
    {
      field: 'end book NAV',
      cellClass: 'cell-num-style',
      headerComponentParams: {
        template: this.numTemplate,
      },
    },
    {
      field: 'client',
      cellClass: 'cell-style',
      headerComponentParams: {
        template: this.defaultTemplate,
      },
    },
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    enableRowGroup: true,
    enablePivot: true,
    sortable: true,
    filter: true,
  };

  rowData: any = [];

  ngOnInit(): void {
    this.renderRowData();
  }

  public renderRowData() {
    for (let i = 0; i < this.fundArray.length; i++) {
      var data: any = {};
      data['fund'] = this.fundArray[i];
      data['daily book P&L'] = 'WFNH2CRWCU';
      data['MTD book p&L'] = '148,579,476';
      data['YTD book P&L'] = '148,579,476';
      data['end book NAV'] = '255,080,079';
      data['client'] = 'ARYMFLP';
      this.rowData.push(data);
    }
  }

  public onSelect(item: string) {
    this.selectedItem = item;
  }

  public expandSideBar() {
    this.isExpanded = !this.isExpanded;
  }
}
