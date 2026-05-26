import { ProfilePage } from "@/components/ProfilePage";
import { USER_BOOKINGS } from "@/app/page";

export default function Page() {
  return <ProfilePage bookings={USER_BOOKINGS} />;
}
