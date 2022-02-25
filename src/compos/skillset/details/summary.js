export default function Summary(e) {
  return (
    <div>
      <section>
        <h1>Basic Knowledge:</h1>
        <p>{e.basic}</p>
      </section>
      {e.intermediate && (
        <section>
          <h1>Intermediate Knowledge:</h1>
          <p>{e.Intermediate}</p>
        </section>
      )}
    </div>
  );
}
