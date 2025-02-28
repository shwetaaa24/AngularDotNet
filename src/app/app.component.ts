import { Component ,ViewChild } from '@angular/core';
import {
  AR_EXPORTS,
  HtmlExportService,
  PdfExportService,
  ViewerComponent,
  TabularDataExportService,
} from '@mescius/activereportsjs-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',providers: [
    {
      provide: AR_EXPORTS,
      useClass: PdfExportService,
      multi: true,
    },
    {
      provide: AR_EXPORTS,
      useClass: HtmlExportService,
      multi: true,
    },
    {
      provide: AR_EXPORTS,
      useClass: TabularDataExportService,
      multi: true,
    },
  ],
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'active-reporting-app';
  @ViewChild(ViewerComponent, { static: false }) reportViewer!: ViewerComponent;
  onViewerInit() {
    this.reportViewer.open('report.rdlx-json');
  }
}
