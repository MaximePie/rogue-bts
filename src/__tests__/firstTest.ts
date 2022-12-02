// Write a first test jest

// Path: src/__tests__/firstTest.ts
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Counter from "../lib/Counter.svelte";

describe('First tests', () => {
    it('should pass', () => {
        expect(true).toBe(true);
    });

    it ('Should display the Counter button', () => {
        const { getByText } = render(Counter);
        expect(getByText('count is')).toBeInTheDocument();
    });
});