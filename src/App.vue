<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "App",
  metaInfo: {
    title: "app vue",
    titleTemplate: "%s | Arkadiainfo",
    htmlAttrs: {
      lang: "en-US",
    },
    meta: [{ charset: "utf-8" }],
  },

  // metaInfo() {
  //   return {
  //     title: this.item.title,
  //     titleTemplate: "%s | Arkadiainfo",
  //     htmlAttrs: {
  //       lang: "en-US",
  //     },
  //     meta: [
  //       { charset: "utf-8" },
  //       {
  //         property: "og:image",
  //         content: this.item.url_cover,
  //         vmid: "og:image",
  //       },
  //       { property: "og:title", content: this.item.title, vmid: "og:title" },
  //       { property: "og:type", content: "website", vmid: "og:type" },
  //       {
  //         property: "og:description",
  //         content: this.item.OgDescription,
  //         vmid: "og:description",
  //       },
  //     ],
  //   };
  // },
  // created() {
  //   this.getLandingData();
  // },
  // data() {
  //   return {
  //     item: {},
  //   };
  // },
  // methods: {
  //   getLandingData() {
  //     axios
  //       .get("https://api-fdt.whappy.it/api/Landing/" + this.paramsFromRoute.id)
  //       .then((res) => {
  //         console.log("LANDING PAGE DATA ", res.data);
  //         this.item = res.data;
  //         this.item.title = this.item.title["it-IT"];
  //         this.item.body = this.item.body["it-IT"];
  //       });
  //   },
  // },
};
</script>

