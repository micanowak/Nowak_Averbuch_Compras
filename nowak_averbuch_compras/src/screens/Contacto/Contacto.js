import '../Contacto/Contacto.css';

const Contacto = () => {

    console.log("en Contacto");

    return (
        <div className='todoElDiv'>
            <div className='form'>
                <form >
                    <label className='label'>
                        Name:
                        <br></br><input type="text" name="Nombre" className='label' />
                    </label> <br></br> <br></br>
                    <label   className='label'>
                        Surname:
                        <br></br><input type="text" name="Apellido" className='label' />
                    </label><br></br> <br></br>
                    <label className='label'>
                        Mail:
                        <br></br><input type="text" name="Mail" className='label'/>
                    </label><br></br><br></br>
                    <label className='label'>
                        Your Question:
                        <br></br><textarea />
                    </label><br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </form>
            </div>
            <div className='form'>
                <button className='buttonContact'>Enviar</button>
            </div>
        </div>

    );
}

export default Contacto;