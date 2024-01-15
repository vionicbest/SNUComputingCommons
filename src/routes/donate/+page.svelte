<script lang="ts" nonce="%sveltekit.nonce%">
  import MediaQuery from '../../mediaQuery.svelte';
  import { assets, base } from '$app/paths';
  import { goto } from '$app/navigation';
  let name = '';
  let pn = '';
  let email = '';
  let result = null;
  let email_regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  let pn_regex = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/;
  let isNameError = false;
  let isPnError = false;
  let isEmailError = false;

  function checkName() {
    if (name == '') {
      isNameError = true;
    } else {
      isNameError = false;
    }
  }

  function checkPhoneNumber() {
    isPnError = !pn_regex.test(pn);
  }

  function checkEmail() {
    isEmailError = !email_regex.test(email);
  }

  async function donate () {
    checkName();
    checkPhoneNumber();
    checkEmail();
    if (isNameError || isPnError || isEmailError) {
      console.log('error');
      return;
    }
    goto("/thanks");
    const res = await fetch('https://computingcommons.snu.ac.kr:8000/update_sheet/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        pn: pn,
      })
    })
    const json = await res.json()
    result = JSON.stringify(json)
    console.log(result)
  }
</script>

<MediaQuery query="(min-width: 1281px)" let:matches>
	{#if matches}
  <div class='page'>
    <div class='head'>
      <div class='child logo'>
        <img src='{base}/images/snu_logo_2.svg' alt='snu logo' />
      </div>
      <a href='{base}/' class='child title'>
        <img src='{base}/images/computingcommons_logo_2.svg' alt='cc logo' />
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
                      <input class='field' bind:value={name} placeholder="홍길동"/>
                    </div>
                    {#if isNameError}
                    <div class='err pntext'>이름을 입력해 주세요.</div>
                    {/if}
                    <div class='in pnField'>
                      <div class='label'>
                        전화번호
                      </div>
                      <input class='field' bind:value={pn} placeholder="010-1234-5678"/>
                    </div>
                    {#if isPnError}
                    <div class='err pntext'>전화번호 양식이 올바르지 않습니다.</div>
                    {/if}
                    <div class='in emailField'>
                      <div class='label'>
                        이메일
                      </div>
                      <input class='field' bind:value={email} placeholder="test@example.com"/>
                    </div>
                    {#if isEmailError}
                    <div class='err emailtext'>이메일 양식이 올바르지 않습니다.</div>
                    {/if}
                  </div>
                  <div class='sendButtonWrapper'>
                    <button on:click={donate}>
                      <img src='{base}/images/p11_button.png' alt='sendButton'/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style nonce="%sveltekit.nonce%">
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
      .logo > img {
        width: 402px;
        height: 73px;
      }
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title > img {
        width: 335px;
        height: 50px;
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
        padding: 8px 0px 8px 0px;
      }
      .inputContainer .in {
        display:flex;
        flex:1;
        align-items:center;
      }
      .inputContainer .err {
        color: #ec0000;
        padding: 0 0 0 12.5%;
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
      .sendButtonWrapper > button > img:hover {
        opacity: 0.5;
        cursor: pointer;
      }
      .sendButtonWrapper > button {
        border: none;
        background-color: transparent;
        outline: none;
      }
    </style>
  {/if}
</MediaQuery>

<MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
	{#if matches}
  <div class='page'>
    <div class='head'>
      <div class='child logo'>
        <img src='{base}/images/snu_3.svg' alt='snu logo' />
      </div>
      <a href='{base}/' class='child title'>
        <img src='{base}/images/computingcommons_logo_2.svg' alt='cc logo' />
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
                      <input class='field' bind:value={name} placeholder="홍길동"/>
                    </div>
                    {#if isNameError}
                    <div class='err pntext'>이름을 입력해 주세요.</div>
                    {/if}
                    <div class='in pnField'>
                      <div class='label'>
                        전화번호
                      </div>
                      <input class='field' bind:value={pn} placeholder="010-1234-5678"/>
                    </div>
                    {#if isPnError}
                    <div class='err pntext'>전화번호 양식이 올바르지 않습니다.</div>
                    {/if}
                    <div class='in emailField'>
                      <div class='label'>
                        이메일
                      </div>
                      <input class='field' bind:value={email} placeholder="test@example.com"/>
                    </div>
                    {#if isEmailError}
                    <div class='err emailtext'>이메일 양식이 올바르지 않습니다.</div>
                    {/if}
                  </div>
                  <div class='sendButtonWrapper'>
                    <button on:click={donate}>
                      <img src='{base}/images/p11_button.png' alt='sendButton'/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style nonce="%sveltekit.nonce%">
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
      
      .logo > img {
        width: 50px;
        height: 50px;
      }
    
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title > img {
        width: 335px;
        height: 50px;
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
        padding: 8px 0px 8px 0px;
      }
      .inputContainer .in {
        display:flex;
        flex:1;
        align-items:center;
      }
      .inputContainer .err {
        color: #ec0000;
        padding: 0 0 0 12.5%;
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
      .sendButtonWrapper > button > img:hover {
        opacity: 0.5;
        cursor: pointer;
      }
      .sendButtonWrapper > button {
        border: none;
        background-color: transparent;
        outline: none;
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
              <div class='desc'>
                아래의 전화번호로 연락을 주시거나,<br /> 성함과 연락처를 입력해주시면<br /> 기부 관련한 상세한 안내를 해드리겠습니다.
              </div>
              <div class='inputFieldWrapper'>
                <div class='inputField'>
                  <div class='inputContainer'>
                    <div class='in nameField'>
                      <div class='label'>
                        성함
                      </div>
                      <input class='field' bind:value={name} placeholder="홍길동"/>
                      {#if isNameError}
                      <div class='err pntext'>이름을 입력해 주세요.</div>
                      {/if}
                    </div>
                    <div class='in pnField'>
                      <div class='label'>
                        전화번호
                      </div>
                      <input class='field' bind:value={pn} placeholder="010-1234-5678"/>
                      {#if isPnError}
                      <div class='err pntext'>전화번호 양식이 올바르지 않습니다.</div>
                      {/if}
                    </div>
                    <div class='in emailField'>
                      <div class='label'>
                        이메일
                      </div>
                      <input class='field' bind:value={email} placeholder="test@example.com"/>
                      {#if isEmailError}
                      <div class='err emailtext'>이메일 양식이 올바르지 않습니다.</div>
                      {/if}
                    </div>
                  </div>
                  <div class='sendButtonWrapper'>
                    <button on:click={donate}>
                      <img src='{base}/images/p11_button.png' alt='sendButton'/>
                    </button>
                  </div>
                </div>
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

    <style nonce="%sveltekit.nonce%">
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
        font-family: 'HakgyoansimBareonbatangB';
      }

      .main {
        display: flex;
        width: 100%;
        flex-direction: column;
        background-image: URL("/images/second_background.png");
        height: calc(100vh - 85px);
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
        min-height: 560px;
        flex: 1;
        justify-content: center;
        flex-direction: column;
      }
      .center{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .info {
        width: 285px;
        height: 370px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.05);
      }
      .desc {
        width: 250px;
        height: 30px;
        display: flex;
        flex: 5;
        justify-content: center;
        text-align: center;
        align-items: center;
        font-size: 12px;
      }
      .contact {
        display: flex;
        flex-direction: column;
        flex: 2;
      }

      .pn {
        display: flex;
        flex: 3;
        color: black;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        padding: 0px 10px 0px 0px;
      }
      .name {
        display: flex;
        flex: 6;
        color: black;
        font-size: 9px;
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
      }
      .inputContainer {
        display:flex;
        flex-direction: column;
        row-gap: 15px;
        flex:3;
      }
      .inputContainer .in {
        display:flex;
        flex:1;
        flex-direction: column;
        align-items:flex-start;
      }
      .inputContainer .err {
        color: #ec0000;
        font-size: 12px;
        padding: 5px 0px 0px 0px;
      }
      .label {
        display: flex;
        flex: 1;
        font-size: 13px;
      }
      .field {
        width: 240px;
        height: 25px;
        display: flex;
        flex: 7;
        font-size: 17px;
        padding: 5px;
        border: none;
        background-color: rgb(255, 255, 255, 0.6)
      }
      .sendButtonWrapper {
        display:flex;
        flex:1;
        justify-content: center;
        align-items: center;
        padding: 25px;
      }
      .sendButtonWrapper > button > img {
        width: 120px;
        height: 30px;
      }
      .sendButtonWrapper > button > img:hover {
        opacity: 0.5;
        cursor: pointer;
      }
      .sendButtonWrapper > button {
        border: none;
        background-color: transparent;
        outline: none;
      }
    </style>
  {/if}
</MediaQuery>