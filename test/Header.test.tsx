import { render } from "@testing-library/react";
import Header from "@/components/base/Header";

describe('<Header/>',()=>{
    const header = (props={})=>{
        const utils = render(<Header />);
        const { getByText } = utils;
        const text = getByText('')
        return {
          ...utils,
          text,
        };
    }

    it('matches snapshot',()=>{
        const { container } = header();
        expect(container).toMatchSnapshot();
    })

    it('show the props correctly',()=>{
        const { text } = header();
        expect(text).toBeTruthy();
    })
})