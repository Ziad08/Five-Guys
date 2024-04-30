import './DonorLeftDiv.css'
import '../../Buttons/Buttons.css'
import arrow from "../../../assets/right-arrow.png";
function DonorLeftDiv(){

    return(
        <>
            <div className="dropdown">
                <button className="dropbtn">Donations
                    <img className="arrow-in-button" src={arrow} alt="arrow"/>
                </button>
                <div className="dropdown-content">
                <a href="#">View All Donations</a>
                    <a href="#">View Categories</a>
                    <a href="#">View posts</a>
                </div>
            </div>




        </>
    );

}

export default DonorLeftDiv;