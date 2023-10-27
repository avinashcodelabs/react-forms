import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [remember, setRemember] = React.useState(false);
  const [err, setError] = React.useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setError({
      name: name ? "" : "required",
      place: place ? "" : "required",
    });
    // send your data to server here thru resp api.
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleOnSubmit} style={{ width: "40%" }}>
        <h3>User Registration</h3>
        <label>Name {err.name && <Req />}</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <label>Place {err.place && <Req />}</label>
        <select value={place} onChange={(e) => setPlace(e.target.value)}>
          <option value=""></option>
          <option value="mysuru">Mysuru</option>
          <option value="bengaluru">Bengaluru</option>
          <option value="mandya">Mandya</option>
        </select>
        <label>Gender</label>
        <label className="label-inline">
          Male &nbsp;
          <input
            type="radio"
            value={"Male"}
            name="gender"
            onChange={(e) => setGender(e.target.value)}
          />
        </label>
        &nbsp; &nbsp; &nbsp;
        <label className="label-inline">
          Female &nbsp;
          <input
            type="radio"
            value="Female"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
          />
        </label>
        <label>About yourself</label>
        <textarea value={about} onChange={(e) => setAbout(e.target.value)} />
        <label>
          <input
            type="checkbox"
            value={remember}
            onChange={(e) => setRemember(!remember)}
          />
          &nbsp;&nbsp; Remember me
        </label>
        <input type="submit" value="Register" />
        <pre>
          <code>
            {JSON.stringify({ name, place, gender, about, remember }, null, 2)}
          </code>
        </pre>
      </form>
    </div>
  );
}

const Req = () => <span style={{ color: "red" }}>*</span>;

export default App;
