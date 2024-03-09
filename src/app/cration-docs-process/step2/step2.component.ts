import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';

interface jsPDFWithPlugin extends jsPDF {
  autoTable: (options: UserOptions) => jsPDF;
}
@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css',
})
export class Step2Component {
  exportFile() {
    const doc = new jsPDF() as jsPDFWithPlugin;
    // Logo and name of thw file :
    const nameDoc = 'BL' + '_societe';
    doc.addImage('assets/TM EQUIPEMENT - pr.png', 'PNG', 45, 5, 120, 30);
    // company details
    doc.roundedRect(125, 45, 80, 31, 1, 1);
    doc.setFontSize(11);
    const companyInfo: string =
      'Client : Sky Moroco Hospitality\n\n' +
      'Lot B6 Zone de Zahrat Annakhil\n,40000 MARRAKECH - MAROCICE\n\n' +
      'ICE : 000159752000092\n';
    doc.setTextColor('#393939');
    doc.text(companyInfo, 129, 51);
    doc.setTextColor('#393939');
    // doc info : date/typeDoc
    doc.roundedRect(5, 45, 80, 30, 1, 1);
    doc.setFontSize(11);
    const docInfo: string =
      'Date : 11/12/2023\n\n' +
      'Facture N*: FAC01/102.02\n\n' +
      'Bon de commande : BC_000159752002\n';
    doc.text(docInfo, 7, 51);
    doc.setTextColor('#393939');
    // Ta le Info
    doc.autoTable({
      html: '#my-table',
      startY: 80,
      willDrawPage: function (data) {
        // Header
        doc.setFontSize(20);
        doc.setTextColor(40);
        if ('assets/TM EQUIPEMENT - pr.png') {
          doc.addImage('assets/TM EQUIPEMENT - pr.png', 'PNG', 45, 5, 120, 30);
        }
        // doc.text('Report', data.settings.margin.left + 15, 22);
      },
      didDrawPage: function (data) {
        // Footer
        const footerInfo =
          'Route de FesKm 11 Douar Lamhamdia El Ouidane -Marrakech RC : 129505 -TP : 53081081 -IF : 52697896 -\n' +
          'CNSS : 4352604 -ICE : 003152211000043 -GSM : 0661 67 64 58 -0667 76 21 71 -EMAIL : mbmarbre.3@gmail.com\n';
        // doc.text(footerInfo, 5, 290, null, null, 'center');
        doc.setFontSize(10);
        doc.setTextColor('#ccc');
        // jsPDF 1.4+ uses getHeight, <1.4 uses .height
        var pageSize = doc.internal.pageSize;
        var pageHeight = pageSize.height
          ? pageSize.height
          : pageSize.getHeight();
        var xOffset = doc.internal.pageSize.width / 2;
        doc.text(footerInfo, xOffset, pageHeight - 10, { align: 'center' });
        // doc.text(footerInfo, 5, pageHeight - 10, {align: 'center'});
      },
      margin: { top: 45 },
    });

    // Total amounts && Total in Letters
    doc.setFontSize(11);
    const totalInLetter: string =
      'Arrêté la présente à la somme de:\n' +
      '<b>Haha </b>Quatre Milles deux cent DHS HT\n';
    doc.setTextColor('#393939');
    doc.text(totalInLetter, 14, (doc as any).lastAutoTable.finalY + 10);

    doc.setFontSize(11);
    const TotalInfo: string =
      'Total HT  :\t' +
      '4,000 DHS HT\n\n' +
      'Total TVA :\t' +
      '1,000 DHS HT\n\n' +
      'Total TTC :\t' +
      '5,000 DHS HT';

    doc.setTextColor('#393939');
    doc.text(TotalInfo, 135, (doc as any).lastAutoTable.finalY + 10).setFont('sans-serif ','bold')

    doc.save(nameDoc + '.pdf');
  }
}
