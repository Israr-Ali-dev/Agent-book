import Link from "next/link";
import EditIcon from "@assets/icons/table/edit.svg";
import DeleteIcon from "@assets/icons/table/delete.svg";

const VARIATION_COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Editable: false,
  },
  {
    Header: "SKU",
    accessor: "sku",
    Editable: true,
    DataType: "string",
  },
  {
    Header: "Title",
    accessor: "title",
    Editable: true,
    DataType: "string",
  },
  {
    Header: "Price ($)",
    accessor: "price",
    Editable: true,
    DataType: "float",
  },
  {
    Header: "Sale Price ($)",
    accessor: "salePrice",
    Editable: true,
    DataType: "float",
  },
  {
    Header: "Stock",
    accessor: "stock",
    Editable: true,
    DataType: "integer",
  },
  {
    Header: "Make Default",
    accessor: "default",
    Editable: false,
    Cell: (tableProps) => {
      const { makeDefault } = tableProps.row.original;

      return (
        <div className="text-center">
          <input
            type="radio"
            value="Male"
            name="makeDefault"
            defaultChecked={makeDefault}
          />
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "edit",
    Editable: false,
    Cell: (props) => {
      const { deleteItem } = props;
      const { id, edit, remove } = props.row.original;

      return (
        <div className="flex justify-end items-center gap-6">
          {edit && (
            <Link href={`/menu/categories/${id}/edit`} passHref>
              <div className="p-2.5 lg:p-4 cursor-pointer">
                <EditIcon />
              </div>
            </Link>
          )}
          {remove && deleteItem && (
            <div
              className="p-2.5 lg:p-4 cursor-pointer"
              onClick={() => {
                // TODO
                deleteItem(id);
              }}
            >
              <DeleteIcon />
            </div>
          )}
        </div>
      );
    },
  },
];

export default VARIATION_COLUMNS;
