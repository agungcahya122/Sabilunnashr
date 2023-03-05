import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";
import InputCustom from "../components/InputCustom";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const DetailMember = () => {
  return (
    <Layout>
      <Navbar />

      <div className="mt-14 mb-20 w-full bg-color1 px-8 text-color5 md:mb-96 md:px-20 lg:mb-20 lg:px-20">
        <p className="TitleShadow text-[28px] font-semibold md:text-[30px] lg:text-[32px]">
          Detail Peserta John Doe
        </p>

        <div className="mt-10 flex w-full flex-col justify-start gap-10 md:mt-14 md:flex-row md:gap-16 lg:mt-16 lg:flex-row lg:gap-20">
          <div className="pr-2 md:w-6/12 lg:w-4/12">
            <div className="flex items-center gap-2">
              <p className="w-4/12 text-[16px]  font-semibold">Nama :</p>
              <InputCustom
                id="input-nama"
                type="text"
                placeholder="Tuliskan nama anda"
                className="input-border input h-8 w-8/12 max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-4 py-5 text-[16px] text-color5 placeholder-slate-400"
              />
            </div>

            <div className="mt-5 flex items-center gap-2">
              <p className="w-4/12 text-[16px] font-semibold">Whatsapp :</p>
              <InputCustom
                id="input-nama"
                type="text"
                placeholder="Tuliskan nomor anda"
                className="input-border input h-8 w-8/12 max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-4 py-5 text-[16px] text-color5 placeholder-slate-400"
              />
            </div>

            <div className="mt-5 flex items-center gap-2">
              <p className="w-4/12 text-[16px] font-semibold">E - mail :</p>
              <InputCustom
                id="input-nama"
                type="text"
                placeholder="Tuliskan e-mail anda"
                className="input-border input h-8 w-8/12 max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-4 py-5 text-[16px] text-color5 placeholder-slate-400"
              />
            </div>

            <div className="mt-5 flex items-center gap-2">
              <p className="w-4/12 text-[16px] font-semibold">Domisili :</p>
              <InputCustom
                id="input-nama"
                type="text"
                placeholder="Domisili anda sekarang"
                className="input-border input h-8 w-8/12 max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-4 py-5 text-[16px] text-color5 placeholder-slate-400"
              />
            </div>

            <div className="mt-5 flex items-center gap-2">
              <p className="w-4/12 text-[16px] font-semibold">Pekerjaan :</p>
              <InputCustom
                id="input-nama"
                type="text"
                placeholder="Pekerjaan anda sekarang"
                className="input-border input h-8 w-8/12 max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-4 py-5 text-[16px] text-color5 placeholder-slate-400"
              />
            </div>

            <div className="mt-5 flex items-center gap-2">
              <p className="w-4/12 text-[16px] font-semibold">Usia :</p>
              <InputCustom
                id="input-nama"
                type="text"
                placeholder="Usia anda sekarang"
                className="input-border input h-8 w-8/12 max-w-full rounded-lg border-2 border-zinc-500 bg-color1 px-4 py-5 text-[16px] text-color5 placeholder-slate-400"
              />
            </div>

            <div className="mt-5 flex items-center gap-1">
              <p className="w-4/12 text-[16px] font-semibold">Gender :</p>
              <select
                defaultValue={"DEFAULT"}
                name="option"
                id="input-gender"
                className="select-ghost select max-w-full rounded-lg border-2 border-zinc-500 text-color5"
              >
                <option value="DEFALUT" disabled>
                  Pilih Salah Satu
                </option>
                <option value="makanan">Laki - Laki</option>
                <option value="minuman">Perempuan</option>
              </select>
            </div>
          </div>

          <div className="md:w-6/12 lg:w-5/12">
            <p className="text-[16px] font-semibold">
              Kirimkan bukti pembayran pendaftaran :
            </p>

            <div className="flex flex-col items-center gap-5 md:flex-col lg:flex-row">
              <img
                src=""
                alt="rekening.jpg"
                className="mt-5 h-40 w-48 rounded-xl border-2 border-zinc-500 bg-contain bg-center bg-no-repeat"
              />

              <div className="mt-auto">
                <input
                  type="file"
                  className="block w-full text-[16px] text-slate-500 file:mr-4 file:rounded-xl file:border-2 file:border-zinc-200 file:bg-color4 file:py-2 file:px-6 file:text-[16px] file:font-semibold file:text-color1 hover:file:bg-[rgba(13,206,218,0.8)]"
                />
                <p className="mt-1 text-end text-[14px] italic text-zinc-500 md:text-end lg:text-start">
                  * Jenis foto : . jpg
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
