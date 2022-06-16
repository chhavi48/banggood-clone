import React from 'react';
import {Carousel} from 'react-bootstrap';

// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css'

const Carausal = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      {/* <div className="carousal" style={{height:"200px",marginBottom:"50px"}}></div>
<Carousel responsive={responsive}>
    
   
    <div><img src="https://imgaz.staticbg.com/banggood/os/202206/20220613004529_480.jpg" alt=""/>
    <p>GUCCI</p>
    <p><b>€ 749</b></p></div>
   
    <div><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/9b/P00649918.jpg" alt=""/>
    <p>GUCCI</p>
    <p><b>€ 1749</b></p></div>
    <div><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/73/P00675419.jpg" alt=""/>
    <p>GUCCI</p>
    <p><b>€ 149</b></p></div>
    <div><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/73/P00675419.jpg" alt=""/>
    <p>GUCCI</p>
    <p><b>€ 759</b></p></div>
    <div><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/73/P00675419.jpg" alt=""/>
    <p>GUCCI</p>
    <p><b>€ 78</b></p></div>
    <div><img src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/73/P00675419.jpg" alt=""/>
    <p>GUCCI</p>
    <p><b>€ 749</b></p></div>
  </Carousel> */}

      
      <Carousel>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://imgaz.staticbg.com/banggood/os/202206/20220613004529_480.jpg"
      alt="First slide"
    />
  </Carousel.Item>



  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://imgaz.staticbg.com/banggood/os/202206/20220613023249_790.jpg"
      alt="Second slide"
    />
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://imgaz.staticbg.com/banggood/os/202206/20220613025645_191.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

   <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://imgaz.staticbg.com/banggood/os/202206/20220608020023_499.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

   <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://imgaz.staticbg.com/banggood/os/202206/20220613033249_817.jpg"
      alt="Third slide"
    />
  </Carousel.Item>



   {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://imgaz.staticbg.com/banggood/os/202204/20220425031347_986.jpg.webp"
      alt="Third slide"
    />
  </Carousel.Item> */}




   {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://imgaz.staticbg.com/banggood/os/202204/20220427020559_837.jpg.webp"
      alt="Third slide"
    />
  </Carousel.Item> */}
 </Carousel> 
    </div>
  )
}

export default Carausal;