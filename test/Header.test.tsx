import Header from "@/components/base/Header";
import useRender from "./libs/useRender";

describe("<Header/>", () => {
  const header = (props = {}) => {
    
    const utils = useRender(<Header/>);

    const { getByText } = utils;
    const text = getByText("asdf");
    return {
      ...utils,
      text,
    };
  };

  it("matches snapshot", () => {
    const { container } = header();
    expect(container).toMatchSnapshot();
  });

  it("show the props correctly", () => {
    const { text } = header();
    expect(text).toBeTruthy();
  });
});
