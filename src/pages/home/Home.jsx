import CoursesGrid from "@/components/course/CourseGrid";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";

export const Home = () => {
  const courseState = useSelector((state) => state.course);
  return (
    <div>
      <CoursesGrid
        courses={courseState?.courses}
        isLoading={courseState?.loading}
        error={courseState?.error}
      />
    </div>
  );
};
