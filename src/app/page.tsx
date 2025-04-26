import HomeComponent from "@/components/HomeComponent";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        {/* Rendering HomeComponent directly here; best practice could involve conditional rendering by tracking sidebar state, achievable via props or a global state manager like Zustand. */}
        <HomeComponent/>
      </div>
    </div>
  );
}
