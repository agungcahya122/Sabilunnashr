import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Bank from "../assets/bank.svg";
import { useEffect } from "react";

const DetailMember = () => {
  const location = useLocation()
  const data = location.state.data
  console.log(data)

  return (
    <Layout>
      <Navbar />

      <div className="mt-14 mb-20 w-full bg-color1 px-8 text-color5 md:mb-96 md:px-20 lg:mb-8 lg:px-20">
        <p className="TitleShadow text-[28px] font-semibold md:text-[30px] lg:text-[32px]">
          Detail Peserta {data.name}
        </p>

        <div className="mt-5 flex w-full flex-col justify-start gap-10 md:mt-14 md:flex-row md:gap-16 lg:mt-16 lg:flex-row lg:gap-20">
          <div className="md:w-6/12 lg:w-4/12">
            <div className="flex items-center gap-2">
              <p className="w-4/12 text-[16px]  font-semibold">Nama :</p>
              <p className="w-8/12 max-w-full border-zinc-500 bg-color1 py-2 text-[16px] text-color5 ">{data.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="w-4/12 text-[16px] font-semibold">Whatsapp :</p>
              <p className="w-8/12 max-w-full border-zinc-500 bg-color1 py-2 text-[16px] text-color5 ">{data.wa}</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="w-4/12 text-[16px] font-semibold">E - mail :</p>
              <p className="w-8/12 max-w-full border-zinc-500 bg-color1 py-2 text-[16px] text-color5 ">{data.email}</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="w-4/12 text-[16px] font-semibold">Domisili :</p>
              <p className="w-8/12 max-w-full border-zinc-500 bg-color1 py-2 text-[16px] text-color5 ">{data.domicile}</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="w-4/12 text-[16px] font-semibold">Pekerjaan :</p>
              <p className="w-8/12 max-w-full border-zinc-500 bg-color1 py-2 text-[16px] text-color5 ">{data.job}</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="w-4/12 text-[16px] font-semibold">Usia :</p>
              <p className="w-8/12 max-w-full border-zinc-500 bg-color1 py-2 text-[16px] text-color5 ">{data.age}</p>
            </div>

            <div className="flex items-center gap-1">
              <p className="w-4/12 text-[16px] font-semibold">Gender :</p>
              <p className="w-8/12 max-w-full border-zinc-500 bg-color1 py-2 text-[16px] text-color5 ">{data.gender}</p>
            </div>
          </div>

          <div className="md:w-6/12 lg:w-5/12 text-center">
            <p className="text-[16px] font-semibold">
              bukti pembayran pendaftaran :
            </p>
            <div className="flex flex-col items-center gap-5 md:flex-col lg:flex-row">
              <img src={'https://sabilun.promaydo-tech.com/storage/' + data.upload_file} alt="Bukti Transfer" className="object-contain mt-2 h-52 w-full rounded-xl border-2 border-zinc-500 bg-contain bg-center bg-no-repeat m-auto" />
            </div>

            <p className="mt-5 text-[16px] font-semibold">
              Alasan Singkat Mendaftar :
            </p>
            <div className="w-full h-36 mt-2 rounded-md border-2 border-zinc-500 text-left overflow-auto">
              <p className=" p-2 text-[16px] text-color5">{data.reason}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default DetailMember;
