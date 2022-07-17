interface PageHeaderProps {
  title: string;
}

function PageHeader(props: PageHeaderProps): JSX.Element {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

export default PageHeader;
