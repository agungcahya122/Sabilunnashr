import React, { useCallback, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

import InputCustom from "../components/InputCustom";
import Loader from "../components/Loader";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { TfiPrinter } from "react-icons/tfi";
import { MdSearch } from "react-icons/md";

// import XLSX from "xlsx";

// function exportToExcel(data: any) {
//   const worksheet = XLSX.utils.json_to_sheet(data);
//   const workbook = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
//   const filename = "data.xlsx";
//   XLSX.writeFile(workbook, filename);
// }

const ListMember = () => {
  const navigate = useNavigate();

  let [memberList, setMemberList] = useState<any[]>([]);
  let [loading, setLoading] = useState<boolean>(false);

  const [nameSearch, setNameSearch] = useState<string>("");
  const [paketSearch, setPaketSearch] = useState<string>("");
  const [filter, setFilter] = useState<any[]>([]);

  if (localStorage.getItem("token") == null) {
    toast.error("you must login!");
    return (
      <Layout>
        <Navbar />
        <ToastContainer />
      </Layout>
    );
  }

  const filterList = useCallback(() => {
    let filtered = memberList.filter((item) => item.name.toLocaleLowerCase().includes(nameSearch.toLowerCase()));

    if (memberList[0]?.paket) {
      filtered = memberList.filter((item) => item.paket.toLocaleLowerCase().includes(paketSearch.toLowerCase()));
    }
    setFilter(filtered);
  }, [memberList, nameSearch, paketSearch]);

  useEffect(() => {
    filterList();
  }, [filterList]);

  const fetchData = async (url: string) => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(url);
      setMemberList(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData("https://sabilun.promaydo-tech.com/api/event2");
  }, []);

  const changeEvent = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let urlEvent = "";
    if (e.target.value == "Ramadhan") {
      urlEvent = "https://sabilun.promaydo-tech.com/api/ramadhan";
    } else if (e.target.value == "Kelas Intensif") {
      urlEvent = "https://sabilun.promaydo-tech.com/api/event2";
    }
    // console.log(urlEvent);

    fetchData(urlEvent);
    filterList();
  };

  const toDetail = (data: any) => {
    navigate("/DetailMember", { state: { data: data } });
  };
  const toDelete = async (data: any) => {
    // console.log(data.id);
    setLoading(true);
    const { data: response } = await axios.delete("https://sabilun.promaydo-tech.com/api/event2/" + data.id);
    if (response.status == "success") {
      toast.warn("Berhasil Menghapus");
    }
    setLoading(false);
  };

  const handleExportToExcel = () => {
    const newFilter = filter.map((data, index) => {
      delete data.id;
      data.created_at = moment(data.created_at).format("MMMM Do YYYY, h:mm:ss a");
      data.updated_at = moment(data.updated_at).format("MMMM Do YYYY, h:mm:ss a");
      return {
        no: index + 1, ...data,
      }
    })

    const worksheet = XLSX.utils.json_to_sheet(newFilter);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data_Anggota");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });
    saveAs(new Blob([excelBuffer], { type: "application/octet-stream" }), "DataAnggota.xlsx");
  };

  // console.log("filter data :", filter)

  return (
    <Layout>
      {loading ? <Loader /> : <></>}
      <Navbar />

      <p className="mt-10 px-4 text-[28px] font-semibold tracking-wide text-color5 md:px-10 md:text-[32px] lg:px-20 lg:text-[36px]">List Peserta JarFisya</p>
      <div className="relative my-4 px-4 md:px-10 lg:px-20">
        <div className="absolute flex items-center">
          <p className="w-4/12 text-[16px] font-semibold">Event :</p>
          <select onChange={changeEvent} name="paket" id="gender" className="select-ghost select relative ml-4 max-w-full rounded-lg border-2 border-zinc-500 text-color5">
            <option value=" " disabled>
              Pilih Salah Satu
            </option>
            {/* <option selected value="Ramadhan">
              Ramadhan
            </option> */}
            <option value="Kelas Intensif">Kelas Intensif</option>
          </select>
        </div>
      </div>
      <div className="mt-20 flex flex-col-reverse items-center justify-center px-4 md:flex-row md:px-10 lg:flex-row lg:px-20">
        <div className="mt-8 flex w-[22rem] gap-2 rounded-full bg-color4 py-2 px-6 md:mt-0 lg:mt-0">
          <input
            onChange={(e) => setNameSearch(e.target.value)}
            id="input-search"
            type="search"
            placeholder="Mencari Nama Peserta .... ?"
            className="input-border input h-8 w-full max-w-full rounded-full bg-color4 px-3 text-[15px] font-medium tracking-wider text-color5 placeholder-color5 md:text-[15px] lg:text-[16px]"
          />
          <MdSearch className="h-8 w-8 text-color5" />
        </div>
        {memberList[0]?.paket == null ? (
          <></>
        ) : (
          <div className="ml-2 mt-8 flex w-[10rem] gap-2 rounded-full bg-color4 py-2 px-6 md:mt-0 lg:mt-0">
            {/* <input
              onChange={(e) => setPaketSearch(e.target.value)}
              id="input-search"
              type="search"
              placeholder="Paket Peserta ?"
              className="input-border input h-8 w-full max-w-full rounded-full bg-color4 px-3 text-[15px] font-medium tracking-wider text-color5 placeholder-color5 md:text-[15px] lg:text-[16px]"
            /> */}
            <select onChange={(e) => setPaketSearch(e.target.value)} id="input-search" className="select-ghost select relative  max-w-full rounded-lg border-2 border-zinc-500 text-color5">
              <option value=" " disabled>
                Pilih Salah Satu
              </option>
              {/* <option selected value="Ramadhan">
              Ramadhan
            </option> */}
              <option value="1">1 (Jarfisya Safinah)</option>
              <option value="2">2 (Berakhlak Akidah Akhlak)</option>
              <option value="3">3 Gabungan (Jarfisya+Berakhlak)</option>
            </select>
            <MdSearch className="h-8 w-8 text-color5" />
          </div>
        )}
        <div onClick={handleExportToExcel} className="mt-0 ml-auto flex h-10 gap-3 rounded-xl bg-color4 py-2 px-8 text-center text-[16px] font-medium text-color5 hover:cursor-pointer hover:bg-[rgba(13,206,218,0.7)]">
          <TfiPrinter className="h-5 w-5 text-color5" />
          Print to Excel
        </div>
      </div>

      <div className="m-auto my-8 w-full px-10">
        <table className="table h-full w-full py-2">
          <thead className="text-center">
            <tr>
              <th className="w-1/12 bg-color4 text-center text-[14px] text-color1">No</th>
              <th className="w-3/12 bg-color4 text-[14px] text-color1">Nama Peserta</th>
              <th className="w-2/12 bg-color4 text-center text-[14px] text-color1">Telepon</th>
              <th className="w-5/12 bg-color4 text-center text-[14px] text-color1">E - mail</th>
              <th className="w-2/12 bg-color4 text-center text-[14px] text-color1">Domisili</th>
              <th className="w-2/12 bg-color4 text-center text-[14px] text-color1">Waktu</th>
              {memberList[0]?.paket == null ? <></> : <th className="w-1/12 bg-color4 text-center text-[14px] text-color1">Paket</th>}
              <th className="w-2/12 bg-color4 text-center text-[14px] text-color1">Action</th>
            </tr>
          </thead>
          <tbody className="w-full border-x-2 border-[rgba(159,159,159,0.2)]">
            {filter.map((listValue, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">
                    <a onClick={() => toDetail(listValue)}>{listValue.name}</a>
                  </td>
                  <td className="text-center">{listValue.wa}</td>
                  <td className="text-center">{listValue.email}</td>
                  <td className="text-center">{listValue.domicile}</td>
                  <td className="text-center">{moment(listValue.created_at).format("MMMM Do YYYY, h:mm:ss a")}</td>
                  {listValue.paket == null ? <></> : <td className="text-center">{listValue.paket}</td>}
                  <td className="text-center">
                    <a onClick={() => toDelete(listValue)}>
                      <button>delete</button>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Footer />
    </Layout>
  );
};

export default ListMember;
