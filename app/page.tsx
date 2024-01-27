import Image from "next/image";
import DashboardLayout from "./components/DashboardLayout";
import Main from "./components/Main";

export default function Home() {
  return (
    <DashboardLayout>
      <Main />
    </DashboardLayout>
  );
}
