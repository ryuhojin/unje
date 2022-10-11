import MainPage from "@/pages/home/MainPage";
import useRender from "./libs/useRender";
describe("<MainPage />", () => {
  const mainPage = (props = {}) => {
    
    const utils = useRender(<MainPage />);

    const { getByText } = utils;
    const text = getByText("asdf");
    return {
      ...utils,
      text,
    };
  };
  it("matches snapshot", () => {
    const { container } = mainPage();
    expect(container).toMatchSnapshot();
  });

  it("show the props correctly", () => {
    const { text } = mainPage();
    expect(text).toBeTruthy();
  });
});
