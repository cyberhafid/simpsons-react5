import  React  from  'react';




const  DisplayEmployee = ({ employee }) => {
    return (
        <div  className="DisplayEmployee">
            <img  src={employee.image}  alt="picture"  />
            <ul>
                <li>characterDirection : {employee.characterDirection}</li>
                <li>
                    Name : {employee.character} {' '}
                   
                </li>
               
                <li>
                    Citation : {employee.quote}
                 
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayEmployee;