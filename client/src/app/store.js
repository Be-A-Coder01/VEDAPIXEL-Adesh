import { configureStore } from "@reduxjs/toolkit";

import userDetails from "../features/user/userSlice";
import currentRoleSlice from "../features/admin/adminSlice";
import getEventSlice from "../features/events/getEventSlice";
import eventBookingSlice from "../features/bookEvent/eventBookingSlice";
export const store = configureStore({
  reducer: {
    user: userDetails,
    accessRole: currentRoleSlice,
    eventStore: getEventSlice,
    addEvent: eventBookingSlice,
  },
});
