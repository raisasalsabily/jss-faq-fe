import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons"

function LoginBtn({ text, to, onClick }) {
  return (
    <Link to={to} onClick={onClick}>
      <div
        id="login"
        className="h-[40px] w-[100px] border-dashed border-[1px] text-white rounded-3xl flex justify-center items-center text-[13px]"
      >
        {text}
        <span className="ml-1 text-[15px]">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </span>
      </div>
    </Link>
  )
}

export default LoginBtn
