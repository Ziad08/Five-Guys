import { useState } from "react";
import EditInputBox from "../../../components/InputBox/EditInputBox.tsx";
import EditNumberInputBox from "../../../components/InputBox/EditNumberInputBox.tsx";
import ImageUploader from "../../../components/FileUploader/ImageUploader.tsx";
import Template1 from "../../../components/Templates/Template1.tsx";

interface ToysPt2Props {
  id: string;
  toyName: string;
  quantity: string;
}

function EditToysPt2(props: ToysPt2Props) {
  const [toyName, setToyName] = useState(props.toyName);
  const [quantity, setQuantity] = useState(props.quantity);
  const divStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "600px",
  };
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 1 of 2<h2> Updating your post!</h2>
          <br />
        </div>
      }
      rightPanelDiv={
        <>
          <div className="header-container">
            <h1>Toys</h1>
          </div>
          <div className="rest-container" style={{ top: "13em" }}>
            <div style={divStyle}>
              <h5 style={{ position: "relative", marginTop: "3%" }}>
                What is the toy's name?
              </h5>
              <EditInputBox
                type={"text"}
                label={"Specify toy"}
                width={"280px"}
                setChecked={setToyName}
                text={toyName}
                hasText={toyName != ""}
              />
            </div>
            <div style={divStyle}>
              <h5 style={{ position: "relative", marginTop: "3%" }}>
                How many toys do you need?
              </h5>
              <EditNumberInputBox
                label={"Quantity"}
                width={"280px"}
                setChecked={setQuantity}
                hasText={quantity != ""}
                text={quantity}
              />
            </div>
            <div style={divStyle}>
              <h5 style={{ position: "relative", marginTop: "13%" }}>
                {" "}
                Please upload the toy's photo
              </h5>
              <ImageUploader width={"280px"} height={"180px"} />
            </div>
          </div>
        </>
      }
      rightPanelButtonText={"Update"}
      hasButton={true}
      forwardPath={"../../ViewPosts"}
      backButtonPath={"../" + props.id}
    />
  );
}

export default EditToysPt2;
