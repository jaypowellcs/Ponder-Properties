import EmailForm from '../Form/EmailForm';
import Form from '../Form/Form';


const Subheader = () => {
    return (
        <div class='container-md mt-5'>
            <div class="row">
                <div className='col-md-6'>
                <Form></Form>
                </div>
                <div class='col-md-6'>
                <EmailForm></EmailForm>
                </div>
            </div>
        </div>
    )
};

export default Subheader; 