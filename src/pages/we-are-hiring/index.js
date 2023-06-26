import { useForm } from "react-hook-form";
import Input from "../../components/forms/input";
import Select from "../../components/forms/select";
import { formatNumber, plainNumber } from "../../utils/utils";

export default function WeAreHiring() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  function handleSubmitForm(values) {
    // send post request
    console.log(values);
  }

  const inputFields = [
    {
      label: "First Name",
      name: "first_name",
      placeholder: "Enter your first name",
      register: register,
      validation: {
        required: {
          value: true,
          message: "First Name is required!",
        },
        minLength: {
          value: 3,
          message: "Min 3 characters",
        },
      },
      errors: errors,
    },
    {
      label: "Last Name",
      name: "last_name",
      placeholder: "Enter your last name",
      register: register,
      errors: errors,
    },
    {
      label: "Address",
      name: "address",
      placeholder: "Enter your Address",
      register: register,
      validation: {
        required: {
          value: true,
          message: "Address is required!",
        },
        minLength: {
          value: 3,
          message: "Min 3 characters",
        },
        maxLength: {
          value: 50,
          message: "Max 50 characters",
        },
      },
      errors: errors,
    },
    {
      label: "Web Portfolio link",
      name: "web_portfolio",
      placeholder: "Enter your Web Portfolio link",
      register: register,
      validation: {
        required: {
          value: true,
          message: "Web Portfolio is required!",
        },
        pattern: {
          value:
            /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})(\/\S*)?$/,
          message: "Web Portfolio Link is invalid",
        },
      },
      errors: errors,
    },
    {
      label: "Position",
      name: "position",
      placeholder: "Pick your position",
      register: register,
      validation: {
        required: {
          value: true,
          message: "Position is required!",
        },
      },
      errors: errors,
      options: [
        {
          label: "Frontend Developer",
          value: "FE",
        },
        {
          label: "Backend Developer",
          value: "BE",
        },
      ],
      type: "select",
    },
    {
      label: "Expected Salary",
      name: "expected_salary",
      placeholder: "Enter your expected salary",
      register: register,
      validation: {
        required: {
          value: true,
          message: "Expected salary is required!",
        },
        pattern: {
          value: /^\d+(\.\d+)?$/,
          message: "Expected salary is invalid!",
        },
      },
      prefix: "Rp",
      onBlur: ({ target: { value } }) =>
        setValue("expected_salary", formatNumber(value)),
      onFocus: ({ target: { value } }) =>
        setValue("expected_salary", plainNumber(value)),
      errors: errors,
    },
  ];

  return (
    <div className="container py-4">
      <h1 className="mb-5">We are hiring!</h1>

      <form
        className="d-flex flex-wrap gap-4 align-items-start"
        style={{ maxWidth: 768, width: "50%" }}
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        {inputFields.map((item, i) =>
          item?.type !== "select" ? (
            <Input key={i} {...item} />
          ) : (
            <Select key={i} {...item} />
          )
        )}

        <div>
          <button type="submit" className="btn btn-primary">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}
