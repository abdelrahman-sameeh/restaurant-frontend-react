import React, { useEffect, useState } from "react";
import upload from "../../images/upload.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/actions/categoryAction";
import { notify } from "../../utils/Notification/useNotification";
import { addMeal } from "../../redux/actions/mealActions";

const validation = (selectedFile, title, sizes, details, category, price) => {
  if (!selectedFile || !selectedFile.type.startsWith("image")) {
    notify("من فضلك حدد صورة", "warn");
    return false;
  }

  if (!title || !sizes.length || !details || !category || !price) {
    notify("من فضلك اكمل البيانات", "warn");
    return false;
  }

  if (title.length <= 2) {
    notify("يجب ان يكون العنوان اكبر من حرفين", "warn");
    return false;
  }

  if (details.length <= 7) {
    notify("يجب ان يكون الوصف اكبر من 7 حروف", "warn");
    return false;
  }

  if (price < 0) {
    notify("من فضلك حدد سعر اكبر من الصفر", "warn");
    return false;
  }

  return true;
};

const AddMealHook = () => {
  // 1- get all category
  const [done, setDone] = useState(false);
  const [allCategories, setAllCategories] = useState([]);

  const run = async () => {
    await dispatch(getAllCategories());
    setDone(true);
  };

  useEffect(() => {
    run();
  }, []);

  const categories = useSelector((state) => state.Category.allCategories);

  useEffect(() => {
    if (categories && categories.data && categories.data.data) {
      setAllCategories(categories.data.data);
    }
  }, [done]);

  // 2- chose and complete info for meal

  const [image, setImage] = useState(upload);
  const [selectedFile, setSelectedFile] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [sizes, setSizes] = useState([]);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const handleChangeImage = (e) => {
    setSelectedFile(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeDetails = (e) => setDetails(e.target.value);

  const handleChangeSize = (e) => {
    if (!sizes.includes(e.target.value) && e.target.value != "0")
      setSizes([...sizes, e.target.value]);
  };
  const handleDeleteSize = (size) => {
    setSizes(sizes.filter((el) => el !== size));
  };

  const handleChangeCategory = (e) => setCategory(e.target.value);

  const handleChangePrice = (e) => setPrice(e.target.value);

  const handleClearSelected = () => {
    setImage(upload);
    setSelectedFile("");
  };

  const main = async (e) => {
    e.preventDefault();

    // validation
    if (!validation(selectedFile, title, sizes, details, category, price)) {
      return false;
    }

    // send data
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("title", title);
    formData.append("details", details);

    sizes.map((size) => {
      formData.append("size", size);
    });

    formData.append("category", category);
    formData.append("price", price);

    setLoading(true);
    setIsPress(true);
    await dispatch(addMeal(formData));
    setLoading(false);
    setIsPress(false);
  };

  // response
  const response = useSelector((state) => state.Meal.addMeal);

  useEffect(() => {
    if (!loading) {
      if (response.status === 201) {
        return notify("تم انشاء الوجبة بنجاح", "success");
      }

      if (response.status !== 201 && response.data) {
        return notify("حدث خطـأ اثناء الانشاء حاول بعد قليل", "error");
      }
    }
  }, [loading]);

  return [
    loading,
    isPress,
    image,
    selectedFile,
    title,
    details,
    sizes,
    category,
    allCategories,
    price,
    handleChangeImage,
    handleChangeTitle,
    handleChangeDetails,
    handleChangeSize,
    handleChangeCategory,
    handleChangePrice,
    handleDeleteSize,
    handleClearSelected,
    main,
  ];
};

export default AddMealHook;
