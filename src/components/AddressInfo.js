import React from "react";

function AddressInfo({
  ip,
  country_name,
  city,
  postal,
  utc_offset,
  timezone,
  org,
  show,
}) {
  const display = show ? "show" : "hide";
  return (
    <div className={`info-address row border rounded ${display}`}>
      <div className="col border-end">
        <p>IP ADDRESS</p>
        <h4>{ip}</h4>
      </div>
      <div className="col border-end">
        <p>LOCATION</p>
        <h4>
          {city} {country_name} {postal}
        </h4>
      </div>
      <div className="col border-end">
        <p>TIMEZONE</p>
        <h4>
          {utc_offset} {timezone}
        </h4>
      </div>
      <div className="col border-end">
        <p>ISP</p>
        <h4>{org}</h4>
      </div>
    </div>
  );
}

export default AddressInfo;
