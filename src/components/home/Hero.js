import React from 'react'
import { Carousel, Button } from 'antd';

const contentStyle = {
    height: '300px',
    color: '#333',
    lineHeight: '200px',
    textAlign: 'center',
    // background: '#1890ff',

};
const items = [
    {
        key: '1',
        title: 'WE WILL DESIGN FOR YOU',
        content: 'From head to toe, the way you like it'
    },
    {
        key: '2',
        title: 'WE WILL DEVELOP FOR YOU',
        content: 'The way you want it to happen'

    },
    {
        key: '3',
        title: 'WE WILL DEPLOY FOR YOU',
        content: 'How and where you want it.'
    },
    {
        key: '4',
        title: 'IN SHORT WE WILL MANAGE EVERYTHING',
        content: 'From head to toe, the way you like it, the way you want it, we are ready to take every step to satisfy you'
    },

]

const Hero = () => {
    return (

        <div className='heroBlock'>

            <Carousel autoplay>
                {
                    items.map(item => {
                        return(
                        <div id='hero' className='container-fluid' key={item.key}>
                            <div className='content'>
                                <h3 >{item.title}</h3>
                                <p>{item.content}</p>

                                <div className='btnHolder'>
                                    <Button type="primary">Learn More</Button>
                                    <Button> <i className='fas fa-desktop'></i> Get Started</Button>

                                </div>
                            </div>
                            </div>
                        )
                    })
                }



            </Carousel>

        </div>
    );
}

export default Hero
