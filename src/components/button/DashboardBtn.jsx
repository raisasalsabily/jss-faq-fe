import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@iconify/react"

function DashboardBtn({ text, to, onClick }) {
  return (
    <Link to={to} onClick={onClick}>
      <div
        id="dashboard-button"
        className="h-[40px] w-[130px] border-dashed border-[1px] text-white rounded-3xl justify-center items-center text-[13px] hidden lg:flex"
      >
        {text}
        <span className="ml-1 text-[15px]">
          <Icon
            icon="system-uicons:write"
            className="text-white text-h-sm font-bold"
          />
        </span>
      </div>

      <div
        id="dashboard-button-mobile"
        className="h-[40px] min-w-min px-1 border-dashed border-[1px] text-white rounded-3xl justify-center items-center text-[13px] flex lg:hidden"
      >
        <Icon
          icon="system-uicons:write"
          className="text-white text-h-sm font-bold"
        />
      </div>
    </Link>
  )
}

export default DashboardBtn
