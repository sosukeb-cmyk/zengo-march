import { Link, useLocation, useNavigate } from "react-router";
import { User, Home, Plus, LogOut, LogIn } from "lucide-react";
import { clearAuth, getUsername, isAuthenticated } from "../lib/auth";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const loggedIn = isAuthenticated();
  const username = getUsername();

  const handleLogout = () => {
    clearAuth();
    navigate("/login");
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/dashboard" className="text-xl font-bold text-gray-900">
              Trip Planner
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/dashboard"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  location.pathname === "/dashboard"
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Home className="size-4" />
                Dashboard
              </Link>
              <Link
                to="/"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  location.pathname === "/"
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Plus className="size-4" />
                New Trip
              </Link>
            </nav>
          </div>

          {loggedIn ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              <LogOut className="size-5" />
              <span className="hidden md:inline">Log out</span>
              {username ? <span className="text-gray-400">({username})</span> : null}
            </button>
          ) : (
            <Link
              to="/login"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                location.pathname === "/login"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <LogIn className="size-5" />
              <span className="hidden md:inline">Sign in</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
