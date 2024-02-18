export default function RootLayout() {
  return (
    <div>
      <h1> Car Inventory </h1>

      <form>
        <div>
          <label>Model</label>
          <input type="text" placeholder="e.g. BMW" />
        </div>

        <div>
          <label>Year</label>
          <input type="text" placeholder="e.g. 1995" />
        </div>

        <button>Save</button>
      </form>
    </div>
  );
}
