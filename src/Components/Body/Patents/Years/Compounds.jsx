import NoInternetConnection from "../../NoInternetConn";

const Compounds = ({compound}) => {
    const CompoundArray = compound.split("\n");

    return (
        <div>
            <h3 className="PITBh4">COMPOUNDS/METHODS</h3>
            <div className="CompoundsImgContainer">
                <NoInternetConnection>
                    {
                        CompoundArray.length > 1 ? (
                            CompoundArray.map((item, index) => {
                                if (item.startsWith("http")) {
                                return (
                                    <div key={index}>
                                    <div className="ClaimsImgCon">
                                        <img className="PatentImages" src={item} alt={index} />
                                    </div>
                                    </div>
                                );
                                } else {
                                return (
                                    <div key={index}>
                                    <div className="ClaimstextCon">
                                        <span className="ClaimsText">{item}</span>
                                    </div>
                                    </div>
                                );
                                }
                            })
                        ) : (
                            <img
                                className="image-not-found"
                                src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Not+Found.jpg"
                                alt="aws"
                            />
                        )
                    }
                </NoInternetConnection>
            </div>
        </div>
    )
};

export default Compounds;