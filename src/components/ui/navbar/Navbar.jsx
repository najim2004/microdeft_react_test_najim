import { Link } from "react-router-dom";
import {
  BookOpen,
  Video,
  LogIn,
  UserPlus,
  Menu,
  LogOut,
  LayoutDashboardIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = ({ isAdmin }) => {
  const a = false;
  const NavLinks = () => (
    <div className="flex flex-col md:flex-row gap-4">
      {a ? (
        <>
          {!isAdmin && (
            <>
              <Link
                to="/lessons"
                className="flex items-center gap-2 p-2 hover:bg-accent hover:text-accent-foreground rounded"
              >
                <BookOpen size={20} />
                Lessons
              </Link>

              <Link
                to="/tutorials"
                className="flex items-center gap-2 p-2 hover:bg-accent hover:text-accent-foreground rounded"
              >
                <Video size={20} />
                Tutorials
              </Link>
            </>
          )}
        </>
      ) : (
        <>
          <Link
            to="/login"
            className="flex items-center gap-2 p-2 hover:bg-accent hover:text-accent-foreground rounded"
          >
            <LogIn size={20} />
            Login
          </Link>

          <Link
            to="/signup"
            className="flex items-center gap-2 p-2 hover:bg-accent hover:text-accent-foreground rounded"
          >
            <UserPlus size={20} />
            Sign Up
          </Link>
        </>
      )}
    </div>
  );

  return (
    <nav className="border-b">
      <div className="mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold">
          <span className="text-xl">React Academy</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks />
          </div>
          {a && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="size-10">
                    <AvatarImage src={""} alt="user avatar" />
                    <AvatarFallback>{"?"}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1 text-center">
                    <p className="text-sm font-medium">user name</p>
                    <p className="text-xs text-muted-foreground">user email</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuItem className="text-red-500">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/dashboard" className="flex items-center gap-2">
                    <LayoutDashboardIcon className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>React Academy</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;