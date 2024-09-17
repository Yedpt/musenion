import {render, screen, /*fireEvent*/} from "@testing-library/react";
import Contact from "../pages/Contact";
import { beforeEach, describe, expect } from "vitest";


describe ("Contact component", () => {
    beforeEach(()=>{
        render(<Contact/>)
    })
    it("Render Button Send", () => {
        const sendButton = screen.getByText(/Enviar/i)
        expect(sendButton).toBeDefined()
    })
})