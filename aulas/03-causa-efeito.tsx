
export function Button() {
  const isFormSubmitting = true;



  return (
    <button disabled={isFormSubmitting}>
      <span>
        {
          isFormSubmitting
            ? 'Carregando'
            : 'Enviar'
        }
      </span>
    </button>
  );
}
