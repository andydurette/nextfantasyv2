import React from "react";
import { render, cleanup } from "@testing-library/react";
import { AppProvider } from "../utils/AppContext";
import Navbar from "../components/Navbar";

afterEach(cleanup);

describe("Nav component renders without error", () => {
	test("Checks if the logo text.", () => {
		const { getByTestId } = render(<AppProvider><Navbar /></AppProvider>);
		expect( getByTestId("nav-logo")).toHaveTextContent("DnD");
	});
});