import React from "react";
import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";

export const Navigator = ({ isOpen }: any) => {
  return (
    <div>
      <React.Fragment key={"left"}>
        <Drawer anchor={"left"} open={isOpen}>
          <nav>
            <ul>
              <li>
                <Link to="/user-management">User Management</Link>
              </li>
              <li>
                <Link to="/role-management">Role Management</Link>
              </li>
            </ul>
          </nav>
        </Drawer>
      </React.Fragment>
    </div>
  );
};
