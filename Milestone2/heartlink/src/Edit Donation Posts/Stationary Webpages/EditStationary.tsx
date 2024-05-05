import { useState } from "react";
import hashSet from "../../hashSet";
import EditDropDown from "../../components/DropDown/EditDropDown.tsx";
import EditNumberInputBox from "../../components/InputBox/EditNumberInputBox.tsx";

interface StationaryProps {
  category: string;
  supply: string;
  quantity: string;
}

function EditStationary(props: StationaryProps) {
  const [selectedCategory, setSelectedCategory] = useState(props.category);
  const [selectedSupply, setSelectedSupply] = useState(props.supply);
  const [quantity, setQuantity] = useState(props.quantity);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSupply("");
  };

  const categoryExamples: hashSet = {
    "Art Supplies": [
      "Sketchbooks",
      "Paintbrushes",
      "Watercolor paints",
      "Oil pastels",
      "Modeling clay",
    ],
    "Backpacks and Bags": [
      "Backpacks",
      "Messenger bags",
      "Lunch bags",
      "Pencil cases",
      "Tote bags",
    ],
    "Calculators and Math Supplies": [
      "Scientific calculators",
      "Graphing calculators",
      "Compass and protractor sets",
      "Rulers (standard, metric, flexible)",
      "Math flashcards",
    ],
    "Drawing and Coloring": [
      "Chalk",
      "Crayons",
      "Colored pencils",
      "Coloring books",
      "WaterColor paints",
    ],
    "Notebooks and Paper": [
      "Spiral notebooks",
      "Composition notebooks",
      "Loose-leaf paper (lined, graph, blank)",
      "Index cards",
      "Sticky notes",
    ],
    "Organization and Planning": [
      "Planners and agendas",
      "Desk organizers",
      "Calendar dry erase boards",
      "Whiteboard markers",
      "Desktop file organizers",
    ],
    "Scissors, Glue, and Tape": [
      "Scissors",
      "Glue sticks",
      "Liquid glue",
      "Tape",
      "Staplers and staples",
    ],
    "Writing Instruments": [
      "Pens (ballpoint, gel, fountain)",
      "Pencils (mechanical, wooden)",
      "Markers (dry erase, permanent, highlighters)",
      "Crayons",
      "Colored pencils",
    ],
  };
  return (
    <>
      <div className="header-container">
        <h1>School Supplies</h1>
      </div>
      <div className="rest-container" style={{ top: "12em" }}>
        <h4 style={{ marginBottom: "15px" }}>
          What category of school supplies do you need?
        </h4>
        <EditDropDown
          options={["Specify category"].concat(Object.keys(categoryExamples))}
          selected={selectedCategory}
          width={"280px"}
          onChange={handleCategoryChange}
        />
        <br />
        <br />
        <h4>What supply do you specifically need?</h4>
        <h6 style={{ marginBottom: "15px" }}>
          (Please select a category first)
        </h6>
        <EditDropDown
          options={
            selectedCategory
              ? ["Select supply"].concat(categoryExamples[selectedCategory])
              : []
          }
          selected={selectedSupply}
          width={"280px"}
          onChange={(supply) => setSelectedSupply(supply)}
          disabled={!selectedCategory}
        />

        <br />
        <br />
        <h4> How many pieces do you need?</h4>
        <EditNumberInputBox
          label={"Quantity"}
          width={"280px"}
          text={quantity}
          hasText={quantity != ""}
          setChecked={setQuantity}
        />
      </div>
    </>
  );
}

export default EditStationary;
