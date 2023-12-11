<script lang="ts" nonce="%sveltekit.nonce%">
  import MediaQuery from '../../mediaQuery.svelte';
  import { assets, base } from '$app/paths';
</script>
<MediaQuery query="(min-width: 1281px)" let:matches>
  {#if matches}
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
              <div class='msg'>
                여러분의 기부가 서울대학교 컴퓨터공학부의 발전에 큰 힘이 됩니다.
                <br/>입력하신 연락처로 조만간 기부 방법에 대해 안내해드리겠습니다. 감사합니다.
              </div>
              <div class='contactWrapper'>
                <div class='lineWrapper'>
                  <div class='line'></div>
                </div>
                <div class='contactMsg'>
                  문의사항이 있으시다면 아래 연락처로 문의주세요.
                </div>
                <div class='contact'>
                <div class='pn'>
                  {"(02) 880-7288"}
                </div>
                <div class='name'>
                  서울대학교 컴퓨터공학부 Computing Commons 기금안내 담당 박지혜
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
        font-family: 'HakgyoansimBareonbatangB'
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
        width: 960px;
        height: 480px;
        flex-direction: column;
      }
      .msg {
        display: flex;
        flex: 2;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 25px;
        line-height: 70px;
      }
      .contactWrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      .lineWrapper {
        display: flex;
        justify-content: center;
        flex: 1;
      }
      .line {
        display: flex;
        border: solid;
        border-width: 0px 0px 4px 0px;
        margin: 0px 0px 10px 0px;
        border-color: rgba(0, 0, 0, 0.1);
        width: 47%;
      }
      .contactMsg {
        display: flex;
        flex: 2;
        justify-content: center;
        font-size: 20px;
      }
      .contact {
        display: flex;
        flex: 2;
        align-items: flex-start;
      }
      .pn {
        display: flex;
        flex: 3;
        color: black;
        justify-content: flex-end;
        align-items: center;
        font-size: 17px;
        padding: 0px 10px 0px 0px;
      }
      .name {
        display: flex;
        flex: 7;
        color: black;
        font-size: 16px;
        align-items: center;
        padding: 0px 0px 0px 10px;
      }
    </style>
  {/if}
</MediaQuery>

<MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
  {#if matches}
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
              <div class='msg'>
                여러분의 기부가 서울대학교 컴퓨터공학부의 발전에 큰 힘이 됩니다.
                <br/>입력하신 연락처로 조만간 기부 방법에 대해 안내해드리겠습니다. 감사합니다.
              </div>
              <div class='contactWrapper'>
                <div class='lineWrapper'>
                  <div class='line'></div>
                </div>
                <div class='contactMsg'>
                  문의사항이 있으시다면 아래 연락처로 문의주세요.
                </div>
                <div class='contact'>
                <div class='pn'>
                  {"(02) 880-7288"}
                </div>
                <div class='name'>
                  서울대학교 컴퓨터공학부 Computing Commons 기금안내 담당 박지혜
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
        font-family: 'HakgyoansimBareonbatangB'
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
        width: 960px;
        height: 480px;
        flex-direction: column;
      }
      .msg {
        display: flex;
        flex: 2;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 25px;
        line-height: 70px;
      }
      .contactWrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      .lineWrapper {
        display: flex;
        justify-content: center;
        flex: 1;
      }
      .line {
        display: flex;
        border: solid;
        border-width: 0px 0px 4px 0px;
        margin: 0px 0px 10px 0px;
        border-color: rgba(0, 0, 0, 0.1);
        width: 47%;
      }
      .contactMsg {
        display: flex;
        flex: 2;
        justify-content: center;
        font-size: 20px;
      }
      .contact {
        display: flex;
        flex: 2;
        align-items: flex-start;
      }
      .pn {
        display: flex;
        flex: 3;
        color: black;
        justify-content: flex-end;
        align-items: center;
        font-size: 17px;
        padding: 0px 10px 0px 0px;
      }
      .name {
        display: flex;
        flex: 7;
        color: black;
        font-size: 16px;
        align-items: center;
        padding: 0px 0px 0px 10px;
      }
    </style>
  {/if}
</MediaQuery>

<MediaQuery query="(max-width: 480px)" let:matches>
  {#if matches}
    <div class='page'>
      <div class='head'>
        <div class='child logo'>
          <img src='{base}/images/logo_snu_1.png' alt='snu logo' />
        </div>
        <a href='{base}/' class='child title'>
          <img src='{base}/images/logo_computingcommons_1.png' alt='cc logo' />
        </a>
        <div class='child right'/>
      </div>
      <div class='main'>
        <div class='body'>
          <div class='center'>
            <div class='info'>
              <div class='msg'>
                입력하신 연락처로 <br/> 조만간 기부 방법에 대해 안내해드리겠습니다. <br/> <br/>감사합니다.
              </div>
            </div>
            <div class='contactWrapper'>
              <div class='contactMsg'>
                문의사항이 있으시다면 아래 연락처로 문의주세요.
              </div>
              <div class='contact'>
              <div class='pn'>
                {"(02) 880-7288"}
              </div>
              <div class='name'>
                서울대학교 컴퓨터공학부 Computing Commons 기금안내 담당 박지혜
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
        margin: auto;
        padding: 0;
        justify-content: center;
        flex-direction: column;
        font-family: 'HakgyoansimBareonbatangB'
      }

      .main {
        display: flex;
        height: calc(100vh - 85px);
        width: 100%;
        flex-direction: column;
        background-image: URL("/images/second_background.png");
      }

      .head {
        padding: 20px;
        height: 45px;
        display: flex;
        align-items: center;
        background: rgba(255, 255, 255, 0.5);
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
        flex: 1;
        flex-direction: column;
      }
      .center{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .info {
        width: 375px;
        height: 375px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .msg {
        width: 222px;
        height: 230px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 17px;
        line-height: 32px;
        background-image: URL('images/p12_background_logo.png');
        background-size: cover;
      }
      .contactWrapper {
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 100px;
      }
      .lineWrapper {
        display: flex;
        justify-content: center;
        flex: 1;
      }
      .line {
        display: flex;
        border: solid;
        border-width: 0px 0px 4px 0px;
        margin: 0px 0px 10px 0px;
        border-color: rgba(0, 0, 0, 0.1);
        width: 47%;
      }
      .contactMsg {
        display: flex;
        justify-content: center;
        font-size: 13px;
      }
      .contact {
        display: flex;
        flex-direction: column;
        flex: 2;
        align-items: flex-start;
        font-size: 13px;
      }
      .pn {
        display: flex;
        color: black;
        justify-content: flex-end;
        align-items: center;
        font-size: 17px;
        padding: 0px 10px 0px 0px;
      }
      .name {
        display: flex;
        color: black;
        font-size: 16px;
        align-items: center;
        padding: 0px 0px 0px 10px;
      }
    </style>
  {/if}
</MediaQuery>