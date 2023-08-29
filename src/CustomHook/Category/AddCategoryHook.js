import React, { useEffect, useState } from "react";
import upload from "../../images/upload.png";
import { notify } from "../../utils/Notification/useNotification";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../redux/actions/categoryAction";

const AddCategoryHook = () => {

  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [image, setImage] = useState(upload);

  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  // change file to url
  const handleChangeImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setSelectedFile(e.target.files[0]);
  };

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleClearSelected = (e) => {
    setSelectedFile("");
    setImage(upload);
  };


  const main = async (e) => {
    e.preventDefault();

    if (title.length <= 2) {
      return notify("يجب ان يكون عنوان التصنيف اكبر من حرفين", "warn");
    }

    if (!selectedFile || !selectedFile.type.startsWith("image")) {
      return notify("من فضلك اختر صورة", "warn");
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("title", title);

    setIsPress(true);
    setLoading(true);
    await dispatch(addCategory(formData));
    setIsPress(false);
    setLoading(false);
  };


  // response and show results
  const response = useSelector((state) => state.Category.addCategory);

  useEffect(() => {
    if (!loading) {
      if (response.status === 201) {
        setSelectedFile("");
        setImage(upload);
        setTitle("");
        return notify("تم اضافة التصنيف بنجاح", "success");
      }

      if (
        response.status !== 200 &&
        response.data &&
        response.data.error[0].msg === "this category already exist"
      ) {
        return notify("هذا التصنيف موجود بالفعل", "error");
      }
    }
  }, [loading]);

  return [
    loading,
    isPress,
    image,
    title,
    selectedFile,
    handleClearSelected,
    handleChangeImage,
    handleChangeTitle,
    main,
  ];
};

export default AddCategoryHook;
