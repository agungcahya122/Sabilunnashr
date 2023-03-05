import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import "../styles/App.css";

import Instagram from "../assets/instagram.svg";
import Dzikir from "../assets/dzikir.svg";
import Masjid from "../assets/masjid.svg";
import Kitab from "../assets/kitab.svg";
import Wudlu from "../assets/wudlu.svg";
import User from "../assets/user.svg";
import Adab from "../assets/adab.svg";
import Meet from "../assets/meet.svg";
import Bank from "../assets/bank.svg";
import Add from "../assets/add.svg";

import { AiOutlineClockCircle } from "react-icons/ai";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import { IoCalendarOutline } from "react-icons/io5";
import { BsCircleFill } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";
import { FiEdit3 } from "react-icons/fi";

import InputCustom from "../components/InputCustom";
import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";

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

      <div
        id="Adab"
        className="flex flex-col-reverse bg-color1 text-[15px] md:flex-row md:text-[14px] lg:flex-row lg:text-[16px]"
      >
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

      <div
        id="Dzikir"
        className="flex flex-col bg-color4 pt-2 pb-10 text-[15px] text-color1 md:flex-row md:pt-10 md:text-[14px] lg:flex-row lg:pt-10 lg:text-[16px]"
      >
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

      <div
        id="Wudlu"
        className="flex flex-col-reverse bg-color1 pt-5 pb-10 text-[15px] text-color5 md:flex-row md:pt-10 md:text-[14px] lg:flex-row lg:pt-10 lg:text-[16px]"
      >
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

      <div
        id="Jarfisya"
        className="relative w-full bg-color4 text-color1 md:pb-8 lg:pb-8 lg:text-[16px]"
      >
        <p className="absolute -top-3 left-[33vw] w-4/12 rounded-3xl bg-color3 px-0 py-2 text-center font-semibold text-color5 shadow-[1px_4px_4px_0px_rgba(0,0,0,0.3)] md:text-[20px] lg:text-[20px]">
          Ingin belajar fiqih lebih dalam ?
        </p>

        <p className="TitleShadow font-semibold text-color1 lg:pl-8 lg:pt-16 lg:text-[16px]">
          <span className="decoration-TitleShadow underline decoration-color1 decoration-2 underline-offset-8">
            SPESIAL R
          </span>
          AMADHAN
        </p>
        <p className="TitleShadow text-center font-semibold text-color1 lg:mt-4 lg:text-[38px]">
          DAURAH BERKAH ILMU
        </p>
        <p className="TitleShadow -mt-2 text-center font-semibold text-[#FFDD5E] lg:text-[38px]">
          FIKIH RAMADHAN
        </p>

        <div className="flex w-7/12 flex-row justify-between rounded-2xl bg-color1 shadow-[1px_4px_4px_0px_rgba(0,0,0,0.4)] lg:mx-auto lg:mt-8 lg:py-6 lg:px-16">
          <div className="w-6/12 text-center text-[14px] text-color5">
            <img src={User} alt="user.svg" className="mx-auto" />
            <p className="mt-3 text-[18px] font-semibold">PERMANA PUTRA</p>
            <p className="mt-3 leading-4">
              Mahasiswa S1 Syariah LIPIA <br /> Founder & admin
              <span className="font-semibold"> @sabilunnashr</span>
            </p>
          </div>

          <div className="w-6/12 px-4 text-center text-[14px] text-color5">
            <img src={Kitab} alt="kitab.svg" className="mx-auto" />
            <p className="mt-3 text-[18px] font-semibold">
              NABIL IZZATURRAHMAN
            </p>
            <p className="mt-3 leading-4">
              Mahasiswa I'dad Lughawi <br />
              <span className="">LIPIA JAKARTA</span>
            </p>
          </div>
        </div>

        <p className="text-colo1 mt-20 pl-16 text-[20px] font-semibold">
          Topik yang akan dibahas :
        </p>
        <div className="mt-5 flex flex-row pl-20 text-justify text-[16px] text-color1">
          <ul className="mr-16 w-3/12 list-outside list-disc pr-2 leading-relaxed">
            <li>Niat puasa dilafadzkan ?</li>
            <li>
              Pembatal puasa kontemporer (batalkah puasa karena memakai inhaler
              ?)
            </li>
            <li>Fidyah, dari siapa dan untuk siapa ? Kasus bumil dan busui</li>
            <li>Apa hukum renang saat puasa ?</li>
            <li>Urutan hukum renang saat puasa ?</li>
            <li>Salat tarawih 11 rakaat atau 23 rakaat ?</li>
            <li>Adakah shalawat di sela-sela salat Tarawih ?</li>
          </ul>

          <ul className="w-3/12 list-outside list-disc leading-relaxed">
            <li>Mulai kapan qunut witir ?</li>
            <li>
              Berapa kadar minim i'tikaf ? dan solusi i'tikaf untuk pekerja ?
            </li>
            <li>Lailatulqdar menurut Mazhab Syafi'i</li>
            <li>Bolehkah zakat fitrah dengan uang ?</li>
            <li>Kupas tuntas zakat fitrah dan alokasinya</li>
            <li>Dan masih banyak lagi</li>
          </ul>

          <div className="w-6/12 pl-24">
            <p className="rounded-tl-3xl rounded-bl-3xl bg-color6 px-8 py-3 text-[24px] font-semibold leading-7 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              Fasilitas : <br />
              <span className="text-[16px] font-normal">
                Tanya jawab, modul materi, recording,
              </span>{" "}
              <span className="text-[16px]">e - certificate</span>
            </p>

            <div className="mt-5 ml-8 flex rounded-tl-2xl rounded-bl-2xl bg-color6 px-8 py-2 text-[24px] font-semibold shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <p className="pr-14 text-[46px]">
                40<span className="text-[28px] font-normal">k</span>
              </p>

              <div className="flex flex-col justify-center text-[18px]">
                <p className="flex gap-3 border-l-2 border-color1 pl-10 align-middle">
                  <IoCalendarOutline className="h-5 w-5" />
                  <span className="font-normal">Ahad, </span>19 Maret 2023
                </p>

                <p className="flex gap-3 border-l-2 border-color1 pt-1 pl-10">
                  <AiOutlineClockCircle className="h-6 w-6" />
                  08.00 - 10.30 <span className="font-normal">WIB</span>
                </p>
              </div>
            </div>

            <p className="ml-20 mt-5 flex items-center rounded-tl-2xl rounded-bl-2xl bg-color6 px-14 py-3 text-[18px] font-semibold leading-7 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <BsCircleFill className="mr-2 h-4 w-4 text-red-600" />
              Special Live in <span className="italic">G-Meet</span>
              <img src={Meet} alt="meet.svg" className="ml-5 h-8 w-8" />
            </p>

            <div className="ml-28 mt-5 flex flex-row items-center gap-5 rounded-tl-2xl rounded-bl-2xl bg-color6 px-8 py-3 text-[16px] font-semibold leading-7 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <img src={Bank} alt="bank.svg" />
              <p className="leading-6">
                1154514796 <br />{" "}
                <span className="font-normal">a.n Vigna Radiata PP</span>
              </p>
            </div>
          </div>
        </div>

        <p className=" TitleShadow mt-5 ml-16 flex gap-2 text-[18px] font-semibold text-color1">
          <TbPhoneCall className="TitleShadow h-6 w-6" />
          Contact Person
        </p>
        <ul className="TitleShadow ml-16 mt-2 list-inside list-disc text-[16px] leading-loose text-color1">
          <li>Ikhwan : ( 0881-0819-85209 )</li>
          <li>Akhwat : ( 0859-6305-7535 )</li>
        </ul>

        <p className="mx-auto mt-8 w-5/12 rounded-3xl bg-color3 px-0 py-2 text-center font-semibold text-color5 shadow-[1px_4px_4px_0px_rgba(0,0,0,0.3)] md:text-[20px] lg:text-[26px]">
          Kapan Pendaftaran Dimulai ?
        </p>

        <div className="mt-8 flex items-center justify-center gap-5 font-semibold text-color1 md:text-[20px] lg:text-[30px]">
          <IoCalendarOutline className="TitleShadow h-14 w-14" />
          <p className="TitleShadow">Mulai 02 Maret s.d 17 Maret 2023</p>
        </div>

        <p className="TitleShadow mt-8 flex items-center justify-center gap-5 font-semibold text-color1 md:text-[20px] lg:text-[26px]">
          Isi formulir dibawah dan mulailah mendaftar
        </p>

        <div className="mt-2 flex w-full items-center justify-center gap-2">
          <TfiAngleDoubleDown className="h-12 w-12 font-bold" />
          <TfiAngleDoubleDown className="h-12 w-12 font-bold" />
          <TfiAngleDoubleDown className="h-12 w-12 font-bold" />
          <TfiAngleDoubleDown className="h-12 w-12 font-bold" />
        </div>
      </div>

      <div className="mt-8 w-full bg-color1 pb-5 text-color5">
        <p className="TitleShadow text-center text-[32px] font-semibold">
          FORMULIR PENDAFTARAN
        </p>

        <div className="mt-16 flex flex-row justify-center gap-10">
          <div className="flex w-4/12 flex-col gap-4 pr-2 ">
            <div className="flex items-center gap-4">
              <p className="w-5/12 text-[16px]  font-semibold">Nama :</p>
              <InputCustom
                id="input-nama"
                type="text"
                placeholder="Tuliskan nama anda"
                className="input-border input h-8 w-full max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-4 py-4 text-[16px] text-color5 placeholder-slate-400"
              />
            </div>

            <div className="flex items-center gap-4">
              <p className="w-5/12 text-[16px] font-semibold">Email :</p>
              <InputCustom
                id="input-nama"
                type="text"
                placeholder="Tuliskan email anda"
                className="input-border input h-8 w-full max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-4 py-4 text-[16px] text-color5 placeholder-slate-400"
              />
            </div>

            <div className="flex items-center gap-4">
              <p className="w-5/12 text-[16px] font-semibold">Whatsapp :</p>
              <InputCustom
                id="input-nama"
                type="text"
                placeholder="Tuliskan nomor whatsapp anda"
                className="input-border input h-8 w-full max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-4 py-4 text-[16px] text-color5 placeholder-slate-400"
              />
            </div>

            <div className="flex items-center gap-4">
              <p className="w-5/12 text-[16px] font-semibold">Domisili :</p>
              <InputCustom
                id="input-nama"
                type="text"
                placeholder="Tempat tinggal anda sekarang"
                className="input-border input h-8 w-full max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-4 py-4 text-[16px] text-color5 placeholder-slate-400"
              />
            </div>

            <div className="flex items-center gap-4">
              <p className="w-5/12 text-[16px] font-semibold">Pekerjaan :</p>
              <InputCustom
                id="input-nama"
                type="text"
                placeholder="Tuliskan pekerjaan anda"
                className="input-border input h-8 w-full max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-4 py-4 text-[16px] text-color5 placeholder-slate-400"
              />
            </div>

            <div className="flex items-center gap-4">
              <p className="w-5/12 text-[16px] font-semibold">Usia :</p>
              <InputCustom
                id="input-nama"
                type="text"
                placeholder="Tuliskan pekerjaan anda"
                className="input-border input h-8 w-full max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-4 py-4 text-[16px] text-color5 placeholder-slate-400"
              />
            </div>

            <div className="flex items-center gap-4">
              <p className="w-5/12 text-[16px] font-semibold">Gender :</p>
              <select
                defaultValue={"DEFAULT"}
                name="option"
                id="input-gender"
                className="select-ghost select w-[19rem] max-w-full rounded-lg border-2 border-zinc-500 text-color5"
              >
                <option value="DEFALUT" disabled>
                  Pilih Salah Satu
                </option>
                <option value="makanan">Laki - Laki</option>
                <option value="minuman">Perempuan</option>
              </select>
            </div>
          </div>

          <div className="w-5/12 pl-8">
            <p className="text-[16px] font-semibold">
              Kirimkan bukti pembayran pendaftaran :
            </p>

            <div className="flex items-center gap-5">
              <img
                src=""
                alt="rekening.jpg"
                className="mt-5 h-40 w-48 rounded-xl border-2 border-zinc-500 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `URL(${Add})` }}
              />
              <div className="mt-auto">
                <label className="block">
                  <span className="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    className="block w-full text-[16px] text-slate-500 file:mr-4 file:rounded-xl file:border-2 file:border-zinc-200 file:bg-color4 file:py-2 file:px-6 file:text-[16px] file:font-semibold file:text-color1 hover:file:bg-[rgba(13,206,218,0.8)]"
                  />
                </label>
                <p className="mt-1 text-[14px] italic text-zinc-500">
                  * Jenis foto : .jpg
                </p>
              </div>
            </div>

            <p className="mt-5 text-[16px] font-semibold">
              Alasan Singkat Mendaftar :
            </p>

            <textarea
              id="input-alasan"
              typeof="text"
              placeholder="Tuliskan alasan singkat kenapa anda tertarik"
              className="input-border input mt-2 h-20 w-9/12 max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-2 py-2 text-[16px] text-color5 placeholder-slate-400"
            />
          </div>
        </div>

        <CustomButton
          id="btn-formulir"
          label="Mengirim Formulir Untuk Mendaftar"
          className="mb-16 mt-16 ml-[34vw] rounded-2xl bg-color6 py-2 px-6 text-[18px] font-semibold text-white hover:bg-[rgb(0,140,255)] disabled:cursor-not-allowed disabled:bg-color2"
        />
      </div>

      <Footer />
    </Layout>
  );
};

export default Home;
