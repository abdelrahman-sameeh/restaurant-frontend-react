import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useDispatch, useSelector } from "react-redux";
import { scanQrCode } from "../../redux/actions/deliveryActions";
import { notify } from "../../utils/Notification/useNotification";

const RenderQReaderHook = () => {
  const [qrCodeResult, setQrCodeResult] = useState("");
  const [SSH, setSSH] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const handleChangeSSH = (e) => setSSH(e.target.value);

  const dispatch = useDispatch();

  const run = () => {
    const scanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: { width: 250, height: 250 },
    });

    const success = (result) => {
      scanner.clear();
      setQrCodeResult(result);
      localStorage.qrCodeResult = result;
    };

    const error = (err) => {
      console.log(err);
    };
    scanner.render(success, error);
  };

  useEffect(() => {
    run();
  }, []);

  const handleRenderBarcode = () => {
    run();
  };

  const updateOrderStatus = async (e) => {
    e.preventDefault();
    if (!SSH) {
      return notify("ادخل الكود السرى", "error");
    }

    setLoading(true);
    setIsPress(true);
    await dispatch(scanQrCode(qrCodeResult, { SSH }));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector(state=>state.Delivery.scanQrCode)

  useEffect(()=>{
    if(!loading){
      if(response && response.status===200){
        run()
        setQrCodeResult('')
        setSSH('')
        return notify('تم تعديل الطلب بنجاح', 'success')
      }
      if(response && response.status!==200 && response.data){
        return notify('حدث خطأ حاول مرة اخرى', 'error')
      }
    }
  }, [loading])

  return [
    loading,
    isPress,
    qrCodeResult,
    SSH,
    handleChangeSSH,
    handleRenderBarcode,
    updateOrderStatus,
  ];
};

export default RenderQReaderHook;
