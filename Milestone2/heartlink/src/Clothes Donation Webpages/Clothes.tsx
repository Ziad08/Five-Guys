import DropDown from "../components/DropDown/DropDown.tsx";
import RadioButton from "../components/RadioButton/RadioButton.tsx";
function Clothes() {
  return (
    <div className="bloodDonation-container">
      <div className="header-container">
        <h1>Clothes</h1>
      </div>
      <div className="rest-container" style={{ top: "10em" }}>
        <h4> Who will be wearing these clothes?</h4>
        <DropDown
          options={["Infants", "Kids", "Adults"]}
          selected={"Specify age group"}
          width={"280px"}
        />
        <p />
        <form method="get">
          <RadioButton text={"Male"} />
          <RadioButton text={"Female"} />
        </form>
        <p style={{ marginTop: "10px" }}> </p>
        <h4 style={{ marginBottom: "15px" }}>
          What kind of clothes do you need?
        </h4>
        <DropDown
          options={[
            "Belts",
            "Blouses",
            "Coats",
            "Dresses",
            "Gloves",
            "Hats",
            "Jackets",
            "Jeans",
            "Pajamas",
            "Pants",
            "Scarves",
            "Shirts",
            "Shorts",
            "Skirts",
            "Socks",
            "Suits",
            "Sweaters",
            "Swimwear",
            "Tops",
            "Trousers",
            "Undergarments",
          ]}
          selected={"Specify category"}
          width={"280px"}
        />
        <p />
        <h6>Please specify clothing season</h6>
        <form method="get">
          <RadioButton text={"Summer"} />
          <RadioButton text={"Spring"} />
          <RadioButton text={"Fall"} />
          <RadioButton text={"Winter"} />
        </form>
        <p />
        <h6 style={{ marginBottom: "15px" }}>
          Please specify clothing material
        </h6>
        <DropDown
          options={[
            "Cashmere",
            "Chiffon",
            "Corduroy",
            "Cotton",
            "Denim",
            "Fleece",
            "Flannel",
            "Leather",
            "Linen",
            "Lycra",
            "Nylon",
            "Polyester",
            "Rayon",
            "Silk",
            "Satin",
            "Spandex",
            "Tweed",
            "Velvet",
            "Wool",
          ]}
          selected={"Specify a material"}
          width={"280px"}
        />
      </div>
    </div>
  );
}

export default Clothes;