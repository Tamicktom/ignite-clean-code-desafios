
type Props = {
  onCreateNewTodo: () => void;
}

export function Header(props: Props) {
  return (
    <header>
      <h1>My new innovate to-do list!</h1>

      <button onClick={props.onCreateNewTodo}>
        Add new todo
      </button>
    </header>
  );
}
