"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function ProgressBarProviders({ children }: Props) {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#15514D"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
