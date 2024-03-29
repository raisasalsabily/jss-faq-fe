import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SaveBtn from "../../../components/button/SaveBtn";
import DashboardTitle from "../../../components/dashboard/DashboardTitle";
import DropSearch from "../../../components/input/DropSearch";
import InputLabel from "../../../components/input/InputLabel";
import MultiInput from "../../../components/input/MultiInput";
import QuillEditor from "../../../components/input/QuillEditor";
import TxtInput from "../../../components/input/TxtInput";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import DefaultLayout from "../../../components/layout/DefaultLayout";
import SlugButton from "../../../components/button/SlugButton";
import { toast } from "react-hot-toast";

export default function CreateFaq() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [question, setQuestion] = useState("");
    const [slug, setSlug] = useState("");
    const [category, setCategory] = useState("");

    const [cats, setCats] = useState([]); // state to fetch category
    const [dropInput, setDropInput] = useState(""); // input value for category dropdown
    const [dropSelected, setDropSelected] = useState(""); // selected value of category dropdown
    const [dropOpen, setDropOpen] = useState(""); //dropdown open or close

    const [answer, setAnswer] = useState([]); // state untuk TextEditor
    const [files, setFiles] = useState([]); // state untuk files TextEditor

    const [tag, setTag] = useState([]);
    const [show, setIsShow] = useState(false);
    const [errors, setErrors] = useState({});

    const changeHandler = (name, value) => {
        if (name === "tag") {
            setTag(value);
            if (value.length > 0 && errors.tag) {
                setError((prev) => {
                    const prevErrors = { ...prev };
                    delete prevErrors.tag;
                    return prevErrors;
                });
            }
        }
    };

    const onEditorChange = (value) => {
        setAnswer(value);
        // console.log(value)
    };

    const onFilesChange = (files) => {
        setFiles(files);
    };

    const getCats = async () => {
        setLoading(true);
        try {
            const res = await axios.get(
                "http://localhost:5000/api/categories",
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            );
            setCats(res.data);
        } catch (error) {
            setError(error);
            // console.log(error)
        }
        setLoading(false);
    };

    useEffect(() => {
        getCats();
    }, []);

    const slugify = () =>
        setSlug(
            question
                .toLowerCase()
                .trim()
                .replace("/", "")
                .replace(/[^\w\s-]/g, "")
                .replace(/[\s_-]+/g, "-")
                .replace(/^-+|-+$/g, "")
        );

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAnswer("");

        try {
            await axios
                .post("http://localhost:5000/api/posts", {
                    question,
                    slug,
                    category,
                    tag,
                    answer,
                    show,
                })
                .then(function (response) {
                    navigate("/dashboard/faq");
                    toast.success("Berhasil menambah data");
                });
        } catch (err) {
            toast.error(err.message || "Proses gagal");
        }
    };

    return (
        <DefaultLayout>
            <DashboardLayout>
                {/* title */}
                <div className="">
                    <DashboardTitle
                        id="create-data-title"
                        title="Menambah Data"
                        subTitle="FAQ"
                    />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="w-full bg-white rounded-lg p-8 flex flex-col gap-4"
                >
                    {/* Pertanyaan */}
                    <div>
                        <InputLabel label="Pertanyaan" />
                        <TxtInput
                            required
                            placeholder="Tulis pertanyaan..."
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                    </div>

                    {/* Route URL dan Kategori */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* Route URL */}
                        <div>
                            <InputLabel label="Route URL" />
                            <div className="flex relative">
                                <TxtInput
                                    required
                                    placeholder="Generate url..."
                                    value={slug}
                                    onChange={(e) =>
                                        setSlug(
                                            e.target.value.replace(
                                                /[^A-Za-z0-9_-]/g,
                                                ""
                                            )
                                        )
                                    }
                                />
                                <SlugButton onClick={slugify} />
                            </div>
                        </div>

                        {/* Kategori */}
                        <div>
                            <InputLabel label="Kategori" />
                            {cats ? (
                                <DropSearch
                                    cats={cats}
                                    setCategory={setCategory}
                                    placeholder="Pilih kategori"
                                />
                            ) : null}
                        </div>
                    </div>

                    {/* Tag */}
                    <div>
                        <InputLabel label="Tag" />
                        <MultiInput
                            label="Tag"
                            id="tag"
                            name="tag"
                            placeholder="Tambahkan tag"
                            onChange={changeHandler}
                            error={errors.tag}
                            defaultTag={tag}
                        />
                    </div>

                    {/* Jawaban */}
                    <div>
                        <InputLabel label="Jawaban" />
                        <QuillEditor
                            placeholder="Tulis jawaban"
                            onEditorChange={onEditorChange}
                            onFilesChange={onFilesChange}
                        />
                    </div>

                    {/* Tampilkan FAQ */}
                    <div className="flex flex-col items-start">
                        <InputLabel label="Tampilkan FAQ" />
                        <input
                            type="checkbox"
                            value={show}
                            onChange={() => setIsShow((current) => !current)}
                            id="check"
                            name="check"
                            className="m-1 w-4 h-4 text-teal-900 bg-gray-100 border-gray-300 rounded focus:ring-teal-50 focus:ring-2 "
                        />
                    </div>

                    <SaveBtn value="Simpan" />
                </form>

                {/* button */}
            </DashboardLayout>
        </DefaultLayout>
    );
}
