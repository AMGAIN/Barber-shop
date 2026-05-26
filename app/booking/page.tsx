import { BookingPage } from "@/components/BookingPage";
import { BARBERS, BOOKED_SLOTS, SERVICES, TIME_SLOTS } from "@/app/page";

export default function Page() {
  return (
    <BookingPage
      barbers={BARBERS}
      services={SERVICES}
      timeSlots={TIME_SLOTS}
      bookedSlots={BOOKED_SLOTS}
    />
  );
}
