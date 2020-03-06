import React from "react";

import css from "./Table.module.css";
import { ReactComponent as ToggleButtonOn } from "../../assets/icons/toggle-on.svg";
import { ReactComponent as ToggleButtonOff } from "../../assets/icons/toggle-off.svg";

function Table() {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Code</th>
          <th>Company Name</th>
          <th>Admin</th>
          <th>Amenities</th>
          <th>Portal Access</th>
          <th>Last Modified</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(10)].map((item, index) => (
          <tr key={index}>
            <td>
              <input type="checkbox" />
            </td>
            <td>NG001A</td>
            <td>Microsoft Corporation</td>
            <td>02</td>
            <td>
              <ToggleButtonOff />
            </td>
            <td>
              <ToggleButtonOn />
            </td>
            <td>Today, 30 mins ago</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
