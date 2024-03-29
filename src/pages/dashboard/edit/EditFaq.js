import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import SaveBtn from "../../../components/button/SaveBtn";
import SlugButton from "../../../components/button/SlugButton";
import DashboardTitle from "../../../components/dashboard/DashboardTitle";
import DropSearch from "../../../components/input/DropSearch";
import InputLabel from "../../../components/input/InputLabel";
import MultiInput from "../../../components/input/MultiInput";
import QuillEditor from "../../../components/input/QuillEditor";
import TxtInput from "../../../components/input/TxtInput";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import DefaultLayout from "../../../components/layout/DefaultLayout";

export default function EditFaq() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [question, setQuestion] = useState("");
    const [slug, setSlug] = useState("");
    const [category, setCategory] = useState(null);
    const [initQuestion, setInitQuestion] = useState("");

    const [cats, setCats] = useState([]); // state to fetch category
    const [dropInput, setDropInput] = useState(""); // input value for category dropdown
    const [dropSelected, setDropSelected] = useState(""); // selected value of category dropdown
    const [dropOpen, setDropOpen] = useState(""); //dropdown open or close

    const [answer, setAnswer] = useState(null); // state untuk TextEditor
    const [files, setFiles] = useState([]); // state untuk files TextEditor

    const [tag, setTag] = useState(null);
    const [show, setIsShow] = useState(null);
    const [errors, setErrors] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

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

    const onChangeCheckbox = (curr) => {
        setIsShow(!show);
    };

    const onEditorChange = (value) => {
        setAnswer(value);
        // console.log(value)
    };

    const onFilesChange = (files) => {
        setFiles(files);
    };

    const getFaqById = async () => {
        setLoading(true);
        try {
            const res = await axios.get(
                `http://localhost:5000/api/posts/${id}`,
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            );
            setQuestion(res.data.question);
            setInitQuestion(res.data.question);
            setSlug(res.data.slug);
            setCategory(res.data.category);
            setAnswer(res.data.answer);
            setTag(res.data.tag);
            setIsShow(res.data.show);
        } catch (error) {
            setError(error);
            // console.log(error)
        }
        setLoading(false);
    };

    const getCats = async () => {
        setLoading(true);
        try {
            const res = await axios.get(
                `http://localhost:5000/api/categories`,
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAnswer("");
        try {
            await axios
                .put(`http://localhost:5000/api/posts/${id}`, {
                    question,
                    slug,
                    category,
                    tag,
                    answer,
                    show,
                })
                .then(function (response) {
                    navigate("/dashboard/faq");
                    toast.success("Berhasil mengubah data");
                });
        } catch (err) {
            toast.error(err.message || "Proses gagal");
        }
    };
    useEffect(() => {
        getFaqById();
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

    return (
        <DefaultLayout>
            <DashboardLayout>
                {/* title */}
                <div className="">
                    <DashboardTitle
                        id="create-data-title"
                        title="Mengubah Data"
                        subTitle={`FAQ - ${initQuestion}`}
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
                            {cats && category ? (
                                <DropSearch
                                    initValue={category}
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
                        {tag && (
                            <MultiInput
                                label="Tag"
                                id="tag"
                                name="tag"
                                placeholder="Tambahkan tag"
                                onChange={changeHandler}
                                error={errors.tag}
                                defaultTag={tag}
                            />
                        )}
                    </div>

                    {/* Jawaban */}
                    <div>
                        <InputLabel label="Jawaban" />
                        {typeof answer === "string" && (
                            <QuillEditor
                                placeholder="Tulis jawaban"
                                onEditorChange={onEditorChange}
                                onFilesChange={onFilesChange}
                                initValue={answer}
                            />
                        )}

                        {/* Tampilkan FAQ */}
                        <div className="flex flex-col items-start">
                            <InputLabel label="Tampilkan FAQ" />
                            <input
                                type="checkbox"
                                value={show}
                                onChange={onChangeCheckbox}
                                id="check"
                                name="show"
                                checked={show}
                                className="m-1 w-4 h-4 text-teal-900 bg-gray-100 border-gray-300 rounded focus:ring-teal-50 focus:ring-2"
                            />
                        </div>
                    </div>
                    <SaveBtn value="Perbarui" />
                </form>

                {/* button */}
            </DashboardLayout>
        </DefaultLayout>
    );
}
