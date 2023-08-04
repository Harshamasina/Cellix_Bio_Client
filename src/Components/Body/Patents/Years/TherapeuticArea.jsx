const TherapeuticArea = (props) => {
    return (
        <div>
            <div className="TAContainer">
               <h3 className="PITBh4">{props.therapeuticArea}</h3>
               <div className="PITBpContainer">
                  <p className="PITBp">{props.diseases}</p>
               </div>
            </div>
        </div>
    )
};

export default TherapeuticArea;