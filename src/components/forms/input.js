export default function Input({
  label,
  type,
  name,
  errors = {},
  id,
  placeholder = "",
  validation = {},
  register = () => null,
  prefix,
  ...props
}) {
  return (
    <div className="d-flex flex-column align-items-start w-100">
      <label for={id} className="form-label">
        {label}
      </label>
      <div className="input-group">
        {prefix && <span className="input-group-text">{prefix}</span>}
        <input
          type={type}
          name={name}
          className={`form-control ${errors[name] && "is-invalid"}`}
          id={id}
          placeholder={placeholder}
          {...register(name, validation)}
          {...props}          
        />
      </div>
      {errors[name] && (
        <span className="text-danger">{errors[name]?.message}</span>
      )}
    </div>
  );
}
