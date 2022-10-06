interface Props {
    children: JSX.Element | JSX.Element[]
}

const PageLayout = ({ children }: Props) => {
    return <>
        {children}
    </>
}
export default PageLayout;