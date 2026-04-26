<template>
  <div class="loader-overlay">
    <div class="loader-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <rect fill="#FF156D" stroke="#FF156D" stroke-width="15" stroke-linejoin="round" width="30" height="30"
          x="85" y="85" rx="0" ry="0">
          <animate attributeName="rx" calcMode="spline" dur="2" values="15;15;5;15;15"
            keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1" repeatCount="indefinite"></animate>
          <animate attributeName="ry" calcMode="spline" dur="2" values="15;15;10;15;15"
            keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1" repeatCount="indefinite"></animate>
          <animate attributeName="height" calcMode="spline" dur="2" values="30;30;1;30;30"
            keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1" repeatCount="indefinite"></animate>
          <animate attributeName="y" calcMode="spline" dur="2" values="40;170;40;"
            keySplines=".6 0 1 .4;0 .8 .2 1" repeatCount="indefinite"></animate>
        </rect>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.loader-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  border-radius: inherit;
}

.loader-container {
  width: 100px;
  height: 100px;
}

.loader-container svg {
  width: 100%;
  height: 100%;
  display: block;
}
</style>