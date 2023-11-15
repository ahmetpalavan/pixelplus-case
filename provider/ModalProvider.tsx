"use client";

import CreateUserModal from "@/components/modal/CreateUserModal";
import { useEffect, useState } from "react";

export function ModalProvider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CreateUserModal />
    </>
  );
}
