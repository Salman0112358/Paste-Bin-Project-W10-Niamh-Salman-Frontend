interface PageHeaderProps {
    title : string
}

function PageHeader(props : PageHeaderProps) : JSX.Element {
    return (
        <footer>
            <h1>{props.title}</h1>

        </footer>
    )
}

export default PageHeader