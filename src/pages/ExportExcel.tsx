import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

type DataType = {
  id: number;
  name: string;
  age: number;
};

const ExportExcel = () => {
  const [data, setData] = useState<DataType[]>([
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 35 }
  ]);

  // const handleExport = () => {
  //   const worksheet = XLSX.utils.json_to_sheet(data);
  //   const workbook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workbook, worksheet, "Data Warga");
  //   const excelBuffer = XLSX.write(workbook, {
  //     bookType: "xlsx",
  //     type: "array"
  //   });
  //   saveAsExcel(excelBuffer, "data.xlsx");
  // };

  // const saveAsExcel = (buffer: any, fileName: string) => {
  //   const data = new Blob([buffer], { type: "application/octet-stream" });
  //   const url = window.URL.createObjectURL(data);
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.download = fileName;
  //   link.click();
  // };

  const handleExportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data Mahasiswa");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });
    saveAs(new Blob([excelBuffer], { type: "application/octet-stream" }), "data_mahasiswa.xlsx");
  };

  return (
    <div>
      <button onClick={handleExportToExcel}>Export to Excel</button>
    </div>
  );
};

export default ExportExcel;
