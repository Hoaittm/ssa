import { useState,useEffect } from 'react';

const Carousel = ({items , autoPlay = true, autoPlayInterval = 5000 }) => {
    const [active,setActive] = useState(1);
    const [other_1,setOther1] = useState(0);
    const [other_2,setOther2] = useState(2);
    const countItem =items.length;
    
    const nextSlide = () => {
        setActive((prevActive) => (prevActive + 1) % countItem);
        setOther1((prevActive) => (prevActive + 1 - 1 + countItem) % countItem); // Item trước
        setOther2((prevActive) => (prevActive + 1 + 1) % countItem); // Item tiếp theo
    };

    // Chuyển đến slide trước đó
    const prevSlide = () => {
        setActive((prevActive) => (prevActive - 1 + countItem) % countItem);
        setOther1((prevActive) => (prevActive - 1 + 1) % countItem); // Item trước
        setOther2((prevActive) => (prevActive - 1 - 1 + countItem) % countItem); // Item tiếp theo
    };
    useEffect(() => {
        const changeSlider = () => {
            // Đây là nơi bạn có thể thêm hoặc gỡ bỏ các class cho các item dựa vào trạng thái active, other1, other2.
            const currentItems = document.querySelectorAll('.carousel .item');
            currentItems.forEach(e => {
                e.querySelector('.image img').style.animation = 'none';
                e.querySelector('.image figcaption').style.animation = 'none';
                void e.offsetWidth; // Trigger reflow to restart animations
                e.querySelector('.image img').style.animation = '';
                e.querySelector('.image figcaption').style.animation = '';
            });
        };

        changeSlider(); // Thay đổi slider mỗi khi active thay đổi
    }, [active, other_1, other_2]); // Mỗi khi các state này thay đổi thì sẽ kích hoạt useEffect
    useEffect(() => {
        let autoPlayTimer;
        if (autoPlay) {
            autoPlayTimer = setInterval(() => {
                nextSlide();
            }, autoPlayInterval); // Chạy autoPlay mỗi khi khoảng thời gian (autoPlayInterval) trôi qua
        }

        return () => {
            if (autoPlayTimer) clearInterval(autoPlayTimer); // Clear interval khi unmount hoặc dừng autoPlay
        };
    }, [autoPlay, autoPlayInterval, active]);
    return (
        <>
       
             <div className="list">
                {items.map((item, index) => (
                    <article
                        key={index}
                        className={`item ${index === active ? 'active' : index === other_1 ? 'other_1' : index === other_2 ? 'other_2' : ''}`}
                    >
                        <div className="main-content" style={{ backgroundColor: item.bgColor }}>
                            <h2>{item.title}</h2>
                            <p className="price">{item.price}</p>
                            <p className="description">{item.description}</p>
                            <button className="addToCard">addToCard</button>
                        </div>
                        <figure className="image">
                            <img src={item.image} alt={item.title} />
                            <figcaption>{item.title}</figcaption>
                        </figure>
                    </article>
                ))}
            </div>
            <div className="arrows">
                <button id="prev" onClick={prevSlide}>Prev</button>
                <button id="next" onClick={nextSlide}>Next</button>
            </div>
        </>
    )
};

export default Carousel;
