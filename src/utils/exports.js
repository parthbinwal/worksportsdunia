import jsPDF from 'jspdf';
import Papa from 'papaparse';

export const exportPDF = (data) => {
  const doc = new jsPDF();
  doc.text('Payout Report', 10, 10);
  data.forEach((item, index) => doc.text(`${index + 1}. ${item.author}: ${item.title}`, 10, 20 + index * 10));
  doc.save('report.pdf');
};

export const exportCSV = (data) => {
  const csv = Papa.unparse(data);
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'report.csv');
  document.body.appendChild(link);
  link.click();
};