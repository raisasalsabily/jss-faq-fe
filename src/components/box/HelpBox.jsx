import React from "react"
import HelpButton from "../button/HelpButton"
import helpImg from "../../assets/images/help.svg"

function HelpBox(props) {
  return (
    <div
      id="bantuan-box"
      className={`bg-gradient-to-tr from-teal-500 to-teal-100 w-full py-16 md:py-20 flex justify-center items-center ${props.className}`}
    >
      <div
        id="bantuan-content"
        className="w-10/12 md:w-8/12 flex flex-col md:flex-row justify-center items-center gap-3"
      >
        {/* logo */}
        <div className="basis-5/12 flex justify-center items-center md:order-last">
          <img src={helpImg} alt="JSS Logo"></img>
        </div>
        {/* text */}
        <div className="basis-7/12 flex flex-col items-start gap-2">
          <h3 className="text-h-lg text-white font-bold">
            Perlu bantuan lebih lanjut?
          </h3>
          <p className="text-b-lg text-teal-50">
            Jika Anda masih mengalami kendala terkait JSS, silakan kontak kami
            secara langsung melalui Live Chat.
          </p>
          <HelpButton />
        </div>
      </div>
    </div>
  )
}

export default HelpBox
