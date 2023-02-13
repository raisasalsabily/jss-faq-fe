import React, { useState } from "react"
import { Link } from "react-router-dom"
import useTable from "../../hooks/useTable"
import DeleteBtn from "../button/DeleteBtn"
import EditBtn from "../button/EditBtn"
import PopConfirm from "../popconfirm/PopConfirm"
import TablePagination from "./TablePagination"

export default function FaqTable({
  className = "",
  data,
  rowsPerPage,
  lstProp,
  onDelete,
}) {
  const [page, setPage] = useState(1)
  const { slice, range } = useTable(data, page, rowsPerPage)

  return (
    <div className="flex flex-col items-end">
      <div className={`${className} drop-shadow-lg w-full`}>
        <table className="table-auto rounded-sm m-0 w-full">
          <thead className="px-12 py-4 bg-[#f4f5f5]">
            <tr className="px-12 py-4">
              {lstProp?.map((prop, i) => {
                return (
                  <th
                    key={prop.label}
                    className={`uppercase py-4 text-left text-neutral-600 text-b-sm font-bold ${
                      i === 0 ? "rounded-tl-lg pl-10" : "px-4"
                    }`}
                  >
                    {prop.label}
                  </th>
                )
              })}
              {lstProp.length > 0 ? (
                <th className="w-2/12 rounded-tr-lg pr-10 pl-4 uppercase py-4 text-left text-neutral-600 text-b-sm font-bold">
                  Ubah
                </th>
              ) : (
                <th className="rounded-tl-lg uppercase pl-10 py-4 text-left text-neutral-600 text-b-sm font-bold">
                  data tidak ditemukan
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white">
            {slice?.map((data) => {
              return (
                <tr
                  key={data._id}
                  className="last:[&>td]:last:rounded-br-lg  first:[&>td]:last:rounded-bl-lg"
                >
                  {lstProp.map((prop, i) => {
                    return (
                      <td
                        className={`text-left text-neutral-900 text-b-sm ${
                          i === 0 ? "pl-10 py-4" : "p-4"
                        }`}
                      >
                        {data[prop.attribute]}
                      </td>
                    )
                  })}
                  <td className="text-left pl-4 pr-10 text-neutral-900 text-b-sm">
                    <PopConfirm onConfirm={() => onDelete(data._id)}>
                      <DeleteBtn className="mr-2" />
                    </PopConfirm>
                    <Link to={`edit/${data._id}`}>
                      <EditBtn />
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <TablePagination
        range={range}
        slice={slice}
        setPage={setPage}
        page={page}
      />
    </div>
  )
}
