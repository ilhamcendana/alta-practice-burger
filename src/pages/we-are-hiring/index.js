export default function WeAreHiring() {  

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log("SUBMITTED")
  }

  return (
    <div className="container py-4">
      <h1 className="mb-5">We are hiring!</h1>

      <form
        className="d-flex flex-column gap-4 align-items-start mx-auto"
        style={{ maxWidth: 768, width: "100%" }}
        onSubmit={handleSubmitForm}
      >
        <div className="d-flex flex-column align-items-start w-100">
          <label for="fullname" className="form-label">
            Full name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            placeholder="Type your full name"
          />
        </div>
        <div className="d-flex flex-column align-items-start w-100">
          <label for="formGroupExampleInput2" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Type your email"
          />
        </div>
        <div className="d-flex flex-column align-items-start w-100">
          <label for="formGroupExampleInput2" className="form-label">
            Position
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
          >
            <option value="1">Frontend Developer</option>
            <option value="2">Backend Developer</option>
            <option value="3">UI/UX Designer</option>
          </select>
        </div>

        <div>
          <button type="submit" className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  );
}
