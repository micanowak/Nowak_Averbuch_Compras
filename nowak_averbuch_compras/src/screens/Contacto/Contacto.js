import '../Contacto/Contacto.css';

const Contacto = () => {
    
    console.log("en Contacto");
    
    return (
        <div className='form'>
            <form >
                <label>
                    Name: 
                    <br></br><input type="text" name="Nombre" />
                </label> <br></br> <br></br>
                <label  >
                    Surname: 
                    <br></br><input type="text" name="Apellido" />
                </label><br></br> <br></br>
                <label c>
                    Mail: 
                    <br></br><input type="text" name="Mail" />
                    </label><br></br><br></br>
                <label >
                    Your Question: 
                    <br></br><textarea />
                </label>
        </form>
        </div>
        
    );
}

export default Contacto;