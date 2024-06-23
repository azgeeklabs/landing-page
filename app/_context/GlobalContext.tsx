"use client";
import { createContext, useState } from "react";

const initialContextState = {
  open: false,
  setOpen: (open: boolean) => {},
  step: 1,
  setStep: (step: number) => {},
};

// 1- create context, export it
export const globalContext = createContext(initialContextState);

// 2- provide context, export it
export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // SideNav state
  const [open, setOpen] = useState<boolean>(false);

  // StepProgress state
  const [step, setStep] = useState<number>(0);

  // Create a context value object
  const contextValue = {
    open,
    setOpen,
    step,
    setStep,
  };

  return (
    // to provide what i created
    <globalContext.Provider value={contextValue}>
      {children}
    </globalContext.Provider>
  );
}
