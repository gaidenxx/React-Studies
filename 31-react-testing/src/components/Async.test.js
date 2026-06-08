import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {
    test('renders posts if request successed', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}]
        });
        render(<Async />);

        //to get a promise, items is not in screen until fetch success
        const listItemElement = await screen.findAllByRole('listitem'); 
        expect(listItemElement).not.toHaveLength(0);
    });
})