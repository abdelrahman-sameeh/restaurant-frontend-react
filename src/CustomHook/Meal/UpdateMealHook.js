import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneMeal, updateOneMeal } from "../../redux/actions/mealActions";
import upload from "../../images/upload.png";
import { getAllCategories } from "../../redux/actions/categoryAction";
import { notify } from "../../utils/Notification/useNotification";

const validation = (
  image,
  title,
  sizes,
  details,
  category,
  price,
  currMeal,
  selectedFile
) => {
  if (image !== currMeal.image && selectedFile === "") {
    notify("من فضلك اختر صورة", "warn");
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

/* @desc
    1- get all categories
    2- get specific meal
    3- set data in states
    4- main function
      -> validation
      -> update data
      -> get response and set notification
*/

const UpdateMealHook = () => {
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

  const [image, setImage] = useState(upload);
  const [selectedFile, setSelectedFile] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [sizes, setSizes] = useState([]);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  // 2- get specific meal by id from useParams
  const mealId = useParams().id;
  const dispatch = useDispatch();

  const renderMeal = async (id) => {
    await dispatch(getOneMeal(id));
  };
  useEffect(() => {
    renderMeal(mealId);
  }, []);

  const specificMeal = useSelector((state) => state.Meal.getOneMeal);
  let currMeal;
  if (specificMeal && specificMeal.data && specificMeal.data.data) {
    currMeal = specificMeal.data.data;
  }

  // 3- set data in states
  useEffect(() => {
    if (currMeal) {
      setImage(currMeal.image);
      setSelectedFile("");
      setTitle(currMeal.title);
      setDetails(currMeal.details);
      setCategory(currMeal.category._id);
      setSizes(currMeal.size);
      setPrice(currMeal.price);
    }
  }, [currMeal]);

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

  // 4- main fun

  const main = async (e) => {
    e.preventDefault();
    // -> validation
    if (
      !validation(
        image,
        title,
        sizes,
        details,
        category,
        price,
        currMeal,
        selectedFile
      )
    ) {
      return false;
    }
    // -> send data
    const formData = new FormData();

    if (selectedFile !== "") {
      formData.append("image", selectedFile);
    }

    formData.append("title", title);
    formData.append("details", details);

    sizes.map((size) => {
      formData.append("size", size);
    });

    formData.append("category", category);
    formData.append("price", price);

    setLoading(true);
    setIsPress(true);
    await dispatch(updateOneMeal(mealId, formData));
    setLoading(false);
    setIsPress(false);
  };

  // response
  const response = useSelector((state) => state.Meal.updateOneMeal);

  useEffect(()=>{
    if(!loading){
      if(response.status===200){
        return notify('تم التعديل بنجاح', 'success')
      }
      if(response.status !==200 && response.data){
        return notify('حدث خطأ, حاول التعديل فى وقت لاحق', 'error')
      }
    }
  }, [loading])

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

export default UpdateMealHook;
