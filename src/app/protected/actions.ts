"use server";

import { fetchDocs, getTotal } from "@/services/firebase.service";

export const fetchExample = async (config: any) => {
  const docs = await fetchDocs("matches");
  return docs;
};

export const fetchTotalExample = async (config: any) => {
  const total = await getTotal("matches");
  return total;
};
