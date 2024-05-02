import Template1 from "../../components/Templates/Template1.tsx";
import "./createPost.css";
import BloodDonation from "../Blood Donation Webpages/BloodDonation.tsx";

function CreatePost() {
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 2 of 2<h2> Creating your post!</h2>
          <p> Almost Done.. </p>
        </div>
      }
      rightPanelDiv={<BloodDonation />}
      rightPanelButtonText={"Post"}
      hasButton={true}
    />
  );
}

export default CreatePost;