"use client";
import Workflowform from "@/components/forms/workflow-form";
// import Workflowform from "@/components/forms/workflow-form";
import CustomModal from "@/components/Global/custom-modal";
import { Button } from "@/components/ui/button";
// import { useBilling } from "@/providers/billing-provider";
import { useModal } from "@/providers/modal-provider";
import { Plus } from "lucide-react";
import React from "react";

type Props = {};

const WorkflowButton = (props: Props) => {
  const { setOpen, setClose } = useModal();
  // const { credits } = useBilling();

  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerfull that help you automate tasks."
      >
        <Workflowform />
      </CustomModal>
    );
  };

  return (
    <Button
      size={"lg"}
      onClick={handleClick}
      className="bg-purple-100 text-purple-700 w-14 h-14 rounded-full shadow-md border border-purple-200 transition-all duration-200 hover:bg-purple-200 hover:text-purple-900 hover:shadow-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
      aria-label="Create new workflow"
    >
      <Plus className="w-6 h-6" />
    </Button>
  );
};

export default WorkflowButton;
