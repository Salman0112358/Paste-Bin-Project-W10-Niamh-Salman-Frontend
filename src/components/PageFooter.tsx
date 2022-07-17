interface PageFooterProps {
  title: string;
}

function PageFooter(props: PageFooterProps): JSX.Element {
  return (
    <footer>
      <h1>{props.title}</h1>
    </footer>
  );
}

export default PageFooter;
