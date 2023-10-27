<script lang="ts">
  import { PdfViewer } from "svelte-pdf-simple";
  import type { PdfPageContent, PdfLoadSuccess, PdfException } from "svelte-pdf-simple";
    import type { EventHandler, MouseEventHandler } from "svelte/elements";

  let pdfViewer: PdfViewer;
  let pageNumber = 0;
  let totalPages = 0;
  let isPdfLoaded = false;
  let scale = 1.5;
  let divElement: HTMLDivElement;
  const pdfPath = "/files/sample.pdf"

  function handlePageChanged(event: CustomEvent<PdfPageContent>): void {
    pageNumber = event.detail.pageNumber;
  }
  function goToPage(page: number): void {
    pdfViewer.goToPage(page);
  }
  function handleLoadedSuccess(event: CustomEvent<PdfLoadSuccess>) {
    console.info("loaded", event.detail);
    totalPages = event.detail.totalPages;
    pageNumber = 1;
    isPdfLoaded = true;
  }
  function handleLoadFailure(event: CustomEvent<PdfException>) {
    console.info("failed", event.detail);
  }
  
  function handleClick(event: MouseEvent ): void {
    const clickX = event.clientX - divElement.getBoundingClientRect().left;
    const divWidth = divElement.clientWidth;

    if (clickX < divWidth / 2) {
      goToPage(pageNumber - 1);
    } else {
      goToPage(pageNumber + 1);
    }
  }
  
  function handleDownloadClick() {
    const fileData = "";
    const fileName = pdfPath;

    const blob = new Blob([fileData], { type: "text/plain"});
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

</script>

<div class='title'>
  <div class='logo'>
    <h1>SNU Computing Commons</h1>
    <h2>건축 기금 모금</h2>
  </div>
  <div class='symbol'>
    <img src='/images/snu_symbol.png' alt='서울대학교 로고'/>
  </div>
</div>
<div class='container'>
  <div class='pamphlet_download'>
    <img 
      class='pdf_download'
      src="/images/pdf_download.png"
      alt="SNU Computing Commons 팜플렛"
      on:click={handleDownloadClick}
    />
    </div>
  <button 
    class='pamphlet_slide'
    bind:this={divElement}
    on:click={handleClick}
    >
    <PdfViewer
      bind:this={pdfViewer}
      props={{
        path: pdfPath,
        scale,
        withAnnotations: true,
        withTextContent: true,
      }}
      style="border: 1px solid black; display: block; height: 100%;"
      on:page_changed={handlePageChanged}
      on:load_failure={handleLoadFailure}
      on:page_changed={handlePageChanged}
    >
    </PdfViewer>
  </button>
</div>
<div class='contact'>
  <input/>
  <input />
  <button />
</div>

<style>
  .title {
    display: flex;
  }
  .logo {
    flex: 4 1 0;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .logo h1 {
    font-family: 'Current';
    color: black;
    src: url('/fonts/Current-Regular.otf');
  }
  .logo h2 {
    font-family: 'Danjo';
    color: black;
    src: url('/fonts/Danjo-bold-Regular.otf');
  }
  .symbol {
    flex: 1 1 0;
  }
  .symbol img {
    width: 128px;
    height: 128px;
  }
  .container {
    display: flex;
    width: 100%;
    height: 128px;
  }
  .pamphlet_download {
    display: flex;
    flex: 1 1 0;
    justify-content: center;
  }
  .pamphlet_slide {
    display: flex;
    flex: 2 1 0;
    justify-content: center;
  }
  .pdf_download {
    height: 100%;
  }

  .contact {
    display: flex;
    justify-content: center;

  }
</style>