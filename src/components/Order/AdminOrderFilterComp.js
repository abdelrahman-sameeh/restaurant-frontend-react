import React from "react";
import AdminFilteringOrdersHook from "../../CustomHook/Order/AdminFilteringOrdersHook";

const AdminOrderFilterComp = () => {
  const [
    query,
    handleChangeOrderStatus,
    handleChangePaidOrder,
    handleChangeDeliveryOrder
  ] = AdminFilteringOrdersHook();

  

  return (
    <div style={{ rowGap: "4px" }} className="filter start flex-wrap mb-3">
      <button
        style={{ borderLeft: "1px solid var(--main-color)" }}
        className="btn special-btn radius-0 rounded-right order-status"
        data-filter="preparing"
        onClick={handleChangeOrderStatus}
      >
        {" "}
        يتم تحضيره{" "}
      </button>
      <button
        style={{ borderLeft: "1px solid var(--main-color)" }}
        className="btn special-btn radius-0 order-status"
        data-filter="inDeliver"
        onClick={handleChangeOrderStatus}
      >
        {" "}
        فى حالة التوصيل
      </button>
      <button
        style={{ borderLeft: "1px solid var(--main-color)" }}
        className="btn special-btn radius-0 delivered-status"
        data-filter={'true'}
        onClick={handleChangeDeliveryOrder}
      >
        {" "}
        تم التوصيل
      </button>
      <button
        style={{ borderLeft: "1px solid var(--main-color)" }}
        className="btn special-btn radius-0 delivered-status"
        data-filter={'false'}
        onClick={handleChangeDeliveryOrder}
      >
        {" "}
        لم يتم التوصيل
      </button>
      <button
        style={{ borderLeft: "1px solid var(--main-color)" }}
        className="btn special-btn radius-0 paid-status"
        data-filter={'true'}
        onClick={handleChangePaidOrder}
      >
        {" "}
        تم الدفع{" "}
      </button>
      <button
        style={{ borderLeft: "1px solid var(--main-color)" }}
        className="btn special-btn radius-0 rounded-left paid-status"
        data-filter={'false'}
        onClick={handleChangePaidOrder}
      >
        {" "}
        لم يتم الدفع{" "}
      </button>
    </div>
  );
};

export default AdminOrderFilterComp;
