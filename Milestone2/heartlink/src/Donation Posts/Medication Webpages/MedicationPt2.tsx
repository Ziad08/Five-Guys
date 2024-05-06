import ImageUploader from "../../components/FileUploader/ImageUploader.tsx";
import InputBox from "../../components/InputBox/InputBox.tsx";
import NumberInputBox from "../../components/InputBox/NumberInputBox.tsx";
import Template1 from "../../components/Templates/Template1.tsx";
function MedicationPt2() {
  const divStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "600px",
  };
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 2 of 2<h2> Creating your post!</h2>
          <p> One last step.. </p>
        </div>
      }
      rightPanelDiv={
        <>
          <div className="header-container">
            <h1>Medication</h1>
          </div>
          <div className="rest-container" style={{ top: "13em" }}>
            <div style={divStyle}>
              <h5 style={{ position: "relative", marginTop: "3%" }}>
                What is the medication's name?
              </h5>
              <InputBox
                type={"text"}
                label={"Specify medication"}
                width={"280px"}
              />
            </div>
            <div style={divStyle}>
              <h5 style={{ position: "relative", marginTop: "3%" }}>
                Please specify quantity needed
              </h5>
              <NumberInputBox label={"Quantity"} width={"280px"} />
            </div>
            <div style={divStyle}>
              <h5 style={{ position: "relative", marginTop: "13%" }}>
                {" "}
                Please upload the med's photo
              </h5>
              <ImageUploader width={"280px"} height={"180px"} />
            </div>
          </div>
        </>
      }
      rightPanelButtonText={"Post"}
      hasButton={true}
      forwardPath={"/"}
      backButtonPath={"../1"}
    />
  );
}

export default MedicationPt2;
