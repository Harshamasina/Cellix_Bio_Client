import NoInternetConnection from "../../NoInternetConn";

const Claims = ({claim}) => {
    const ClaimArray = claim.split("\n");

    return (
        <div>
            <h1 className="PITBh4">CLAIMS</h1>
            <div className="ClaimsContainer">
                <NoInternetConnection>
                    {
                        ClaimArray.length > 1 ? (
                            ClaimArray.map((item, index) => {
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
                                className="claims-image-not-found"
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

export default Claims;