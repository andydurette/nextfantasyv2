import React from "react";
import { render, cleanup } from "@testing-library/react";
import { AppProvider } from "../utils/AppContext";
import Index from "../pages/index";

afterEach(cleanup);

describe("Index page renders without error", () => {
	test("Renders welcome text", () => {
		const { getByTestId } = render(<AppProvider><Index /></AppProvider>);
		expect( getByTestId("index-text")).toHaveTextContent("Wecolme to the world of Demian Arata");
	});
});
