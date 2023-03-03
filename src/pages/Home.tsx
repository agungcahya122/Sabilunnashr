import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import Instagram from "../assets/instagram.svg";
import Adab from "../assets/adab.svg";
import Dzikir from "../assets/dzikir.svg";
import { FiEdit3 } from "react-icons/fi";

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <div id="Home" className="flex bg-color4 pb-20">
        <div className="w-4/12 bg-green-200"></div>

        <div className="w-8/12 pt-16 px-16 text-color1">
          <p className="text-[40px] font-semibold">Sabilun Nashr</p>
          <p className="text-[30px] -mt-2 font-normal">Education</p>
          <p className="text-[18px] mt-10">
            Akun website sederhana untuk sekedar berbagi ilmu tentang :
          </p>
          <p className="text-[18px] font-semibold ">
            tadabbur, fikih syafi'i, akidah Ahlussunnah dan nasihat ulama
          </p>
          <p className=" text-[18px] mt-8">
            Pada bulan Ramadhan ini sabilun Nashr membuka kelas untuk
            <span className="font-semibold italic">
              {" "}
              spesial bulan Ramadhan{" "}
            </span>
            yang akan di adakan pada
            <span className="text-color5 font-semibold">
              {" "}
              Ahad, 19 Maret 2023{" "}
            </span>
          </p>

          <div className="flex px-4 gap-8 mt-10 text-[16px]">
            <div className="bg-color6 px-6 py-2 rounded-full flex gap-2 shadow-[1px_2px_4px_0px_rgba(0,0,0,0.5)]">
              <FiEdit3 className="w-6 h-6" />
              Daftar kelas Ramadhan
            </div>
            <div className="bg-color6 px-6 py-2 rounded-full flex gap-2 shadow-[1px_2px_4px_0px_rgba(0,0,0,0.5)]">
              <img src={Instagram} alt="logo.svg" className="w-6" />
              Kunjungi instagram kami
            </div>
          </div>
        </div>
      </div>

      <div className="flex bg-color1 text-[16px]">
        <div className="w-8/12 pl-64 pt-14 text-color5 pr-0 text-justify">
          <p>
            Al-Imam An-Nawawi(w.675H)-rahimahullah- menjelaskan dalam Syarh
            Shahih Muslim sebagai berikut :
          </p>
          <p className="mt-8">
            <span className="font-semibold text-color5 text-[18px]">
              Nama Allah
            </span>{" "}
            ta'ala
            <br />
            Dianjurkan bagi orang yang menulis hadis apabila melewati penyebutan
            nama <span className="font-semibold">Allah</span> 'Azza wa Jalla
            supaya menulis
            <span className="font-semibold italic">
              “Azza wa Jalla”
            </span> atau{" "}
            <span className="font-semibold italic">
              “Ta'ala”, “Subhanahu wa Ta'ala”, “Tabaraka wa Ta'ala”, “Jalla
              Dzikruhu”, “Tabarakasmuhu”,
            </span>{" "}
            atau{" "}
            <span className="font-semibold italic">“Jallat 'Azhamtuhu”,</span>{" "}
            atau yang semacamnya.
          </p>

          <p className="mt-10">
            <span className="font-semibold">Nama Nabi Muhammad SAW</span>
            <br />
            Begitu pun ketika penyebutan Nabi shallahu 'alaihi wasallam supaya
            menulis{" "}
            <span className="font-semibold italic">
              “shallahu 'alaihi wasallam”
            </span>{" "}
            secara lengkap, bukan tanda atau singkat.
          </p>

          <p className="mt-14">
            <span className="font-semibold text-[16px]">
              Sumber referensi :
            </span>{" "}
            An-Nawawiyy, Al-Minhaj fi Syarh Shahih Muslim bin Al-Hajjaj (1/39).
            Beirut : Muassah Ar-Risalah
          </p>
        </div>

        <div className="w-4/12 text-color5 pt-10 pb-5 pl-20">
          <p className="text-[32px] font-bold">Jaga Adab</p>
          <p className="text-[16px] font-bold pr-10 mt-4">
            Ketika menyebut nama Allah ta'ala dan Rasulullah SAW
          </p>
          <img src={Adab} alt="adab.svg" className="h-80 ml-4 mt-5" />
        </div>
      </div>

      <div className="flex bg-color4 text-color1 text-[16px] pt-10 pb-10">
        <div className="w-5/12 text-[34px] font-semibold text-center mt-5">
          Dzikir Ba'dha Shalat
          <img src={Dzikir} alt="dzikir.svg" className="w-72 mx-auto mt-10" />
        </div>

        <div className="w-7/12 pl-10 pr-14 text-justify pt-2">
          <p className="text-[24px] font-semibold">Pelan atau Keras ?</p>
          <p className="mt-5">
            Sunnah dzikir setelah selesai shalat fardlu menurut pendapat
            mu'tamad/resmi{" "}
            <span className="font-semibold">Madzhab Syafi'i</span> adalah dzikir
            setelah shalat fardlu itu{" "}
            <span className="font-semibold">dipelankan (sirr)</span>. Kecuali
            bagi imam yang berkehendak mengajari para makmum untuk berdzikir,
            maka imam bisa mengeraskan (jahr) bacaan dzikirnya.
          </p>
          <p className="mt-8">
            Hal ini di paparkan oleh Asy-Syaikh Abdullah bin Abdirrahman Bafadhl
            Al-Hadhramiyy(w.198H) rahima-hullah dalam bukunya Al-Muqaddimah
            Al-Hadhramiyyah.
          </p>
          <p className="mt-5 mb-5 text-[20px] pl-28 font-semibold">
            وَينْدب الذّكر عقب الصَّلَاة وَيسر بِهِ إِلَّا الإِمَام المريد
            تَعْلِيم الْحَاضِرين فيجهر إِلَى أَن يتعلموا
          </p>
          <p>
            Artinya :
            <br />
            “Disunnahkan dzikir seusai shalat, dan membacanya dengan suara
            pelan(sirr), kecuali imam yang ingin mengajari para hadirin(makmum),
            maka ia membaca dzikir dengan suara keras(jahr) supaya mereka
            belajar”
          </p>
        </div>
      </div>

      <div className="flex bg-color1 text-color5 text-[16px] pt-10 pb-10">
        <div></div>
        <div></div>
      </div>
    </Layout>
  );
};

export default Home;
