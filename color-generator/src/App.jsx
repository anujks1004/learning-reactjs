import { useState } from "react";
import Form from "./Form";
import Values from "values.js";
import ColorList from "./ColorList";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  return (
    <main>
      <Form />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
