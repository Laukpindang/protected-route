import React, { useEffect } from "react";
import { useOutlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const outlet = useOutlet();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user?.token) {
      navigate("/not-auth");
    }
  }, [navigate]);

  return <>{outlet}</>;
};

export default AuthLayout;
