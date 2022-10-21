import React, { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "@components/Button";
import Input from "@components/Input";
import Select from "@components/Select";

const Edit = (props) => {
  const accessLevelOptions = [
    { id: 1, name: "Admin", description: "Full administrative rights" },
    {
      id: 2,
      name: "Content Creator",
      description: "Partially administrative rights",
    },
    { id: 3, name: "Guest", description: "Nah" },
  ];
  const [selected, setSelected] = useState(accessLevelOptions[1]);
  const { isAuthenticated, errorMessage, onSubmit, loading, data } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    criteriaMode: "all",
    mode: "onChange",
  });

  useEffect(() => {
    if (data) {
      setValue("tableNumber", data?.TableNumber);
      setValue("seatNumbers", data?.NumberOfSeats);
      setValue("seatingArea", data?.SittingArea);
    }
  }, [data]);

  return (
    <>
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12.5 lg:space-y-7.5">
          <div className="md:bg-white md:border md:rounded-sm md:p-10">
            <h3 className="mb-5 text-pink">Table Details</h3>

            <div className="flex flex-col gap-5 xl:gap-7.5">
              <div className="lg:grid lg:grid-cols-6 gap-4 items-start">
                <Input
                  autoComplete="off"
                  htmlFor="table-number"
                  id="table-number"
                  label="Table Number"
                  name="table-number"
                  placeholder="Table Number"
                  type="number"
                  {...register("tableNumber")}
                  errors={errors}
                />
              </div>

              <div className="lg:grid lg:grid-cols-6 gap-4 items-start">
                <Input
                  autoComplete="off"
                  htmlFor="number-seats"
                  id="number-seats"
                  label="Number of Seats"
                  name="number-seats"
                  placeholder="Eg: 2 - 4"
                  type="number"
                  {...register("seatNumbers")}
                  errors={errors}
                />
              </div>

              <div className="lg:grid lg:grid-cols-6 gap-4 items-start">
                <Input
                  autoComplete="off"
                  htmlFor="seating-area"
                  id="seating-area"
                  label="Seating Area"
                  name="seating-area"
                  placeholder="Eg: Courtyard"
                  type="text"
                  {...register("seatingArea")}
                  errors={errors}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Button
            round="normal"
            size="large"
            type="submit"
            variant="main"
            loading={loading}
            disabled={loading}
          >
            EDIT TABLE
          </Button>
        </div>
      </form>
    </>
  );
};

export default Edit;
