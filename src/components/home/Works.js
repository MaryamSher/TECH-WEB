import React from 'react'
import { Button, Modal } from 'antd';
import { useState } from 'react';

const Works = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <div id='works' className='block worksBlock'>
                <div className='container-fluid'>
                    <div className='titleHolder'>
                        <h2>How it works</h2>
                        <p>everything you need to know</p>

                    </div>
                    <div className='contentHolder'>
                        <Button type="primary" onClick={showModal}>
                            <i className="fas fa-play"></i>
                        </Button>

                    </div>
                   
                    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <h2>use iframe tag to show some video</h2>
                    </Modal>

                </div>

            </div>
        </div>
    )
}

export default Works
