import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import Instagram from "../assets/instagram.svg";
import Dzikir from "../assets/dzikir.svg";
import Masjid from "../assets/masjid.svg";
import Wudlu from "../assets/wudlu.svg";
import Adab from "../assets/adab.svg";
import { FiEdit3 } from "react-icons/fi";

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <div
        id="Home"
        className="flex flex-row bg-color4 pb-10 md:pb-16 lg:pb-20"
      >
        <div className="relative w-4/12 md:w-4/12 lg:w-4/12">
          <img
            src={Masjid}
            alt="masjid.svg"
            className=" absolute top-20 left-8 w-[24rem] md:left-0 md:top-0 md:w-10/12 lg:left-0 lg:top-0 lg:w-9/12"
          />
        </div>

        <div className="w-8/12 pt-16 text-color1 md:px-8 md:text-[16px] lg:px-16 lg:text-[18px]">
          <p className="font-semibold md:text-[34px] lg:text-[40px]">
            Sabilun Nashr
          </p>
          <p className="-mt-2 font-normal md:text-[26px] lg:text-[30px]">
            Education
          </p>
          <p className="mt-10 ">
            Akun website sederhana untuk sekedar berbagi ilmu tentang :
          </p>
          <p className="font-semibold  ">
            tadabbur, fikih syafi'i, akidah Ahlussunnah dan nasihat ulama
          </p>
          <p className="mt-8 ">
            Pada bulan Ramadhan ini sabilun Nashr membuka kelas untuk
            <span className="font-semibold italic">
              {" "}
              spesial bulan Ramadhan{" "}
            </span>
            yang akan di adakan pada
            <span className="font-semibold text-color5">
              {" "}
              Ahad, 19 Maret 2023{" "}
            </span>
          </p>

          <div className="mt-10 flex gap-8 md:px-0 md:text-[14px] lg:px-4 lg:text-[16px]">
            <div className="flex gap-2 rounded-full bg-color6 px-6 py-2 shadow-[1px_2px_4px_0px_rgba(0,0,0,0.5)]">
              <FiEdit3 className="h-6 w-6" />
              Daftar kelas Ramadhan
            </div>
            <div className="flex gap-2 rounded-full bg-color6 px-6 py-2 shadow-[1px_2px_4px_0px_rgba(0,0,0,0.5)]">
              <img src={Instagram} alt="logo.svg" className="w-6" />
              Kunjungi instagram kami
            </div>
          </div>
        </div>
      </div>

      <div className="flex bg-color1 md:text-[14px] lg:text-[16px]">
        <div className="w-8/12 pt-14 pb-8 pr-0 text-justify text-color5 md:pl-40 lg:pl-64">
          <p>
            Al-Imam An-Nawawi(w.675H)-rahimahullah- menjelaskan dalam Syarh
            Shahih Muslim sebagai berikut :
          </p>
          <p className="mt-8">
            <span className="font-semibold text-color5 md:text-[16px] lg:text-[18px]">
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
            <span className="font-semibold md:text-[16px] lg:text-[18px]">
              Nama Nabi Muhammad SAW
            </span>
            <br />
            Begitu pun ketika penyebutan Nabi shallahu 'alaihi wasallam supaya
            menulis{" "}
            <span className="font-semibold italic">
              “shallahu 'alaihi wasallam”
            </span>{" "}
            secara lengkap, bukan tanda atau singkat.
          </p>

          <p className="mt-14">
            <span className="font-semibold">Sumber referensi :</span>{" "}
            An-Nawawiyy, Al-Minhaj fi Syarh Shahih Muslim bin Al-Hajjaj (1/39).
            Beirut : Muassah Ar-Risalah
          </p>
        </div>

        <div className="w-4/12 pt-10 pb-5 text-color5 md:pl-8 lg:pl-20">
          <p className="font-bold md:text-[28px] lg:text-[32px]">Jaga Adab</p>
          <p className="mt-4 pr-10 font-bold md:text-[14px] lg:text-[16px]">
            Ketika menyebut nama Allah ta'ala dan Rasulullah SAW
          </p>
          <img src={Adab} alt="adab.svg" className="ml-4 mt-5 h-80" />
        </div>
      </div>

      <div className="flex bg-color4 pt-10 pb-10 text-[16px] text-color1">
        <div className="mt-5 w-5/12 text-center text-[34px] font-semibold">
          Dzikir Ba'dha Shalat
          <img src={Dzikir} alt="dzikir.svg" className="mx-auto mt-10 w-72" />
        </div>

        <div className="w-7/12 pl-10 pr-14 pt-2 text-justify">
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
          <p className="mt-5 mb-5 pl-28 text-[20px] font-semibold">
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

      <div className="flex bg-color1 pt-10 pb-10 text-[16px] text-color5">
        <div className="w-7/12 pl-20 pr-14 text-justify">
          <p>
            Asy-Syaikh Hasan bin Ahmad Al-Kaf merincikan syarat keadaan tidur
            yang tidak membatalkan wudlu :
          </p>
          <ul className="mt-6 list-inside list-decimal leading-loose">
            <li>
              Tidur dalam keadaan duduk yang mana pantatnya menempel pada alas
              duduk.
            </li>
            <li>
              Orang yang tidur tersebut bertubuh sedang, tidak terlalu gemuk,
              pun tidak terlalu kurus.
            </li>
            <li>Bangun dari tidurnya pada posisi yang sama ketika ia tidur.</li>
            <li>
              Tidak ada orang yang mengabarkan bahwa saat dia tidur mengeluarkan
              kentut.
            </li>
          </ul>

          <p className="mt-8 text-[14px]">
            <span className="font-semibold">Sumber referensi : </span>
            Asy-Syaikh Hasan Al-Kaf. At-Taqriratus Sadidah fil Masailil Mufidah
            (hlm.101). Tarim: Darul 'ilmi wad-Da'wah,2003.
          </p>
        </div>

        <div className="w-5/12 pl-16">
          <p className="text-[32px] font-semibold leading-loose">
            Tertidur Saat Duduk
          </p>
          <p className="text-[18px] font-semibold">
            Apakah membatalkan wudlu ?
          </p>
          <img src={Wudlu} alt="wudlu.svg" className="mt-16 w-[26rem]" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
