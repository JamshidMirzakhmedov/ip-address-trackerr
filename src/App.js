import React, { useState } from "react";
import AddressInfo from "./components/AddressInfo";
import Map from "./components/Map";
function App() {
  const [data, setData] = useState([]);
  const [ip, setIp] = useState("");
  const [show, setShow] = useState(false);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      getData();
    }
  };

  const getData = (e) => {
    const URL_API = `https://ipapi.co/${ip}/json/`;
    fetch(URL_API)
      .then((responses) => responses.json())
      .then((data) => setData(data));
    setShow(true);
  };

  return (
    <div className="App">
      <div className="search-panel">
        <div className="container text-center ">
          <h2 className="text-white pt-3 pb-3">IP Address Tracker</h2>
          <div className="input-group mb-3 w-50 ">
            <input
              type="text"
              className="form-control "
              placeholder="Search for any IP address or click enter to find your location"
              aria-label="Search for any IP address or domain"
              aria-describedby="button-addon2"
              onChange={(e) => setIp(e.target.value)}
              onKeyDown={handleKey}
            />
            <button className="btn btn-dark" onClick={getData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AddressInfo {...data} show={show} />
      <Map {...data} />
    </div>
  );
}

export default App;
