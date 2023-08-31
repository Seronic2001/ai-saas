"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1ae14b4e-526d-488e-b759-79115b6c35bb");
  }, []);

  return null;
};
