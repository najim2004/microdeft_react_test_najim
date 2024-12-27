import PropTypes from "prop-types";
import CourseCard from "./CourseCard";
import { Loader2 } from "lucide-react";

const CoursesGrid = ({ courses, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="min-h-[400px] w-full flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[400px] w-full flex items-center justify-center">
        <p className="text-red-500">Error loading courses: {error}</p>
      </div>
    );
  }

  if (!courses?.length) {
    return (
      <div className="min-h-[400px] w-full flex items-center justify-center">
        <p className="text-muted-foreground">
          No courses found Or Please login and Reload the page!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-[1600px] mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-4">Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {courses?.map((course) => (
          <div key={course?.id} className="w-full flex justify-center">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

CoursesGrid.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ),
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

CoursesGrid.defaultProps = {
  courses: [],
  isLoading: false,
  error: null,
};

export default CoursesGrid;
