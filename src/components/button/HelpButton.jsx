import React from "react"

function HelpButton(props) {
  return (
    <a href="https://help.jogjakota.go.id/livechat.html?channel=oaTnqVdEL9xvWA8VigoLpDgk">
      <div
        className={
          "p-2 border-solid border-2 border-teal-50 rounded-2xl text-white bg-teal-100 text-b-md w-56 flex justify-center items-center shadow-md" +
          props.className
        }
      >
        Buka Live Chat
      </div>
    </a>
  )
}

export default HelpButton
