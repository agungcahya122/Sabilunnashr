import React, { FC } from "react";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";

type ExportProps = {
  fileName?: string;
  excelData?: any;
}

const ExportExcel: FC<ExportProps> = ({ excelData, fileName }) => {

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, "Coba" + fileExtension)
  }

  return (
    <div>
      <p>Print Excel Coba</p>
      <button onClick={() => exportToExcel()} >Cetak</button>
    </div >
  )

}

export default ExportExcel