import { Outlet } from "react-router-dom";
import { Breadcrumb } from "@/components/common";

export default function CatalogLayout() {
  return (
    <div>
      <Breadcrumb />
      <Outlet />
    </div>
  );
}
