import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useModal } from "@/providers/modal-provider";

import React from "react";
import { Button } from "../ui/button";

type Props = {
  title: string;
  subheading: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

const CustomModal = ({ children, subheading, title, defaultOpen }: Props) => {
  const { isOpen, setClose } = useModal();
  const handleClose = () => setClose();

  return (
    <Drawer open={isOpen} onClose={handleClose}>
      <DrawerContent className="max-w-lg mx-auto rounded-2xl bg-black shadow-2xl border border-neutral-800 p-0 animate-fade-in">
        <DrawerHeader className="rounded-t-2xl bg-neutral-900 py-6 px-4">
          <DrawerTitle className="text-center text-2xl font-bold text-white tracking-tight drop-shadow-sm">
            {title}
          </DrawerTitle>
          <DrawerDescription className="text-center text-white/80 mt-2 text-base font-medium">
            {subheading}
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col items-center gap-4 px-6 py-6 bg-black rounded-b-2xl min-h-[12rem] max-h-[32rem] overflow-y-auto">
          {children}
        </div>
        <DrawerFooter className="flex flex-col gap-4 bg-transparent border-t-0 px-6 pb-6 pt-0">
          <DrawerClose>
            <Button variant="ghost" className="w-full text-white border border-neutral-700 hover:bg-neutral-800 hover:text-purple-300 focus:ring-2 focus:ring-purple-500">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomModal;
