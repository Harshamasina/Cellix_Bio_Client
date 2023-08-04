import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const SendUsEmail = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    let name, value;
    let handleInputs = (e) => {
        name=e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value});
    };

    const PostData = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, user);
            console.log(res);
            alert(`${user.name}, Your Message was Sent Successfully`);
            setUser({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            });
        } catch (err) {
            console.error(err);
            alert(err.response.data.error);
        }
    };

    return (
        <div className='CUFormContainer'>
            <Form method="POST">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>NAME<sup>*</sup></Form.Label>
                    <Form.Control 
                    name= "name"
                    value={user.name}
                    onChange={handleInputs} 
                    className='shadow-lg'
                    type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>EMAIL<sup>*</sup></Form.Label>
                    <Form.Control 
                    name="email"
                    value={user.email}
                    onChange={handleInputs}
                    className='shadow-lg'
                    type="email" placeholder="Email Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>PHONE</Form.Label>
                    <Form.Control
                    name="phone" 
                    value={user.phone}
                    onChange={handleInputs} 
                    className='shadow-lg'
                    type="text" placeholder="Contact Phone" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>SUBJECT<sup>*</sup></Form.Label>
                    <Form.Control 
                    name="subject" 
                    value={user.subject}
                    onChange={handleInputs} 
                    className='shadow-lg'
                    type="text" placeholder="Subject"/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>MESSAGE<sup>*</sup></Form.Label>
                    <Form.Control
                    name="message" 
                    value={user.message}
                    onChange={handleInputs}
                    as="textarea" c
                    className='shadow-lg'
                    type="text" placeholder="Your Message" />
                </Form.Group>
            
                <Button
                onClick={PostData}
                variant="outline-dark" 
                type="submit" 
                className='mt-1 shadow-lg CUForm'>
                    SEND MESSAGE
                </Button>
            </Form>
        </div>
    )
};

export default SendUsEmail;