import Card from "./components/Card";

function App() {
  let myArr = [1, 2, 3];
  let myObj = {
    name: "Krinesh",
    age: 22,
  };

  return (
    <>
      <div className="flex m-4 gap-4 ">
        <Card productname="Monkey Sticker" price="230" />
        <Card productname="Lion Sticker" price="500" />
      </div>
    </>
  );
}

export default App;
