import React, { useEffect, useState } from "react";
import useTable from "../../hooks/useTable";
import DeleteBtn from "../button/DeleteBtn";
import EditBtn from "../button/EditBtn";
import PopConfirm from "../popconfirm/PopConfirm";
import TablePagination from "./TablePagination";

export default function FaqTable({ className = "", data, rowsPerPage }) {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const lstProp = Object.keys(data[0]);

    return (
        <div className="flex flex-col items-end">
            <div className={`${className} drop-shadow-lg w-full`}>
                <table className="table-auto rounded-sm m-0 w-full">
                    <thead className="px-12 py-4 bg-[#f4f5f5]">
                        <tr className="px-12 py-4">
                            <th className="w-2/12 rounded-tl-lg uppercase pl-10 py-4 text-left text-neutral-600 text-b-sm font-bold">
                                {lstProp[0]}
                            </th>
                            {lstProp.map((prop, i) => {
                                if (i > 0) {
                                    return (
                                        <th
                                            key={prop}
                                            className="uppercase px-4 py-4 text-left text-neutral-600 text-b-sm font-bold"
                                        >
                                            {prop}
                                        </th>
                                    );
                                } else return;
                            })}
                            {/* <th className="uppercase px-4 py-4 text-left text-neutral-600 text-b-sm font-bold">
                                Pertanyaan
                            </th>
                            <th className="uppercase px-4 py-4 text-left text-neutral-600 text-b-sm font-bold">
                                Kategori
                            </th> */}
                            <th className="w-2/12 rounded-tr-lg pr-10 pl-4 uppercase py-4 text-left text-neutral-600 text-b-sm font-bold">
                                Ubah
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {slice.map((data) => {
                            return (
                                <tr
                                    key={data[lstProp[0]]}
                                    className="last:[&>td]:last:rounded-br-lg  first:[&>td]:last:rounded-bl-lg"
                                >
                                    <td className="pl-10 pr-1 py-4 text-left text-neutral-900 text-b-sm tabular-nums">
                                        {data[lstProp[0]]}
                                    </td>

                                    {lstProp.map((prop, i) => {
                                        console.log(prop);
                                        if (i > 0) {
                                            return (
                                                <td className="text-left px-4 py-4 text-neutral-900 text-b-sm">
                                                    {data[prop]}
                                                </td>
                                            );
                                        } else return;
                                    })}
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
        </div>
    );
}
