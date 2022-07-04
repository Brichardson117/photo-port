import React, {useState} from "react";
import "./App.css";
import About from './componets/about';
import Nav from './componets/Nav/index';
import Gallery from "./componets/Gallery";

function App() {
  const [categories] = useState([
    {
      name: "commercial",
      desciption:
        "Photos of grocery stores, food trucks, and other commercials projects",
    },
    { name: "Portraits", description: "Portraits of people in my life" },
    { name: "Food", description: "Delicious delicacies" },
    {
      name: "Landscape",
      desciption: "Fields, Farmhouse, Waterfalls, and the beauty of nature.",
    },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav>
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      </Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
