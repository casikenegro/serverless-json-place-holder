import axios from "axios";

export const request = async (url: string): Promise<any> => {
  const { data } = await axios.get<any[]>(url);
  return data;
};