<style lang="scss" >
.socialpost-body .ql-editor p,
.socialpost-body .ql-editor ol,
.socialpost-body .ql-editor ul,
.socialpost-body .ql-editor pre,
.socialpost-body .ql-editor blockquote,
.socialpost-body .ql-editor h1,
.socialpost-body .ql-editor h2,
.socialpost-body .ql-editor h3,
.socialpost-body .ql-editor h4,
.socialpost-body .ql-editor h5,
.socialpost-body .ql-editor h6 {
  margin: 0;
  padding: 0;
  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.socialpost-body .ql-editor ol,
.socialpost-body .ql-editor ul {
  padding-left: 1.5em;
}
.socialpost-body .ql-editor ol > li,
.socialpost-body .ql-editor ul > li {
  list-style-type: none;
}
.socialpost-body .ql-editor ul > li::before {
  content: "\2022";
}
.socialpost-body .ql-editor ul[data-checked="true"],
.socialpost-body .ql-editor ul[data-checked="false"] {
  pointer-events: none;
}
.socialpost-body .ql-editor ul[data-checked="true"] > li *,
.socialpost-body .ql-editor ul[data-checked="false"] > li * {
  pointer-events: all;
}
.socialpost-body .ql-editor ul[data-checked="true"] > li::before,
.socialpost-body .ql-editor ul[data-checked="false"] > li::before {
  color: #777;
  cursor: pointer;
  pointer-events: all;
}
.socialpost-body .ql-editor ul[data-checked="true"] > li::before {
  content: "\2611";
}
.socialpost-body .ql-editor ul[data-checked="false"] > li::before {
  content: "\2610";
}
.socialpost-body .ql-editor li::before {
  display: inline-block;
  white-space: nowrap;
  width: 1.2em;
}
.socialpost-body .ql-editor li:not(.ql-direction-rtl)::before {
  margin-left: -1.5em;
  margin-right: 0.3em;
  text-align: right;
}
.socialpost-body .ql-editor li.ql-direction-rtl::before {
  margin-left: 0.3em;
  margin-right: -1.5em;
}
.socialpost-body .ql-editor ol li:not(.ql-direction-rtl),
.socialpost-body .ql-editor ul li:not(.ql-direction-rtl) {
  padding-left: 1.5em;
}
.socialpost-body .ql-editor ol li.ql-direction-rtl,
.socialpost-body .ql-editor ul li.ql-direction-rtl {
  padding-right: 1.5em;
}
.socialpost-body .ql-editor ol li {
  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  counter-increment: list-0;
}
.socialpost-body .ql-editor ol li:before {
  content: counter(list-0, decimal) ". ";
}
.socialpost-body .ql-editor ol li.ql-indent-1 {
  counter-increment: list-1;
}
.socialpost-body .ql-editor ol li.ql-indent-1:before {
  content: counter(list-1, lower-alpha) ". ";
}
.socialpost-body .ql-editor ol li.ql-indent-1 {
  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.socialpost-body .ql-editor ol li.ql-indent-2 {
  counter-increment: list-2;
}
.socialpost-body .ql-editor ol li.ql-indent-2:before {
  content: counter(list-2, lower-roman) ". ";
}
.socialpost-body .ql-editor ol li.ql-indent-2 {
  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.socialpost-body .ql-editor ol li.ql-indent-3 {
  counter-increment: list-3;
}
.socialpost-body .ql-editor ol li.ql-indent-3:before {
  content: counter(list-3, decimal) ". ";
}
.socialpost-body .ql-editor ol li.ql-indent-3 {
  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.socialpost-body .ql-editor ol li.ql-indent-4 {
  counter-increment: list-4;
}
.socialpost-body .ql-editor ol li.ql-indent-4:before {
  content: counter(list-4, lower-alpha) ". ";
}
.socialpost-body .ql-editor ol li.ql-indent-4 {
  counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.socialpost-body .ql-editor ol li.ql-indent-5 {
  counter-increment: list-5;
}
.socialpost-body .ql-editor ol li.ql-indent-5:before {
  content: counter(list-5, lower-roman) ". ";
}
.socialpost-body .ql-editor ol li.ql-indent-5 {
  counter-reset: list-6 list-7 list-8 list-9;
}
.socialpost-body .ql-editor ol li.ql-indent-6 {
  counter-increment: list-6;
}
.socialpost-body .ql-editor ol li.ql-indent-6:before {
  content: counter(list-6, decimal) ". ";
}
.socialpost-body .ql-editor ol li.ql-indent-6 {
  counter-reset: list-7 list-8 list-9;
}
.socialpost-body .ql-editor ol li.ql-indent-7 {
  counter-increment: list-7;
}
.socialpost-body .ql-editor ol li.ql-indent-7:before {
  content: counter(list-7, lower-alpha) ". ";
}
.socialpost-body .ql-editor ol li.ql-indent-7 {
  counter-reset: list-8 list-9;
}
.socialpost-body .ql-editor ol li.ql-indent-8 {
  counter-increment: list-8;
}
.socialpost-body .ql-editor ol li.ql-indent-8:before {
  content: counter(list-8, lower-roman) ". ";
}
.socialpost-body .ql-editor ol li.ql-indent-8 {
  counter-reset: list-9;
}
.socialpost-body .ql-editor ol li.ql-indent-9 {
  counter-increment: list-9;
}
.socialpost-body .ql-editor ol li.ql-indent-9:before {
  content: counter(list-9, decimal) ". ";
}
.socialpost-body .ql-editor .ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 3em;
}
.socialpost-body .ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 4.5em;
}
.socialpost-body .ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 3em;
}
.socialpost-body .ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 4.5em;
}
.socialpost-body .ql-editor .ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 6em;
}
.socialpost-body .ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 7.5em;
}
.socialpost-body .ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 6em;
}
.socialpost-body .ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 7.5em;
}
.socialpost-body .ql-editor .ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 9em;
}
.socialpost-body .ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 10.5em;
}
.socialpost-body .ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 9em;
}
.socialpost-body .ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 10.5em;
}
.socialpost-body .ql-editor .ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 12em;
}
.socialpost-body .ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 13.5em;
}
.socialpost-body .ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 12em;
}
.socialpost-body .ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 13.5em;
}
.socialpost-body .ql-editor .ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 15em;
}
.socialpost-body .ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 16.5em;
}
.socialpost-body .ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 15em;
}
.socialpost-body .ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 16.5em;
}
.socialpost-body .ql-editor .ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 18em;
}
.socialpost-body .ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 19.5em;
}
.socialpost-body .ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 18em;
}
.socialpost-body .ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 19.5em;
}
.socialpost-body .ql-editor .ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 21em;
}
.socialpost-body .ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 22.5em;
}
.socialpost-body .ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 21em;
}
.socialpost-body .ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 22.5em;
}
.socialpost-body .ql-editor .ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 24em;
}
.socialpost-body .ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 25.5em;
}
.socialpost-body .ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 24em;
}
.socialpost-body .ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 25.5em;
}
.socialpost-body .ql-editor .ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 27em;
}
.socialpost-body .ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 28.5em;
}
.socialpost-body .ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 27em;
}
.socialpost-body .ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 28.5em;
}
.socialpost-body .ql-editor .ql-video {
  display: block;
  max-width: 100%;
}
.socialpost-body .ql-editor .ql-video.ql-align-center {
  margin: 0 auto;
}
.socialpost-body .ql-editor .ql-video.ql-align-right {
  margin: 0 0 0 auto;
}
.socialpost-body .ql-editor .ql-bg-black {
  background-color: #000;
}
.socialpost-body .ql-editor .ql-bg-red {
  background-color: #e60000;
}
.socialpost-body .ql-editor .ql-bg-orange {
  background-color: #f90;
}
.socialpost-body .ql-editor .ql-bg-yellow {
  background-color: #ff0;
}
.socialpost-body .ql-editor .ql-bg-green {
  background-color: #008a00;
}
.socialpost-body .ql-editor .ql-bg-blue {
  background-color: #06c;
}
.socialpost-body .ql-editor .ql-bg-purple {
  background-color: #93f;
}
.socialpost-body .ql-editor .ql-color-white {
  color: #fff;
}
.socialpost-body .ql-editor .ql-color-red {
  color: #e60000;
}
.socialpost-body .ql-editor .ql-color-orange {
  color: #f90;
}
.socialpost-body .ql-editor .ql-color-yellow {
  color: #ff0;
}
.socialpost-body .ql-editor .ql-color-green {
  color: #008a00;
}
.socialpost-body .ql-editor .ql-color-blue {
  color: #06c;
}
.socialpost-body .ql-editor .ql-color-purple {
  color: #93f;
}
.socialpost-body .ql-editor .ql-font-serif {
  font-family: Georgia, Times New Roman, serif;
}
.socialpost-body .ql-editor .ql-font-monospace {
  font-family: Monaco, Courier New, monospace;
}
.socialpost-body .ql-editor .ql-size-small {
  font-size: 0.75em;
}
.socialpost-body .ql-editor .ql-size-large {
  font-size: 1.5em;
}
.socialpost-body .ql-editor .ql-size-huge {
  font-size: 2.5em;
}
.socialpost-body .ql-editor .ql-direction-rtl {
  direction: rtl;
  text-align: inherit;
}
.socialpost-body .ql-editor .ql-align-center {
  text-align: center;
}
.socialpost-body .ql-editor .ql-align-justify {
  text-align: justify;
}
.socialpost-body .ql-editor .ql-align-right {
  text-align: right;
}
.socialpost-body .ql-editor.ql-blank::before {
  color: rgba(0, 0, 0, 0.6);
  content: attr(data-placeholder);
  font-style: italic;
  left: 15px;
  pointer-events: none;
  position: absolute;
  right: 15px;
}
</style>


