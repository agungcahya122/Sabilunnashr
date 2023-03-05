import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";
import InputCustom from "../components/InputCustom";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const DetailMember = () => {
  return (
    <Layout>
      <Navbar />

      <div className="mt-14 w-full bg-color1 px-16 pb-28 text-color5">
        <p className="TitleShadow text-[32px] font-semibold">
          Detail Peserta John Doe
        </p>

        <div className="mt-16 flex flex-row gap-10">
          <div className="flex w-4/12 flex-col gap-8 pr-2 ">
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
                className="select-ghost select w-[17.5rem] max-w-full rounded-lg border-2 border-zinc-500 text-color5"
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
      </div>

      <Footer />
    </Layout>
  );
};

export default DetailMember;
