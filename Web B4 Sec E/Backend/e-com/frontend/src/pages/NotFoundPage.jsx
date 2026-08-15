import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { APP_ROUTES } from "../constants/appRoutes";

export const NotFoundPage = () => {
  return (
    <div className="py-20 text-center">
      <Container>
        <h1 className="text-6xl font-extrabold text-indigo-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Page Not Found</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to={APP_ROUTES.HOME}>
          <Button variant="primary">Back to Home</Button>
        </Link>
      </Container>
    </div>
  );
};

export default NotFoundPage;
