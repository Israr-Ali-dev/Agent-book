// import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import EditIcon from "@assets/icons/table/edit.svg";
import DeleteIcon from "@assets/icons/table/delete.svg";

const INVENTORY_COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Editable: false,
  },
  {
    Header: "",
    accessor: "item_image",
    Editable: false,
    Cell: (tableProps) => {
      const { item_image } = tableProps.row.original;

      return (
        item_image && (
          <Image
            src={item_image}
            width={50}
            height={50}
            layout="fixed"
            alt=""
          />
        )
      );
    },
  },
  {
    Header: "Item Name",
    accessor: "item_name",
    Editable: false,
  },
  {
    Header: "Category",
    accessor: "category",
    Editable: false,
  },
  {
    Header: "Item Cost ($)",
    accessor: "item_cost",
    Editable: true,
    DataType: "float",
  },
  {
    Header: "Pre time (mins)",
    accessor: "prep_time",
    Editable: true,
    DataType: "integer",
  },
  {
    Header: "SOH",
    accessor: "SOH",
    Editable: true,
    DataType: "integer",
  },
  {
    Header: "",
    accessor: "edit",
    Editable: false,
    Cell: (tableProps) => {
      // We are using parent_id because we are going to edit the Product, not just ProductVariation
      const { parent_id, edit, remove, setDeleteItem } =
        tableProps.row.original;

      return (
        <div className="flex justify-end items-center gap-6 123">
          {edit && (
            <Link href={`/inventory/edit/${parent_id}`} passHref>
              <div className="p-2.5 xl:p-4 cursor-pointer">
                <EditIcon />
              </div>
            </Link>
          )}
          {/* WARNING: DONT LET CLIENT DO THIS, WE CAN DELTE ITEMS BY SELECTED CHECKBOX */}
          {/* {remove && (
                        <div
                            className="p-2.5 lg:p-4 cursor-pointer"
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

export default INVENTORY_COLUMNS;

// export const COLUMNS = [
//     {
//         Header: "Id",
//         accessor: "id",
//         Editable: false,
//     },
//     {
//         Header: "First Name",
//         accessor: "first_name",
//         Editable: false,
//     },
//     {
//         Header: "Last Name",
//         accessor: "last_name",
//         Editable: false,
//     },
//     {
//         Header: "Date of Birth",
//         accessor: "date_of_birth",
//         Editable: false,
//         Cell: ({ value }) => {
//             return format(new Date(value), "dd/MM/yyyy");
//         },
//     },
//     {
//         Header: "Country",
//         accessor: "country",
//         Editable: true,
//     },
//     {
//         Header: "Phone",
//         accessor: "phone",
//         Editable: true,
//     },
// ];
