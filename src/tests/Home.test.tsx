import React from "react";
import { render, screen } from "@testing-library/react";

import Navbar from '../components/home/Navbar';



test("social icons renders properly", () => {
    render(<Navbar />)
    expect(screen.getByText(/TESTOWANIE/i)).toBeInTheDocument()
});