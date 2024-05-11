
export function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Joseph Oliveira - {currentYear}</p>
    </footer>
  );
}
