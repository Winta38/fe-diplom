import { object, bool, string, arrayOf } from "prop-types";
import SeatGraphic from "./SeatGraphic";

export default function SchemeGraphic({ coach, seats, back, category }) {
  return (
    <div className="schemeGrarhic">
      {coach.class_type !== "fourth" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 505.06 67.28"
          fill="#999999"
        >
          <path
            className="cls-1"
            d="M542.72,285.94H511.31v-.5h-395v.5h-54v-1.77H50.09V286a6.36,6.36,0,0,0-5.43,6.28v16.22H44V327.1h.64v16.22a6.37,6.37,0,0,0,5.86,6.34v1.79H62.71v-1.77h53.57v.5h395v-.5h31.41a6.52,6.52,0,0,0,4.49-1.86,6.33,6.33,0,0,0,1.87-4.5v-51A6.37,6.37,0,0,0,542.72,285.94ZM116.28,320.29H93.86L86,316.85l-.14-29.91h30.38ZM67.56,286.94H84.9L85,316.41,68.12,309v-.46h-.56Zm-16.47-1.77H61.28v2.54H51.09Zm10.62,65.28H51.52v-2.54H61.71Zm4.85-41.93h-.71V327.1h.71v21.58H62.71v-1.77H50.52v1.72a5.35,5.35,0,0,1-4.86-5.31V327.1h.63V308.52h-.63V292.3A5.37,5.37,0,0,1,50.09,287v1.68H62.28v-1.77h4.28ZM85,348.68H67.56V328.34L85,335.58Zm443.55,0H511.31V335.24h-2v12.94H462V335h-2v13.16H412.52V335h-2v13.16H364.05V335h-2v13.16H314.79V335h-2v13.16H266V335h-2v13.16H216.5V335h-2v13.16H167.68V335.1h-2v13.08h-47.4V335.1h-2v13.58H86V334.91l-18.41-7.65v-.16h.56v-17l25.43,11.18,22.73,0v.51h16.45v-2H118.28V287.44h47.47v32.35H151.87v2h29.62v-2H167.75V287.44H214.5v32.35h-13v2h28.76v-2H216.5V287.44H264v32.35H250.22v2H279.7v-2H266V287.44h46.83v32.35h-13.1v2h28.85v-2H314.79V287.44h47.26v32.35H348.52v2h29.27v-2H364.05V287.44h46.47v32.35H397.78v2h28.48v-2H412.52V287.44H460v32.35H446.24v2h29.48v-2H462V287.44h47.33v32.35H495.85v2h15.46v-1.13l8.85-6.71v-8.39h7.22v11.19h1.14Zm0-44.12h-9.36v8.89l-7.85,5.95V286.94h17.21Zm19.56,38.76a5.33,5.33,0,0,1-1.57,3.79,5.5,5.5,0,0,1-3.79,1.57h-13.2V316.75h1V304.56h-1V286.94h13.2a5.37,5.37,0,0,1,5.36,5.36Z"
            transform="translate(-44.02 -284.17)"
          />
          <g id="Layer_4" data-name="Layer 4">
            <path
              d="M538.9,313.21a4.63,4.63,0,1,1-4.62,4.67A4.63,4.63,0,0,1,538.9,313.21Zm.09,8.64a4,4,0,0,0,2.36-.84.16.16,0,0,0,0-.27l-.81-.81L536,315.4c-.12-.12-.21-.12-.3,0a3.93,3.93,0,0,0-.73,3.35A4,4,0,0,0,539,321.85Zm-.08-8a4,4,0,0,0-2.43.82c-.14.1-.14.18,0,.3l5.34,5.34c.12.12.2.11.3,0a3.91,3.91,0,0,0,.73-3.27A4,4,0,0,0,538.91,313.83Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M536.9,317.22v1.23H536c-.13,0-.18-.06-.18-.19v-.86c0-.13,0-.19.18-.19Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M537.22,317.23a.29.29,0,0,1,.31.11c.34.34.69.68,1,1l.08.08h-1.42Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M539.17,317.23h2v1.23h-.32a1.59,1.59,0,0,1-.49,0c-.14-.06-.24-.22-.36-.34l-.79-.79Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M538.75,315.34v-.1c0-.11.06-.18.15-.18s.15.07.16.17a2.17,2.17,0,0,0,0,.26.76.76,0,0,0,.76.65h.9a.46.46,0,0,1,.49.5v.1a.15.15,0,0,1-.16.17c-.09,0-.15-.06-.15-.17v-.11a.16.16,0,0,0-.18-.18h-.87A1.08,1.08,0,0,1,538.75,315.34Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M541.84,316.64v.11a.16.16,0,0,1-.16.16.14.14,0,0,1-.15-.15,2.45,2.45,0,0,0,0-.27.76.76,0,0,0-.75-.66h-.91a.45.45,0,0,1-.48-.48v-.14a.15.15,0,0,1,.15-.15.15.15,0,0,1,.15.14.28.28,0,0,1,0,.09c0,.19,0,.24.23.24h.82A1.08,1.08,0,0,1,541.84,316.64Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M541.53,317.22h.3c.1,0,.16.06.16.16v.92a.14.14,0,0,1-.15.15h-.31Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M72.16,338.24h5.38a.23.23,0,0,1,.14.24v5.94c0,.15-.07.23-.22.23H72.24a.2.2,0,0,1-.22-.22v-.69a.19.19,0,0,1,.22-.22h.66a.56.56,0,0,1,0-.34c.07-.3.15-.6.22-.91a.12.12,0,0,0,0-.1c-.1-.21-.2-.42-.31-.62a.2.2,0,0,1,.19-.3H75.2a.19.19,0,0,1,.18.3l-.3.6a.23.23,0,0,0,0,.14c.08.3.16.61.23.91a1.62,1.62,0,0,1,0,.31h.45v-4.14h-.28c-.06,0-.08,0-.09.07-.12.42-.23.84-.35,1.26,0,.13-.09.18-.23.18H73.42a.21.21,0,0,1-.24-.18c-.12-.43-.25-.85-.38-1.27,0-.05,0-.07-.08-.06h-.49a.19.19,0,0,1-.21-.22v-.67A.22.22,0,0,1,72.16,338.24Zm5.14,6v-5.65H76.15v5c0,.17-.07.24-.24.24H72.4v.38Zm-4.12-4.9v0c.11.36.22.71.32,1.07,0,0,0,0,.07,0h1.08a.07.07,0,0,0,.07-.06c.07-.24.14-.49.2-.74s.06-.21.1-.33ZM72.4,339h3.36v-.36H72.4Zm.9,4.15,0,.14c0,.16,0,.25.19.25h1.33a.16.16,0,0,0,.14-.2.5.5,0,0,1,0-.13c0-.09-.06-.11-.14-.13a1.19,1.19,0,0,0-.62.08,1,1,0,0,1-.52.08Zm0-1.5c0,.11.11.22.16.32s0,.06.08.06h1a.23.23,0,0,0,.27-.17,1,1,0,0,1,.1-.21Zm.13,1.11a.64.64,0,0,0,.6,0,1.87,1.87,0,0,1,.52-.12h.25a1.42,1.42,0,0,1,0-.22.07.07,0,0,0-.08-.06H73.49Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M76.55,343.32c0-.12,0-.23,0-.35a.19.19,0,0,1,.18-.21.2.2,0,0,1,.19.21v.72a.19.19,0,0,1-.16.2.18.18,0,0,1-.2-.12.28.28,0,0,1,0-.09C76.54,343.56,76.55,343.44,76.55,343.32Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M76.92,341.82v.35c0,.13-.07.21-.18.21a.18.18,0,0,1-.19-.21c0-.23,0-.47,0-.71a.19.19,0,0,1,.19-.21.19.19,0,0,1,.18.21Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M101.51,296.84l.69.17a7.33,7.33,0,0,1,2.52,1.28c.14.11.17.18.09.34l-.51,1a.15.15,0,0,1-.15.08H98.73a.16.16,0,0,1-.13-.07q-.28-.5-.54-1a.21.21,0,0,1,.09-.3,7.17,7.17,0,0,1,2.93-1.4l.29-.07Zm-.07,1.44h-.62a.21.21,0,1,0,0,.42h1.25a.21.21,0,1,0,0-.42Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M99.05,300.79a3.82,3.82,0,0,0,4.79,0v.28a3.88,3.88,0,0,1-.81,2.34,2.18,2.18,0,0,1-1.22.79,1.86,1.86,0,0,1-1.66-.48,3.2,3.2,0,0,1-1-1.84,7.58,7.58,0,0,1-.1-1A.48.48,0,0,1,99.05,300.79Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M102.18,309a.38.38,0,0,1,.11-.08l1.17-.79c.19-.12.2-.22.07-.4l-.45-.61c.19-.09.36-.19.55-.27a.33.33,0,0,0,.21-.34c0-.41,0-.83,0-1.26l.16.08.62.28a2.52,2.52,0,0,1,1.19,1,3.23,3.23,0,0,1,.37,1.32c0,.28,0,.56,0,.84a.22.22,0,0,1-.25.26h-3.8Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M99.81,307.14l-.43.58c-.17.22-.16.3.07.45l1.26.84H96.93c-.21,0-.28-.08-.28-.28a8.09,8.09,0,0,1,.14-1.39,2.18,2.18,0,0,1,1.15-1.55c.36-.19.73-.35,1.11-.53v.17c0,.36,0,.72,0,1.07a.33.33,0,0,0,.22.36Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M101.44,308.14a6.36,6.36,0,0,0-1.79-3.27l.44-.65a2.28,2.28,0,0,0,1.35.45,2.24,2.24,0,0,0,1.35-.45l.45.66a4.32,4.32,0,0,0-1.13,1.47A9.31,9.31,0,0,0,101.44,308.14Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M99,300.11h4.89a3.21,3.21,0,0,1-2.08,1.06A3.32,3.32,0,0,1,99,300.11Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M103.09,307.88l-1.34.89a8.83,8.83,0,0,1,.57-1.85,4.56,4.56,0,0,1,1.08-1.62v1.14s-.05.08-.08.09l-.61.31c-.21.1-.23.22-.1.41Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M99.79,307.88l.48-.64c.13-.17.1-.3-.09-.4l-.63-.31s-.07-.06-.07-.08v-1.14a1.43,1.43,0,0,1,.12.11,4.89,4.89,0,0,1,1,1.65,10.32,10.32,0,0,1,.49,1.64v.06Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M517.24,290.61a1.07,1.07,0,0,1,.42.19.82.82,0,0,1,.23.92.81.81,0,0,1-1.56-.29.81.81,0,0,1,.65-.81h.26Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M515.86,293.53v1.81a.35.35,0,0,1-.35.36.32.32,0,0,1-.33-.32c0-.21,0-.42,0-.63,0-.43,0-.86,0-1.29a.89.89,0,0,1,.8-.93,2.53,2.53,0,0,1,.47,0c.54,0,1.07,0,1.6,0a1.18,1.18,0,0,1,.7.24.82.82,0,0,1,.29.65c0,.64,0,1.28,0,1.92l0-.09c.18-.58.37-1.15.55-1.72a1.39,1.39,0,0,1,1-.93,3,3,0,0,1,1-.08,4.35,4.35,0,0,1,1,.08,1.26,1.26,0,0,1,.86.61,1.6,1.6,0,0,1,.1.23c.2.63.4,1.25.61,1.88a.32.32,0,0,1-.24.46.24.24,0,0,1-.28-.12.9.9,0,0,1-.12-.24c-.21-.57-.41-1.14-.61-1.71-.06-.17-.06-.17-.26-.15l1,3.1h-1v.12c0,.83,0,1.66,0,2.49a.5.5,0,0,1-.21.45.46.46,0,0,1-.71-.35v-.12c0-.81,0-1.63,0-2.45v-.12h-.18v.1c0,.84,0,1.67,0,2.5a.48.48,0,0,1-.28.48.46.46,0,0,1-.64-.41v-.69c0-.63,0-1.26,0-1.89v-.1h-1l1-3.11h0c-.19,0-.19,0-.25.17l-.6,1.69a1.47,1.47,0,0,1-.1.22.29.29,0,0,1-.28.16.33.33,0,0,1-.29-.25s0,0,0-.08a.36.36,0,0,1-.36.24.35.35,0,0,1-.32-.37v-1.82h-.23v.11c0,1.88,0,3.76,0,5.65a.46.46,0,0,1-.92.11.66.66,0,0,0,0-.14c0-1.18,0-2.35,0-3.53v-.13H517v.11c0,1.2,0,2.4,0,3.59a.46.46,0,1,1-.91.1c0-.15,0-.3,0-.45l0-5.29v-.11Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M521.64,292.28a.79.79,0,1,1,.78-.78A.78.78,0,0,1,521.64,292.28Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M520.9,338l0,0a.71.71,0,0,1,.52.47c0,.13.09.27.13.41a.09.09,0,0,0,.1.06H523a.73.73,0,0,1,.76.76c0,.14,0,.29,0,.43a.23.23,0,0,1-.25.26h-6.79a.2.2,0,0,1-.19-.24,4.33,4.33,0,0,1,0-.62.71.71,0,0,1,.69-.58h1.37c.06,0,.08,0,.1-.06l.12-.38a.73.73,0,0,1,.55-.51h1.51Zm.21,1-.12-.34a.23.23,0,0,0-.22-.14h-1.22a.21.21,0,0,0-.22.14,3.4,3.4,0,0,0-.12.34Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M517.08,340.89h6.15c0,.19,0,.37,0,.55,0,.43-.07.86-.11,1.29L523,344.2c0,.42-.07.84-.1,1.26a.72.72,0,0,1-.62.72h-4a.72.72,0,0,1-.76-.71l-.18-2.11-.15-1.85C517.12,341.31,517.1,341.1,517.08,340.89Zm1.87,2.42v-1.69a.24.24,0,0,0-.32-.24c-.11,0-.16.12-.16.27V345a.2.2,0,0,0,.17.2A.24.24,0,0,0,519,345Zm1.45,0v-1.67a.23.23,0,0,0-.17-.25c-.18-.05-.31.06-.31.26V345s0,0,0,.06a.21.21,0,0,0,.16.19.24.24,0,0,0,.32-.24Zm1,0V345a.24.24,0,0,0,.33.23.24.24,0,0,0,.16-.26V341.6a.25.25,0,0,0-.49,0v1.7Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M73.81,293.86a.94.94,0,0,1,.42.19.8.8,0,0,1-.55,1.42.81.81,0,0,1-.13-1.6h.26Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M72.43,296.78v1.81a.34.34,0,0,1-.35.36.32.32,0,0,1-.33-.32c0-.21,0-.42,0-.63,0-.43,0-.86,0-1.29a.89.89,0,0,1,.8-.93,2.56,2.56,0,0,1,.47,0l1.6,0a1,1,0,0,1,.7.24.81.81,0,0,1,.29.65c0,.64,0,1.27,0,1.91a.79.79,0,0,0,0-.09c.18-.57.37-1.14.55-1.71a1.37,1.37,0,0,1,1-.93,3,3,0,0,1,1-.08,4,4,0,0,1,1,.08,1.25,1.25,0,0,1,.85.6,2.44,2.44,0,0,1,.1.24l.61,1.87a.33.33,0,0,1-.24.47.25.25,0,0,1-.28-.12,1.08,1.08,0,0,1-.12-.24L79.48,297c-.06-.18-.06-.18-.26-.16l1,3.11h-1v2.61A.51.51,0,0,1,79,303a.46.46,0,0,1-.71-.35v-.12c0-.82,0-1.64,0-2.46v-.12H78.1v2.61a.48.48,0,0,1-.28.48.46.46,0,0,1-.64-.41v-.7c0-.62,0-1.25,0-1.88v-.1h-1l1-3.11h0c-.19,0-.19,0-.25.16l-.6,1.7a1.47,1.47,0,0,1-.1.22.26.26,0,0,1-.28.15.31.31,0,0,1-.29-.24s0-.05,0-.08a.34.34,0,0,1-.36.23.35.35,0,0,1-.32-.36v-1.83H74.7a.4.4,0,0,0,0,.11l0,5.65a.48.48,0,0,1-.33.5.46.46,0,0,1-.59-.38v-.15l0-3.52v-.13h-.2v.11c0,1.2,0,2.39,0,3.59a.48.48,0,0,1-.37.5.46.46,0,0,1-.55-.41c0-.15,0-.3,0-.45l0-5.28v-.11Z"
              transform="translate(-44.02 -284.17)"
            />
            <path
              d="M78.21,295.53a.78.78,0,0,1-.78-.79.77.77,0,0,1,.78-.78.79.79,0,0,1,0,1.57Z"
              transform="translate(-44.02 -284.17)"
            />
          </g>
        </svg>
      ) : (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 505.06 67.28"
          fill="#999999"
        >
          <path
            className="cls-1"
            d="M544.17,388.63H512.76v-.5h-395v.5h-54v-1.77H51.54v1.85A6.36,6.36,0,0,0,46.11,395v16.22h-.64v18.58h.64V446A6.36,6.36,0,0,0,52,452.34v1.8H64.16v-1.77h53.58v.5h395v-.5h31.41a6.52,6.52,0,0,0,4.5-1.86,6.32,6.32,0,0,0,1.86-4.5V395A6.36,6.36,0,0,0,544.17,388.63Zm-426.43,1V423H95.31l-7.82-3.44-.14-29.91Zm-48.72,0H86.35l.14,29.47-16.92-7.43v-.46H69Zm-16.48-1.77H62.73v2.54H52.54Zm10.62,65.28H53V450.6H63.16ZM68,411.21H67.3v18.58H68v21.58H64.16V449.6H52v1.72A5.35,5.35,0,0,1,47.11,446V429.79h.64V411.21h-.64V395a5.36,5.36,0,0,1,4.43-5.27v1.68H63.73v-1.77H68Zm18.4,40.16H69V431l17.4,7.24Zm376-.5h-73.7m-12.26-60.74-208.28,0,342.56,0v32.35h0v2h2v-1.13l8.85-6.71v-8.4h7.22v11.2H530v31.93H512.76V437.93h-2v12.94h-391V437.79h-2v13.58H87.42V437.6L69,430v-.16h.55v-17L95,423.93l22.73,0v.51h2.05l-.05-2h0V390.13H168.2M530,407.24h-9.36v8.9l-7.85,5.95V389.63H530ZM549.53,446A5.33,5.33,0,0,1,548,449.8a5.5,5.5,0,0,1-3.79,1.57H531V419.44h1v-12.2h-1V389.63h13.2a5.37,5.37,0,0,1,5.36,5.36Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M545,420.52a4.63,4.63,0,1,1-4.6-4.64A4.62,4.62,0,0,1,545,420.52Zm-4.39,4a3.83,3.83,0,0,0,2.19-.82c.13-.1.14-.18,0-.3l-5.34-5.34c-.11-.11-.2-.11-.3,0a4,4,0,0,0-.73,3.27A4.08,4.08,0,0,0,540.59,424.52Zm-.23-8a4,4,0,0,0-2.42.82c-.15.11-.16.18,0,.32l5.32,5.31c.13.13.21.13.31,0a3.91,3.91,0,0,0,.73-3.27A4,4,0,0,0,540.36,416.5Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M538.34,419.9v1.22h-.89c-.13,0-.18-.05-.18-.18v-.88c0-.11.05-.17.16-.17Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M538.66,421.12v-1.21a.29.29,0,0,1,.31.09l1.12,1.12Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M542.66,421.13h-.78a.13.13,0,0,1-.07,0l-1.17-1.16s0,0,0,0h2Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M541.68,419.14a5.05,5.05,0,0,1-.68-.06,1,1,0,0,1-.8-1v-.17a.15.15,0,0,1,.3,0,2.45,2.45,0,0,0,0,.27.77.77,0,0,0,.77.66h.88a.47.47,0,0,1,.5.48.66.66,0,0,1,0,.14.15.15,0,0,1-.3,0v-.11c0-.15-.06-.2-.21-.21h-.47Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M543.28,419.32v.08c0,.12,0,.19-.15.19s-.15-.07-.16-.19a1.93,1.93,0,0,0,0-.24.76.76,0,0,0-.76-.65h-.89a.48.48,0,0,1-.5-.5.37.37,0,0,1,0-.11.15.15,0,1,1,.3,0V418c0,.12.06.18.19.18h.86A1.07,1.07,0,0,1,543.28,419.32Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M543,421.13V419.9h.32a.13.13,0,0,1,.13.14c0,.32,0,.63,0,.94a.14.14,0,0,1-.14.15Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M73.61,440.93H79a.22.22,0,0,1,.14.24v5.94c0,.15-.07.23-.22.23H73.69a.2.2,0,0,1-.22-.22v-.69a.19.19,0,0,1,.22-.22h.66a.56.56,0,0,1,0-.34c.08-.3.15-.6.23-.91a.18.18,0,0,0,0-.1l-.3-.62a.19.19,0,0,1,.18-.3h2.21a.19.19,0,0,1,.18.3l-.3.6a.17.17,0,0,0,0,.14c.07.3.15.61.22.91a1.08,1.08,0,0,1,0,.31h.46v-4.14h-.29a.08.08,0,0,0-.09.07c-.12.43-.23.85-.35,1.27,0,.13-.09.18-.23.18H74.88c-.15,0-.2,0-.24-.18l-.39-1.28a.07.07,0,0,0-.08-.06h-.49a.2.2,0,0,1-.21-.22c0-.22,0-.44,0-.67A.23.23,0,0,1,73.61,440.93Zm5.14,6v-5.65H77.6v5c0,.17-.07.24-.24.24H73.85V447Zm-4.11-4.9v0c.1.36.21.71.32,1.07a.05.05,0,0,0,.06,0H76.1c.05,0,.06,0,.07-.06l.21-.74.09-.33Zm-.79-.39h3.37v-.36H73.85Zm.9,4.15,0,.14c0,.16,0,.25.19.25h1.33a.16.16,0,0,0,.14-.21l0-.12c0-.09-.06-.11-.14-.13a1.2,1.2,0,0,0-.62.08.91.91,0,0,1-.51.07A2.17,2.17,0,0,1,74.75,445.82Zm0-1.5.16.32a.09.09,0,0,0,.09.06h1a.22.22,0,0,0,.27-.17,1,1,0,0,1,.1-.21Zm.13,1.11a.64.64,0,0,0,.6,0,1.87,1.87,0,0,1,.52-.12h.25a1.42,1.42,0,0,1,0-.22c0-.05,0-.06-.08-.06H74.94Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M78,446v-.35a.19.19,0,0,1,.18-.21.21.21,0,0,1,.2.21v.72a.2.2,0,0,1-.17.2.2.2,0,0,1-.2-.12.31.31,0,0,1,0-.1Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M78.38,444.51v.35c0,.13-.08.21-.19.21a.19.19,0,0,1-.19-.21v-.71a.19.19,0,0,1,.19-.21.2.2,0,0,1,.19.21Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M102.89,402.37h-2.67c-.1,0-.16,0-.2-.11-.17-.31-.34-.61-.49-.93-.08-.15,0-.23.08-.33a7.23,7.23,0,0,1,3.23-1.45,1.08,1.08,0,0,1,.35,0,7.37,7.37,0,0,1,3,1.4c.14.11.17.18.09.34-.16.32-.33.63-.5.94a.17.17,0,0,1-.18.1Zm0-1.38h-.63a.22.22,0,0,0-.24.2.22.22,0,0,0,.24.22h1.26a.21.21,0,1,0,0-.42Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M100.51,403.5a3.81,3.81,0,0,0,4.78,0v.29a3.89,3.89,0,0,1-.68,2.16,2.19,2.19,0,0,1-1.24.93,1.82,1.82,0,0,1-1.76-.45,3.19,3.19,0,0,1-1-1.83c-.06-.32-.07-.65-.1-1C100.5,403.57,100.51,403.53,100.51,403.5Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M103.65,411.7l1.26-.84c.19-.13.21-.23.07-.42s-.3-.39-.45-.6l.57-.28a.3.3,0,0,0,.19-.31V408h0l.75.35a2.4,2.4,0,0,1,1.23,1.08,3.24,3.24,0,0,1,.32,1.18c0,.28,0,.55,0,.83s-.07.29-.28.29h-3.75Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M100.5,408c0,.39,0,.76,0,1.13a.46.46,0,0,0,.34.53c.14.05.28.14.43.21l-.45.61c-.14.18-.12.28.07.41l1.17.78.12.08H98.4c-.23,0-.3-.07-.29-.3a6.89,6.89,0,0,1,.13-1.36,2.2,2.2,0,0,1,1.18-1.58C99.77,408.3,100.13,408.15,100.5,408Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M102.9,410.84a6.45,6.45,0,0,0-1.8-3.27l.44-.64a2.28,2.28,0,0,0,2.71,0l.44.65a4.45,4.45,0,0,0-1.13,1.47A8.67,8.67,0,0,0,102.9,410.84Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M105.33,402.81a3.29,3.29,0,0,1-4.87,0Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M104.54,410.58l-1.31.88,0,0a6.89,6.89,0,0,1,1.64-3.44.62.62,0,0,1,0,.12c0,.32,0,.65,0,1a.14.14,0,0,1-.1.14l-.59.3c-.22.11-.24.22-.1.42S104.38,410.36,104.54,410.58Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M101,408l.18.2a5,5,0,0,1,1,1.84c.16.44.26.89.39,1.34a.17.17,0,0,1,0,.08l-1.33-.89c.16-.21.31-.42.47-.62s.11-.31-.1-.42l-.61-.31a.17.17,0,0,1-.07-.1c0-.36,0-.72,0-1.08Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M518.69,393.3a1.06,1.06,0,0,1,.43.2.81.81,0,1,1-1.34.62.8.8,0,0,1,.65-.8l.06,0Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M517.31,396.23V398a.34.34,0,0,1-.34.36.33.33,0,0,1-.34-.33c0-.21,0-.42,0-.63,0-.43,0-.86,0-1.29a.87.87,0,0,1,.8-.92,2.59,2.59,0,0,1,.48,0l1.59,0a1.11,1.11,0,0,1,.7.25.81.81,0,0,1,.29.65c0,.63,0,1.27,0,1.91l0-.09c.19-.57.37-1.14.56-1.72a1.36,1.36,0,0,1,1-.93,3.36,3.36,0,0,1,.95-.07,3.56,3.56,0,0,1,1,.08,1.25,1.25,0,0,1,.85.6,2.44,2.44,0,0,1,.1.24c.21.62.41,1.24.61,1.87a.32.32,0,0,1-.23.46.24.24,0,0,1-.29-.11,1.34,1.34,0,0,1-.12-.24c-.2-.57-.4-1.14-.61-1.72-.06-.17-.06-.17-.26-.15l1,3.11h-1V402a.47.47,0,0,1-.22.45.45.45,0,0,1-.7-.34.49.49,0,0,1,0-.12c0-.82,0-1.64,0-2.46v-.12H523V402a.46.46,0,1,1-.91.06c0-.23,0-.46,0-.69,0-.63,0-1.25,0-1.88v-.1h-1l1-3.11h0c-.19,0-.19,0-.25.16l-.6,1.7a2.14,2.14,0,0,1-.1.22.28.28,0,0,1-.28.15.31.31,0,0,1-.28-.25.64.64,0,0,1,0-.07.35.35,0,0,1-.36.23.33.33,0,0,1-.31-.37c0-.51,0-1,0-1.53v-.29h-.22v.11l0,5.65a.46.46,0,1,1-.92.11v-.14c0-1.17,0-2.35,0-3.52v-.13h-.21v.11c0,1.19,0,2.39,0,3.59a.46.46,0,0,1-.92.09c0-.15,0-.3,0-.45,0-1.76,0-3.52,0-5.28v-.11Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M523.09,395a.78.78,0,1,1,.79-.77A.78.78,0,0,1,523.09,395Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M522.34,440.64l0,0a.73.73,0,0,1,.52.47c0,.14.09.27.13.41s0,.07.1.07h1.32a.72.72,0,0,1,.76.76v.43a.24.24,0,0,1-.25.26h-6.79a.2.2,0,0,1-.19-.24c0-.21,0-.42,0-.62a.71.71,0,0,1,.7-.58h1.37c.06,0,.08,0,.1-.07s.08-.25.12-.38a.72.72,0,0,1,.55-.5,0,0,0,0,0,0,0Zm.21,1c0-.12-.07-.23-.11-.34a.22.22,0,0,0-.23-.14H521a.22.22,0,0,0-.22.13l-.12.35Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M518.53,443.58h6.15c0,.18,0,.37,0,.55,0,.43-.07.86-.11,1.29l-.12,1.47c0,.42-.08.84-.1,1.26a.75.75,0,0,1-.62.72h-4a.73.73,0,0,1-.76-.71c0-.71-.11-1.41-.17-2.11l-.15-1.85C518.56,444,518.54,443.79,518.53,443.58ZM520.4,446V444.3a.24.24,0,0,0-.32-.23c-.11,0-.16.12-.16.26v3.31s0,0,0,.06a.22.22,0,0,0,.17.2.24.24,0,0,0,.31-.25Zm1.45,0v-1.66a.23.23,0,0,0-.17-.25.24.24,0,0,0-.32.25v3.32a.15.15,0,0,0,0,.07.21.21,0,0,0,.16.19.24.24,0,0,0,.32-.24Zm1,0v1.68a.24.24,0,1,0,.48,0v-3.35a.25.25,0,0,0-.24-.24.26.26,0,0,0-.24.24V446Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M80.27,405.73h-.18a.52.52,0,0,1-.38-.58c0-.81,0-1.61,0-2.42v-.11h-.17v.11c0,.83,0,1.66,0,2.49a.49.49,0,0,1-.27.47l-.1,0H79a.55.55,0,0,1-.36-.6c0-.81,0-1.61,0-2.42v-.1h-1l1-3.12h-.08c-.1,0-.14,0-.17.12l-.63,1.77a1,1,0,0,1-.12.23.24.24,0,0,1-.29.11.31.31,0,0,1-.25-.32l0,.08a.34.34,0,0,1-.57,0,.5.5,0,0,1-.06-.24c0-.57,0-1.13,0-1.7v-.1h-.22v.1l0,5c0,.26,0,.51,0,.76a.46.46,0,0,1-.68.38.49.49,0,0,1-.24-.47c0-1.18,0-2.37,0-3.55v-.12H75v.11c0,1.19,0,2.38,0,3.57a.5.5,0,0,1-.2.44l-.18.08h-.16l-.19-.08a.55.55,0,0,1-.2-.45c0-1.87,0-3.74,0-5.61v-.12h-.22v1.82a.33.33,0,0,1-.34.35.33.33,0,0,1-.34-.35c0-.66,0-1.33,0-2a.77.77,0,0,1,.38-.66,1.3,1.3,0,0,1,.77-.19c.55,0,1.11,0,1.66,0a1.32,1.32,0,0,1,.44.08.8.8,0,0,1,.59.69.76.76,0,0,1,0,.15v1.89h0l0-.1c.19-.57.37-1.14.56-1.72a1.34,1.34,0,0,1,1.12-.95,8.63,8.63,0,0,1,1.14,0,3.25,3.25,0,0,1,.69.08,1.2,1.2,0,0,1,1,.89c.12.39.25.77.38,1.16.07.23.15.47.22.71a.29.29,0,0,1-.19.39q-.25.1-.39-.18l-.07-.16-.63-1.79c0-.06,0-.09-.12-.08h-.12l1,3.12h-1v2.59a.64.64,0,0,1,0,.2A.46.46,0,0,1,80.27,405.73Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M75.15,398.17a.81.81,0,0,1-.8-.82.81.81,0,0,1,.83-.8.8.8,0,0,1,.79.81A.82.82,0,0,1,75.15,398.17Z"
            transform="translate(-45.47 -386.86)"
          />
          <path
            d="M79.66,398.22a.79.79,0,0,1-.78-.79.79.79,0,0,1,1.57,0A.79.79,0,0,1,79.66,398.22Z"
            transform="translate(-45.47 -386.86)"
          />
        </svg>
      )}
      <SeatGraphic
        coach={coach}
        seats={seats}
        back={back}
        category={category}
      />
    </div>
  );
}

SchemeGraphic.propTypes = {
  coach: object,
  seats: arrayOf(object),
  back: bool,
  category: string,
};
