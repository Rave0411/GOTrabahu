import React, { createContext, useContext, useState } from "react";

const EditingContext = createContext();

export function EditingProvider({ children }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <EditingContext.Provider value={{ isEditing, setIsEditing }}>
      {children}
    </EditingContext.Provider>
  );
}

export function useEditingContext() {
  return useContext(EditingContext);
}
