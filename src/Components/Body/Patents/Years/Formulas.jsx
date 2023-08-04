import NoInternetConnection from "../../NoInternetConn";

const Formulas = ({formula}) => {
    const FormulaArray = formula.split("\n");
    const hasImage = FormulaArray.some((item) => item.startsWith("http"));

    return (
        <div>
            <h3 className="PITBh4">FORMULAS</h3>
            <div className="FormulaImgContainer">
                <NoInternetConnection>
                    {
                        hasImage && FormulaArray.length >= 1
                        ? FormulaArray.map((image, index) => {
                            return (
                                <img
                                    key={index}
                                    className="PatentImages"
                                    src={image}
                                    alt={index}
                                />
                            );
                        })
                        :
                        <img
                            className="image-not-found"
                            src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Not+Found.jpg"
                            alt="aws"
                        />
                    }
                </NoInternetConnection>
            </div>
        </div>
    )
};

export default Formulas;