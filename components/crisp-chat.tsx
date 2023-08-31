"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure(process.env.CRISP_WEB_KEY!);
  }, []);

  return null;
};
