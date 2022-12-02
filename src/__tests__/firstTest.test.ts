// Write a first test jest

// Path: src/__tests__/firstTest.ts
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Counter from "../lib/Counter.svelte";
import App from "../App.svelte";

/**
 * @jest-environment jsdom
 */
test("should render", () => {
    const results = render(App );
    expect(() => results.getByText("Vite + Svelte")).not.toThrow();
});

describe('First tests', () => {
    it('should pass', () => {
        expect(true).toBe(true);
    });


    it ('Should display the Counter button', () => {
        const { getByText } = render(Counter);
        expect(getByText('count is 0')).toBeInTheDocument();
    });
});