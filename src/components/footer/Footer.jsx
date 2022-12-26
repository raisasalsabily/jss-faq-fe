import { useState } from "react"
// import { useNavigate } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="h-[500px] lg:h-[250px] box-border footerbg flex w-full items-center justify-center text-white text-left"
    >
      <div className="mx-2 lg:mx-[130px]">
        {/* -------------- FOOTER TOP START -------------- */}
        <div id="footer-top" className="flex flex-col lg:flex-row">
          <div id="pelajari" className="lg:basis-[300px] px-2">
            <h5 className="font-semibold text-16 lg:text-[18px] mb-4">
              Pelajari
            </h5>
            <p className="text-[12px] lg:text-[14px] py-1">
              Syarat dan Ketentuan
            </p>
            <p className="text-[12px] lg:text-[14px] py-1">
              Kebijakan Privasi Data
            </p>
          </div>
          <div id="apa-jss" className="lg:basis-[450px] px-2">
            <h5 className="font-semibold text-16 lg:text-[18px] mb-4">
              Apa sih JSS itu ?
            </h5>
            <p className="text-[12px] lg:text-[14px]">
              Jogja Smart Service adalah Balaikota Virtual atau Portal maya
              Pemerintah Kota Yogyakarta dalam rangka memberikan layanan
              langsung kepada semua masyarakat di Kota Yogyakarta.
            </p>
          </div>
          <div id="satu-pintu" className="lg:basis-3/12 px-2">
            <h5 className="font-semibold text-16 lg:text-[18px] mb-4">
              Satu Pintu
            </h5>
            <p className="text-[12px] lg:text-[14px]">
              Daftar layanan Pemerintah Kota yang dapat diakses langsung oleh
              masyarakat dengan mengedepankan pelayanan mandiri (Swalayan).
            </p>
          </div>
          <div
            id="download-app"
            className="lg:basis-auto flex flex-row lg:flex-col gap-2 px-2 justify-center items-center"
          >
            <img
              src="https://jss.jogjakota.go.id/v4/img/ios.png"
              alt="Download dari App Store"
              className="h-[76px] w-[230px] lg:h-[50px] lg:w-[155px]"
            ></img>
            <img
              src="https://jss.jogjakota.go.id/v4/img/gplay.png"
              alt="Download dari Google Play Store"
              className="h-[76px] w-[230px] lg:h-[50px] lg:w-[155px]"
            ></img>
          </div>
        </div>
        <div id="footer-bottom" className="mx-2 mt-6 border-t-[1px]">
          <div
            id="copyright"
            className="text-center lg:text-left text-[13px] lg:text-[14px] py-2"
          >
            © 2018 - 2022, Jogja Smart Service by Dinas Komunikasi Informatika
            dan Persandian. JSS v4.0.0
          </div>
          <div id="social-button"></div>
        </div>
      </div>
    </footer>
  )
}