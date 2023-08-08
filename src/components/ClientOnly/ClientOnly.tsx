import React from "react";
import { useHasMounted } from "hooks/useHasMounted";

const ClientOnly: React.FC<React.PropsWithChildren> = ({ children }) => {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
