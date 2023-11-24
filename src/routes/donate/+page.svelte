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
        <div class='info'>
          <div class='desc'>
            아래의 전화번호로 연락을 주시거나, 성함과 연락처를 입력해주시면 기부 관련한 상세한 안내를 해드리겠습니다.
          </div>
          <div class='contact'>
            <div class='pn'>
              {"(02) 880-7288"}
            </div>
            <div class='name'>
              서울대학교 컴퓨터공학부 Computing Commons 기금안내 담당 박지혜
            </div>
          </div>
          <div class='inputFieldWrapper'>
            <div class='inputField'>
              <div class='inputContainer'>
                <div class='in nameField'>
                  <div class='label'>
                    성함
                  </div>
                  <input class='field'/>
                </div>
                <div class='in pnField'>
                  <div class='label'>
                    전화번호
                  </div>
                  <input class='field' />
                </div>
                <div class='in emailField'>
                  <div class='label'>
                    이메일
                  </div>
                  <input class='field' />
                </div>
              </div>
              <div class='sendButtonWrapper'>
                <a href='/thanks'>
                  <img src='{base}/images/button2.png' alt='sendButton'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @font-face {
    font-family: 'HakgyoansimBareonbatangB';
    src: url("/fonts/HakgyoansimBareonbatangB.ttf") format("truetype");
    font-style: normal;
  }
  
  .page {
    display: flex;
    width: 100%;
    background-size: cover;
    height: 1080px;
    margin: auto;
    padding: 0;
    justify-content: center;
    flex-direction: column;
    font-family: 'HakgyoansimBareonbatangB';
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
  .info {
    display: flex;
    width: 1080px;
    height: 540px;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.05);
  }
  .desc {
    display: flex;
    flex: 5;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
  .contact {
    display: flex;
    flex: 2;
    background-color: rgba(255, 255, 255, 1)
  }

  .pn {
    display: flex;
    flex: 3;
    color: black;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;
    padding: 0px 10px 0px 0px;
  }
  .name {
    display: flex;
    flex: 6;
    color: black;
    font-size: 16px;
    align-items: center;
    padding: 0px 0px 0px 10px;
  }

  .inputFieldWrapper {
    display: flex;
    flex: 20;
    align-items: center;
    justify-content: center;
  }
  .inputField {
    display:flex;
    flex-direction:column;
    width: 720px;
    height: 300px;
  }
  .inputContainer {
    display:flex;
    flex-direction: column;
    flex:3;
    padding: 10px 0px 10px 0px;
  }
  .inputContainer .in {
    display:flex;
    flex:1;
    align-items:center;
  }
  .label {
    display: flex;
    flex: 1;
    font-size: 18px;
  }
  .field {
    display: flex;
    flex: 7;
    font-size: 25px;
    padding: 5px;
    border: none;
    background-color: rgb(255, 255, 255, 0.6)
  }
  .sendButtonWrapper {
    display:flex;
    flex:1;
    justify-content: center;
    align-items: center;
  }
  .sendButtonWrapper > a > img:hover {
    opacity: 0.5;
    cursor: pointer;
  }
</style>