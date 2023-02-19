import axios from "axios"
import React, { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import ReactQuill from "react-quill"
import { useNavigate, useParams } from "react-router-dom"
import SaveBtn from "../../../components/button/SaveBtn"
import SlugButton from "../../../components/button/SlugButton"
import DashboardTitle from "../../../components/dashboard/DashboardTitle"
import DropBasic from "../../../components/input/DropBasic"
import DropSearch from "../../../components/input/DropSearch"
import InputLabel from "../../../components/input/InputLabel"
import MultiInput from "../../../components/input/MultiInput"
import QuillEditor from "../../../components/input/QuillEditor"
import TxtInput from "../../../components/input/TxtInput"
import DashboardLayout from "../../../components/layout/DashboardLayout"
import DefaultLayout from "../../../components/layout/DefaultLayout"

export default function EditFaq() {
  const roleData = [
    {
      _id: 1,
      role: "ADMIN",
      value: "ADMIN",
    },
    {
      _id: 2,
      role: "EDITOR",
      value: "EDITOR",
    },
    {
      _id: 3,
      role: "PENGGUNA JSS",
      value: "PENGGUNA JSS",
    },
  ]
  const { id } = useParams()
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [role, setRole] = useState("")

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleRoleChange = (e) => {
    // console.log(e.target.value)
    setRole(e.target.value)
  }

  const getUserById = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`http://localhost:5000/api/users/${id}`, {
        headers: {
          Accept: "application/json",
        },
      })
      setUsername(res.data.username)
      setRole(res.data.role)
    } catch (error) {
      setErrors(error)
      // console.log(error)
    }
    setLoading(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios
        .put(`http://localhost:5000/api/users/${id}`, {
          role,
        })
        .then(function (response) {
          navigate("/dashboard/user")
          toast.success("Berhasil mengubah data")
        })
    } catch (err) {
      toast.error(err.message || "Proses gagal")
    }
  }
  useEffect(() => {
    getUserById()
  }, [])

  return (
    <DefaultLayout>
      <DashboardLayout>
        {/* title */}
        <div className="">
          <DashboardTitle
            id="create-data-title"
            title="Mengubah Data"
            subTitle={`Pengguna - ${username}`}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white rounded-lg p-8 flex flex-col gap-4"
        >
          {/* Username */}
          <div>
            <InputLabel label="Username" />
            <TxtInput
              required
              placeholder="Tulis Username..."
              value={username}
              disabled
              readOnly
            />
          </div>

          {/* Role - peran */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <InputLabel label="Peran" />
              <DropBasic
                name="role"
                id="role"
                value={role}
                data={roleData ? roleData : null}
                onChange={handleRoleChange}
              />
            </div>
          </div>

          <SaveBtn value="Perbarui" />
        </form>

        {/* button */}
      </DashboardLayout>
    </DefaultLayout>
  )
}
