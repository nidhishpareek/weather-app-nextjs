import { FaCloudSun, FaListUl, FaMap } from "react-icons/fa6";
import { SidebarUi } from "./UI";
import { GiSettingsKnobs } from "react-icons/gi";
import styled from "styled-components";
const SidebarComp = styled.div<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.active ? "black" : "")};
`;
export const Sidebar = () => {
  const activeItem = "Weather";
  const sidebarContent = [
    {
      icon: FaCloudSun,
      text: "Weather",
      active: true,
    },
    {
      icon: FaListUl,
      text: "Cities",
    },
    {
      icon: FaMap,
      text: "Map",
    },
    {
      icon: GiSettingsKnobs,
      text: "Settings",
      iconStyle: { rotate: "90deg" },
    },
  ];
  return (
    <SidebarUi>
      {sidebarContent.map((item) => {
        return (
          <SidebarComp key={item.text} active={activeItem === item.text}>
            <item.icon
              style={{ ...item.iconStyle, width: "1.5rem", height: "1.5rem" }}
            />
            <p>{item.text}</p>
          </SidebarComp>
        );
      })}
    </SidebarUi>
  );
};
