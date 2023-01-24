import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import SaveBtn from "../../../components/button/SaveBtn";
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

    const [cats, setCats] = useState([]); // state to fetch category
    const [dropInput, setDropInput] = useState(""); // input value for category dropdown
    const [dropSelected, setDropSelected] = useState(""); // selected value of category dropdown
    const [dropOpen, setDropOpen] = useState(""); //dropdown open or close

    const [answer, setAnswer] = useState(""); // state untuk TextEditor
    const [files, setFiles] = useState([]); // state untuk files TextEditor

    const [tag, setTag] = useState([]);
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
            setSlug(res.data.slug);
            setCategory(res.data.category);
            console.log(category);
            setAnswer(res.data.answer);
            setTag(res.data.tag);
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

    useEffect(() => {
        getFaqById();
        getCats();
    }, []);

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
                })
                .then(function (response) {
                    navigate("/dashboard/faq");
                    //setAlert
                });
        } catch (err) {
            console.log(err);
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
                            <TxtInput
                                placeholder="Generate url..."
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                            />
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
                        <ReactQuill
                            theme="snow"
                            value={answer}
                            onChange={onEditorChange}
                        />
                        {/* <QuillEditor
                            placeholder="Tulis jawaban"
                            onEditorChange={onEditorChange}
                            onFilesChange={onFilesChange}
                        /> */}
                        {/* <TextEditor setValue={setValue} /> */}
                        {/* <div>
                  Hasil: <br />
                  {value}
                </div> */}
                    </div>
                    <SaveBtn />
                </form>

                {/* button */}
            </DashboardLayout>
        </DefaultLayout>
    );
}
