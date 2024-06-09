import { useEffect, useState } from "react";

const useModal = () => {
  const [open, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState("in"); // "in" | "out"

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleOpenModal = () => {
    setAnimation("in");
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setAnimation("out");
    setTimeout(() => setIsOpen(false), 500);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return {
    open,
    onOpen: handleOpenModal,
    onClose: handleCloseModal,
    animation,
  };
};

export default useModal;
