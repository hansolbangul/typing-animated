import {act, render, screen, waitFor} from '@testing-library/react';
import {TypoAnimated} from "../components/TypoAnimated";

jest.useFakeTimers();

const ms = 100
const wait = 500

describe('<TypoAnimated /> 컴포넌트 테스트', () => {
    test('animates text correctly over time', async () => {
        render(<p data-testid="typing-text"><TypoAnimated text="Hello" ms={ms} wait={wait}/></p>);

        const typingElement = screen.getByTestId('typing-text');

        expect(typingElement.textContent).toBe('');

        act(() => {
            jest.advanceTimersByTime(ms);
        });
        await waitFor(() => expect(typingElement.textContent).toBe('H'));

        act(() => {
            jest.advanceTimersByTime(ms);
        });
        await waitFor(() => expect(typingElement.textContent).toBe('He'));

        act(() => {
            jest.advanceTimersByTime(ms);
        });
        await waitFor(() => expect(typingElement.textContent).toBe('Hel'));

        act(() => {
            jest.advanceTimersByTime(ms);
        });
        await waitFor(() => expect(typingElement.textContent).toBe('Hell'));

        act(() => {
            jest.advanceTimersByTime(ms);
        });
        await waitFor(() => expect(typingElement.textContent).toBe('Hello'));

        act(() => {
            jest.advanceTimersByTime(wait);
        });
        await waitFor(() => expect(typingElement.textContent).toBe('Hello'));

        screen.debug()

        act(() => {
            jest.advanceTimersByTime(ms);
        });
        await waitFor(() => expect(typingElement.textContent).toBe('Hell'));

        act(() => {
            jest.advanceTimersByTime(ms);
        });
        await waitFor(() => expect(typingElement.textContent).toBe('Hel'));

        act(() => {
            jest.advanceTimersByTime(ms);
        });
        await waitFor(() => expect(typingElement.textContent).toBe('He'));

        act(() => {
            jest.advanceTimersByTime(ms);
        });
        await waitFor(() => expect(typingElement.textContent).toBe('H'));

        act(() => {
            jest.advanceTimersByTime(ms);
        });
        await waitFor(() => expect(typingElement.textContent).toBe(''));
    });
});
