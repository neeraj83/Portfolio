import axios from "axios";
import React, { useState, useEffect } from 'react';
import  AssetsImage  from './../Comman/Image';
import Modal from "react-modal";



Modal.setAppElement('#root');

const customStyles = {
    content: {
    top: '0%',
    left: '0%',
    right: '0',
    bottom: '0',
    //   marginRight: '-50%',
    //   transform: 'translate(-50%, -50%)',
    //   borderColor: '#000',
    },
};

function Porfolio(props) {

    console.log(props, 'props')

    const [porfolioList, setPortfolio] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    
    
    useEffect(() => {
        axios
            .get(`https://628642c0f0e8f0bb7c1353e4.mockapi.io/Portfolio?user_id=${props.userId}`)
            .then((response) => {
                setPortfolio(response.data.map((value) => {
                    return {
                        ...value,
                        thumb_image_path: `./../Assets/Thumbnails/${value.image}`, // No Changes
                        full_image_path: `./../Assets/Fullimage/${value.image}`  // Replace with full image path
                    };
                }))
            }).finally(() => {
                setIsLoading(false);
            });
    }, [])

 
    /** 
     * @variable getItems 
     * @type [Array] Html Content as Thumbnails
     * */
    let getItems =  porfolioList.map( (item, index) => {
        // let imagePath =  `./../Assets/Thumbnails/1.jpg`;  
    
        return (
            <div key={index} 
                onClick={() => { preivewProtfolio(item, index); }}
                className="m-10 cursor-pointer text-center border-solid border-2 px-2 py-2 border-gray-200 dark:text-white rounded-md">
                <div className="text-4xl pt-5 font-bold">{item.title}</div>
                <div className="pt-2 ">{item.detail}</div>
                <div className="flex items-center justify-center pt-10 mb-10">
                    <AssetsImage path={item.thumb_image_path} alt={item.title} ></AssetsImage>
                </div>
            </div>
        )
    })

    /**
     * @function closeModal
     * @use for Close the Modal
     * */
    const closeModal = () => {
        setIsOpen(false);
        setModalData({});
    };

    /**
     * @function preivewProtfolio
     * @use for Open the Modal
     * */
    const preivewProtfolio = (item, currentIndex) => {
        setModalData({...item, currentIndex});
        setIsOpen(true);

        document.body.classList.add('overflow-hidden');
       
    }

    
      
    return (    
        <div className={ "place-content-center " + (isLoading ? " " : "grid grid-cols-1 gap-2 sm:grid-cols-1 gap-1 m-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2")}>
            { isLoading ? (
                <div className="text-center h-52 p-5 ">
                  <button type="button" className="align-middle inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md transition ease-in-out duration-150 cursor-not-allowed" disabled="">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Loading...
                    </button>
                </div>
            ) : getItems}

            { modalIsOpen && (
                <Modal
                    style={customStyles}
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}>
                    <div className="absolute flex top-5 space-x-4 cursor-pointer" onClick={() => { closeModal(); document.body.classList.remove('overflow-hidden'); }} >
                    
                        <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    </div>
                    <h2 className="text-4xl text-center mt-10"  >{porfolioList.at(modalData.currentIndex).title}</h2>
                    <h2 className="text-2xl text-center mt-5" >{porfolioList.at(modalData.currentIndex).detail}</h2>
                    
                    <div className="mt-10 flex items-center justify-center text-center">
                        <AssetsImage path={porfolioList.at(modalData.currentIndex).full_image_path} alt={porfolioList.at(modalData.currentIndex).title} ></AssetsImage>
                    </div>
                </Modal>
            )}
        </div>
    );
}
export default Porfolio;