<script lang="ts">
  import { assets, base } from '$app/paths';
</script>

<div class='page'>
  <div class='head'>
    <div class='child logo'>
      <img src='{base}/images/SNUlogo.png' alt='snu logo' />
    </div>
    <a href='{base}/' class='child title'>
      <img src='{base}/images/computingcommonslogo.png' alt='cc logo' />
    </a>
    <div class='child right'/>
  </div>
  <div class='main'>
    <div class='body'>
      <div class='center'>
        <div class='inputField'>
          <div class='child description'>
            아래의 전화번호로 연락을 주시거나, 성함과 연락처를 입력해주시면 기부 관련한 상세한 안내를 해드리겠습니다.
          </div>
          <div class='child DonateContact'>
            <div class='child cpn'>(02) 880-7288</div>
            <div class='child cname'>서울대학교 컴퓨터공학부 Computing Commons 기금안내 담당 박지혜</div>
          </div>
          <div class='child fields'>
            <div class='in name'>
              <div class='label'>
                성함
              </div>
              <div class='fieldName'></div>
            </div>
            <div class='in pn'>
              <div class='label'>
                전화번호

              </div>
              <div class='fieldPn'></div>
            </div>
            <div class='in email'>
              <div class='label'>
                이메일
              </div>
              <div class='fieldEmail'></div>
            </div>
          </div>
          <div class='child buttonContainer'>
            <div class='sendButton'>
              전송
            </div>
          </div>
        </div>
      </div>
      <div class='footer'>
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
  }

  .main {
    display: flex;
    width: 100%;
    height: 960px;
    flex-direction: column;
    background-image: URL("/images/second_background.png");
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
    flex-direction: column;
  }
  .center{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 920px;
  }
  .inputField {
    display: flex;
    width: 1080px;
    height: 540px;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .inputField .child {
    display: flex;
  }

  .description {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
  }
  .DonateContact {
    display: flex;
    flex: 1;
    background-color: white;
  }
  .DonateContact .child {
    display: flex;
    align-items: center;
    padding: 20px;
  }
  .cpn {
    display: flex;
    justify-content: right;
    flex: 1;
  }
  .cname {
    display: flex;
    justify-content: left;
    flex: 3;
  }
  .fields {
    flex: 3;
    display: flex;
    flex-direction: column;
  }
  .fields .in {
    display: flex;
    align-items: center;
    flex: 1;
  }
  .fields .in .label{
    display: flex;
    align-items: center;
    width: 100px;
  }
  .fields .in .fieldName {
    width: 400px;
    height: 50px;
    display: flex;
    background-color: white;
  }
  .fields .in .fieldPn {
    width: 800px;
    height: 50px;
    display: flex;
    background-color: white;
  }
  .fields .in .fieldEmail {
    width: 800px;
    height: 50px;
    display: flex;
    background-color: white;
  }
  .buttonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;
    flex-direction: column;
  }
  .sendButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    background-color: blue;
    color: white;
  }
  .sendButton:hover{
    cursor: pointer;
    opacity: 0.5;
  }
  .footer {
    height: 40px;
    display: flex;
    flex: 1;
  }
  .footer .child {
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