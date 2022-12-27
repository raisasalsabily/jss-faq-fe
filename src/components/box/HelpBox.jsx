import React from "react"

import jssLogo from "../../assets/images/jss-logo.png"
import HelpButton from "../button/HelpButton"

function HelpBox(props) {
  return (
    <div
      id="bantuan-box"
      className={
        "bg-gradient-to-tr from-teal-500 to-teal-100 w-3/5 h-60 rounded-3xl flex justify-center items-center" +
        props.className
      }
    >
      {/* bagian kiri (logo) */}
      <div className="basis-1/3 flex justify-center items-center">
        <img src={jssLogo} alt="JSS Logo"></img>
      </div>

      {/* bagian kanan */}
      <div className="basis-2/3 flex flex-col items-start gap-6">
        <p className="text-3xl font-bold text-neutral-0">
          Perlu bantuan lebih lanjut?
        </p>
        <HelpButton />
      </div>
    </div>
  )
}

export default HelpBox
