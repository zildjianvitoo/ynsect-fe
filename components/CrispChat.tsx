"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
type Props = {};

export default function CrispChat({}: Props) {
  useEffect(() => {
    Crisp.configure("7ccc26f2-1df6-4f20-8246-b93490f955bb");
  }, []);

  return null;
}
