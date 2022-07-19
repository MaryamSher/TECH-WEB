import React from 'react'
import image1 from '../../assets/images/modern-design.jpg'
import image2 from '../../assets/images/clean-design.jpg'
import image3 from '../../assets/images/easy-customise.jpg'
import image4 from '../../assets/images/great-support.jpg'
import image5 from '../../assets/images/unlimited-features.jpg'
import image6 from '../../assets/images/advanced-option.jpg'
import { Col, Row } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;


const items = [
    {
        key: '1',
        image: image1,
        title: 'Modern Design'
    },
    {
        key: '2',
        image: image2,
        title: 'Clean and Elegant'
    },
    {
        key: '3',
        image: image3,
        title: 'Easy to Customise'
    },
    {
        key: '4',
        image: image4,
        title: 'Great Support'
    },
    {
        key: '5',
        image: image5,
        title: 'Unlimited Features'
    },
    {
        key: '6',
        image: image6,
        title: 'Advance Options'
    },
]

const Feature = () => {
    return (
        <div id='feature' className='block featureBlock bgGray'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h3>Key Features and Benefits</h3>
                    <p>There is no limit to it</p>

                </div>
                <Row gutter={[16, 16]}>
                    {
                        items.map(item => {
                            return (
                                <Col xs={24} sm={12} md={8} key={item.key} >
                                    <Card
                                        hoverable
                                        cover={<img alt={item.title} src={item.image} />}
                                        
                                    >
                                        <Meta title={item.title} />
                                    </Card>
                                </Col>
                                
                            )
                        })
                    }
                  
                    
                </Row>


                
            </div>
            
        </div>
    )
}

export default Feature
