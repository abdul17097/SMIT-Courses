import VendorSidebar from "../sidebars/VendorSidebar";
import Dashboard from "../Dashboard";

const VendorLayout = ({ role }) => {
  return (
    <div className="w-full flex h-screen">
      <VendorSidebar />
      <div className="w-[80%] p-5">
        <Dashboard role={role} />
      </div>
    </div>
  );
};

export default VendorLayout;
