import Navbar from "./Navbar";
import BottomNavigation from "./BottomNavigation";
import Sidebar from "./Sidebar";
export default function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <BottomNavigation></BottomNavigation>
    </>
  );
}
