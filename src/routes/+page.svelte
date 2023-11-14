<script lang="ts">
  import { assets, base } from '$app/paths';
</script>

<div class='page'>
  <div class='main'>
    <div class='head'>
      <div class='child logo'>
        <img src='{base}/images/SNUlogo.png' alt='snu logo' />
      </div>
      <div class='child title'>
        <img src='{base}/images/computingcommonslogo.png' alt='cc logo' />
      </div>
      <div class='child right'/>
    </div>
    <div class='body'>
      <div class='child arrow left'>
        {"<"}
      </div>
      <div class='child text'>
        {"SNU COMPUTING COMMONS \n건축 기금을 모집합니다."}
      </div>
      <div class='child arrow right'>
        {">"}
      </div>
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
    background-image: URL("{base}/images/image1.png");
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
    background: rgba(255, 255, 255, 0.5);
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
    background-image: URL("{base}/images/lowerbar.png");
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