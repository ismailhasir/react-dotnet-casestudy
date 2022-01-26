import "./SideBar.css";
import { LineStyle, Person } from "@material-ui/icons";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">DashBoard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle />
              Home
            </li>
            <li className="sidebarListItem">
              <Person />
              Teachers
            </li>
            <li className="sidebarListItem">
              <Person />
              Students
            </li>
            <li className="sidebarListItem">
              <Person />
              Parents
            </li>
          </ul>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Ikinci Menu</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <LineStyle />
                Ornek Item 1
              </li>
              <li className="sidebarListItem">
                <Person />
                Ornek Item 2
              </li>
              <li className="sidebarListItem">
                <Person />
                Ornek Item 3
              </li>
              <li className="sidebarListItem">
                <Person />
                Ornek Item 4
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Ucuncu Menu</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <LineStyle />
                Ornek Item 5
              </li>
              <li className="sidebarListItem">
                <Person />
                Ornek Item 6
              </li>
              <li className="sidebarListItem">
                <Person />
                Ornek Item 7
              </li>
              <li className="sidebarListItem">
                <Person />
                Ornek Item 8
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
