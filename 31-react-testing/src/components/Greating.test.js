import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Greeting from "./Greating";

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        // Arrenge
        render(<Greeting/>);
    
        // Act
        // ... nothing
        
        // Assert
        const helloWorldElement = screen.getByText('Hello World', { exact: false });
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders "good to see you" if the button was NOT clicked', () => {
        render(<Greeting/>);
        const paragraphElement = screen.getByText('good to see you', { exact: false });
        expect(paragraphElement).toBeInTheDocument();
    });

    test('renders "Changed!" and remove "good to see you" if the button was clicked', () => {
        // Arrenge
        render(<Greeting/>);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const outputElement = screen.getByText('Changed!');
        const paragraphElement = screen.queryByText('good to see you', { exact: false });
        expect(outputElement).toBeInTheDocument();
        expect(paragraphElement).not.toBeInTheDocument();
    });
})