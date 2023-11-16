<script lang="ts">
  import { assets, base } from '$app/paths';

  let currentImageIndex = 0;

  const backgroundImageUrls = [
    '/images/page1.png',
    '/images/page2.png',
    '/images/page3.png',
    '/images/page4.png',
    '/images/page5.png',
    '/images/page6.png',
    '/images/page7.png',
    '/images/page8.png',
    '/images/page9.png',
    '/images/page10.png',
  ]

  function nextBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % backgroundImageUrls.length;
  }
  function prevBackgroundImage() {
    if (currentImageIndex - 1 <= 0) {
      currentImageIndex += 10;
    }
    currentImageIndex = (currentImageIndex - 1) % backgroundImageUrls.length;
  }

</script>

<div class='page' style="background-image: url('{backgroundImageUrls[currentImageIndex]}')">
  <div class='main'>
    <div class='head'>
      <div class='child logo'>
        <img src='{base}/images/SNUlogo.png' alt='snu logo' />
      </div>
      <a href='{base}/' class='child title'>
        <img src='{base}/images/computingcommonslogo.png' alt='cc logo' />
      </a>
      <div class='child right'/>
    </div>
    <div class='body'>
      <button class='child arrow left' on:click={prevBackgroundImage}>
        <img src='{base}/images/arrow_left.png' alt='larrow' />
      </button>
      <div class='child text'>
      </div>
      <button class='child arrow right' on:click={nextBackgroundImage}>
        <img src='{base}/images/arrow_right.png' alt='rarrow' />
      </button>
    </div>
    <div class="pbar">
      <img src='{base}/images/scroll.png' alt='scroll'/>
    </div>
  </div>
  <div class='footer'>
    <div class='blocks'>
      <a href='{base}/files/sample.pdf' download>
        <img src='{base}/images/button1.png' alt='download pdf' />
      </a>
      <a href='{base}/donate'>
        <img src='{base}/images/button2.png' alt='donate' />
      </a>
    </div>
    <div class='description'>
      <div class='child left' />
      <div class='child snu'>
        Computer Science Engineering, Seoul National University
      </div>
      <div class='child contact'>
        문의 | (02) 886-7589 (서울대학교 컴퓨터공학부 행정실)
      </div>
    </div>
  </div>
</div>

<style>
  .page {
    display: flex;
    width: 100%;
    max-width: 1920px;
    height: 1080px;
    margin: 0;
    padding: 0;
    justify-content: center;
    flex-direction: column;
    transition: background-image 0.5s ease-in-out;
  }

  .page::after{
	/* 소스만 다운받고 화면은 나타내지 않는다. (숨김 처리) */
    position:absolute; 
    width:0; 
    height:0; 
    overflow:hidden; 
    z-index:-1;
    
    /* load images */
    content:url('/images/page1.png') url('/images/page2.png') url('/images/page3.png') url('/images/page4.png') url('/images/page5.png') url('/images/page6.png') url('/images/page7.png') url('/images/page8.png') url('/images/page9.png') url('/images/page10.png'); /* 필요한 이미지 소스들 다운 */
}
  .main {
    display: flex;
    width: 100%;
    height: 920px;
    flex-direction: column;
  }

  .head {
    display: flex;
    height: 120px;
    background: rgba(255, 255, 255, 1);
  }
  .head .child {
    flex: 1;
  }
  .logo {
    display: flex;
    padding: 20px;
    align-self: center;
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .body {
    display: flex;
    height: 760px;
    flex: 1;
  }

  .body .child {
    display: flex;
  }
  .body > button {
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }
  .arrow {
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 100px;
    flex: 1;
  }

  .arrow:hover {
    cursor: pointer;
  }

  .text {
    flex: 10;
    white-space: pre-wrap;
    align-items: center;
    justify-content: center;
    text-align: center;

    font-family: 'Pretendard';
    src: url("/fonts/Pretendard-Light.ttf");
    font-size: 30px;
    line-height: 2em;
  }
  .pbar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
  }
  .footer {
    height: 160px;
    background-image: URL("/images/lowerbar.png");
  }
  .blocks {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
  }
  .blocks > a > img {
    margin: 50px;
  }
  .blocks > a > img:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  .description {
    height: 40px;
    display: flex;
    flex: 1;
  }
  .description .child {
    flex: 1;
  }
  .snu {
    display: flex;
    justify-content: center;
    font-family: 'Pretendard';
    src: url("/fonts/Pretendard-Light.ttf");
    color: rgba(255, 255, 255, 0.5);
  }
  .contact {
    display: flex;
    justify-content: right;
    font-family: 'Pretendard';
    src: url("/fonts/Pretendard-Light.ttf");
    padding: 0px 30px 0px 0px;
    color: rgba(255, 255, 255, 0.5);
  }
</style>