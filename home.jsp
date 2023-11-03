<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<html>
  <head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Home</title>
    <!-- Link Swiper's CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
    />

    <!-- link file css -->
    <link
      rel="stylesheet"
      href="${pageContext.request.contextPath}/css/home.css"
    />
  </head>
  <body>
    <h1>TIME CINEMA</h1>

    <!-- Swiper -->
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="${pageContext.request.contextPath}/img/20's.jpg"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="${pageContext.request.contextPath}/img/10's.jpg"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="${pageContext.request.contextPath}/img/00's.jpg"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="${pageContext.request.contextPath}/img/90's.jpg"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="${pageContext.request.contextPath}/img/80's.jpg"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="${pageContext.request.contextPath}/img/70's.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="swiper-button swiper-button-next"></div>
      <div class="swiper-button swiper-button-prev"></div>
    </div>

    <!-- Swiper JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    <!-- Initialize Swiper -->
    <script>
      let swiper = new Swiper('.mySwiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 15,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
        mousewheel: true,
      });
    </script>
  </body>
</html>
