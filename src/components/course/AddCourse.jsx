import React from "react";
import { Button } from "../ui/button";
import { Video } from "lucide-react";
import { CourseForm } from "./CourseForm";
import { useAddCourseMutation } from "@/redux/services/courseApi";
import { useToast } from "@/hooks/use-toast";

export const AddCourse = () => {
  const [open, setOpen] = React.useState(false);
  const [onAddCourse, { isLoading }] = useAddCourseMutation();
  const { toast } = useToast();

  const handleToast = (res) => {
    if (res?.status) {
      toast({
        variant: "default",
        title: "Success",
        description: res?.status_message || "Course added successfully",
      });
      setOpen(false);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: res?.status_message || "Failed to add course",
      });
    }
  };

  const onSubmit = async (data) => {
    try {
      if (
        data?.badge_color &&
        data?.badge_text &&
        data?.description &&
        data?.instructor_name &&
        data?.title
      ) {
        const res = await onAddCourse(data).unwrap();
        /*
          Example success response:
          {
            "status": true,
            "status_message": "Success! Course created successfully.",
            "data": {
                "id": 87,
                "title": "React Professional Course",
                "description": "Master advanced React concepts including hooks, context API, and performance optimization techniques for building scalable applications.",
                "instructor_name": "Naim Ahmed",
                "badge_text": "Featured",
                "badge_color": "#ff0000",
                "image": "https:\/\/react-interview.crd4lc.easypanel.host\/cats\/5.jpg",
                "created_at": "Fri, Dec 27, 2024 5:01 PM",
                "author": {
                    "name": "Najim",
                    "email": "user@japalearn.com"
                }
            },
            "status_code": 200,
            "status_class": "success"
          }
        */
        handleToast(res);
      } else {
        handleToast({
          status: false,
          status_message: "Please fill all the fields",
        });
      }
    } catch (error) {
      console.error("Add Course Error:", error);
    }
  };
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
      <CourseForm
        setOpen={setOpen}
        open={open}
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </>
  );
};
