import InputCustom from "../components/InputCustom";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import { MdSearch } from "react-icons/md";
import { TfiPrinter } from "react-icons/tfi";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const ListMember = () => {
  const navigate = useNavigate()

  let [memberList, setMemberList] = useState<any[]>([])
  let [loading, setLoading] = useState<boolean>(false)

  if (localStorage.getItem('token') == null) {
    return (
      <Layout>
        <Navbar />
        login dulu
      </Layout>
    )
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get('https://sabilun.promaydo-tech.com/api/ramadhan');
        setMemberList(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  const toDetail = (data: any) => {
    navigate('/DetailMember', { state: { data: data } })
  }

  // axios.get('https://sabilun.promaydo-tech.com/api/ramadhan')
  //   .then((resp) => {
  //     // setMemberList(resp.data)
  //     console.log(resp.data)
  //   })
  console.log(memberList)
  return (
    <Layout>
      {loading ? <Loader /> : <></>}
      <Navbar />

      <p className="mt-14 px-20 text-[36px] font-semibold tracking-wide text-color5">
        List Peserta JarFisya
      </p>

      <div className="mt-16 flex flex-row items-center justify-center px-20">
        <div className="flex w-[22rem] gap-2 rounded-full bg-color4 py-2 px-6">
          <InputCustom
            id="input-search"
            type="search"
            placeholder="Mencari Nama Peserta .... ?"
            className="input-border input h-8 w-full max-w-full rounded-full bg-color4 px-3 text-[16px] font-medium tracking-wider text-color5 placeholder-color5"
          />
          <MdSearch className="h-8 w-8 text-color5" />
        </div>

        <div className="mt-0 ml-auto flex h-10 gap-3 rounded-xl bg-color4 py-2 px-8 text-center text-[16px] font-medium text-color5 hover:cursor-pointer hover:bg-[rgba(13,206,218,0.7)]">
          <TfiPrinter className="h-5 w-5 text-color5" />
          Prin to Excel
        </div>
      </div>

      <div className="mt-8 w-full px-20">
        <table className="table w-full ">
          <thead className="">
            <tr>
              <th className="w-1/12 bg-color4 text-center text-[14px] text-color1">
                No
              </th>
              <th className="w-2/12 bg-color4 text-[14px] text-color1">
                Nama Peserta
              </th>
              <th className="w-3/12 bg-color4 text-center text-[14px] text-color1">
                Telepon
              </th>
              <th className="w-2/12 bg-color4 text-[14px] text-color1">
                E - mail
              </th>
              <th className="w-2/12 bg-color4 text-center text-[14px] text-color1">
                Domisili
              </th>
            </tr>
          </thead>
          <tbody className="border-x-2 border-[rgba(159,159,159,0.2)]">
            {memberList.map((listValue, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">
                    <a onClick={() => toDetail(listValue)} >{listValue.name}</a>
                  </td>
                  <td className="text-center">{listValue.wa}</td>
                  <td >{listValue.email}</td>
                  <td className="text-center">{listValue.domicile}</td>
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
