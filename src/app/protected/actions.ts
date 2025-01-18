"use server";

import { fetchDocs } from "@/services/firebase.service";

export const fetchExample = async (config: any) => {
  const docs = await fetchDocs("matches");

  return docs;
};
