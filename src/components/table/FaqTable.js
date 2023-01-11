import React, { useState } from "react";
import useTable from "../../hooks/useTable";
import DeleteBtn from "../button/DeleteBtn";
import EditBtn from "../button/EditBtn";
import PopConfirm from "../popconfirm/PopConfirm";
import TablePagination from "./TablePagination";

export default function FaqTable({ className = "", data, rowsPerPage }) {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);

    return (
        <>
            <div className={`${className} drop-shadow-lg`}>
                <table className="table-auto rounded-sm m-0 w-full">
                    <thead className="px-12 py-4 bg-neutral-100">
                        <tr className="px-12 py-4">
                            <th className="rounded-tl-lg w-2/12 uppercase pl-10 pr-1 py-4 text-left text-neutral-600 text-b-sm font-bold">
                                ID
                            </th>
                            <th className="w-6/12 uppercase px-4 py-4 text-left text-neutral-600 text-b-sm font-bold">
                                Pertanyaan
                            </th>
                            <th className="w-2/12 uppercase px-4 py-4 text-left text-neutral-600 text-b-sm font-bold">
                                Kategori
                            </th>
                            <th className="rounded-tr-lg pr-10 pl-4 uppercase py-4 text-left text-neutral-600 text-b-sm font-bold">
                                Ubah
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {slice.map((data) => {
                            return (
                                <tr
                                    key={data.id}
                                    className="last:[&>td]:last:rounded-br-lg  first:[&>td]:last:rounded-bl-lg"
                                >
                                    <td className="w-16 pl-10 pr-1 py-4 text-left text-neutral-900 text-b-sm tabular-nums">
                                        {data.id}
                                    </td>
                                    <td className="text-left px-4 py-4 text-neutral-900 text-b-sm">
                                        {data.title}
                                    </td>
                                    <td className="text-left px-4 py-4 text-neutral-900 text-b-sm">
                                        {data.category}
                                    </td>
                                    <td className="text-left pl-4 pr-10 text-neutral-900 text-b-sm">
                                        <PopConfirm
                                            onCancel={() => alert("gagal")}
                                            onConfirm={() =>
                                                alert(
                                                    data.id +
                                                        " berhasil dihapus"
                                                )
                                            }
                                        >
                                            <DeleteBtn className="mr-2" />
                                        </PopConfirm>
                                        <EditBtn />
                                    </td>
                                </tr>
                            );
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
        </>
    );
}
