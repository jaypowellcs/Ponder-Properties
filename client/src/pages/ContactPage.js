import { Button, Label, Col, FormGroup, Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage} from 'formik';


const ContactPage = () => {
    const handleSubmit = (values, {resetForm}) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    }
    return (
        <div class='container-md m-5'>
            <div class="row">
                <div className='col-md-12'>
                    <Card    
                    body
                    color="danger"
                    inverse
                    className='mt-5'>
                        <CardTitle tag='h5'
                        body
                        color="success"
                        inverse>
                            Contact Us
                        </CardTitle>
                        <CardSubtitle>
                            For contact information, please fill out the form below.
                        </CardSubtitle>

                        <CardBody>
                            <Formik
                                initialValues={{
                                    firstName: '',
                                    lastName: '',
                                    phoneNum: '',
                                    email: '',
                                    agree: false, 
                                    contactType: 'By Phone',
                                    feedback: ''
                                }}    
                                onSubmit={handleSubmit}
                            
                            >
                                <Form>

                                    <FormGroup row>
                                        <Label htmlFor='firstName' md='2'>
                                        First Name
                                        </Label>
                                        <Col md='10'>
                                            <Field
                                                name='firstName'
                                                placeholder='First Name'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='firstName'>
                                                {(msg) => <p className='text-danger'>{msg}</p> }
                                            </ErrorMessage>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label htmlFor='lastName' md='2'>
                                            Last Name 
                                        </Label>
                                        <Col md='10'>
                                        <Field 
                                                className='form-control'
                                                name='lastName'
                                                placeholder='Last Name'
                                            />
                                            <ErrorMessage name='lastName'>
                                                {(msg) => <p className='text-danger'>{msg}</p> }
                                            </ErrorMessage>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label  htmlFor='phoneNum' md='2'>
                                            Phone
                                        </Label>
                                        <Col md='10'>
                                        <Field 
                                                name='phoneNum'
                                                placeholder='Phone'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='phoneNum'>
                                                {(msg) => <p className='text-danger'>{msg}</p> }
                                            </ErrorMessage>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label  htmlFor='email' md='2'>
                                            Email
                                        </Label>
                                        <Col md='10'>
                                        <Field
                                                name='email'
                                                placeholder='Email' 
                                                type='email'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='email'>
                                                {(msg) => <p className='text-danger'>{msg}</p> }
                                            </ErrorMessage>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label htmlFor='feedback' md='2'>
                                            Your Feedback 
                                        </Label>
                                        <Col md='10'>
                                        <Field 
                                                className='form-control'
                                                name='feedback'
                                                as='textarea'
                                                rows='12'
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{size: 10, offset:2}}>
                                            <Button type='submit' color='light'>
                                                Send Feedback 
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Formik>
                    </CardBody>
                </Card>
            </div>
        </div>
    </div>
    );
};

export default ContactPage; 

