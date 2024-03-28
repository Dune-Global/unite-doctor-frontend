import { getAvailableAppointmentsSettings } from "@/api/settings/getAvailableAppointmentsAPI";

export const getAvailableAppointmentsSettingsActionHandler = async (
  id: string
) => {
  return await getAvailableAppointmentsSettings(id);
};
