import React from 'react'
import { Card, List, Button  } from 'antd';

const data = [
    {
        title: 'Basic',
        price: '£29.99',
        space: '1 GB of space',
        user: '1 user',
        support: '24/7 support',
        backup: 'Safe, reliable backup',
        access: 'Access from anywhere'


    },
    {
        title: 'Premium',
        price: '£59.99',
        space: '5 GB of space',
        user: '5 users',
        support: '24/7 support',
        backup: 'Safe, reliable backup',
        access: 'Access from anywhere'


    },
    {
        title: 'Enterprise',
        price: '£99.99',
        space: 'Unlimited space',
        user: '15 users',
        support: '24/7 support',
        backup: 'Safe, reliable backup',
        access: 'Access from anywhere'

    }
];

const Pricing = () => {
    return (
        <div id='pricing' className='block pricingBlock bgGray'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h3>Choose a plan to fit your needs</h3>
                    <p>we have all sorted up</p>

                </div>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 1,
                        md: 3,
                        lg: 3,
                        xl: 3,
                        xxl: 3,
                    }}
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <Card title={item.title}>
                                <h3>{item.price}</h3>
                                <p>{item.space}</p>
                                <p>{item.user}</p>
                                <p>{item.support}</p>
                                <p>{item.backup}</p>
                                <p>{item.access}</p>
                                <Button type="primary">Get Started</Button>
                            </Card>
                        </List.Item>
                    )}
                />


            </div>
            

        </div>
    )
}

export default Pricing
