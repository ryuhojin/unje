import { render } from '@testing-library/react';
import MainPage from '@/page/home/MainPage';

describe('<MainPage />', () => {
    const mainPage = (props = {}) => {
        const utils = render(<MainPage />)
        const { getByText } = utils;
        const text = getByText('류호진');
        return {
            ...utils,
            text
        }

    }
    it('matches snapshot', () => {
        const { container } = mainPage();
        expect(container).toMatchSnapshot();
    });

    it('show the props correctly', () => {
        const { text } = mainPage();
        expect(text).toBeTruthy();
    })
})