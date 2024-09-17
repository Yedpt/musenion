import {render, screen, fireEvent} from "@testing-library/react";
import App from "./App";
import { beforeEach, describe, expect } from "vitest";

describe ("carousel component", =>() {
    beforeEach(()=>{
        render(<carousel/>)
    })
    test("Render Button Count", () => {
        const countElement = screen.getByText(/count is/i)
        expect(countElement).toBeDefined()
    })
})