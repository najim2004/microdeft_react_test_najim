import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "../ui/textarea";

export const CourseForm = ({ open, onSubmit, setOpen, isLoading }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload a new course</DialogTitle>
          <DialogDescription>
            Fill in the form below to upload a new course
          </DialogDescription>
        </DialogHeader>
        <MainForm onSubmit={onSubmit} isLoading={isLoading} />
      </DialogContent>
    </Dialog>
  );
};

CourseForm.propTypes = {
  open: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const MainForm = ({ onSubmit, className, isLoading }) => {
  const defaultValues = {
    title: "",
    description: "",
    badge_text: "",
    badge_color: "",
    instructor_name: "",
  };
  const form = useForm({ defaultValues });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid items-start gap-4", className)}
      >
        <FormField
          control={form.control}
          name="title"
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter course title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel>Course Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter course description"
                  className="max-h-32"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="badge_text"
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel>Badge Text</FormLabel>
              <FormControl>
                <Input placeholder="Enter badge text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="badge_color"
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel>Badge Color</FormLabel>
              <FormControl>
                <Input
                  type="color"
                  placeholder="Select badge color"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="instructor_name"
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel>Instructor Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter instructor name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isLoading} type="submit">
          Upload
        </Button>
      </form>
    </Form>
  );
};

MainForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

MainForm.defaultProps = {
  className: "",
};
