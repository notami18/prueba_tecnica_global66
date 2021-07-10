<template>
  <div class="spin">
    <svg
      width="106"
      height="106"
      viewBox="0 0 106 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="53"
        cy="53"
        r="51"
        fill="white"
        stroke="#333333"
        stroke-width="4"
      />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="106"
        height="53"
      >
        <rect width="106" height="53" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0)">
        <circle
          cx="53"
          cy="53"
          r="51"
          fill="#F22539"
          stroke="#333333"
          stroke-width="4"
        />
      </g>
      <path d="M0.392578 53H105.607" stroke="#333333" stroke-width="4" />
      <circle cx="53" cy="52.9998" r="20.8074" fill="white" />
      <circle
        cx="53"
        cy="52.9998"
        r="18.8074"
        stroke="#333333"
        stroke-width="4"
      />
      <path
        d="M91.731 36.7077C86.9398 25.3318 77.283 16.5081 65.3667 12.8428"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="53"
        cy="53.0004"
        r="10.3852"
        stroke="#808080"
        stroke-width="2"
      />
    </svg>
  </div>
</template>
<script>
export default {
    name: "loading",
};
</script>
<style lang="css">
.spin {
  margin: auto;
  width: 100px;
  height: 100px;
  margin-top: 320px;
  -webkit-animation-name: spin;
  -webkit-animation-duration: 2000ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: spin;
  -moz-animation-duration: 2000ms;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: spin;
  -ms-animation-duration: 2000ms;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;
  animation-name: spin;
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@-ms-keyframes spin {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}

@-moz-keyframes spin {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
