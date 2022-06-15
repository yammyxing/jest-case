import { render, screen } from "@testing-library/react";
import AuthButton from "@/components/AuthButton";
import React from "react";

describe("AuthButton", () => {
  it("should display", () => {
    render(<AuthButton>login</AuthButton>);
    // expect(screen.getByText('login')).toBeDefined();
    expect(screen.getByText("login")).toBeInTheDocument();
  });
});
