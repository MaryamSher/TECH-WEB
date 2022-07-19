import React from 'react'
import { Collapse, Button} from 'antd';

const { Panel } = Collapse;

const Items = [
    {
        question: 'How to setup the theme?',
        answer: 'use your brain',
        key:'1'
    },
    {
        question: 'Can I change plan or cancel at any time?',
        answer: 'use your brain',
        key: '2'
    },
    {
        question: 'How to access through cloud?',
        answer: 'use your brain',
        key: '3'
    },
    {
        question: 'Can I manage multiple task?',
        answer: 'use your brain',
        key: '4'
    },
    {
        question: 'How can I change my password?',
        answer: 'use your brain',
        key: '5'
    },
    {
        question: 'How to manage my account?',
        answer: 'use your brain',
        key: '6'
    },
]




const Faq = () => {
        
    return (
        <div id='faq' className='block faqBlock'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>
                       Frequently Asked Questions
                    </h2>
                    <p>
                        all of your queries will be answered
                    </p>

                </div>
                <Collapse defaultActiveKey={['1']} >
                    {Items.map((item) => {
                        return (
                            <Panel header={item.question} key={item.key}>
                                <p>{ item.answer}</p>
                            </Panel>

                        )

                    })}
                    
                </Collapse>
                <div className='quickSupport'>
                    <h3>
                        Want quick support?
                    </h3>
                    <p>
                        You are always welcome to ask anyting, we will make sure that our agents at the customer service get you through.
                        All you need to do is give us a call when you are ready.

                    </p>
                    <Button type="primary"> <i className="fas fa-phone-alt"></i>Customer Service</Button>

                </div>


            </div>
            
        </div>
    )
}

export default Faq
