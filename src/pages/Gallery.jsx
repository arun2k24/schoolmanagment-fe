import React from 'react'

function Gallery() {
  return (
    <>
    <h2 className='text-orange-300 font-bold h-20 w-screen pt-5 text-3xl text-center' >Gallery</h2>
<div className="carousel carousel-center rounded-box w-screen h-60">
  <div className="carousel-item justify-center">
    <img src="https://www.dancelife.com.au/wp-content/uploads/2015/10/LO-RES-FOR-LISTINGS-schoolsspec-annawarr-0670-copy-1.jpg" alt="" />
  </div>
  <div className="carousel-item">
    <img
      src="http://static1.squarespace.com/static/5b3060a5e2ccd16185fd40f1/t/5bc2b1ca652deab94f1a1681/1539486160145/44062926_1041039626076642_6603859676159279104_n.jpg?format=1500w"
      alt="" />
  </div>
  <div className="carousel-item">
    <img
      src="https://www.vedantu.com/seo/content-images/27a1bd37-5e70-4e9d-990c-f1a1a06997f1.jpg"
      alt="" />
  </div>
  <div className="carousel-item">
    <img
      src="https://gamerules.com/wp-content/uploads/Long-Jump-2.jpg"
      alt="" />
  </div>
  <div className="carousel-item">
    <img src="https://cdn-i.vtcnews.vn/resize/th/upload/2023/05/23/image003-09523794.jpg" alt="" />
  </div>
  <div className="carousel-item">
    <img src="http://standrewsmethodistschool.co.uk/wp-content/uploads/2018/03/HOLI.jpg" alt="" />
  </div>
  <div className="carousel-item">
    <img
      src="https://thegioidienanh.vn/stores/news_dataimages/hath/112022/20/17/4436__MAK0115.jpg?rt=20221120174503"
      alt="" />
  </div>
</div>

    </>
  )
}

export default Gallery