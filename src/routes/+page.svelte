<script lang="ts">
</script>

<div class='page'>
  <div class='main'>
    <div class='head'>
      <div class='child logo'>
        <img src='/images/SNUlogo.png' alt='snu logo' />
      </div>
      <div class='child title'>
        <img src='/images/computingcommonslogo.png' alt='cc logo' />
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
      <img src='/images/scroll.png' alt='scroll'/>
    </div>
  </div>
  <div class='footer'>
    <div class='blocks'>
      <img src='/images/button1.png' alt='download pdf' />
      <img src='/images/button2.png' alt='donate' />
    </div>
    <div class='description'>
      <div class='child left' />
      <div class='child snu'>

      </div>
      <div class='child contact'>

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
    background-image: URL("images/image1.png");
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
    background-image: URL("images/lowerbar.png");
  }
  .blocks {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
  }
  .blocks > img {
    margin: 50px;
  }
  .blocks > img:hover {
    opacity: 0.5
  }
  .description {
    height: 40px;
  }
</style>