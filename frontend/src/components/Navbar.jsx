import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="absoulte w-full top-0 z-40  bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="w-9 h-9 rounded-lg bg-blue-800 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-blue-400" />
              </div>
              <h1 className="text-lg text-amber-50 font-bold">Chatty</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            

            {authUser && (
              <>
                <Link
                  to={"/profile"}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-md  bg-gray-600 hover:bg-gray-400 transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span className="hidden sm:inline text-amber-100">Profile</span>
                </Link>

                <button
                  className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-gray-600 hover:bg-gray-400 transition-colors"
                  onClick={logout}
                >
                  <LogOut className="w-5 h-5" />
                  <span className="hidden sm:inline text-amber-100">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
