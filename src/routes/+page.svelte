<script lang="ts">
  import MediaQuery from '../mediaQuery.svelte';
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
  const backgroundImageUrlsForMobile = [
    '/images/p01.png',
    '/images/p02.png',
    '/images/p03.png',
    '/images/p04.png',
    '/images/p05.png',
    '/images/p06.png',
    '/images/p07.png',
    '/images/p08.png',
    '/images/p09.png',
    '/images/p10.png',
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
<MediaQuery query="(min-width: 1281px)" let:matches>
  {#if matches}
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
        <a href='{base}/files/SNU_computing Commons pamphlet_20231026_compressed.pdf' download>
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
          문의 | (02) 880-7288 (서울대학교 컴퓨터공학부 행정실)
        </div>
      </div>
    </div>
  </div><style>
    @font-face {
      font-family: 'Pretendard Light';
      font-style: normal;
      font-weight: 400;
      src: url('%sveltekit.base%/fonts/Pretendard-Light.ttf') format('ttf');
    }
    .page {
      display: flex;
      width: 100%;
      height: 1080px;
      background-size: cover;
      margin: auto;
      padding: 0;
      justify-content: center;
      flex-direction: column;
      background-position: center;
      transition: background-image 0.5s ease-in-out;
      background-color: rgba(0, 0, 0);
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
  {/if}
</MediaQuery>

<MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
	{#if matches}
	<div class="root tablet">
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
          <a href='{base}/files/SNU_computing Commons pamphlet_20231026_compressed.pdf' download>
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
            문의 | (02) 880-7288 (서울대학교 컴퓨터공학부 행정실)
          </div>
        </div>
      </div>
    </div>
	</div>
  <style>
    @font-face {
      font-family: 'Pretendard Light';
      font-style: normal;
      font-weight: 400;
      src: url('%sveltekit.base%/fonts/Pretendard-Light.ttf') format('ttf');
    }
    .page {
      display: flex;
      width: 100%;
      height: 1080px;
      background-size: cover;
      margin: auto;
      padding: 0;
      justify-content: center;
      flex-direction: column;
      background-position: center;
      transition: background-image 0.5s ease-in-out;
      background-color: rgba(0, 0, 0);
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
	{/if}
</MediaQuery>

<MediaQuery query="(max-width: 480px)" let:matches>
	{#if matches}
  <div class='page' style="background-image: url('{backgroundImageUrlsForMobile[currentImageIndex]}')">
    <div class='main'>
      <div class='head'>
        <div class='child logo'>
          <img src='{base}/images/logo_snu_1.png' alt='snu logo' />
        </div>
        <a href='{base}/' class='child title'>
          <img src='{base}/images/logo_computingcommons_1.png' alt='cc logo' />
        </a>
        <div class='child right'/>
      </div>
      <div class='body'>
        <button class='child arrow left' on:click={prevBackgroundImage}>
          <img src='{base}/images/arrow_left_1.png' alt='larrow' />
        </button>
        <div class='child text'>
        </div>
        <button class='child arrow right' on:click={nextBackgroundImage}>
          <img src='{base}/images/arrow_right_1.png' alt='rarrow' />
        </button>
      </div>
    </div>
    <div class='footer'>
      <div class='blocks'>
        <a href='{base}/files/SNU_computing Commons pamphlet_20231026_compressed.pdf' download>
          <img src='{base}/images/button1_1.png' alt='download pdf' />
        </a>
        <a href='{base}/donate'>
          <img src='{base}/images/button2_1.png' alt='donate' />
        </a>
      </div>
      <div class='description'>
        <div class='child left' />
        <div class='child snu'>
          Computer Science Engineering, Seoul National University
        </div>
        <div class='child contact'>
          문의 | (02) 880-7288 (서울대학교 컴퓨터공학부 행정실)
        </div>
      </div>
    </div>
	</div>

  <style>
    @font-face {
      font-family: 'Pretendard Light';
      font-style: normal;
      font-weight: 400;
      src: url('%sveltekit.base%/fonts/Pretendard-Light.ttf') format('ttf');
    }
    .page {
      display: flex;
      width: 100%;
      background-size: cover;
      margin: auto;
      padding: 0;
      justify-content: center;
      flex-direction: column;
      background-position: center;
      transition: background-image 0.5s ease-in-out;
      background-color: rgba(0, 0, 0);
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
      flex-direction: column;
    }
  
    .head {
      padding: 20px;
      height: 45px;
      display: flex;
      align-items: center;
      background: rgba(255, 255, 255, 1);
    }
    .head .child {
      height: 35px;
      flex: 1;
    }
    .logo {
      height: 100%;
      display: flex;
      align-self: center;
    }
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title > img {
      height: 32px;
    }
  
    .body {
      display: flex;
      min-height: calc(100vh - 180px);
      flex: 1;
    }
  
    .body .child {
      display: flex;
    }
    .body > button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      background-color: rgba(0, 0, 0, 0);
    }

    .body > button > img {
      width: 14px;
      height: 26px;
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
    }
    .footer {
      height: 95px;
      background-image: URL("/images/lowerbar.png");
    }
    .blocks {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .blocks > a > img {
      width: 120px;
      height: 35px;
      margin: 27.5px;
    }
    .blocks > a > img:hover {
      opacity: 0.5;
      cursor: pointer;
    }
    .description {
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
	{/if}
</MediaQuery>
