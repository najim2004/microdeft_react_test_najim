import React from "react";
import { Button } from "../ui/button";
import { Video } from "lucide-react";
import { CourseForm } from "./CourseForm";

export const AddCourse = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="ghost"
        className="flex items-center gap-2 w-full border justify-start lg:justify-center"
      >
        <Video size={20} />
        Add Course
      </Button>
      <CourseForm setOpen={setOpen} open={open} />
    </>
  );
};
