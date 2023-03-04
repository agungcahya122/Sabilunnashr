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
        <div className="float-left hidden md:relative md:block md:w-4/12 lg:relative lg:block lg:w-4/12">
          <img
            src={Masjid}
            alt="masjid.svg"
            className=" top-20 left-0 float-left w-full md:absolute md:left-0 md:top-0 md:w-10/12 lg:absolute lg:left-0 lg:top-0 lg:w-9/12"
          />
        </div>

        <div className="w-full pr-5 pl-8 pt-8 text-[15px] text-color1 md:w-8/12 md:px-8 md:pl-0 md:pt-12 md:text-[16px] lg:w-8/12 lg:px-16 lg:pl-0 lg:pt-16 lg:text-[18px]">
          <p className="text-[32px] font-semibold md:text-[34px] lg:text-[40px]">
            Sabilun Nashr
          </p>
          <p className="-mt-2 text-[26px] font-normal md:text-[26px] lg:text-[30px]">
            Education
          </p>
          <p className="mt-4 md:mt-10  lg:mt-10 ">
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

          <div className="mt-10 flex flex-col gap-4 pl-0 pr-24 text-[15px] md:flex-row md:gap-8 md:pl-0 md:pr-0 md:text-[14px] lg:flex-row lg:gap-8 lg:pl-4 lg:pr-4 lg:text-[16px]">
            <div className="flex gap-2 rounded-full bg-color6 px-6 py-2 shadow-[1px_2px_4px_0px_rgba(0,0,0,0.5)]">
              <FiEdit3 className="h-5 w-5 md:h-6 md:w-6 lg:h-6 lg:w-6" />
              Daftar kelas Ramadhan
            </div>

            <div className="flex gap-2 rounded-full bg-color6 px-6 py-2 shadow-[1px_2px_4px_0px_rgba(0,0,0,0.5)]">
              <img
                src={Instagram}
                alt="logo.svg"
                className="w-5 md:w-6 lg:w-6"
              />
              Kunjungi instagram kami
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse bg-color1 text-[15px] md:flex-row md:text-[14px] lg:flex-row lg:text-[16px]">
        <div className="w-full pt-2 pb-8 pl-5 pr-5 text-justify text-color5 md:w-8/12 md:pt-14 md:pr-0 md:pl-16 lg:w-8/12 lg:pr-0 lg:pt-14 lg:pl-64">
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

        <div className="w-full pt-5 pb-5 text-center text-color5 md:w-4/12 md:pt-10 md:pl-8 lg:w-4/12 lg:pt-10 lg:pl-20">
          <p className="text-[28px] font-bold md:text-[28px] lg:text-[32px]">
            Jaga Adab
          </p>
          <p className="mt-4 pr-4 pl-4 text-[16px] font-bold md:pl-0 md:pr-10 md:text-[14px] lg:pl-0 lg:pr-10 lg:text-[16px]">
            Ketika menyebut nama Allah ta'ala dan Rasulullah SAW
          </p>
          <img
            src={Adab}
            alt="adab.svg"
            className="ml-28 mt-5 h-64 md:ml-4 md:h-80 lg:ml-4 lg:h-80"
          />
        </div>
      </div>

      <div className="flex flex-col bg-color4 pt-2 pb-10 text-[15px] text-color1 md:flex-row md:pt-10 md:text-[14px] lg:flex-row lg:pt-10 lg:text-[16px]">
        <div className="mt-5 w-full text-center text-[28px] font-semibold md:w-5/12 md:text-[26px] lg:w-5/12 lg:text-[34px]">
          Dzikir Ba'dha Shalat
          <img
            src={Dzikir}
            alt="dzikir.svg"
            className="mx-auto mt-4 w-52 md:mt-10 md:w-60 lg:mt-10 lg:w-72"
          />
        </div>

        <div className="w-full pl-8 pt-5 pr-5 text-justify md:w-7/12 md:pt-2 md:pr-8 lg:w-7/12 lg:pt-2 lg:pr-14">
          <p className="text-[20px] font-semibold md:text-[20px] lg:text-[24px]">
            Pelan atau Keras ?
          </p>
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
          <p className="mt-5 mb-5 pl-0 text-[20px] font-semibold md:text-[16px] lg:pl-28 lg:text-[20px]">
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

      <div className="flex flex-col-reverse bg-color1 pt-5 pb-10 text-[15px] text-color5 md:flex-row md:pt-10 md:text-[14px] lg:flex-row lg:pt-10 lg:text-[16px]">
        <div className="mt-5 w-full pl-8 pr-5 text-justify md:mt-0 md:w-7/12 md:pl-20 md:pr-14 lg:mt-0 lg:w-7/12 lg:pl-20 lg:pr-14">
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

          <p className="mt-8 md:text-[13px] lg:text-[14px]">
            <span className="font-semibold">Sumber referensi : </span>
            Asy-Syaikh Hasan Al-Kaf. At-Taqriratus Sadidah fil Masailil Mufidah
            (hlm.101). Tarim: Darul 'ilmi wad-Da'wah,2003.
          </p>
        </div>

        <div className="w-full pl-0 text-center md:w-5/12 md:pl-16 md:text-left lg:w-5/12 lg:pl-16 lg:text-left">
          <p className="text-[26px] font-semibold leading-loose md:text-[28px] lg:text-[32px]">
            Tertidur Saat Duduk
          </p>
          <p className="text-[18px] font-semibold md:text-[16px] lg:text-[18px]">
            Apakah membatalkan wudlu ?
          </p>
          <img
            src={Wudlu}
            alt="wudlu.svg"
            className=" lg:mx0 mx-auto mt-10 w-[15rem] md:mx-0 md:mt-16 md:w-[18rem] lg:mt-16 lg:w-[26rem]"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
