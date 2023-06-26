export default function Select({
  label,
  id,
  options = [],
  name,
  placeholder = "",
  validation = {},
  register = () => null,
  errors = {},
  ...props
}) {
  return (
    <div className="d-flex flex-column align-items-start w-100">
      <label for={id} className="form-label">
        {label}
      </label>
      <select
        name={name}
        placeholder={placeholder}
        className={`form-select ${errors[name] && "is-invalid"}`}
        {...register(name, validation)}
        {...props}              
      >
        <option disabled selected value="">{placeholder}</option>
        {options.map((item, i) => (
          <option key={i} value={item?.value}>
            {item?.label}
          </option>
        ))}
      </select>
      {errors[name] && (
        <span className="text-danger">{errors[name]?.message}</span>
      )}
    </div>
  );
}
