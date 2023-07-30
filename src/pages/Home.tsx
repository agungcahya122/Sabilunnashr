import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import { ToastContainer, toast } from "react-toastify";
import withReactContent from "sweetalert2-react-content";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import "../styles/App.css";

import Instagram from "../assets/instagram.svg";
import Telegram from "../assets/telegram.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Moderator from "../assets/moderator.svg";
import Loader from "../components/Loader";
import Dzikir from "../assets/dzikir.svg";
import Masjid from "../assets/masjid.svg";
import Wudlu from "../assets/wudlu.svg";
import User from "../assets/user.svg";
import Adab from "../assets/adab.svg";
import Meet from "../assets/meet.svg";
import Bank from "../assets/bank.svg";
import Bca from "../assets/bca.svg";
import Add from "../assets/add.svg";

import { AiOutlineClockCircle } from "react-icons/ai";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import { IoCalendarOutline } from "react-icons/io5";
import { BsCircleFill } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";
import { FiEdit3 } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";

const Home = () => {
  const MySwal = withReactContent(Swal);

  const [loading, setLoading] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>();
  const [data, setData] = useState({
    gender: "laki-laki",
    paket: 1,
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const selectedFile = files as FileList;
    console.log(selectedFile?.[0].name);
    setData((prevState) => ({
      ...prevState,
      upload_file: selectedFile?.[0],
    }));
    setImgSrc(URL.createObjectURL(selectedFile?.[0]));
    // setFile(selectedFile?.[0]);
  };

  const headers = {
    "Content-Type": "multipart/form-data",
  };

  const ramadhanPost = () => {
    setLoading(true);
    console.log(data);
    axios
      // .post("https://be.sabilunnashr.com/api/ramadhan", bodyReq, {
      .post("https://be.sabilunnashr.com/api/event3", data, {
        headers: headers,
      })
      .then((resp) => {
        var link = "https://wa.me/62881081985209?text=%5BNama%20lengkap%5D%20%5BJenis%20kelamin%5D%20%5BLevel%202%2FLevel%203%5D";
        console.log(resp.data);

        if (resp.data.status != "success") {
          toast.warn(resp.data.data);
        } else {
          const val: any = resp.data.message;
          toast.success(val);
          Array.from(document.querySelectorAll("input")).forEach((input) => (input.value = ""));
          Array.from(document.querySelectorAll("textarea")).forEach((textarea) => (textarea.value = ""));
          const srcImg: any = document.getElementById("imgFile");
          srcImg.src = { Add };
          setData({
            gender: "laki-laki",
            paket: 1,
          });

          MySwal.fire({
            icon: "info",
            html: `
            <p class="text-color5 mb-5 text-[20px] capitalize">konfirmasi via WhatsApp setelah mendaftar untuk masuk grub</p>
            <a class="text-color1 bg-color6 px-4 py-2 rounded-full" href="${link}">Menuju Whatsapp</a>`,
            showConfirmButton: false,
          });
        }
        console.log(resp.data);
        setLoading(false);
      });
    // .catch((e) => {
    //   var link = "https://wa.me/62881081985209?text=(nama)(jeniskelamin)";
    //   toast.warn('sukes');
    //   MySwal.fire({
    //     icon: "info",
    //     html: `
    //       <p class="text-color5 mb-5 text-[20px] capitalize">konfirmasi via WhatsApp setelah mendaftar untuk masuk grub</p>
    //       <a class="text-color1 bg-color6 px-4 py-0 rounded-full" href="${link}">Menuju Whatsapp</a>`,
    //     showConfirmButton: false,
    //   });
    setLoading(false);
    // });
  };

  return (
    <Layout>
      {loading ? <Loader /> : <></>}
      <Navbar />
      <div id="Home" className="flex flex-row bg-color4 pb-10 md:pb-16 lg:pb-20">
        <div className="float-left hidden md:relative md:block md:w-4/12 lg:relative lg:block lg:w-4/12">
          <img src={Masjid} alt="masjid.svg" className=" left-0 top-20 float-left w-full md:absolute md:left-0 md:top-0 md:w-10/12 lg:absolute lg:left-0 lg:top-0 lg:w-9/12" />
        </div>

        <div className="w-full pl-8 pr-5 pt-8 text-[15px] text-color1 md:w-8/12 md:px-8 md:pl-0 md:pt-12 md:text-[16px] lg:w-8/12 lg:px-16 lg:pl-0 lg:pt-16 lg:text-[18px]">
          <p className="text-[32px] font-semibold md:text-[34px] lg:text-[40px]">Sabilun Nashr</p>
          <p className="-mt-2 text-[26px] font-normal md:text-[26px] lg:text-[30px]">Education</p>
          <p className="mt-4 md:mt-10  lg:mt-10 ">Akun website sederhana untuk sekedar berbagi ilmu tentang :</p>
          <p className="font-semibold  ">tadabbur, fikih syafi'i, akidah Ahlussunnah dan nasihat ulama</p>
          <p className="mt-8 ">
            Saat ini sedang dibuka pendaftaran kelas online Jarfisya
            <span className="font-semibold italic"> (Belajar Fikih Syafi'i) level 2 dan level 3. </span>
            Dibuka sampai
            <span className="font-semibold text-color5"> 31 Agustus 2023. </span>
          </p>

          <div className="mt-10 flex flex-col gap-4 pl-0 pr-24 text-[15px] md:flex-row md:gap-8 md:pl-0 md:pr-0 md:text-[14px] lg:flex-row lg:gap-8 lg:pl-4 lg:pr-4 lg:text-[16px]">
            <div className="flex items-center gap-2 rounded-full bg-color6 px-6 py-2 shadow-[1px_2px_4px_0px_rgba(0,0,0,0.5)]">
              <FiEdit3 className="h-5 w-6 md:h-8 md:w-8 lg:h-6 lg:w-10" />
              <a href="#Jarfisya">Daftar Disini</a>
            </div>

            <Link to={"https://www.instagram.com/sabilunnashr/"}>
              <div className="flex gap-2 rounded-full bg-color6 px-6 py-2 shadow-[1px_2px_4px_0px_rgba(0,0,0,0.5)]">
                <img src={Instagram} alt="logo.svg" className="w-5 md:w-8 lg:w-6" />
                instagram
              </div>
            </Link>
            <Link to={"https://twitter.com/sabilunnashr"}>
              <div className="flex gap-2 rounded-full bg-color6 px-6 py-2 shadow-[1px_2px_4px_0px_rgba(0,0,0,0.5)]">
                <img src={Twitter} alt="logo.svg" className="w-5 md:w-8 lg:w-6" />
                Twitter
              </div>
            </Link>
            <Link to={"https://facebook.com/sabilunnashr"}>
              <div className="flex gap-2 rounded-full bg-color6 px-6 py-2 shadow-[1px_2px_4px_0px_rgba(0,0,0,0.5)]">
                <img src={Facebook} alt="logo.svg" className="w-5 md:w-8 lg:w-6" />
                Facebook
              </div>
            </Link>
            <Link to={"https://t.me/sabilun_nashr"}>
              <div className="flex gap-2 rounded-full bg-color6 px-6 py-2 shadow-[1px_2px_4px_0px_rgba(0,0,0,0.5)]">
                <img src={Telegram} alt="logo.svg" className="w-5 md:w-8 lg:w-6" />
                Telegram
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div id="Adab" className="flex flex-col-reverse bg-color1 text-[15px] md:flex-row md:text-[14px] lg:flex-row lg:text-[16px]">
        <div className="w-full pb-8 pl-5 pr-5 pt-2 text-justify text-color5 md:w-8/12 md:pl-16 md:pr-0 md:pt-14 lg:w-8/12 lg:pl-64 lg:pr-0 lg:pt-14">
          <p>Al-Imam An-Nawawi(w.675H)-rahimahullah- menjelaskan dalam Syarh Shahih Muslim sebagai berikut :</p>
          <p className="mt-8">
            <span className="font-semibold text-color5 md:text-[16px] lg:text-[18px]">Nama Allah</span> ta'ala
            <br />
            Dianjurkan bagi orang yang menulis hadis apabila melewati penyebutan nama <span className="font-semibold">Allah</span> 'Azza wa Jalla supaya menulis
            <span className="font-semibold italic">“Azza wa Jalla”</span> atau <span className="font-semibold italic">“Ta'ala”, “Subhanahu wa Ta'ala”, “Tabaraka wa Ta'ala”, “Jalla Dzikruhu”, “Tabarakasmuhu”,</span> atau <span className="font-semibold italic">“Jallat 'Azhamtuhu”,</span> atau yang
            semacamnya.
          </p>

          <p className="mt-10">
            <span className="font-semibold md:text-[16px] lg:text-[18px]">Nama Nabi Muhammad SAW</span>
            <br />
            Begitu pun ketika penyebutan Nabi shallahu 'alaihi wasallam supaya menulis <span className="font-semibold italic">“shallahu 'alaihi wasallam”</span> secara lengkap, bukan tanda atau singkat.
          </p>

          <p className="mt-14">
            <span className="font-semibold">Sumber referensi :</span> An-Nawawiyy, Al-Minhaj fi Syarh Shahih Muslim bin Al-Hajjaj (1/39). Beirut : Muassah Ar-Risalah
          </p>
        </div>

        <div className="w-full pb-5 pt-5 text-center text-color5 md:w-4/12 md:pl-8 md:pt-10 lg:w-4/12 lg:pl-20 lg:pt-10">
          <p className="pr-8 text-[28px] font-bold md:pr-8 md:text-[28px] lg:pr-0 lg:text-[32px]  ">Jaga Adab</p>
          <p className="mt-4 pl-4 pr-4 text-[16px] font-bold md:pl-0 md:pr-8 md:text-[14px] lg:pl-0 lg:pr-10 lg:text-[16px]">Ketika menyebut nama Allah ta'ala dan Rasulullah SAW</p>
          <img src={Adab} alt="adab.svg" className="ml-24 mt-5 h-64 md:ml-4 md:h-64 lg:ml-4 lg:h-80" />
        </div>
      </div>

      <div id="Dzikir" className="flex flex-col bg-color4 pb-10 pt-2 text-[15px] text-color1 md:flex-row md:pt-10 md:text-[14px] lg:flex-row lg:pt-10 lg:text-[16px]">
        <div className="mt-5 w-full text-center text-[28px] font-semibold md:w-5/12 md:text-[26px] lg:w-5/12 lg:text-[34px]">
          Dzikir Ba'dha Shalat
          <img src={Dzikir} alt="dzikir.svg" className="mx-auto mt-4 w-52 md:mt-10 md:w-60 lg:mt-10 lg:w-72" />
        </div>

        <div className="w-full pl-8 pr-5 pt-5 text-justify md:w-7/12 md:pr-8 md:pt-2 lg:w-7/12 lg:pr-14 lg:pt-2">
          <p className="text-[20px] font-semibold md:text-[20px] lg:text-[24px]">Pelan atau Keras ?</p>
          <p className="mt-5">
            Sunnah dzikir setelah selesai shalat fardlu menurut pendapat mu'tamad/resmi <span className="font-semibold">Madzhab Syafi'i</span> adalah dzikir setelah shalat fardlu itu <span className="font-semibold">dipelankan (sirr)</span>. Kecuali bagi imam yang berkehendak mengajari para makmum
            untuk berdzikir, maka imam bisa mengeraskan (jahr) bacaan dzikirnya.
          </p>
          <p className="mt-8">Hal ini di paparkan oleh Asy-Syaikh Abdullah bin Abdirrahman Bafadhl Al-Hadhramiyy(w.198H) rahima-hullah dalam bukunya Al-Muqaddimah Al-Hadhramiyyah.</p>
          <p className="mb-5 mt-5 pl-0 text-[20px] font-semibold md:text-[16px] lg:pl-28 lg:text-[20px]">وَينْدب الذّكر عقب الصَّلَاة وَيسر بِهِ إِلَّا الإِمَام المريد تَعْلِيم الْحَاضِرين فيجهر إِلَى أَن يتعلموا</p>
          <p>
            Artinya :
            <br />
            “Disunnahkan dzikir seusai shalat, dan membacanya dengan suara pelan(sirr), kecuali imam yang ingin mengajari para hadirin(makmum), maka ia membaca dzikir dengan suara keras(jahr) supaya mereka belajar”
          </p>
        </div>
      </div>

      <div id="Wudlu" className="flex flex-col-reverse bg-color1 pb-10 pt-5 text-[15px] text-color5 md:flex-row md:pt-10 md:text-[14px] lg:flex-row lg:pt-10 lg:text-[16px]">
        <div className="mt-5 w-full pl-8 pr-5 text-justify md:mt-0 md:w-7/12 md:pl-16 md:pr-14 lg:mt-0 lg:w-7/12 lg:pl-20 lg:pr-14">
          <p>Asy-Syaikh Hasan bin Ahmad Al-Kaf merincikan syarat keadaan tidur yang tidak membatalkan wudlu :</p>
          <ul className="mt-6 list-inside list-decimal leading-loose">
            <li>Tidur dalam keadaan duduk yang mana pantatnya menempel pada alas duduk.</li>
            <li>Orang yang tidur tersebut bertubuh sedang, tidak terlalu gemuk, pun tidak terlalu kurus.</li>
            <li>Bangun dari tidurnya pada posisi yang sama ketika ia tidur.</li>
            <li>Tidak ada orang yang mengabarkan bahwa saat dia tidur mengeluarkan kentut.</li>
          </ul>

          <p className="mt-8 md:text-[13px] lg:text-[14px]">
            <span className="font-semibold">Sumber referensi : </span>
            Asy-Syaikh Hasan Al-Kaf. At-Taqriratus Sadidah fil Masailil Mufidah (hlm.101). Tarim: Darul 'ilmi wad-Da'wah,2003.
          </p>
        </div>

        <div className="w-full pl-0 text-center md:w-5/12 md:pl-10 md:text-left lg:w-5/12 lg:pl-16 lg:text-left">
          <p className="text-[26px] font-semibold leading-loose md:text-[28px] lg:text-[32px]">Tertidur Saat Duduk</p>
          <p className="text-[18px] font-semibold md:text-[16px] lg:text-[18px]">Apakah membatalkan wudlu ?</p>
          <img src={Wudlu} alt="wudlu.svg" className=" lg:mx0 mx-auto mt-10 w-[15rem] md:mx-0 md:mt-16 md:w-[18rem] lg:mt-16 lg:w-[26rem]" />
        </div>
      </div>

      <div id="Jarfisya" className="relative w-full bg-color4 pb-5 text-[15px] text-color1 md:pb-8 md:text-[16px] lg:pb-8 lg:text-[16px]">
        <p className="absolute -top-3 left-[18vw] w-8/12 rounded-3xl bg-color3 py-2 text-center text-[16px] font-semibold text-color5 shadow-[1px_4px_4px_0px_rgba(0,0,0,0.3)] md:left-[33vw] md:w-5/12 md:text-[20px] lg:left-[33vw] lg:w-4/12 lg:text-[20px]">
          Ingin belajar fikih, akidah, dan akhlak lebih dalam ?
        </p>

        <p className="TitleShadow pt-18 mt-6 text-center text-[24px] font-semibold text-color1 md:pt-20 md:text-[32px] lg:pt-20 lg:text-[38px]">KELAS ONLINE INTENSIF</p>
        <p className="TitleShadow -mt-2 text-center text-[24px] font-semibold text-[#FFDD5E] md:text-[32px] lg:text-[38px]">FIKIH DAN AKIDAH-AKHLAK</p>

        <div className="m-auto mt-5 flex w-10/12 rounded-2xl bg-color1 px-4 py-6 shadow-[1px_4px_4px_0px_rgba(0,0,0,0.4)] md:mt-8 md:w-9/12 md:px-12 md:py-6 lg:mt-8 lg:w-7/12 lg:px-16 lg:py-6">
          <div className="m-auto text-center text-color5">
            <img src={User} alt="user.svg" className="mx-auto w-32 md:w-44 lg:w-44" />
            <p className="mt-3 text-[16px] font-semibold md:text-[18px] lg:text-[18px]">PERMANA PUTRA</p>
            <p className="mt-3 text-[12px] leading-4 md:text-[14px] lg:text-[14px]">
              Mahasiswa S1 Syariah LIPIA <br /> Founder & admin
              <span className="font-semibold"> @sabilunnashr</span>
            </p>
          </div>
        </div>

        <p className="text-colo1 mt-6 pl-8 text-[16px] font-semibold md:mt-12 md:pl-8 md:text-[20px] lg:mt-14 lg:pl-16 lg:text-[20px]">
          Untuk umum, baik laki-laki maupun perempuan. Kuota terbatas!{" "}
          <>
            <br /> <br />
          </>
        </p>
        <p className="text-colo1 pl-8 text-[15px] font-semibold md:pl-8 md:text-[16px] lg:w-4/6 lg:pl-16 lg:text-[16px]">
          Bismillahi wa ‘ala barakatillah. Kali ini Sabilun Nashr sedang membuka peluang emas untuk kalian yang ingin belajar fikih secara intensif, sistematis, dan terstruktur secara online dengan berbagai benefit dan fasilitas yang didapat.
        </p>

        <div className="mt-5 flex flex-col pl-12 text-justify text-[15px]  text-color1 md:flex-col md:pl-14 md:text-[16px] lg:flex-row lg:pl-20 lg:text-[16px]">
          <div className="flex w-11/12 flex-col md:w-11/12 lg:w-6/12 ">
            <ul className="mr-0 w-11/12 list-outside list-decimal leading-loose md:mr-16 md:w-11/12 md:leading-relaxed lg:w-11/12 lg:leading-relaxed">
              <p className="-ml-4 text-xl font-extrabold">Level 2</p>
              <li>Kitab: “Al-Mukhtashar Al-Lathif” atau nama lainnya “Al-Mukhtashar Ash-Shaghir” karya Al-Imam Abdullah bin Abdirrahman Bafadhl</li>
              <li>Durasi: 15 pertemuan</li>
              <li>Jadwal: Tiap Selasa dan Jumat</li>
              <li>Mulai: 5 September 2023</li>
            </ul>
            <br />
            <ul className="mr-0 w-11/12 list-outside list-decimal leading-loose md:mr-16 md:w-11/12 md:leading-relaxed lg:w-11/12 lg:leading-relaxed">
              <p className="-ml-4 text-xl font-extrabold">LEVEL 3</p>
              <li>Kitab: Matn Abi Syuja’ karya Al-Qadhi Abu Syuja’ (bab ibadah)</li>
              <li>Durasi: 15 pertemuan</li>
              <li>Jadwal: Tiap Ahad dan Rabu</li>
              <li>Mulai: 3 September 2023</li>
            </ul>

            <ul className="mr-0 w-11/12 list-outside list-disc leading-loose md:mr-0 md:mt-10 md:w-6/12 md:leading-relaxed lg:mr-16 lg:mt-10 lg:w-6/12 lg:leading-relaxed">
              <p className="-ml-4 text-xl  font-extrabold">Benefits & Fasilitas</p>
              <li>Grup diskusi</li>
              <li>Tanya jawab</li>
              <li>Modul materi</li>
              <li>Rekaman ulang</li>
              <li>Kuis</li>
              <li>Sertifikat online</li>
              <li>Ijazah sanad</li>
              <li>PDF kitab</li>
              <li>Pemateri yang berkompeten & bersanad</li>
            </ul>
            <p className="-ml-4 mt-6 rounded-lg border-2 border-dashed p-3">
              *Syarat mendaftar:{" "}
              <>
                <br />
              </>
              • Mention 5 akun IG teman Anda di kolom komentar di Instagram kami{" "}
              <a className="font-bold italic" href="https://instagram.com/sabilunnashr">
                instagram.com/sabilunnashr
              </a>
              , atau • Share flyer ke 3 grup WA Anda.
            </p>
          </div>

          <div className="mt-8 w-full pl-14 md:mt-8 md:w-full md:pl-64 lg:mt-0 lg:w-6/12 lg:pl-24">
            <div className="ml-16 mt-5 flex rounded-bl-2xl rounded-tl-2xl bg-color6 px-5 py-2 text-[24px] font-semibold shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:px-8 lg:px-8">
              <p className="pr-4 text-[28px] md:pr-14 md:text-[46px] lg:pr-14 lg:text-[46px]">
                130
                <span className="text-[20px] font-normal md:text-[28px] lg:text-[28px]">k</span>
              </p>

              <div className="flex flex-col justify-center">
                <p className="flex gap-3 border-l-2 border-color1 pl-2 align-middle text-[15px] md:pl-4 md:text-[25px] lg:pl-4 lg:text-[25px]">
                  <span className="font-normal">Level 2 </span>
                </p>

                <p className="flex gap-3 border-l-2 border-color1 pl-2 pt-1 text-[10px] md:pl-4 md:text-[13px] lg:pl-4 lg:text-[13px]">{/* <span className="font-normal">(Level 1 Batch 3) - kitab Safinatun Naja</span> */}</p>
              </div>
            </div>
            <div className="ml-8 mt-5 flex rounded-bl-2xl rounded-tl-2xl bg-color6 px-5 py-2 text-[24px] font-semibold shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:px-8 lg:px-8">
              <p className="mt-2 pr-2 text-[28px] md:pr-10 md:text-[46px] lg:pr-10 lg:text-[46px]">
                160
                <span className="text-[20px] font-normal md:text-[28px] lg:text-[28px]">k</span>
              </p>

              <div className="flex flex-col justify-center">
                <p className="flex gap-3 border-l-2 border-color1 pl-2 align-middle text-[15px] md:pl-4 md:text-[25px] lg:pl-4 lg:text-[25px]">
                  <span className="font-normal">Level 3</span>
                </p>

                <p className="flex border-l-2 border-color1 pl-2 pt-1 text-[10px] md:pl-4 md:text-[13px] lg:pl-4 lg:text-[13px]">{/* <span className="font-normal">(Belajar Akidah-Akhlak) - kitab Al-‘Aqidah Ath-Thahawiyyah dan Bidayatul Hidayah</span> */}</p>
              </div>
            </div>

            {/* <div className="mt-5 flex rounded-bl-2xl rounded-tl-2xl bg-color6 px-5 py-2 text-[24px] font-semibold shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:px-8 lg:px-8">
              <span className="-ml-4 pr-2 text-[13px] md:pr-2 md:text-[22px] lg:pr-2 lg:text-[22px]">
                <span className="line-through">200</span>
                <span className="text-[20px] font-normal no-underline md:text-[28px] lg:text-[28px]">k</span>
              </span>
              <span className="mt-2 pr-2 text-[28px] md:pr-8 md:text-[46px] lg:pr-8 lg:text-[46px]">
                160
                <span className="text-[20px] font-normal md:text-[28px] lg:text-[28px]">k</span>
              </span>

              <div className="flex flex-col justify-center">
                <p className="flex gap-3 border-l-2 border-color1 pl-2 align-middle text-[15px] md:pl-4 md:text-[25px] lg:pl-4 lg:text-[25px]">
                  <span className="font-normal">Kelas Gabungan</span>
                </p>

                <p className="flex border-l-2 border-color1 pl-2 pt-1 text-[10px] md:pl-4 md:text-[13px] lg:pl-4 lg:text-[13px]">
                  <span className="font-normal">JarFiSya + BERAKAL </span>
                </p>
              </div>
            </div> */}

            <p className="ml-20 mt-5 flex items-center rounded-bl-2xl rounded-tl-2xl bg-color6 px-2 py-3 text-[14px] font-semibold leading-7 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:px-8 md:text-[18px] lg:px-8 lg:text-[18px]">
              <BsCircleFill className="mr-2 h-4 w-4 text-red-600" />
              Special Live in <span className="italic">G-Meet</span>
              <img src={Meet} alt="meet.svg" className="ml-5 hidden h-8 w-8 md:flex lg:flex" />
            </p>

            <div className="ml-20 mt-5 hidden flex-row items-center gap-5 rounded-bl-2xl rounded-tl-2xl bg-color6 px-8 py-3 text-[16px] font-semibold leading-7 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:flex lg:flex">
              <div>
                <img src={Bank} alt="bank.svg" />
                <p className="leading-6">
                  1154514796 <br /> <span className="text-sm font-normal">a.n Vigna Radiata PP</span>
                </p>
              </div>

              <div className="gap-3 border-l-2 border-color1 pl-4">
                <img src={Bca} alt="bca.svg" className="h-10" />
                <p className="leading-6">
                  5470874513 <br /> <span className="text-sm font-normal">a.n Vigna Radiata Permana Putra</span>
                </p>
              </div>
            </div>

            <div className="ml-28 mt-5 flex-row items-center gap-5 rounded-bl-2xl rounded-tl-2xl bg-color6 px-6 py-2 text-[15px] font-semibold leading-7 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:hidden lg:hidden ">
              <p className="flex gap-2 text-[16px] font-semibold text-color1">Contact Person :</p>
              <p className="flex gap-2 text-[14px] text-color1">0881-0819-85209</p>
            </div>
          </div>
        </div>

        <p className="TitleShadow ml-16 mt-5 hidden gap-2 text-[18px] font-semibold text-color1 md:flex lg:flex">
          <TbPhoneCall className="TitleShadow h-6 w-6" />
          Contact Person
        </p>
        <ul className="TitleShadow ml-16 mt-2 hidden list-inside list-disc text-[16px] leading-loose text-color1 md:block lg:block">
          <li>Admin : ( 0881-0819-85209 )</li>
          {/* <li>Ikhwan : ( 0881-0819-85209 )</li>
          <li>Akhwat : ( 0859-6305-7535 )</li> */}
        </ul>

        <div className="mb-4 ml-2 mt-16 flex flex-row items-center gap-5 text-[16px] font-semibold leading-7 md:hidden lg:hidden ">
          <img src={Bank} alt="bank.svg" />
          <p className="leading-6">
            1154514796 <br />
            <span className="font-normal">a.n Vigna Radiata PP</span>
          </p>
        </div>

        <div className="mb-14 ml-2 flex flex-row items-center gap-5 text-[16px] font-semibold leading-7 md:hidden lg:hidden ">
          <img src={Bca} alt="bca.svg" className="mr-2 h-10" />
          <p className="leading-6">
            5470874513 <br />
            <span className="font-normal">a.n Vigna Radiata Permana Putra</span>
          </p>
        </div>

        <p className="mx-auto mt-8 w-10/12 rounded-3xl bg-color3 px-0 py-2 text-center text-[19px] font-semibold text-color5 shadow-[1px_4px_4px_0px_rgba(0,0,0,0.3)] md:w-5/12 md:text-[20px] lg:w-5/12 lg:text-[26px]">Kapan Pendaftaran Dimulai ?</p>

        <div className="mt-8 flex items-center justify-center gap-3 text-[20px] font-semibold text-color1 md:gap-5 md:text-[28px] lg:gap-5 lg:text-[30px]">
          <IoCalendarOutline className="TitleShadow h-14 w-14" />
          <p className="TitleShadow">Mulai 31 Maret s.d. 31 Mei 2023</p>
        </div>

        <p className="TitleShadow mt-8 flex items-center justify-center gap-5 text-[16px] font-semibold text-color1 md:text-[24px] lg:text-[26px]">Isi formulir dibawah dan mulailah mendaftar</p>

        <div className="mt-2 flex w-full items-center justify-center gap-2">
          <TfiAngleDoubleDown className="h-12 w-12 font-bold" />
          <TfiAngleDoubleDown className="h-12 w-12 font-bold" />
          <TfiAngleDoubleDown className="h-12 w-12 font-bold" />
          <TfiAngleDoubleDown className="h-12 w-12 font-bold" />
        </div>
      </div>

      <div className="mt-8 w-full bg-color1 pb-5 text-color5">
        <p className="TitleShadow text-center text-[26px] font-semibold md:text-[30px] lg:text-[32px]">FORMULIR PENDAFTARAN</p>

        <div className="mt-10 flex w-full flex-col justify-center gap-10 px-5 md:mt-14 md:flex-row md:gap-16 md:px-8 lg:mt-16 lg:flex-row lg:gap-20 lg:px-8">
          <div className="pr-2 md:w-6/12 lg:w-4/12">
            <div className="flex items-center gap-2">
              <p className="w-4/12 text-[16px] font-semibold">Nama :</p>
              <input onChange={handleChangeInput} id="name" name="name" type="text" placeholder="Tuliskan nama anda" className="input-border input h-8 w-8/12 max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-4 py-5 text-[16px] text-color5 placeholder-slate-400" />
            </div>

            <div className="mt-5 flex items-center gap-2">
              <p className="w-4/12 text-[16px] font-semibold">Email :</p>
              <input onChange={handleChangeInput} id="email" name="email" type="text" placeholder="Tuliskan email anda" className="input-border input h-8 w-8/12 max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-4 py-5 text-[16px] text-color5 placeholder-slate-400" />
            </div>

            <div className="mt-5 flex items-center gap-2">
              <p className="w-4/12 text-[16px] font-semibold">Whatsapp :</p>
              <input onChange={handleChangeInput} id="wa" name="wa" type="number" placeholder="Tuliskan nomor whatsapp anda" className="input-border input h-8 w-8/12 max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-4 py-5 text-[16px] text-color5 placeholder-slate-400" />
            </div>

            <div className="mt-5 flex items-center gap-2">
              <p className="w-4/12 text-[16px] font-semibold">Domisili :</p>
              <input onChange={handleChangeInput} id="domicile" name="domicile" type="text" placeholder="Tempat tinggal anda sekarang" className="input-border input h-8 w-8/12 max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-4 py-5 text-[16px] text-color5 placeholder-slate-400" />
            </div>

            <div className="mt-5 flex items-center gap-2">
              <p className="w-4/12 text-[16px] font-semibold">Pekerjaan :</p>
              <input onChange={handleChangeInput} id="job" name="job" type="text" placeholder="Tuliskan pekerjaan anda" className="input-border input h-8 w-8/12 max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-4 py-5 text-[16px] text-color5 placeholder-slate-400" />
            </div>

            <div className="mt-5 flex items-center gap-2">
              <p className="w-4/12 text-[16px] font-semibold">Usia :</p>
              <input onChange={handleChangeInput} id="age" name="age" type="number" placeholder="Tuliskan usia anda" className="input-border input h-8 w-8/12 max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-4 py-5 text-[16px] text-color5 placeholder-slate-400" />
            </div>

            <div className="mt-5 flex items-center gap-1">
              <p className="w-4/12 text-[16px] font-semibold">Gender :</p>
              <select onChange={handleChangeInput} name="gender" id="gender" className="select-ghost select max-w-full rounded-lg border-2 border-zinc-500 text-color5">
                <option value=" " disabled>
                  Pilih Salah Satu
                </option>
                <option value="Laki - laki">Laki - Laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
          </div>

          <div className="md:w-6/12 lg:w-5/12">
            <div className="mb-5 flex items-center gap-1">
              <p className="w-4/12 text-[16px] font-semibold">Pilih Paket :</p>
              <select onChange={handleChangeInput} name="paket" id="gender" className="select-ghost select max-w-full rounded-lg border-2 border-zinc-500 text-color5">
                <option value=" " disabled>
                  Pilih Salah Satu
                </option>
                <option value="1">Level 2</option>
                <option value="2">Level 3</option>
                {/* <option value="3">Gabungan (Jarfisya+BERAKAL)</option> */}
              </select>
            </div>
            <p className="text-[16px] font-semibold">Kirimkan bukti pembayaran pendaftaran :</p>
            <div className="flex flex-col items-center gap-5 md:flex-col lg:flex-row">
              <img src={imgSrc} id="imgFile" alt="rekening.jpg" className="mt-3 h-40 w-48 rounded-xl border-2 border-zinc-500 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `URL(${Add})` }} />
              <div className="mt-auto">
                <input
                  onChange={handleChangeFile}
                  id="upload_file"
                  type="file"
                  className="block w-full text-[16px] text-slate-500 file:mr-4 file:rounded-xl file:border-2 file:border-zinc-200 file:bg-color4 file:px-6 file:py-2 file:text-[16px] file:font-semibold file:text-color1 hover:file:bg-[rgba(13,206,218,0.8)]"
                />
                <p className="mt-1 text-end text-[14px] italic text-zinc-500 md:text-end lg:text-start">* Jenis foto : .jpg</p>
              </div>
            </div>

            <p className="mt-2 text-[16px] font-semibold">Alasan Singkat Mendaftar :</p>

            <textarea
              onChange={handleChangeInput}
              id="reason"
              name="reason"
              typeof="text"
              placeholder="Tuliskan alasan singkat kenapa anda tertarik"
              className="input-border input mt-2 h-20 w-9/12 max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-2 py-2 text-[16px] text-color5 placeholder-slate-400"
            />
          </div>
        </div>

        <CustomButton
          id="submit"
          onClick={ramadhanPost}
          label="Mengirim Formulir Untuk Mendaftar"
          className="m-auto mb-2 mt-10 block rounded-3xl bg-color6 px-6 py-3 text-[15px] font-semibold text-white hover:bg-[rgb(0,140,255)] disabled:cursor-not-allowed disabled:bg-color2 md:mt-10 md:text-[16px] lg:mt-12 lg:text-[18px]"
        />

        {/* {waConfirm ? (
          <Link
            to={"https://wa.me/62881081985209?text=(nama)(jeniskelamin)"}
            className="m-auto mb-2 mt-2 block w-max rounded-3xl bg-green-500 py-2 px-6 text-[15px] font-semibold text-white hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-color2 md:mt-2 md:text-[16px] lg:mt-2 lg:text-[18px]"
          >
            <span>Konfirmasi Via Whatsapp</span>
            <ImWhatsapp className="ml-2 inline h-6 w-6 text-color1 md:h-8 md:w-8 lg:h-8 lg:w-8" />
          </Link>
        ) : null} */}

        <ToastContainer />
      </div>

      <Footer />
    </Layout>
  );
};

export default Home;
