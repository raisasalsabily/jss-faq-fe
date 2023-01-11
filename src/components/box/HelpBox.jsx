import React from "react"

import helpImg from "../../assets/images/help.svg"
import HelpButton from "../button/HelpButton"

function HelpBox(props) {
  return (
    <div
      id="bantuan-box"
      className={`bg-gradient-to-tr from-teal-500 to-teal-100 w-full h-64 flex justify-center items-center ${props.className}`}
    >
      <div
        id="bantuan-content"
        className="w-8/12 flex justify-center items-center"
      >
        {/* bagian kiri (text) */}
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

        {/* bagian kanan (logo) */}
        <div className="basis-5/12 flex justify-center items-center">
          <img src={helpImg} alt="JSS Logo"></img>
        </div>
      </div>
    </div>
  )
}

export default HelpBox
