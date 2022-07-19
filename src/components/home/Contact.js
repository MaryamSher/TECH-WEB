import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

const { TextArea } = Input;

const Contact = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    

        return (
            <div id='contact' className='block contactBlock'>
                <div className='container-fluid'>
                    <div className='titleHolder'>
                        <h2>
                            Get in Touch
                        </h2>
                        <p>
                            we are always here for you
                        </p>

                    </div>

                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="Full Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input placeholder="Full Name" />
                        </Form.Item>
                        <Form.Item
                            name="e-mail"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your e-mail!',
                                },
                            ]}
                        >
                            <Input
                               
                                placeholder="E-mail Address"
                            />
                        </Form.Item>
                        <Form.Item
                            name="contact no"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your contact no!',
                                },
                            ]}
                        >
                            <Input
                               
                                placeholder="Contact number"
                            />
                        </Form.Item>
                        <Form.Item
                            name="subject"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your subject!',
                                },
                            ]}
                        >
                            <Input
                               
                                placeholder="Subject"
                            />
                        </Form.Item>
                        <Form.Item
                            name="message"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your message!',
                                },
                            ]}
                        >
                            <TextArea
                               
                                placeholder="Message"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="agreement" valuePropName="checked" noStyle>
                                <Checkbox>I agree with terms and conditions.</Checkbox>
                            </Form.Item>

                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                               Submit 
                            </Button>
                            
                        </Form.Item>
                    </Form>

                </div>

            </div>
        )
    }

    export default Contact
