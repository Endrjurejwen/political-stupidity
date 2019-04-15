import React from 'react';
import PropTypes from 'prop-types';
import { color } from 'utils';

const icon = ({ name, color, height, width }) => {
  switch (name) {
    case 'close':
      return (
        <svg height={height} width={width} viewBox="0 0 64 64">
          <g>
            <path
              fill={color}
              d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"
            />
          </g>
        </svg>
      );
    case 'search':
      return (
        <svg height={height} width={width} x="0px" y="0px" viewBox="0 0 56 56">
          <path
            fill={color}
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
      s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
      c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
      s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
      );
    case 'love':
      return (
        <svg
          x="0px"
          y="0px"
          width={width}
          height={height}
          viewBox="0 -28 512.001 512"
        >
          <g>
            <path
              fill={color}
              d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"
            />
          </g>
        </svg>
      );
    case 'fullLove':
      return (
        <svg
          x="0px"
          y="0px"
          width={width}
          height={height}
          viewBox="0 0 510 550"
        >
          <g>
            <path
              fill="transparent"
              stroke={color}
              strokeWidth="40"
              d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"
            />
          </g>
        </svg>
      );
    case 'comments':
      return (
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 511.626 511.627"
          width={width}
          height={height}
        >
          <g>
            <path
              fill={color}
              d="M477.364,127.481c-22.839-28.072-53.864-50.248-93.072-66.522c-39.208-16.274-82.036-24.41-128.479-24.41
		c-46.442,0-89.269,8.136-128.478,24.41c-39.209,16.274-70.233,38.446-93.074,66.522C11.419,155.555,0,186.15,0,219.269
		c0,28.549,8.61,55.299,25.837,80.232c17.227,24.934,40.778,45.874,70.664,62.813c-2.096,7.611-4.57,14.842-7.426,21.7
		c-2.855,6.851-5.424,12.467-7.708,16.847c-2.286,4.374-5.376,9.23-9.281,14.555c-3.899,5.332-6.849,9.093-8.848,11.283
		c-1.997,2.19-5.28,5.801-9.851,10.848c-4.565,5.041-7.517,8.33-8.848,9.853c-0.193,0.097-0.953,0.948-2.285,2.574
		c-1.331,1.615-1.999,2.419-1.999,2.419l-1.713,2.57c-0.953,1.42-1.381,2.327-1.287,2.703c0.096,0.384-0.094,1.335-0.57,2.854
		c-0.477,1.526-0.428,2.669,0.142,3.429v0.287c0.762,3.234,2.283,5.853,4.567,7.851c2.284,1.992,4.858,2.991,7.71,2.991h1.429
		c12.375-1.526,23.223-3.613,32.548-6.279c49.87-12.751,93.649-35.782,131.334-69.094c14.274,1.523,28.074,2.283,41.396,2.283
		c46.442,0,89.271-8.135,128.479-24.414c39.208-16.276,70.233-38.444,93.072-66.517c22.843-28.072,34.263-58.67,34.263-91.789
		C511.626,186.154,500.207,155.555,477.364,127.481z M445.244,292.075c-19.896,22.456-46.733,40.303-80.517,53.529
		c-33.784,13.223-70.093,19.842-108.921,19.842c-11.609,0-23.98-0.76-37.113-2.286l-16.274-1.708l-12.277,10.852
		c-23.408,20.558-49.582,36.829-78.513,48.821c8.754-15.414,15.416-31.785,19.986-49.102l7.708-27.412l-24.838-14.27
		c-24.744-14.093-43.918-30.793-57.53-50.114c-13.61-19.315-20.412-39.638-20.412-60.954c0-26.077,9.945-50.343,29.834-72.803
		c19.895-22.458,46.729-40.303,80.515-53.531c33.786-13.229,70.089-19.849,108.92-19.849c38.828,0,75.13,6.617,108.914,19.845
		c33.783,13.229,60.62,31.073,80.517,53.531c19.89,22.46,29.834,46.727,29.834,72.802S465.133,269.615,445.244,292.075z"
            />
          </g>
        </svg>
      );
    case 'edit':
      return (
        <svg
          x="0px"
          y="0px"
          height={height}
          width={width}
          viewBox="0 -1 401.52289 401"
        >
          <path
            fill={color}
            d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"
          />
          <path
            fill={color}
            d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"
          />
        </svg>
      );
    case 'userMan':
      return (
        <svg x="0px" y="0px" height={height} width={width} viewBox="0 0 60 60">
          <path
            fill={color}
            d="M60,30C60,13.458,46.542,0,30,0S0,13.458,0,30c0,6.142,1.858,11.857,5.038,16.618l-0.002,0.021l0.207,0.303
            c0.18,0.263,0.374,0.512,0.562,0.768c0.076,0.104,0.151,0.209,0.229,0.313c0.238,0.316,0.483,0.626,0.732,0.931
            c0.072,0.088,0.145,0.175,0.218,0.262c1.157,1.385,2.427,2.653,3.793,3.794c0.083,0.069,0.165,0.139,0.249,0.208
            c0.298,0.243,0.599,0.481,0.906,0.712c0.124,0.094,0.25,0.185,0.375,0.277c0.292,0.214,0.584,0.426,0.884,0.629
            c0.16,0.109,0.326,0.211,0.488,0.317c0.416,0.27,0.836,0.531,1.264,0.779c0.298,0.174,0.597,0.347,0.902,0.511
            c0.184,0.099,0.372,0.191,0.558,0.286c0.324,0.166,0.651,0.327,0.982,0.481c0.167,0.077,0.334,0.153,0.502,0.227
            c0.383,0.17,0.771,0.331,1.162,0.485c0.121,0.048,0.241,0.097,0.363,0.144c1.073,0.406,2.175,0.754,3.302,1.036
            c0.046,0.012,0.093,0.021,0.139,0.032c0.498,0.122,1.001,0.231,1.509,0.328c0.135,0.026,0.27,0.049,0.405,0.073
            c0.02,0.004,0.039,0.007,0.059,0.01l-0.003,0.02l0.528,0.074c0.12,0.019,0.24,0.033,0.36,0.05l0.11,0.015
            c0.021,0.003,0.041,0.004,0.062,0.006c0.054,0.007,0.109,0.014,0.163,0.021c0.164,0.022,0.327,0.043,0.491,0.063
            c0.397,0.046,0.796,0.082,1.198,0.112c0.084,0.006,0.168,0.016,0.251,0.022c0.096,0.006,0.193,0.013,0.289,0.019
            C28.847,59.979,29.421,60,30,60s1.153-0.021,1.724-0.053c0.099-0.006,0.198-0.013,0.297-0.02c0.084-0.006,0.168-0.016,0.253-0.022
            c0.398-0.03,0.795-0.066,1.189-0.111c0.164-0.019,0.328-0.041,0.491-0.063c0.065-0.009,0.13-0.016,0.194-0.025
            c0.02-0.003,0.041-0.004,0.061-0.006l0.101-0.014c0.113-0.016,0.227-0.03,0.339-0.048l0.561-0.079l-0.003-0.021
            c0.009-0.002,0.018-0.003,0.027-0.005c0.135-0.024,0.27-0.047,0.405-0.073c0.508-0.097,1.011-0.206,1.509-0.328
            c0.046-0.011,0.093-0.021,0.139-0.032c1.127-0.282,2.229-0.63,3.302-1.036c0.122-0.046,0.243-0.096,0.365-0.144
            c0.391-0.154,0.778-0.315,1.161-0.484c0.168-0.074,0.336-0.15,0.502-0.227c0.331-0.154,0.658-0.315,0.982-0.481
            c0.187-0.095,0.374-0.188,0.558-0.286c0.305-0.164,0.603-0.337,0.902-0.511c0.428-0.249,0.849-0.509,1.264-0.779
            c0.163-0.106,0.328-0.208,0.488-0.317c0.299-0.203,0.592-0.415,0.884-0.629c0.125-0.092,0.251-0.183,0.375-0.277
            c0.306-0.231,0.608-0.469,0.906-0.712c0.084-0.069,0.166-0.139,0.249-0.208c1.366-1.142,2.636-2.409,3.794-3.795
            c0.073-0.087,0.145-0.173,0.216-0.261c0.249-0.305,0.494-0.615,0.732-0.931c0.078-0.103,0.152-0.208,0.229-0.313
            c0.188-0.256,0.382-0.505,0.562-0.768l0.207-0.303l-0.002-0.021C58.142,41.857,60,36.142,60,30z M58,30
            c0,4.972-1.309,9.642-3.591,13.694c-1.607-5.328-6.326-9.19-11.985-9.642L42.386,34h-1.075h-4.779h-1.166
            C35.164,34,35,33.836,35,33.635V32.99c0-0.183,0.149-0.303,0.276-0.352c6.439-2.421,10.455-12.464,9.613-19.488
            c-0.439-3.658-2.25-6.927-4.883-9.295C50.517,7.892,58,18.086,58,30z M52.538,46.59c-0.081,0.109-0.162,0.217-0.244,0.325
            c-0.223,0.293-0.448,0.584-0.682,0.868c-0.024,0.029-0.049,0.057-0.073,0.086c-0.808,0.972-1.681,1.888-2.611,2.743
            c-0.055,0.051-0.11,0.103-0.166,0.153c-0.277,0.251-0.561,0.495-0.848,0.735c-0.09,0.075-0.181,0.149-0.272,0.223
            c-0.279,0.227-0.56,0.45-0.847,0.666c-0.097,0.073-0.197,0.142-0.295,0.214c-0.165,0.121-0.332,0.238-0.5,0.355V48h-2v6.233
            c-0.039,0.023-0.078,0.045-0.118,0.068c-0.255,0.146-0.51,0.291-0.769,0.428c-0.177,0.094-0.357,0.185-0.537,0.276
            c-0.302,0.152-0.606,0.299-0.913,0.44c-0.15,0.069-0.299,0.138-0.45,0.204c-0.385,0.168-0.774,0.328-1.166,0.479
            c-0.081,0.031-0.16,0.065-0.241,0.095c-1,0.374-2.022,0.692-3.063,0.95c-0.075,0.019-0.151,0.034-0.226,0.052
            c-0.431,0.103-0.865,0.197-1.302,0.279c-0.102,0.019-0.205,0.037-0.308,0.055L33.162,46H34v-2.465l4.471,2.98l4.173-10.432
            c5.279,0.595,9.524,4.673,10.247,10.012C52.774,46.261,52.659,46.427,52.538,46.59z M23.482,57.226
            c-0.075-0.018-0.15-0.034-0.225-0.052c-1.041-0.259-2.064-0.576-3.064-0.95c-0.081-0.03-0.161-0.064-0.241-0.095
            c-0.392-0.151-0.781-0.311-1.165-0.479c-0.151-0.066-0.301-0.135-0.451-0.204c-0.307-0.141-0.611-0.288-0.913-0.44
            c-0.18-0.091-0.36-0.181-0.537-0.276c-0.259-0.137-0.514-0.283-0.769-0.428c-0.039-0.023-0.079-0.045-0.118-0.068V48h-2v4.958
            c-0.167-0.117-0.335-0.235-0.5-0.355c-0.098-0.072-0.198-0.141-0.295-0.214c-0.287-0.216-0.568-0.439-0.846-0.665
            c-0.092-0.074-0.183-0.149-0.274-0.224c-0.287-0.239-0.57-0.483-0.846-0.734c-0.057-0.051-0.112-0.104-0.168-0.155
            c-0.93-0.855-1.803-1.77-2.61-2.742c-0.024-0.029-0.049-0.057-0.073-0.086c-0.234-0.284-0.459-0.575-0.682-0.868
            c-0.082-0.108-0.164-0.216-0.244-0.325c-0.12-0.163-0.235-0.329-0.352-0.495c0.724-5.339,4.968-9.417,10.247-10.012l4.173,10.432
            L26,43.535V46h0.84l-1.72,11.566c-0.112-0.02-0.224-0.039-0.335-0.06C24.348,57.423,23.913,57.329,23.482,57.226z M25.491,30.791
            C20.709,29.022,17,20.85,17,15c0-0.128,0.015-0.253,0.019-0.38l0.732-0.903c1.651-1.964,4.469-2.526,7.012-1.4
            C25.785,12.771,26.874,13,28,13c2.971,0,5.64-1.615,7.028-4.184c3.182,1.045,6.022,3.015,7.943,5.498
            c0.293,6.1-3.294,14.533-8.398,16.452C33.617,31.126,33,31.999,33,32.99v0.645c0,1.146,0.82,2.103,1.904,2.319L33.198,38h-6.396
            l-1.706-2.047C26.18,35.738,27,34.78,27,33.635V33C27,32.014,26.395,31.126,25.491,30.791z M30.04,2.002c0.012,0,0.022,0,0.033,0
            c0.489,0.003,0.97,0.03,1.43,0.083c4.959,0.553,9.126,4.005,10.752,8.589c-2.115-1.842-4.708-3.26-7.497-4.027l-0.86-0.236
            l-0.333,0.826C32.644,9.522,30.46,11,28,11c-0.845,0-1.662-0.172-2.427-0.511c-2.766-1.224-5.786-0.893-8.017,0.73
            c0.613-2.026,1.72-3.882,3.261-5.42C23.271,3.35,26.53,2.002,30.04,2.002z M34,40.162L37.469,36h3.054l-2.993,7.484L34,41.132
            V40.162z M32.365,57.888c-0.27,0.023-0.541,0.049-0.809,0.065C31.042,57.981,30.525,58,30.007,58c-0.034,0-0.069-0.003-0.103-0.003
            c-0.485-0.002-0.969-0.017-1.45-0.044c-0.264-0.015-0.53-0.041-0.796-0.063c-0.186-0.016-0.371-0.031-0.556-0.051L28.862,46h2.277
            l1.786,11.837C32.739,57.856,32.552,57.872,32.365,57.888z M32,44h-4v-1.798V40h4v2.202V44z M26,40.162v0.97l-3.529,2.353L19.478,36
            h3.054L26,40.162z M19.982,3.86c-0.193,0.174-0.392,0.338-0.578,0.523C16.564,7.218,15,10.987,15,15
            c0,6.629,4.19,15.593,9.797,17.666C24.916,32.711,25,32.848,25,33v0.635C25,33.836,24.836,34,24.635,34h-1.166h-4.779h-0.545
            c-0.096,0-0.191,0.014-0.281,0.039c-5.785,0.343-10.638,4.239-12.272,9.656C3.309,39.642,2,34.972,2,30
            C2,18.09,9.478,7.9,19.982,3.86z"
          />
        </svg>
      );
    case 'logout':
      return (
        <svg
          x="0px"
          y="0px"
          height={height}
          width={width}
          viewBox="0 0 490.3 490.3"
        >
          <g>
            <path
              fill={color}
              d="M0,121.05v248.2c0,34.2,27.9,62.1,62.1,62.1h200.6c34.2,0,62.1-27.9,62.1-62.1v-40.2c0-6.8-5.5-12.3-12.3-12.3
			s-12.3,5.5-12.3,12.3v40.2c0,20.7-16.9,37.6-37.6,37.6H62.1c-20.7,0-37.6-16.9-37.6-37.6v-248.2c0-20.7,16.9-37.6,37.6-37.6h200.6
			c20.7,0,37.6,16.9,37.6,37.6v40.2c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-40.2c0-34.2-27.9-62.1-62.1-62.1H62.1
			C27.9,58.95,0,86.75,0,121.05z"
            />
            <path
              fill={color}
              d="M385.4,337.65c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l83.9-83.9c4.8-4.8,4.8-12.5,0-17.3l-83.9-83.9
			c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l63,63H218.6c-6.8,0-12.3,5.5-12.3,12.3c0,6.8,5.5,12.3,12.3,12.3h229.8l-63,63
			C380.6,325.15,380.6,332.95,385.4,337.65z"
            />
          </g>
        </svg>
      );
    default:
      return null;
  }
};

icon.defaultProps = {
  color: color.primary,
  height: '1.5rem',
  width: '1.5rem'
};

icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

export default icon;
