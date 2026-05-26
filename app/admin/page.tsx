import { AdminDashboard } from "@/components/AdminDashboard";
import { ADMIN_APPOINTMENTS, BARBERS, SERVICES } from "@/app/page";

export default function Page() {
  return (
    <AdminDashboard
      appointments={ADMIN_APPOINTMENTS}
      barbers={BARBERS}
      services={SERVICES}
    />
  );
}
