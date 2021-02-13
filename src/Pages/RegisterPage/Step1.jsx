import Button from '../Button';
import IconHome from '../../icons/icon-home.svg';

const Step1 = (props) => {

    return (
        <div>
            <input id="upload-file" type="file" hidden />
            <img src="" alt="" onClick={() => document.getElementById('upload-file').click()}/>
            <input onChange={} />
            <Button icon={IconHome} disabled={true} onClick={props.goToStep(props.step + 1)}>
                Guardar Perfil
            </Button>
        </div>
    )
}