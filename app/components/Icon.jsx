import React from 'react';

const icons = {

  'burger':[<path key="1" className="path01" d="M30.4,37.7c9.7-5.6,13-17.9,7.4-27.6c-5.6-9.7-17.9-13-27.6-7.4c-9.7,5.6-13,17.9-7.4,27.6C8.4,40,20.7,43.3,30.4,37.7
  L30.4,37.7z M6.3,28.3c-4.5-7.7-1.8-17.6,5.9-22.1c7.7-4.5,17.6-1.8,22.1,5.9c4.5,7.7,1.8,17.6-5.9,22.1C20.7,38.7,10.8,36,6.3,28.3
  L6.3,28.3z M26.4,24.2"/>,
    <path key="2" className="path02" d="M28.8,13.8c0-1.1-0.9-2-2-2h-13c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h13C27.9,15.8,28.8,14.9,28.8,13.8L28.8,13.8z"/>,
    <path key="3" className="path03" d="M28.8,20.2c0-1.1-0.9-2-2-2h-13c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h13C27.9,22.2,28.8,21.3,28.8,20.2L28.8,20.2z"/>,
    <path key="4" className="path04" d="M28.8,26.6c0-1.1-0.9-2-2-2h-13c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h13C27.9,28.6,28.8,27.7,28.8,26.6L28.8,26.6z"/>],

  'start':[<path key="1" className="path01" d="M37.7,10.1c-5.6-9.7-17.9-13-27.6-7.4s-13,17.9-7.4,27.6s17.9,13,27.6,7.4S43.3,19.8,37.7,10.1L37.7,10.1z M28.3,34.2
  c-7.7,4.5-17.6,1.8-22.1-5.9c-4.5-7.8-1.8-17.6,5.9-22.1s17.6-1.8,22.1,5.9S36,29.7,28.3,34.2L28.3,34.2z"/>,
    <path key="2" className="path02" d="M27.5,19.4l-10.6-6.2c-1-0.6-1.7-0.1-1.7,1v12.3c0,1.1,0.8,1.6,1.8,1l10.5-6.1C28.4,20.8,28.4,19.9,27.5,19.4L27.5,19.4z"/>],

  'info':[<path key="1" className="path01" d="M37.7,10.1c-5.6-9.7-17.9-13-27.6-7.4c-9.7,5.6-13,17.9-7.4,27.6c5.6,9.7,17.9,13,27.6,7.4
  C39.9,32.1,43.2,19.8,37.7,10.1z M28.3,34.2c-7.7,4.5-17.6,1.8-22.1-5.9c-4.5-7.7-1.8-17.6,5.9-22.1c7.7-4.5,17.6-1.8,22.1,5.9
  C38.6,19.9,36,29.7,28.3,34.2z"/>,
    <path key="2" className="path02" d="M23.2,27.4h-0.1v-10c0-1.2-0.9-2.1-2.1-2.1c0,0-0.1,0-0.1,0h-3.1c-1,0-1.8,0.8-1.8,1.8c0,1,0.8,1.8,1.8,1.8h1.1v8.5h-1.8
  c-1,0-1.8,0.8-1.8,1.8c0,0.9,0.7,1.7,1.7,1.8v0h6.3c1,0,1.8-0.8,1.8-1.8C25.1,28.2,24.2,27.4,23.2,27.4z"/>,
    <path key="3" className="path03" d="M20.8,14.1c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3C18.4,13,19.5,14.1,20.8,14.1z"/>],

  'info_fill':[<path key="1" className="path01" d="M37.7,10.1c-5.6-9.7-17.9-13-27.6-7.4c-9.7,5.6-13,17.9-7.4,27.6c5.6,9.7,17.9,13,27.6,7.4C39.9,32.1,43.2,19.7,37.7,10.1z
   M20.7,9.4c1.3,0,2.3,1,2.3,2.3c0,1.3-1,2.3-2.3,2.3c-1.3,0-2.3-1-2.3-2.3C18.4,10.4,19.5,9.4,20.7,9.4z M23.3,31H17v0
  c-0.9-0.1-1.7-0.9-1.7-1.8c0-1,0.8-1.8,1.8-1.8h1.8v-8.5h-1.1c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8h3.1c0,0,0,0,0.1,0
  c1.2,0,2.1,0.9,2.1,2.1v10h0.1c1,0,1.8,0.8,1.8,1.8C25.1,30.2,24.3,31,23.3,31z"/>],

  'progress':[<path key="1" className="path01" d="M37.7,10.1c-5.6-9.7-17.9-13-27.6-7.4c-9.7,5.6-13,17.9-7.4,27.6c5.6,9.7,17.9,13,27.6,7.4C40,32.1,43.3,19.8,37.7,10.1
  L37.7,10.1z M28.3,34.2c-7.7,4.5-17.6,1.8-22.1-5.9c-4.5-7.7-1.8-17.6,5.9-22.1c7.7-4.5,17.6-1.8,22.1,5.9
  C38.7,19.9,36,29.7,28.3,34.2L28.3,34.2z M27.5,19.4"/>,
    <path key="2" className="path02" d="M31.1,15l-1.2-3.8c-0.2-0.6-1-1.1-1.6-0.9c-0.1,0-3.1,0.4-4.1,0.6c-0.3,0.1-0.6,0.3-0.7,0.5c-0.2,0.3-0.2,0.7-0.1,1
  c0.3,0.7,1,0.7,1.8,0.7l0.7,0l-5.2,8.6l-5-2.4c-0.4-0.2-0.9-0.2-1.3,0c-0.4,0.2-0.8,0.5-1,0.9l-3.9,7.4c-0.4,0.9,0,1.9,0.9,2.3
  c0.9,0.4,1.9,0,2.3-0.9l3.1-5.8l4.7,2.4c0.9,0.4,1.9,0,2.3-0.9c0,0,0,0,0,0l5.8-9.8l0.3,0.9c0.3,0.6,0.6,0.9,0.9,1
  c0.1,0,0.3,0.1,0.4,0.1c0.2,0,0.3,0,0.5-0.1C31.2,16.5,31.4,15.7,31.1,15z"/>],

  'progress_fill':[<path key="1" className="path01" d="M37.7,10.1c-5.6-9.7-17.9-13-27.6-7.4c-9.7,5.6-13,17.9-7.4,27.6c5.6,9.7,17.9,13,27.6,7.4C40,32.1,43.3,19.8,37.7,10.1z
   M30.6,16.7c-0.2,0.1-0.3,0.1-0.5,0.1c-0.1,0-0.3,0-0.4-0.1c-0.3-0.1-0.6-0.3-0.9-1l-0.3-0.9l-5.8,9.8c0,0,0,0,0,0
  c-0.4,0.9-1.4,1.3-2.3,0.9l-4.7-2.4l-3.1,5.8c-0.4,0.9-1.4,1.3-2.3,0.9c-0.9-0.4-1.3-1.4-0.9-2.3l3.9-7.4c0.2-0.4,0.6-0.8,1-0.9
  c0.4-0.2,0.9-0.2,1.3,0l5,2.4l5.2-8.7l-0.7,0c-0.8,0-1.5,0-1.8-0.7c-0.1-0.3-0.1-0.7,0.1-1c0.2-0.3,0.4-0.5,0.7-0.5
  c1-0.2,4-0.6,4.1-0.6c0.6-0.2,1.4,0.2,1.6,0.9l1.2,3.8C31.4,15.7,31.2,16.5,30.6,16.7z"/>],

  'reset':[<path key="1" className="path01" d="M37.7,10.1c-5.6-9.7-17.9-13-27.6-7.4c-9.7,5.6-13,17.9-7.4,27.6c5.6,9.7,17.9,13,27.6,7.4C39.9,32.1,43.3,19.8,37.7,10.1
  z M28.3,34.2c-7.7,4.5-17.6,1.8-22.1-5.9c-4.5-7.7-1.8-17.6,5.9-22.1c7.7-4.5,17.6-1.8,22.1,5.9C38.6,19.9,36,29.7,28.3,34.2z"/>,
    <path key="2" className="path02" d="M12.3,20.1c0-3.4,2.2-6.3,5.3-7.4l0,0.6c0,0.4,0.2,0.8,0.5,1c0.1,0.1,0.3,0.1,0.5,0.1c0.2,0,0.4-0.1,0.7-0.2L23,12
  c0.3-0.2,0.5-0.4,0.5-0.7c0-0.3-0.2-0.6-0.5-0.7L18.8,8C18.6,7.8,18.2,7.8,18,8c-0.3,0.1-0.4,0.4-0.4,0.8l0,0.8
  c-4.9,1.2-8.4,5.6-8.4,10.6c0,3.1,1.3,6.1,3.7,8.2c0.6,0.5,1.1,0.7,1.5,0.7c0.2,0,0.3,0,0.4-0.1c0.5-0.2,0.9-0.6,0.9-1.2
    c0.1-0.6-0.1-1.1-0.6-1.5C13.3,24.7,12.3,22.5,12.3,20.1z"/>,
    <path key="3" className="path03" d="M31.1,20.1c0-3.2-1.4-6.2-3.8-8.3c-0.5-0.4-1-0.5-1.6-0.3c-0.6,0.2-1,0.7-1.1,1.3c-0.1,0.5,0.1,0.9,0.5,1.2
  c1.9,1.5,3,3.8,3,6.2c0,3.4-2.2,6.3-5.3,7.4l0-1c0-0.3-0.1-0.6-0.4-0.8c-0.3-0.1-0.6-0.1-0.9,0.1l-4.1,2.5c-0.3,0.2-0.5,0.5-0.5,0.8
  c0,0.3,0.2,0.6,0.5,0.8l4,2.4c0.2,0.1,0.3,0.1,0.5,0.1c0.1,0,0.3,0,0.4-0.1c0.3-0.1,0.4-0.4,0.4-0.8l0-0.7
  C27.6,29.5,31.1,25.1,31.1,20.1z"/>],

  'reset_fill':[<path key="1" className="path01" d="M37.7,10.1c-5.6-9.7-17.9-13-27.6-7.4c-9.7,5.6-13,17.9-7.4,27.6c5.6,9.7,17.9,13,27.6,7.4C40,32.1,43.3,19.8,37.7,10.1z
   M15.8,27.7c-0.1,0.6-0.4,1-0.9,1.2c-0.1,0-0.3,0.1-0.4,0.1c-0.4,0-0.9-0.1-1.5-0.7c-2.3-2.1-3.7-5.1-3.7-8.2c0-5,3.5-9.4,8.4-10.6
  l0-0.8c0-0.3,0.1-0.6,0.4-0.8c0.3-0.1,0.6-0.1,0.9,0.1l4.1,2.5c0.3,0.2,0.5,0.4,0.5,0.7c0,0.3-0.2,0.6-0.5,0.7l-3.7,2.2
  c-0.2,0.1-0.4,0.2-0.7,0.2c-0.2,0-0.3,0-0.5-0.1c-0.3-0.2-0.5-0.5-0.5-1l0-0.6c-3.2,1.1-5.3,4-5.3,7.4c0,2.4,1.1,4.6,2.9,6.1
  C15.7,26.6,15.9,27.1,15.8,27.7z M22.7,30.7l0,0.7c0,0.3-0.2,0.6-0.4,0.8c-0.1,0.1-0.2,0.1-0.4,0.1c-0.2,0-0.3,0-0.5-0.1l-4-2.4
  c-0.3-0.2-0.5-0.5-0.5-0.8c0-0.3,0.2-0.6,0.5-0.8l4.1-2.5c0.3-0.2,0.6-0.2,0.9-0.1c0.3,0.1,0.4,0.4,0.4,0.8l0,1
  c3.2-1.1,5.3-4,5.3-7.4c0-2.4-1.1-4.7-3-6.2c-0.4-0.3-0.6-0.7-0.5-1.2c0.1-0.5,0.5-1,1.1-1.3c0.6-0.2,1.2-0.1,1.6,0.3
  c2.4,2.1,3.8,5.1,3.8,8.3C31.1,25.1,27.6,29.5,22.7,30.7z"/>],

  'stop':[<path key="1" className="path01" d="M37.7,10.1c-5.6-9.7-17.9-13-27.6-7.4c-9.7,5.6-13,17.9-7.4,27.6c5.6,9.7,17.9,13,27.6,7.4C40,32.1,43.3,19.8,37.7,10.1
  L37.7,10.1z M28.3,34.2c-7.7,4.5-17.6,1.8-22.1-5.9c-4.5-7.7-1.8-17.6,5.9-22.1c7.7-4.5,17.6-1.8,22.1,5.9
  C38.7,19.9,36,29.7,28.3,34.2L28.3,34.2z M24.3,14.2"/>,
    <path key="2" className="path02" d="M24.3,14.2h-8.1c-1.1,0-2,0.9-2,2v8.1c0,1.1,0.9,2,2,2h8.1c1.1,0,2-0.9,2-2v-8.1C26.3,15.1,25.4,14.2,24.3,14.2L24.3,14.2z"
  />],

  'stop_fill':[<path key="1" className="path01" d="M37.7,10.1c-5.6-9.7-17.9-13-27.6-7.4c-9.7,5.6-13,17.9-7.4,27.6c5.6,9.7,17.9,13,27.6,7.4C40,32.1,43.3,19.8,37.7,10.1z
   M26.3,24.2c0,1.1-0.9,2-2,2h-8.1c-1.1,0-2-0.9-2-2v-8.1c0-1.1,0.9-2,2-2h8.1c1.1,0,2,0.9,2,2V24.2z"/>],

  'full_screen':[<path key="1" className="path01" d="M37.7,10.1c-5.6-9.7-17.9-13-27.6-7.4c-9.7,5.6-13,17.9-7.4,27.6c5.6,9.7,17.9,13,27.6,7.4C40,32.1,43.3,19.8,37.7,10.1
  L37.7,10.1z M28.3,34.2c-7.7,4.5-17.6,1.8-22.1-5.9c-4.5-7.7-1.8-17.6,5.9-22.1c7.7-4.5,17.6-1.8,22.1,5.9
  C38.7,19.9,36,29.7,28.3,34.2L28.3,34.2z M27.5,19.4"/>,
    <path key="2" className="path02" d="M15,13.2l1.3,0c0.7,0,1.2-0.5,1.2-1.2s-0.5-1.2-1.2-1.2h-4.3c-0.7,0-1.2,0.5-1.2,1.2v4.3c0,0.7,0.5,1.2,1.2,1.2
  s1.2-0.5,1.2-1.2v-1.3l3.6,3.6c0.2,0.2,0.5,0.4,0.9,0.4s0.6-0.1,0.9-0.4S19,18,19,17.7c0-0.3-0.1-0.6-0.4-0.9L15,13.2z"/>,
    <path key="3" className="path03" d="M16.9,21.9l-3.6,3.6l0-1.4c0-0.7-0.5-1.2-1.2-1.2s-1.2,0.5-1.2,1.2v4.3c0,0.7,0.5,1.2,1.2,1.2h4.3c0.7,0,1.2-0.5,1.2-1.2
  s-0.5-1.2-1.2-1.2H15l3.6-3.6c0.2-0.2,0.4-0.5,0.4-0.9c0-0.3-0.1-0.6-0.4-0.9C18.2,21.4,17.4,21.4,16.9,21.9z"/>,
    <path key="4" className="path04" d="M28.3,22.9c-0.7,0-1.2,0.5-1.2,1.2v1.3l-3.6-3.6c-0.5-0.5-1.3-0.5-1.7,0c-0.2,0.2-0.4,0.5-0.4,0.9s0.1,0.6,0.4,0.9l3.6,3.6
  h-1.3c-0.7,0-1.2,0.5-1.2,1.2s0.5,1.2,1.2,1.2l4.3,0c0.7,0,1.2-0.5,1.2-1.2v-4.3C29.5,23.5,29,22.9,28.3,22.9z"/>,
    <path key="5" className="path05" d="M28.3,10.8h-4.3c-0.7,0-1.2,0.5-1.2,1.2s0.5,1.2,1.2,1.2h1.3l-3.6,3.6c-0.5,0.5-0.5,1.2,0,1.7c0.2,0.2,0.5,0.4,0.9,0.4
  c0.3,0,0.6-0.1,0.9-0.4l3.6-3.6v1.3c0,0.7,0.5,1.2,1.2,1.2s1.2-0.5,1.2-1.2V12C29.5,11.3,29,10.8,28.3,10.8z"/>],

  'full_screen_fill':[<path key="1" className="path01" d="M37.6,10.1c-5.6-9.7-17.9-13-27.6-7.4c-9.7,5.6-13,17.9-7.4,27.6c5.6,9.7,17.9,13,27.6,7.4C39.9,32.1,43.2,19.8,37.6,10.1z
   M18.4,23.6l-4.1,4.1h1.8c0.6,0,1.1,0.5,1.1,1.1S16.7,30,16.1,30h-4.5c-0.6,0-1.1-0.5-1.1-1.1l0-4.5c0-0.6,0.5-1.1,1.1-1.1
  s1.1,0.5,1.1,1.1l0,1.8l4.1-4.1c0.4-0.4,1.2-0.4,1.6,0C18.8,22.5,18.8,23.2,18.4,23.6z M18.4,18.3c-0.2,0.2-0.5,0.3-0.8,0.3
  c-0.3,0-0.6-0.1-0.8-0.3l-4.1-4.1V16c0,0.6-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1v-4.5c0-0.6,0.5-1.1,1.1-1.1l4.5,0
  c0.6,0,1.1,0.5,1.1,1.1s-0.5,1.1-1.1,1.1l-1.8,0l4.1,4.1C18.8,17.2,18.8,17.9,18.4,18.3z M29.9,28.9c0,0.6-0.5,1.1-1.1,1.1h-4.5
  c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1H26l-4.1-4.1c-0.2-0.2-0.3-0.5-0.3-0.8c0-0.3,0.1-0.6,0.3-0.8c0.4-0.4,1.2-0.4,1.6,0
  l4.1,4.1v-1.8c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1V28.9z M29.9,16c0,0.6-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1v-1.8l-4.1,4.1
  c-0.2,0.2-0.5,0.3-0.8,0.3c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8s0.1-0.6,0.3-0.8l4.1-4.1h-1.8c-0.6,0-1.1-0.5-1.1-1.1
  s0.5-1.1,1.1-1.1h4.5c0.6,0,1.1,0.5,1.1,1.1V16z"/>],

  'no_full_screen':[<path key="1" className="path01" d="M37.7,10.1c-5.6-9.7-17.9-13-27.6-7.4c-9.7,5.6-13,17.9-7.4,27.6c5.6,9.7,17.9,13,27.6,7.4C40,32.1,43.3,19.8,37.7,10.1
  L37.7,10.1z M28.3,34.2c-7.7,4.5-17.6,1.8-22.1-5.9c-4.5-7.7-1.8-17.6,5.9-22.1c7.7-4.5,17.6-1.8,22.1,5.9
  C38.7,19.9,36.1,29.7,28.3,34.2L28.3,34.2z M27.5,19.4"/>,
    <path key="2" className="path02" d="M17.8,12.2c-0.7,0-1.2,0.5-1.2,1.2v1.3L13,11.1c-0.5-0.5-1.3-0.5-1.7,0c-0.2,0.2-0.4,0.5-0.4,0.9c0,0.3,0.1,0.6,0.4,0.9
  l3.6,3.6l-1.3,0c-0.7,0-1.2,0.5-1.2,1.2s0.5,1.2,1.2,1.2l4.3,0c0.7,0,1.2-0.5,1.2-1.2v-4.3C19,12.8,18.5,12.2,17.8,12.2z"/>,
    <path key="3" className="path03" d="M17.8,21.5h-4.3c-0.7,0-1.2,0.5-1.2,1.2s0.5,1.2,1.2,1.2h1.3l-3.6,3.6c-0.2,0.2-0.4,0.5-0.4,0.9c0,0.3,0.1,0.6,0.4,0.9
  c0.2,0.2,0.5,0.4,0.9,0.4s0.6-0.1,0.9-0.4l3.6-3.6V27c0,0.7,0.5,1.2,1.2,1.2S19,27.7,19,27l0-4.3C19,22,18.5,21.5,17.8,21.5z"/>,
    <path key="4" className="path04" d="M25.6,23.9H27c0.7,0,1.2-0.5,1.2-1.2s-0.5-1.2-1.2-1.2l-4.3,0c-0.7,0-1.2,0.5-1.2,1.2V27c0,0.7,0.5,1.2,1.2,1.2
  s1.2-0.5,1.2-1.2v-1.3l3.6,3.6c0.2,0.2,0.5,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4c0.2-0.2,0.4-0.5,0.4-0.9s-0.1-0.6-0.4-0.9L25.6,23.9z
  "/>,
    <path key="5" className="path05" d="M22.7,18.9H27c0.7,0,1.2-0.5,1.2-1.2s-0.5-1.2-1.2-1.2h-1.3l3.6-3.6c0.2-0.2,0.4-0.5,0.4-0.9c0-0.3-0.1-0.6-0.4-0.9
  c-0.5-0.5-1.3-0.5-1.7,0l-3.6,3.6v-1.3c0-0.7-0.5-1.2-1.2-1.2s-1.2,0.5-1.2,1.2v4.3C21.5,18.4,22,18.9,22.7,18.9z"/>],

  'no_full_screen_fill':[<path key="1" className="path01" d="M37.6,10.1c-5.6-9.7-17.9-13-27.6-7.4c-9.7,5.6-13,17.9-7.4,27.6c5.6,9.7,17.9,13,27.6,7.4C39.9,32.1,43.2,19.8,37.6,10.1z
   M18.7,27.5c0,0.6-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1l0-1.9l-4.2,4.2c-0.2,0.2-0.5,0.3-0.8,0.3c-0.3,0-0.6-0.1-0.8-0.3
  c-0.4-0.4-0.4-1.2,0-1.6l4.2-4.2h-1.9c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1h4.6c0.6,0,1.1,0.5,1.1,1.1V27.5z M18.7,17.5
  c0,0.6-0.5,1.1-1.1,1.1l-4.6,0c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1l1.9,0l-4.2-4.2c-0.4-0.4-0.4-1.2,0-1.6
  c0.4-0.4,1.2-0.4,1.6,0l4.2,4.2v-1.9c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1V17.5z M29.7,29.9c-0.2,0.2-0.5,0.3-0.8,0.3
  c-0.3,0-0.6-0.1-0.8-0.3l-4.2-4.2v1.9c0,0.6-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1v-4.6c0-0.6,0.5-1.1,1.1-1.1l4.6,0
  c0.6,0,1.1,0.5,1.1,1.1c0,0.6-0.5,1.1-1.1,1.1l-1.9,0l4.2,4.2c0.2,0.2,0.3,0.5,0.3,0.8C30.1,29.4,29.9,29.6,29.7,29.9z M29.7,12.2
  l-4.2,4.2h1.9c0.6,0,1.1,0.5,1.1,1.1c0,0.6-0.5,1.1-1.1,1.1h-4.6c-0.6,0-1.1-0.5-1.1-1.1v-4.6c0-0.6,0.5-1.1,1.1-1.1
  s1.1,0.5,1.1,1.1v1.9l4.2-4.2c0.4-0.4,1.2-0.4,1.6,0c0.2,0.2,0.3,0.5,0.3,0.8C30.1,11.7,29.9,11.9,29.7,12.2z"/>],

  'cross':[<path key="1" className="path01" d="M39.8,4.3c1-1,1-2.6,0-3.6c-1-1-2.6-1-3.6,0L0.8,36.1c-1,1-1,2.6,0,3.6c0.5,0.5,1.1,0.7,1.8,0.7c0.6,0,1.3-0.2,1.8-0.7
  L39.8,4.3z M23.9,20.2"/>,
    <path key="2" className="path02" d="M36.2,39.7c1,1,2.6,1,3.6,0c1-1,1-2.6,0-3.6L4.4,0.7c-1-1-2.6-1-3.6,0C0.3,1.2,0.1,1.9,0.1,2.5c0,0.6,0.2,1.3,0.7,1.8
  L36.2,39.7z M20.3,23.8"/>],

  'tick':[<path key="1" className="path01" d="M39.5,0.5c-1.1-0.8-2.7-0.6-3.5,0.5L12.1,33.5L4.6,22.1C3.7,21,2.1,20.8,1,21.6c-1.1,0.8-1.4,2.4-0.5,3.5L10,39.4
  c0.5,0.6,1.2,1,1.9,1c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.6-0.1,1.2-0.4,1.7-1L40,4
  C40.8,2.9,40.6,1.3,39.5,0.5z"/>],

  'plus':[<path key="1" className="path01" d="M37.6,17.4l-34.7,0c-1.6,0-2.8,1.3-2.8,2.9c0,0.8,0.3,1.5,0.8,2c0.5,0.5,1.3,0.8,2,0.8l34.7,0c1.6,0,2.8-1.3,2.9-2.9
  C40.4,18.6,39.2,17.4,37.6,17.4z"/>,
    <path key="2" className="path02" d="M23.1,37.6l0-34.7c0-1.6-1.3-2.8-2.9-2.8c-0.8,0-1.5,0.3-2,0.8c-0.5,0.5-0.8,1.3-0.8,2l0,34.7c0,1.6,1.3,2.8,2.9,2.9
  C21.8,40.4,23.1,39.1,23.1,37.6z"/>],

  'plus2':[<path key="1" className="path01" d="M30.4,37.7c9.7-5.6,13-17.9,7.4-27.6s-17.9-13-27.6-7.4s-13,17.9-7.4,27.6S20.7,43.3,30.4,37.7L30.4,37.7z M6.3,28.3
  c-4.5-7.7-1.8-17.6,5.9-22.1s17.6-1.8,22.1,5.9s1.8,17.6-5.9,22.1C20.7,38.7,10.8,36,6.3,28.3L6.3,28.3z"/>,
    <path key="2" className="path02" d="M29.5,22.1c1,0,1.8-0.8,1.8-1.8c0-1-0.9-1.8-1.8-1.8l-18.6,0c-1,0-1.8,0.8-1.8,1.8c0,1,0.9,1.8,1.8,1.8L29.5,22.1z"/>,
    <path key="3" className="path03" d="M18.4,29.6c0,1,0.8,1.8,1.8,1.8c1,0,1.8-0.9,1.8-1.8L22,11c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.9-1.8,1.8L18.4,29.6z"/>],

  'right_arrow':[<path key="1" className="path01" d="M2.8,10.1c-5.6,9.6-2.3,22,7.4,27.6c9.6,5.6,22,2.3,27.5-7.4c5.6-9.6,2.3-22-7.4-27.5C20.7-2.8,8.3,0.5,2.8,10.1L2.8,10.1z
  M28.3,6.2c7.7,4.5,10.4,14.3,5.9,22c-4.5,7.7-14.3,10.4-22,5.9c-7.7-4.5-10.4-14.3-5.9-22C10.7,4.4,20.6,1.8,28.3,6.2L28.3,6.2z
  M16.3,15.9"/>,
    <path key="2" className="path02" d="M16.3,15.9l4.3,4.3l-4.3,4.3c-0.8,0.8-0.8,2.1,0,2.9c0.8,0.8,2.1,0.8,2.9,0l5.7-5.7c0.8-0.8,0.8-2.1,0-2.9l-5.7-5.7
  c-0.8-0.8-2.1-0.8-2.9,0C15.5,13.9,15.5,15.1,16.3,15.9L16.3,15.9z"/>],

  'left_arrow':[<path key="1" className="path01" d="M37.7,30.4c5.6-9.6,2.3-22-7.4-27.6c-9.6-5.6-22-2.3-27.5,7.4c-5.6,9.6-2.3,22,7.4,27.5C19.8,43.3,32.2,40,37.7,30.4
  L37.7,30.4z M12.2,34.3C4.5,29.8,1.8,20,6.3,12.3s14.3-10.4,22-5.9s10.4,14.3,5.9,22C29.8,36.1,19.9,38.7,12.2,34.3L12.2,34.3z"/>,
    <path key="2" className="path02" d="M24.2,24.6l-4.3-4.3l4.3-4.3c0.8-0.8,0.8-2.1,0-2.9s-2.1-0.8-2.9,0l-5.7,5.7c-0.8,0.8-0.8,2.1,0,2.9l5.7,5.7
  c0.8,0.8,2.1,0.8,2.9,0C25,26.6,25,25.4,24.2,24.6L24.2,24.6z"/>],

  'false':[<path key="1" className="path01" d="M37.7,10.1c-5.6-9.7-17.9-13-27.6-7.4c-9.6,5.6-13,17.9-7.4,27.6c5.6,9.6,17.9,13,27.6,7.4C40,32.1,43.3,19.8,37.7,10.1z
  M28.1,25.3c0.7,0.7,0.7,1.9,0,2.6c-0.3,0.3-0.8,0.5-1.3,0.5c-0.5,0-0.9-0.2-1.3-0.5l-5.3-5.3L15,27.9c-0.7,0.7-1.9,0.7-2.6,0
  c-0.7-0.7-0.7-1.9,0-2.6l5.3-5.3l-5.3-5.3c-0.7-0.7-0.7-1.9,0-2.6c0.7-0.7,1.9-0.7,2.6,0l5.3,5.3l5.3-5.3c0.7-0.7,1.9-0.7,2.6,0
  c0.7,0.7,0.7,1.9,0,2.6L22.8,20L28.1,25.3z"/>],

  'down_arrow':[<path key="1" className="path01" d="M30.4,2.8c-9.6-5.6-22-2.3-27.6,7.4c-5.6,9.6-2.3,22,7.4,27.5c9.6,5.6,22,2.3,27.5-7.4C43.3,20.7,40,8.3,30.4,2.8L30.4,2.8z
   M34.3,28.3c-4.5,7.7-14.3,10.4-22,5.9s-10.4-14.3-5.9-22s14.3-10.4,22-5.9C36.1,10.7,38.7,20.6,34.3,28.3L34.3,28.3z"/>,
    <path key="2" className="path02" d="M24.6,16.3l-4.3,4.3L16,16.3c-0.8-0.8-2.1-0.8-2.9,0c-0.8,0.8-0.8,2.1,0,2.9l5.7,5.7c0.8,0.8,2.1,0.8,2.9,0l5.7-5.7
  c0.8-0.8,0.8-2.1,0-2.9C26.6,15.5,25.4,15.5,24.6,16.3L24.6,16.3z"/>],

  'true':[<path key="1" className="path01" d="M37.6,10.1c-5.6-9.6-17.9-13-27.6-7.4c-9.6,5.6-13,17.9-7.4,27.6c5.6,9.6,17.9,13,27.6,7.4C39.9,32.1,43.2,19.7,37.6,10.1z
  M30.5,15.4L18.7,27.2c-0.4,0.4-0.9,0.6-1.3,0.6c-0.5,0-1-0.2-1.3-0.6L9.8,21c-0.7-0.7-0.7-1.9,0-2.7c0.7-0.7,1.9-0.7,2.7,0l4.8,4.8
  l10.5-10.5c0.7-0.7,1.9-0.7,2.7,0C31.3,13.4,31.3,14.6,30.5,15.4z"/>],

  'video_play':[<path key="1" className="path01" d="M37.7,10.1c-5.6-9.7-17.9-13-27.6-7.4c-9.7,5.6-13,17.9-7.4,27.6c5.6,9.7,17.9,13,27.6,7.4C40,32.1,43.3,19.8,37.7,10.1z
   M27.5,21.4L17,27.5c-1,0.6-1.8,0.1-1.8-1l-0.1-12.2c0-1.1,0.8-1.6,1.7-1l10.6,6.2C28.5,20,28.5,20.9,27.5,21.4z"/>],

};

export default class Icon extends React.Component {
  render(){
    return (
     <span className={"svg-button " + this.props.className} onClick={this.props.onClick}>
         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox={this.props.viewBox}>
              {icons[this.props.icon]}
        </svg>
     </span>
    );
  }
}
Icon.defaultProps = {viewBox:"0 0 40.5 40.4"};