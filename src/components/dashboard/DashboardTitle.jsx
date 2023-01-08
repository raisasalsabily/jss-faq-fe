import React from "react"

export const DashboardTitle = (props) => {
  return (
    <div id={props.id}>
      <h4 className="font-semibold text-h-md text-neutral-800">
        {props.title}
      </h4>
      <p className="text-b-lg text-neutral-600">{props.subTitle}</p>
    </div>
  )
}

DashboardTitle.defaultValue = {
  title: "Insert title",
  subTitle: "Insert sub-title",
}
