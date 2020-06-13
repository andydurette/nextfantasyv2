import React from "react";
import { render, cleanup } from "@testing-library/react";
import { AppProvider } from "../utils/AppContext";
import About from "../pages/about";

afterEach(cleanup);

describe("About page renders without error", () => {
	test("Checks page heading text", () => {
		const { getByTestId } = render(<AppProvider><About /></AppProvider>);
		expect( getByTestId("about-text")).toHaveTextContent("All about Demian Arata");
	});
});