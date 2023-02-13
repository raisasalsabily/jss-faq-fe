import React from "react"
import DefaultLayout from "../components/layout/DefaultLayout"
import Empty from "../components/datastate/Empty"

export default function NoAccess() {
  return (
    <DefaultLayout>
      <div className="h-screen flex justify-center items-center">
        <Empty />
      </div>
    </DefaultLayout>
  )
}
