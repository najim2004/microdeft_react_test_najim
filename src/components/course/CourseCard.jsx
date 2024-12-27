import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CalendarDays } from "lucide-react";

const CourseCard = ({ course }) => {
  const {
    title,
    description,
    instructor_name,
    badge_text,
    badge_color,
    image,
    created_at,
    author,
  } = course;

  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow duration-300 rounded-lg">
      <CardHeader className="space-y-4">
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          <img src={image} alt={title} className="object-cover w-full h-full" />
          {badge_text && (
            <Badge
              className="absolute top-2 right-2 rounded-sm"
              style={{
                backgroundColor: badge_color,
                color: "white",
              }}
            >
              {badge_text}
            </Badge>
          )}
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg leading-none tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <span>{created_at}</span>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback>{author.name[0]?.toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{author.name}</span>
            <span className="text-xs text-muted-foreground">
              {author.email}
            </span>
          </div>
        </div>
        <span className="text-sm font-medium">
          Instructor: {instructor_name}
        </span>
      </CardFooter>
    </Card>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    instructor_name: PropTypes.string.isRequired,
    badge_text: PropTypes.string,
    badge_color: PropTypes.string,
    image: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CourseCard;
