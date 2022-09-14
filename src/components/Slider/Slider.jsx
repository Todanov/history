import Carousel from "../Carousel/Carousel";
import { SwiperSlide } from "swiper/react";

function Slider({count,arr}) {
  
  const onShowSlider=(item) => {
  const {information} =item

  return (
  
    <>

      {information.map((el, key) => (
      <SwiperSlide key={key} >
        
        <div className="history__card">
          <div className="hisroty__card__data">{el.data}</div>
          <div className="hisroty__card__title">
              {el.description}
          </div>
        </div>
      </SwiperSlide>
      ))}
    </>
    )
}
  return (
    <Carousel spaceBetween={80} loop={true} slidesPerView={3} >
      {arr.map((item, key) =>{
        return (
          count === item.id ? <div key={key}>{onShowSlider(item)}</div> : null
        )
      } )}
    </Carousel>
  );
}

export default Slider;
   
// {arr.map((item, key) => (
        
//   <SwiperSlide key={key}>
//     <div className="history__card">
//       <div className="hisroty__card__data">{el.data}</div>
//       <div className="hisroty__card__title">
//           {el.description}
//       </div>
//     </div>
//   </SwiperSlide>


// ))}