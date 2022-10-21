import Link from "next/link";
import EditIcon from "@assets/icons/table/edit.svg";
import DeleteIcon from "@assets/icons/table/delete.svg";

const COUPONS_COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Editable: false,
  },
  {
    Header: "Title",
    accessor: "title",
    Editable: false,
  },
  {
    Header: "Description",
    accessor: "description",
    Editable: false,
  },
  {
    Header: "Discount Value",
    accessor: "discountValue",
    Editable: false,
  },
  {
    Header: "Coupon Code",
    accessor: "couponCode",
    Editable: false,
  },

  {
    Header: "",
    accessor: "edit",
    Editable: false,
    Cell: (tableProps) => {
      const { id, edit, remove, setDeleteItem } = tableProps.row.original;

      return (
        <div className="flex justify-end items-center gap-6 123">
          {edit && (
            <Link href={`/promotions/coupons/edit/${id}`} passHref>
              <div className="p-4 cursor-pointer">
                <EditIcon />
              </div>
            </Link>
          )}
          {/* WARNING: DONT LET CLIENT DO THIS, WE CAN DELTE ITEMS BY SELECTED CHECKBOX */}
          {/* {remove && (
                        <div
                            className="p-4 cursor-pointer"
                            onClick={() => {
                                setDeleteItem(props);
                            }}
                        >
                            <DeleteIcon />
                        </div>
                    )} */}
        </div>
      );
    },
  },
];

export default COUPONS_COLUMNS;
