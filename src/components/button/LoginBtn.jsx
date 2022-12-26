import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons"

function LoginBtn() {
  return (
    <a href="https://jss.jogjakota.go.id/v4/login">
      <div
        id="login"
        className="h-[40px] w-[100px] border-dashed border-[1px] text-white rounded-3xl flex justify-center items-center text-[13px]"
      >
        Masuk
        <span className="ml-1 text-[15px]">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </span>
      </div>
    </a>
  )
}

export default LoginBtn
