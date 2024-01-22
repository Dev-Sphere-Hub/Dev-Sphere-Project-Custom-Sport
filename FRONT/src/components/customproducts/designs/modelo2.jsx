const Modelo2 = ({ fill, height = 1500, width = 1200 }) => {
  return (
    <svg
      viewBox={`0 0 ${height} ${width}`}
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
      className='svg-responsive'
    >
      <g
        style={{
          mixBlendMode: 'multiply'
        }}
      >
        <mask
          id='a'
          style={{
            maskType: 'luminance'
          }}
          maskUnits='userSpaceOnUse'
          x={153}
          y={25}
          width={469}
          height={778}
        >
          <path
            d='M621.57 102.49c-.2-4.47-1.92-8.82-5.08-11.98-15.28-9.59-31.97-16.48-39.6-19.84-46.08-20.26-66.47-37.3-75.4-44.52.07.06.15.12.22.19-2.43 11.63-13.99 58.49-65.26 81.76-17.59 7.99-34.07 10.82-48.61 10.84-.18 0-.36-.01-.54-.01-.19 0-.36.01-.55.01-14.54-.02-31.02-2.85-48.61-10.84-51.27-23.27-62.83-70.13-65.26-81.76.15-.13.31-.26.46-.39-8.79 7.11-29.13 24.28-75.63 44.72-7.63 3.36-24.32 10.25-39.6 19.84-3.16 3.16-4.89 7.51-5.09 11.99-.01.27-.02.53-.02.79.01 2.67.58 5.36 1.72 7.84.39.84.79 1.72 1.22 2.66.03.07.07.14.09.2 13.33 29.31 42.01 95.67 49.36 208.95-.06.14-.11.27-.16.4.05.81.11 1.62.16 2.43.85 6.81 1.64 13.79 2.34 20.93v.07c2.5 12.65 1.69 26.44 1.69 41.47 0 0 3.12 51.74 1.02 77.3.27 16.85-.72 31.39-.18 48.42.41 24.96-2.31 48.31-3.67 68.48-1.37 20.16-5.22 36.12-8.33 67.12-3.84 38.16-1.67 39.2-6.81 100.35-.44 5.3-.99 10.57-1.81 15.78-.94 6.06-.13 12-2.1 17.78-.63 1.84-2.52 5.55.5 8.83 1.68 1.84 5.39 3.24 10.08 4.32 3.23.75 6.94 1.33 10.78 1.8 3.84.47 7.81.81 11.58 1.06 17.04 1.94 43.14-4.27 76.02-2.37 26.29 1.52 56.89 3.67 90.66 4.97h.26c33.76-1.3 64.37-3.45 90.65-4.97 32.88-1.9 58.99 4.31 76.03 2.37 7.53-.5 15.88-1.37 22.36-2.86 2.35-.54 4.44-1.16 6.17-1.87 1.72-.72 3.06-1.53 3.91-2.45 3.02-3.28 1.13-6.99.5-8.83-1.97-5.78-1.16-11.72-2.11-17.78-.82-5.21-1.36-10.48-1.81-15.78-5.13-61.15-2.96-62.19-6.8-100.35-3.11-31-6.96-46.96-8.34-67.12-1.36-20.17-4.07-43.52-3.67-68.48.55-17.03-.44-31.57-.18-48.42-2.09-25.56 1.02-77.3 1.02-77.3 0-15.03-.8-28.82 1.7-41.47 0-.03 0-.05.01-.07.7-7.14 1.49-14.12 2.34-20.92.05-.82.11-1.63.16-2.44-.05-.13-.1-.26-.16-.39 7.35-113.29 36.02-179.65 49.35-208.96.02-.06.07-.13.1-.2.42-.94.83-1.82 1.21-2.66 1.15-2.48 1.71-5.18 1.72-7.85 0-.26 0-.52-.02-.79h.01Zm-74.68 660.53c-6.74-.35-13.73-1.02-20.75-1.64-4.57-.4-9.16-.77-13.68-1-10.21-.52-19.78-.21-25.32.08V740.2c5.54-.28 15.11-.59 25.32-.07 4.52.24 9.11.6 13.68 1 7.02.61 14.01 1.29 20.75 1.63v20.26Z'
            fill='#fff'
          />
        </mask>
        <g mask='url(#a)' fill={fill}>
          <path d='M456.224-336.579 136.841-211.285 617.023 1012.74l319.383-125.297L456.224-336.579Z' />
          <path d='M326.102-61.9 102.39 25.86l4.003 10.204 223.711-87.762-4.002-10.203Z' />
          <path d='m317.123-46.615-197.757 77.58 4.003 10.203 197.757-77.58-4.003-10.203Z' />
          <path d='M307.605-31.108 136.873 35.87l4.002 10.203 170.733-66.978-4.003-10.203Z' />
          <path d='M356.41-38.487 96.094 63.635l4.003 10.203L360.413-28.284l-4.003-10.203Z' />
          <path d='M306.694-7.21 153.826 52.76l4.003 10.203 152.868-59.97-4.003-10.203ZM329.306-4.306 139.21 70.268l4.003 10.203L333.308 5.897l-4.002-10.203Z' />
          <path d='M309.696 15.16 166.827 71.207l4.002 10.204 142.87-56.048-4.003-10.203Z' />
          <path d='m342.656 14.003-200.792 78.77 4.003 10.203 200.792-78.77-4.003-10.203Z' />
          <path d='M329.126 31.074 163.393 96.091l4.002 10.203 165.733-65.017-4.002-10.203ZM343.551 37.189l-186.586 73.197 4.002 10.203 186.586-73.197-4.002-10.203Z' />
          <path d='M370.805 38.265 137.728 129.7l4.003 10.203 233.076-91.435-4.002-10.203Z' />
          <path d='m357.144 55.397-197.757 77.58 4.002 10.203L361.146 65.6l-4.002-10.203Z' />
          <path d='M342.99 72.713 181.539 136.05l4.002 10.203 161.451-63.337-4.002-10.203ZM388.983 66.444l-245.421 96.278 4.003 10.203 245.42-96.279-4.002-10.203Z' />
          <path d='m346.705 94.803-152.868 59.969 4.003 10.203 152.868-59.969-4.003-10.203Z' />
          <path d='m364.053 99.76-179.567 70.444 4.003 10.203 179.567-70.444-4.003-10.203Z' />
          <path d='M349.703 117.163 206.834 173.21l4.002 10.203 142.87-56.047-4.003-10.203Z' />
          <path d='m391.796 112.417-219.038 85.929 4.003 10.203 219.038-85.929-4.003-10.203Z' />
          <path d='m369.143 133.077-165.734 65.017 4.003 10.203 165.733-65.017-4.002-10.203Z' />
          <path d='m383.568 139.182-186.586 73.197 4.003 10.203 186.586-73.197-4.003-10.203Z' />
          <path d='m414.219 138.931-239.882 94.105 4.003 10.203 239.882-94.105-4.003-10.203Z' />
          <path d='m397.151 157.39-197.757 77.58 4.002 10.203 197.758-77.58-4.003-10.203ZM387.642 172.894 216.91 239.872l4.002 10.203 170.733-66.978-4.003-10.203Z' />
          <path d='m414.411 174.166-216.273 84.843 4.003 10.203 216.273-84.843-4.003-10.203Z' />
          <path d='m376.277 200.893-131.978 51.774 4.003 10.203 131.977-51.774-4.002-10.203ZM409.33 199.7l-190.096 74.574 4.003 10.203 190.096-74.574-4.003-10.203Z' />
          <path d='m389.72 219.156-142.869 56.048 4.002 10.203 142.87-56.048-4.003-10.203ZM435.313 213.044l-226.057 88.682 4.002 10.203 226.058-88.682-4.003-10.203Z' />
          <path d='m409.15 235.071-165.733 65.016 4.002 10.203 165.733-65.017-4.002-10.202ZM432.037 237.865l-203.501 79.833 4.003 10.203 203.501-79.833-4.003-10.203ZM461.888 237.929 206.683 338.045l4.002 10.203L465.89 248.131l-4.002-10.202Z' />
          <path d='m437.177 259.389-197.757 77.58 4.003 10.203 197.757-77.58-4.003-10.203ZM427.659 274.897l-170.732 66.978 4.002 10.203L431.662 285.1l-4.003-10.203Z' />
          <path d='M473.913 268.515 218.68 368.643l4.003 10.203 255.232-100.128-4.002-10.203Z' />
          <path d='M416.284 302.896 284.306 354.67l4.003 10.203 131.978-51.774-4.003-10.203Z' />
          <path d='m449.346 301.689-190.095 74.574 4.002 10.203 190.096-74.574-4.003-10.203ZM429.727 321.159l-142.869 56.048 4.003 10.203 142.869-56.048-4.003-10.203Z' />
          <path d='m469.474 317.33-214.356 84.091 4.003 10.203 214.355-84.092-4.002-10.202ZM449.167 337.073 283.434 402.09l4.002 10.203 165.733-65.017-4.002-10.203ZM450.848 348.187 289.76 411.382l4.002 10.203L454.85 358.39l-4.002-10.203ZM500.856 340.343l-253.1 99.291 4.002 10.203 253.101-99.291-4.003-10.203ZM477.188 361.402l-197.757 77.579 4.003 10.203 197.757-77.579-4.003-10.203Z' />
          <path d='m467.67 376.899-170.732 66.978 4.002 10.203 170.732-66.978-4.002-10.203Z' />
          <path d='m479.6 383.992-186.586 73.197 4.003 10.203 186.586-73.197-4.003-10.203Z' />
          <path d='m466.74 400.801-152.868 59.97 4.003 10.203 152.867-59.97-4.002-10.203ZM489.367 403.701l-190.096 74.574 4.003 10.203 190.096-74.574-4.003-10.203ZM476.228 420.629l-155.819 61.128 4.002 10.203 155.819-61.128-4.002-10.203Z' />
          <path d='m509.494 419.342-214.355 84.092 4.002 10.203 214.356-84.092-4.003-10.203ZM489.187 439.082l-165.733 65.017 4.002 10.203 165.733-65.017-4.002-10.203Z' />
          <path d='m503.612 445.186-186.586 73.198 4.002 10.203 186.586-73.198-4.002-10.203Z' />
          <path d='m534.254 444.939-239.882 94.105 4.003 10.203 239.881-94.105-4.002-10.203Z' />
          <path d='m517.195 463.395-197.757 77.58 4.003 10.203 197.757-77.58-4.003-10.203ZM507.696 478.898l-170.732 66.978 4.002 10.203 170.733-66.978-4.003-10.203Z' />
          <path d='m537.547 478.952-222.436 87.261 4.002 10.203 222.436-87.261-4.002-10.203Z' />
          <path d='m506.766 502.8-152.868 59.97 4.003 10.203 152.868-59.97-4.003-10.203Z' />
          <path d='m529.374 505.694-190.096 74.575 4.003 10.203 190.096-74.575-4.003-10.203Z' />
          <path d='m509.765 525.16-142.87 56.048 4.003 10.203 142.869-56.048-4.002-10.203ZM549.502 521.345l-214.356 84.092 4.003 10.202 214.355-84.091-4.002-10.203Z' />
          <path d='M529.194 541.075 363.46 606.092l4.003 10.203 165.733-65.017-4.002-10.203ZM543.629 547.189l-186.586 73.198 4.003 10.203 186.586-73.198-4.003-10.203Z' />
          <path d='m574.271 546.932-239.882 94.105 4.003 10.203 239.881-94.105-4.002-10.203ZM557.212 565.398l-197.757 77.58 4.003 10.202 197.757-77.579-4.003-10.203Z' />
          <path d='m547.703 580.891-170.732 66.978 4.002 10.203 170.733-66.978-4.003-10.203ZM582.879 578.865l-233.077 91.436 4.003 10.203 233.076-91.436-4.002-10.203ZM536.607 608.791l-132.536 51.994 4.002 10.203 132.537-51.994-4.003-10.203Z' />
          <path d='m569.381 607.697-190.095 74.574 4.002 10.203L573.384 617.9l-4.003-10.203ZM549.782 627.163l-142.87 56.048 4.003 10.203 142.869-56.048-4.002-10.203Z' />
          <path d='m589.528 623.334-214.356 84.092 4.003 10.203 214.356-84.092-4.003-10.203ZM569.211 643.078l-165.733 65.017 4.002 10.203 165.733-65.017-4.002-10.203Z' />
          <path d='M583.636 649.182 397.05 722.38l4.002 10.203 186.586-73.198-4.002-10.203ZM614.287 648.931l-239.881 94.106 4.002 10.203 239.882-94.106-4.003-10.203ZM583.711 672.7l-170.732 66.978 4.003 10.203 170.732-66.978-4.003-10.203Z' />
          <path d='m587.71 682.895-170.732 66.978 4.002 10.203 170.732-66.978-4.002-10.203ZM622.896 680.869l-233.077 91.435 4.003 10.203 233.076-91.435-4.002-10.203Z' />
          <path d='m586.79 706.796-152.868 59.97 4.003 10.203 152.868-59.97-4.003-10.203ZM609.402 709.71l-190.096 74.574 4.003 10.203 190.095-74.574-4.002-10.203Z' />
          <path d='m589.792 729.166-142.87 56.047 4.003 10.203 142.87-56.047-4.003-10.203Z' />
          <path d='m615.286 730.938-185.85 72.909 4.002 10.203 185.851-72.909-4.003-10.203Z' />
          <path d='m609.221 745.081-165.733 65.017 4.003 10.203 165.733-65.017-4.003-10.203Z' />
          <path d='m623.647 751.195-186.586 73.197 4.002 10.203 186.586-73.197-4.002-10.203ZM654.308 750.944l-239.882 94.105 4.003 10.203 239.882-94.105-4.003-10.203Z' />
          <path d='m637.249 769.399-197.757 77.58 4.003 10.203 197.757-77.58-4.003-10.203ZM627.731 784.907l-170.732 66.978 4.002 10.203 170.732-66.978-4.002-10.203Z' />
          <path d='M662.906 782.871 429.83 874.307l4.002 10.203 233.077-91.436-4.003-10.203Z' />
        </g>
      </g>
      <path
        d='M1301.07 25.48s-.01 0-.02-.02c-.36-.3-.74-.62-1.13-.94-3.4-2.83-7.62-6.3-9.78-8.43-1.65-1.62-2.96-3.02-3.77-3.96-.58-.69-1.34-1.06-2.14-1.12-.47-.04-.77.05-.99.12-.45.15-.89.41-1.22.72-.29.26-.62.56-.97.87-.38.34-.8.69-1.26 1.05.12-.09.24-.17.35-.24-.12.08-.24.17-.36.26-.09.06-.18.13-.27.2l-.57.45h-.01c-.44.34-.91.7-1.42 1.06h-.01c-.5.37-1.04.75-1.61 1.13-.22.15-.44.3-.67.45-.21.14-.43.29-.65.43-.72.47-1.48.95-2.28 1.43-.3.18-.61.37-.93.55-.94.55-1.94 1.12-2.99 1.68-.47.26-.95.51-1.44.76-.99.51-2.02 1.02-3.09 1.53-.66.31-1.34.63-2.04.94-.37.17-.75.34-1.13.5-.72.32-1.46.64-2.22.95-1.31.54-2.68 1.08-4.1 1.61-1.2.45-2.44.89-3.73 1.32-2.52.86-5.19 1.68-8.03 2.47-.35.09-.7.19-1.05.28-1.05.28-2.13.56-3.23.83-.09.03-.19.05-.28.07-.54.13-1.09.27-1.65.39-3.08.72-6.33 1.39-9.75 1.98-.68.12-1.37.24-2.07.35a135 135 0 0 1-3.83.58c-.91.14-1.84.26-2.77.38-.7.09-1.4.18-2.11.26-2.46.29-5 .55-7.61.76-.59.05-1.18.1-1.78.14-1.62.12-3.27.23-4.95.31-.84.05-1.69.09-2.55.12-.76.04-1.53.07-2.31.09-1.1.04-2.22.07-3.34.09-1.63.03-3.28.05-4.96.05H1187.05c-1.68 0-3.33-.02-4.96-.05-1.12-.02-2.24-.05-3.34-.09-.78-.02-1.55-.05-2.31-.09-.86-.03-1.71-.07-2.55-.12-1.68-.08-3.33-.19-4.95-.31-.6-.04-1.19-.09-1.78-.14-2.61-.21-5.15-.47-7.61-.76-.71-.08-1.41-.17-2.11-.26-.93-.12-1.86-.24-2.77-.38a135 135 0 0 1-3.83-.58c-.7-.11-1.39-.23-2.07-.35-3.42-.59-6.67-1.26-9.75-1.98-.56-.12-1.11-.26-1.65-.39-.09-.02-.19-.04-.28-.07-1.1-.27-2.18-.55-3.23-.83-.35-.09-.7-.19-1.05-.28-2.84-.79-5.51-1.61-8.03-2.47-1.29-.43-2.53-.87-3.73-1.32-1.42-.53-2.79-1.07-4.1-1.61-.76-.31-1.5-.63-2.22-.95-.38-.16-.76-.33-1.13-.5-.7-.31-1.38-.63-2.04-.94-1.07-.51-2.1-1.02-3.09-1.53-.49-.25-.97-.5-1.44-.76-1.05-.56-2.05-1.13-2.99-1.68-.32-.18-.63-.37-.93-.55-.8-.48-1.56-.96-2.28-1.43-.22-.14-.44-.29-.65-.43-.23-.15-.45-.3-.67-.45-.57-.38-1.11-.76-1.61-1.13h-.01c-.51-.36-.98-.72-1.42-1.06h-.01l-.57-.45-.27-.21c-.12-.08-.24-.17-.36-.25.11.07.23.15.35.24-.46-.36-.88-.71-1.26-1.05-.35-.31-.68-.61-.97-.87-.33-.31-.77-.57-1.22-.72-.22-.07-.52-.16-.99-.12-.8.06-1.56.43-2.14 1.12-.81.94-2.12 2.34-3.77 3.96-2.16 2.13-6.38 5.6-9.78 8.43-.39.32-.77.64-1.13.94-.01 0-.01.02-.02.02-.36.3-.7.59-1.02.86.98.66 2 1.32 3.06 1.99 9.34 5.84 21.19 11.61 25.49 13.65h.03c.16.07.32.15.48.23.07.03.15.06.22.1.12.06.25.12.37.18.18.08.37.17.55.26.35.17.72.33 1.08.5.21.1.41.19.62.29.37.17.75.33 1.12.5.22.1.43.19.65.29.39.17.79.34 1.19.51l.63.27c17.32 7.29 42.73 13.82 78.18 13.85H1188.42c35.45-.03 60.86-6.56 78.18-13.85l.63-.27c.4-.17.8-.34 1.19-.51.22-.1.43-.19.65-.29.37-.17.75-.33 1.12-.5.21-.1.41-.19.62-.29.36-.17.73-.33 1.08-.5.18-.09.37-.18.55-.26.12-.06.25-.12.37-.18.07-.04.15-.07.22-.1.16-.08.32-.16.48-.23h.03c4.3-2.04 16.15-7.81 25.49-13.65 1.06-.67 2.08-1.33 3.06-1.99-.32-.27-.66-.56-1.02-.86ZM1005.79 322.94c-.06.14-.11.27-.16.4-2.09 4.95-3.75 8.12-6.07 14.07-.55 1.42-.48 5.7-2.4 7.35-39.68-2.47-90.75-20.76-108.12-31.3-.53-.32-1.07-.59-1.57-.87-1.42-.8-2.63-1.62-3.67-2.47-.62-3.23 2.04-4.15 2.64-6.22 8.97-30.81 18.53-54.46 21.94-83.4 8.62-73.29 13.01-95 30.1-113.87 1.98-2.18 5.96-6.22 8.16-7.92 3.75-2.88 7.74-5.68 11.87-8.24-3.2 3.17-4.93 7.55-5.09 12.04 0 .26-.02.52-.02.79.01 2.67.58 5.36 1.72 7.83.39.84.79 1.72 1.22 2.66.03.07.07.14.09.2 13.33 29.31 42.01 95.67 49.36 208.95Z'
        fill={fill}
        style={{
          mixBlendMode: 'multiply'
        }}
      />
      <g
        style={{
          mixBlendMode: 'multiply'
        }}
      >
        <mask
          id='b'
          style={{
            maskType: 'luminance'
          }}
          maskUnits='userSpaceOnUse'
          x={953}
          y={26}
          width={469}
          height={777}
        >
          <path
            d='M1422 103.3c-.01 2.67-.58 5.36-1.72 7.83-.39.84-.79 1.72-1.22 2.66-.03.07-.07.14-.09.2-13.33 29.31-42.01 95.67-49.36 208.95.06.14.11.27.16.4-.05.81-.11 1.62-.16 2.43-.85 6.82-1.64 13.8-2.34 20.93-.01.03-.01.05-.01.07-2.5 12.65-1.69 26.44-1.69 41.47 0 0-3.12 51.74-1.02 77.3-.27 16.85.72 31.4.18 48.42-.4 24.96 2.31 48.31 3.67 68.48 1.37 20.17 5.22 36.13 8.33 67.12 3.84 38.16 1.67 39.21 6.81 100.35.45 5.3.99 10.58 1.81 15.79.95 6.05.14 11.99 2.11 17.78.62 1.84 2.52 5.54-.5 8.82-1.69 1.84-5.4 3.25-10.09 4.33-3.23.75-6.94 1.33-10.78 1.8-3.84.46-7.81.8-11.58 1.05-17.03 1.94-43.14-4.26-76.02-2.36-26.28 1.52-56.89 3.66-90.65 4.96h-.28c-33.76-1.3-64.37-3.44-90.65-4.96-32.88-1.9-58.99 4.3-76.02 2.36-3.77-.25-7.74-.59-11.58-1.05-3.84-.47-7.55-1.05-10.78-1.8-4.69-1.08-8.4-2.49-10.09-4.33-3.02-3.28-1.12-6.98-.5-8.82 1.97-5.79 1.16-11.73 2.11-17.78.82-5.21 1.36-10.49 1.81-15.79 5.14-61.14 2.97-62.19 6.81-100.35 3.11-30.99 6.96-46.95 8.33-67.12 1.36-20.17 4.07-43.52 3.67-68.48-.54-17.02.45-31.57.18-48.42 2.1-25.56-1.02-77.3-1.02-77.3 0-15.03.81-28.82-1.69-41.47v-.07c-.7-7.13-1.49-14.11-2.34-20.92-.05-.82-.11-1.63-.16-2.44.05-.13.1-.26.16-.39-7.35-113.29-36.03-179.65-49.36-208.96-.02-.06-.06-.13-.09-.2-.43-.94-.83-1.82-1.22-2.66a18.898 18.898 0 0 1-1.72-7.83c0-.27.01-.53.02-.79.2-4.48 1.93-8.83 5.09-12 15.27-9.58 31.97-16.47 39.6-19.83 45.69-20.1 66.13-37.03 75.17-44.36l.03.02c.98.66 2 1.32 3.06 1.99 9.34 5.84 21.19 11.61 25.49 13.65h.02c.16.07.32.15.48.23.07.03.15.06.22.1.12.06.25.12.37.18.18.08.37.17.55.26.35.17.72.33 1.08.5.21.1.41.19.62.29.37.17.75.33 1.12.5.22.1.43.19.65.29.39.17.79.34 1.19.51l.63.27c17.32 7.29 42.73 13.82 78.18 13.85H1188.42c35.45-.03 60.86-6.56 78.18-13.85l.63-.27c.4-.17.8-.34 1.19-.51.22-.1.43-.19.65-.29.37-.17.75-.33 1.12-.5.21-.1.41-.19.62-.29.36-.17.73-.33 1.08-.5.18-.09.37-.18.55-.26.12-.06.25-.12.37-.18.07-.04.15-.07.22-.1.16-.08.32-.16.48-.23h.03c4.3-2.04 16.15-7.81 25.49-13.65 1.06-.67 2.08-1.33 3.06-1.99l.03-.02c9.04 7.33 29.48 24.26 75.17 44.36 7.63 3.36 24.33 10.25 39.6 19.83 3.16 3.17 4.89 7.52 5.09 12 .01.26.02.52.02.79Z'
            fill='#fff'
          />
        </mask>
        <g mask='url(#b)' fill={fill}>
          <path d='m638.636 887.446 319.383 125.294L1438.2-211.283l-319.38-125.293L638.636 887.446Z' />
          <path d='m1244.93-51.72 223.71 87.761 4-10.203-223.71-87.762-4 10.203ZM1253.9-36.425l197.76 77.58 4-10.203-197.76-77.58-4 10.203Z' />
          <path d='m1263.4-20.93 170.73 66.978 4-10.203-170.73-66.978-4 10.203ZM1214.61-28.294l260.31 102.121 4.01-10.203-260.32-102.121-4 10.203Z' />
          <path d='m1264.33 2.977 152.87 59.97 4-10.204-152.87-59.97-4 10.204Z' />
          <path d='m1241.73 5.872 190.09 74.574 4-10.203L1245.73-4.33l-4 10.203Z' />
          <path d='m1261.33 25.33 142.87 56.047 4-10.203-142.87-56.048-4 10.203ZM1228.37 24.173l200.79 78.77 4-10.203-200.79-78.77-4 10.203Z' />
          <path d='m1241.9 41.245 165.73 65.017 4-10.203-165.73-65.017-4 10.203ZM1227.48 47.364l186.59 73.198 4-10.203-186.59-73.198-4 10.203Z' />
          <path d='m1200.23 48.44 233.08 91.436 4-10.203-233.07-91.436-4.01 10.203ZM1213.89 65.573l197.76 77.58 4-10.203-197.76-77.58-4 10.203Z' />
          <path d='m1228.03 82.89 161.45 63.337 4.01-10.203-161.45-63.337-4.01 10.203ZM1182.05 76.625l245.42 96.278 4-10.203-245.42-96.278-4 10.203Z' />
          <path d='m1224.32 104.975 152.87 59.969 4-10.203-152.86-59.97-4.01 10.204ZM1206.97 109.943l179.57 70.444 4-10.203-179.57-70.444-4 10.203Z' />
          <path d='m1221.32 127.336 142.87 56.048 4-10.203-142.87-56.048-4 10.203ZM1179.23 122.601l219.04 85.928 4-10.203-219.03-85.928-4.01 10.203Z' />
          <path d='m1201.89 143.256 165.74 65.017 4-10.203-165.73-65.017-4.01 10.203Z' />
          <path d='m1187.47 149.371 186.58 73.197 4.01-10.203-186.59-73.197-4 10.203Z' />
          <path d='m1156.82 149.114 239.88 94.105 4.01-10.203-239.88-94.105-4.01 10.203ZM1173.87 167.58l197.76 77.58 4-10.203-197.76-77.58-4 10.203Z' />
          <path d='m1183.38 183.079 170.74 66.978 4-10.203-170.73-66.978-4.01 10.203Z' />
          <path d='m1156.6 184.347 216.28 84.844 4-10.203-216.27-84.844-4.01 10.203Z' />
          <path d='m1194.75 211.079 131.98 51.775 4.01-10.203-131.98-51.775-4.01 10.203Z' />
          <path d='m1161.7 209.886 190.09 74.574 4.01-10.203-190.1-74.574-4 10.203Z' />
          <path d='m1181.32 229.347 142.87 56.048 4-10.203-142.87-56.048-4 10.203ZM1135.72 223.235l226.06 88.682 4-10.203-226.06-88.682-4 10.203Z' />
          <path d='m1161.88 245.263 165.73 65.017 4.01-10.203-165.74-65.017-4 10.203ZM1139 248.062l203.5 79.833 4-10.203-203.5-79.833-4 10.203Z' />
          <path d='m1109.14 248.116 255.2 100.116 4-10.203-255.2-100.116-4 10.203Z' />
          <path d='m1133.86 269.587 197.75 77.58 4.01-10.203-197.76-77.58-4 10.203Z' />
          <path d='m1143.37 285.086 170.73 66.977 4.01-10.202-170.74-66.978-4 10.203ZM1097.12 278.714l255.23 100.128 4-10.203-255.23-100.127-4 10.202Z' />
          <path d='m1154.74 313.086 131.98 51.775 4-10.203-131.98-51.775-4 10.203ZM1121.69 311.894l190.09 74.574 4-10.203-190.09-74.574-4 10.203Z' />
          <path d='m1141.3 331.354 142.87 56.047 4-10.203-142.86-56.047-4.01 10.203ZM1101.55 327.536l214.36 84.091 4-10.203-214.35-84.091-4.01 10.203Z' />
          <path d='m1121.87 347.27 165.73 65.017 4-10.203-165.73-65.017-4 10.203ZM1120.19 358.388l161.09 63.195 4-10.203-161.08-63.195-4.01 10.203Z' />
          <path d='m1070.18 350.526 253.1 99.291 4-10.203-253.1-99.291-4 10.203Z' />
          <path d='m1093.85 371.585 197.75 77.58 4.01-10.203-197.76-77.58-4 10.203Z' />
          <path d='m1103.36 387.083 170.73 66.978 4.01-10.203-170.73-66.978-4.01 10.203Z' />
          <path d='m1091.44 394.181 186.58 73.197 4.01-10.203-186.59-73.197-4 10.203Z' />
          <path d='m1104.3 410.99 152.86 59.969 4.01-10.203-152.87-59.969-4 10.203ZM1081.69 413.895l190.09 74.574 4-10.203-190.09-74.574-4 10.203Z' />
          <path d='m1094.82 430.813 155.82 61.128 4-10.203-155.81-61.127-4.01 10.202Z' />
          <path d='m1061.55 429.537 214.36 84.091 4-10.203-214.35-84.091-4.01 10.203Z' />
          <path d='m1081.86 449.268 165.73 65.017 4-10.203-165.73-65.017-4 10.203ZM1067.43 455.383l186.59 73.197 4-10.203-186.59-73.197-4 10.203Z' />
          <path d='m1036.78 455.126 239.88 94.105 4-10.203-239.88-94.105-4 10.203ZM1053.84 473.596l197.76 77.58 4-10.203-197.75-77.58-4.01 10.203Z' />
          <path d='m1063.35 489.09 170.73 66.978 4-10.203-170.73-66.978-4 10.203ZM1033.51 489.158l222.43 87.261 4-10.203-222.43-87.261-4 10.203Z' />
          <path d='m1064.28 512.997 152.87 59.97 4-10.203-152.86-59.97-4.01 10.203Z' />
          <path d='m1041.67 515.902 190.1 74.574 4-10.203-190.09-74.574-4.01 10.203Z' />
          <path d='m1061.28 535.359 142.87 56.047 4-10.203-142.87-56.047-4 10.203ZM1021.54 531.544l214.36 84.091 4-10.203-214.36-84.091-4 10.203Z' />
          <path d='m1041.86 551.279 165.73 65.016 4-10.203-165.73-65.016-4 10.203ZM1027.43 557.393l186.58 73.198 4.01-10.203-186.59-73.198-4 10.203Z' />
          <path d='m996.764 557.133 239.886 94.105 4-10.203-239.88-94.105-4.006 10.203ZM1013.83 575.603l197.76 77.58 4-10.203-197.76-77.58-4 10.203Z' />
          <path d='m1023.35 591.101 170.73 66.978 4-10.203-170.73-66.978-4 10.203ZM988.168 589.076l233.072 91.435 4.01-10.203-233.08-91.435-4.002 10.203Z' />
          <path d='m1034.44 618.992 132.53 51.994 4.01-10.203-132.54-51.994-4 10.203ZM1001.66 617.909l190.1 74.574 4-10.203-190.1-74.574-4 10.203Z' />
          <path d='m1021.28 637.369 142.87 56.048 4-10.203-142.87-56.047-4 10.202ZM981.528 633.551l214.352 84.091 4.01-10.203-214.36-84.091-4.002 10.203Z' />
          <path d='m1001.84 653.285 165.74 65.017 4-10.203-165.73-65.017-4.01 10.203ZM987.405 659.4l186.585 73.198 4-10.203-186.583-73.198-4.002 10.203Z' />
          <path d='m956.76 659.144 239.88 94.105 4-10.203-239.877-94.105-4.003 10.203ZM987.334 682.913l170.736 66.978 4-10.203-170.733-66.978-4.003 10.203Z' />
          <path d='m983.333 693.108 170.727 66.978 4.01-10.203-170.735-66.978-4.002 10.203ZM948.155 691.083l233.075 91.435 4-10.203-233.072-91.435-4.003 10.203Z' />
          <path d='m984.258 717.011 152.872 59.969 4-10.202-152.87-59.97-4.002 10.203Z' />
          <path d='m961.651 719.907 190.099 74.574 4-10.203-190.096-74.574-4.003 10.203Z' />
          <path d='m981.268 739.367 142.872 56.048 4-10.203-142.87-56.048-4.002 10.203ZM955.771 741.14l185.849 72.909 4-10.203-185.846-72.909-4.003 10.203Z' />
          <path d='M961.833 755.283 1127.57 820.3l4-10.203-165.734-65.017-4.003 10.203ZM947.395 761.398l186.585 73.198 4-10.203-186.582-73.198-4.003 10.203Z' />
          <path d='m916.751 761.141 239.879 94.106 4.01-10.203-239.886-94.106-4.003 10.203Z' />
          <path d='m933.807 779.608 197.753 77.58 4.01-10.203-197.76-77.58-4.003 10.203Z' />
          <path d='m943.323 795.106 170.737 66.978 4-10.203-170.734-66.978-4.003 10.203ZM908.155 793.084l233.075 91.436 4-10.203-233.072-91.436-4.003 10.203Z' />
        </g>
      </g>
      <g
        style={{
          mixBlendMode: 'multiply'
        }}
        fill={fill}
      >
        <path d='M526.14 741.13c-4.57-.4-9.16-.76-13.68-1-10.21-.52-19.78-.21-25.32.07v20.26c5.54-.29 15.11-.6 25.32-.08 4.52.23 9.11.6 13.68 1 7.02.62 14.01 1.29 20.75 1.64v-20.26c-6.74-.34-13.73-1.02-20.75-1.63Zm-36.95 9.53c3.05-.14 7.13-.26 11.72-.26 3.98 0 7.85.09 11.49.28 4.53.23 9.17.61 13.74 1.01v7.64c-4.51-.4-9.09-.77-13.57-.99-3.71-.19-7.63-.29-11.67-.29-4.68 0-8.82.13-11.71.26v-7.65Zm0-8.5c2.88-.13 7.04-.26 11.72-.26 3.96 0 7.81.09 11.45.28 4.54.23 9.2.61 13.78 1.01v7.68c-4.57-.4-9.21-.77-13.74-1.01-3.64-.18-7.51-.28-11.49-.28-4.59 0-8.67.13-11.72.26v-7.68Z' />
        <path d='M529.76 742.66c-1.2-.11-2.41-.21-3.62-.32-4.57-.4-9.21-.78-13.74-1.01-3.64-.19-7.51-.28-11.49-.28-5.03 0-9.45.15-12.57.3v17.85c3.13-.15 7.55-.3 12.56-.3 4.02 0 7.94.1 11.62.28 4.5.23 9.1.61 13.62 1 1.29.11 2.56.23 3.83.34 5.21.46 10.58.94 15.72 1.23V743.9c-5.22-.29-10.66-.77-15.93-1.24Zm-40.57-.5c2.88-.13 7.04-.26 11.72-.26 3.96 0 7.81.09 11.45.28 4.54.23 9.2.61 13.78 1.01v7.68c-4.57-.4-9.21-.77-13.74-1.01-3.64-.18-7.51-.28-11.49-.28-4.59 0-8.67.13-11.72.26v-7.68Zm23.38 16.18c-3.71-.19-7.63-.29-11.67-.29-4.68 0-8.82.13-11.71.26v-7.65c3.05-.14 7.13-.26 11.72-.26 3.98 0 7.85.09 11.49.28 4.53.23 9.17.61 13.74 1.01v7.64c-4.51-.4-9.09-.77-13.57-.99Z' />
        <path d='M544.84 744.7v16.15c-4.85-.29-9.9-.74-14.79-1.18-1.29-.11-2.6-.23-3.91-.34v-7.64c-4.57-.4-9.21-.78-13.74-1.01-3.64-.19-7.51-.28-11.49-.28-4.59 0-8.67.12-11.72.26v-.82c3.05-.13 7.13-.26 11.72-.26 3.98 0 7.85.1 11.49.28 4.53.24 9.17.61 13.74 1.01v-7.68c1.18.1 2.35.21 3.52.31 5.07.45 10.21.91 15.18 1.2Z' />
        <path d='M526.14 743.19v7.68c-4.57-.4-9.21-.77-13.74-1.01-3.64-.18-7.51-.28-11.49-.28-4.59 0-8.67.13-11.72.26v-7.68c2.88-.13 7.04-.26 11.72-.26 3.96 0 7.81.09 11.45.28 4.54.23 9.2.61 13.78 1.01ZM526.14 751.69v7.64c-4.51-.4-9.09-.77-13.57-.99-3.71-.19-7.63-.29-11.67-.29-4.68 0-8.82.13-11.71.26v-7.65c3.05-.14 7.13-.26 11.72-.26 3.98 0 7.85.09 11.49.28 4.53.23 9.17.61 13.74 1.01ZM534.55 754.54l-2.5 2.5c-.15-.13-.3-.26-.44-.4a6.531 6.531 0 0 1-1.05-7.86c.45-.21.95-.31 1.46-.31a3.555 3.555 0 0 1 2.52 6.07h.01Z' />
        <path d='M535.11 745.6c.72.34 1.38.81 1.96 1.39a7.08 7.08 0 0 1 2.09 5.029c0 1.9-.74 3.691-2.09 5.031l-1.46 1.459c.58.06 1.17.031 1.74-.069l.56-.561a8.236 8.236 0 0 0 2.43-5.87c0-2.22-.86-4.3-2.43-5.87-.2-.2-.41-.389-.63-.569-.72-.12-1.45-.11-2.17.01v.02Z' />
        <path d='M536.231 747.83a5.923 5.923 0 0 0-2.981-1.61c-.54.28-1.04.63-1.5 1.06h.291c1.27 0 2.46.49 3.36 1.39a4.75 4.75 0 0 1 0 6.71l-2.341 2.34c.37.21.761.38 1.171.51l2.01-2.01c2.31-2.31 2.31-6.07 0-8.39h-.01ZM540.841 747.41c-.32-.32-.67-.61-1.04-.85a9.437 9.437 0 0 1 1.72 5.46c0 1.98-.6 3.88-1.73 5.46.37-.24.72-.52 1.04-.85a6.524 6.524 0 0 0 0-9.23l.01.01ZM494.78 747.24c.01.45-.09.78-.3 1.01-.21.23-.51.34-.91.36-.42.01-.74-.09-.96-.31-.22-.22-.35-.55-.36-.98l-.1-2.69c-.02-.43.08-.77.3-1.02.22-.25.53-.38.94-.39.41-.01.73.1.96.34.23.24.35.57.36 1.01.03 1.08.05 1.62.08 2.69l-.01-.02Zm-.79-2.74c0-.21-.06-.37-.16-.47-.1-.11-.24-.16-.43-.15-.17 0-.31.07-.4.18-.09.11-.14.27-.13.48l.1 2.8c.02.42.21.62.58.61.18 0 .31-.06.4-.16.09-.1.14-.26.13-.48-.04-1.12-.05-1.68-.09-2.8v-.01ZM496.77 748.47c-.04-2.12-.06-3.19-.11-5.31.61-.01.91-.02 1.51-.03.38 0 .65.08.81.27.15.18.23.45.24.78v.73c0 .25-.04.44-.14.59-.1.14-.23.24-.4.28v.03c.19.03.33.12.43.25.1.13.14.33.15.6 0 .71.01 1.06.02 1.77h-.7c0-.73-.01-1.09-.02-1.82 0-.17-.04-.29-.1-.37-.07-.08-.18-.11-.36-.11-.26 0-.39 0-.65.01.02.92.02 1.39.04 2.31-.28 0-.42 0-.7.01l-.02.01Zm1.74-4.2c0-.16-.04-.29-.11-.37-.07-.08-.2-.12-.37-.12-.25 0-.38 0-.63.01.01.7.02 1.05.03 1.75.25 0 .38 0 .63-.01.15 0 .26-.04.34-.12.08-.08.12-.22.12-.43v-.71h-.01ZM501.23 748.43v-5.31h.74v5.31h-.74ZM505.93 748.46c0-.16-.01-.25-.02-.41h-.03c-.07.13-.17.23-.29.32-.12.09-.29.13-.52.12-.36 0-.64-.12-.84-.36-.2-.23-.29-.57-.29-1 .01-1.08.02-1.62.03-2.7 0-.43.11-.77.33-1 .22-.24.53-.35.94-.35.41 0 .73.13.94.38.21.25.31.59.3 1.02v.3c-.28 0-.41 0-.69-.01v-.37c0-.21-.04-.37-.13-.48-.09-.11-.23-.17-.41-.18-.36 0-.55.21-.55.63-.01 1.12-.02 1.68-.04 2.8 0 .42.17.63.51.64.31 0 .5-.17.57-.53 0-.42.01-.63.02-1.05h-.61v-.64c.52 0 .78.01 1.3.02-.02 1.14-.03 1.7-.06 2.84h-.47l.01.01ZM508.38 748.52l.15-5.31c.29 0 .44.01.74.02-.07 2.12-.1 3.19-.17 5.31-.29 0-.43-.01-.72-.02ZM512.94 748.69c-.41-1.67-.62-2.5-1.04-4.16h-.03c0 .4 0 .77-.02 1.12-.05 1.2-.08 1.79-.13 2.99-.25-.01-.38-.02-.63-.03.08-2.12.13-3.18.21-5.31.39.02.58.02.97.04.39 1.54.58 2.32.95 3.86h.03c0-.5.02-.93.04-1.29.05-1.01.07-1.51.12-2.52.26.01.39.02.65.03-.11 2.12-.16 3.18-.27 5.3-.34-.02-.5-.03-.84-.04l-.01.01ZM517.74 748.97c-.05-.5-.07-.76-.12-1.26-.39-.03-.59-.04-.98-.06-.11.49-.16.74-.27 1.23-.28-.02-.42-.03-.7-.04.49-2.1.73-3.15 1.23-5.25.4.02.59.04.99.06.23 2.14.34 3.22.55 5.36l-.7-.05v.01Zm-.97-1.93.79.05c-.09-.94-.14-1.41-.23-2.35h-.03c-.21.92-.32 1.38-.53 2.3ZM520.34 749.16c.17-2.12.25-3.18.42-5.3.29.02.44.03.73.06-.15 1.86-.23 2.78-.38 4.64.53.04.79.06 1.31.11-.02.26-.03.39-.06.65-.81-.07-1.22-.1-2.03-.17l.01.01ZM496.76 753.11v-.3c0-.2-.05-.35-.15-.46-.09-.11-.24-.17-.45-.16-.2 0-.34.06-.43.17-.09.11-.13.24-.13.4v.21c0 .12.03.22.07.29.05.08.13.17.26.26.09.07.2.14.31.2.11.07.22.14.33.2.11.07.22.13.32.2s.2.13.27.19c.13.1.23.23.3.37.07.14.11.34.11.58v.33c0 .42-.09.74-.29.96-.2.23-.54.34-1.01.36-.47.01-.81-.09-1.02-.31-.21-.22-.32-.55-.34-.99 0-.12 0-.18-.01-.3.27 0 .41-.01.69-.02v.31c0 .22.06.38.16.49.1.11.26.16.48.15.19 0 .33-.06.43-.15.1-.1.15-.25.14-.47v-.24c0-.08 0-.15-.02-.21a.492.492 0 0 0-.06-.17.755.755 0 0 0-.11-.14c-.05-.04-.1-.09-.17-.14-.19-.15-.39-.28-.59-.39-.2-.11-.39-.24-.56-.4-.14-.13-.25-.27-.32-.42-.08-.15-.12-.33-.12-.54v-.23c-.01-.35.08-.64.28-.87.2-.23.53-.35.98-.36.25 0 .45.02.62.09.17.07.3.16.4.28.1.12.17.27.22.43.04.17.07.35.07.55v.23c-.27 0-.41 0-.69.01l.03.01ZM502.07 755.52c0 .45-.109.78-.329 1-.22.22-.521.33-.931.33-.42 0-.729-.11-.949-.34-.22-.23-.33-.56-.33-.99-.01-1.08-.021-1.62-.031-2.7 0-.43.111-.77.331-1.01.23-.24.54-.36.96-.37.41 0 .73.12.95.37.22.25.329.58.329 1.02v2.7-.01Zm-.709-2.76c0-.21-.05-.37-.15-.48-.1-.11-.24-.17-.43-.17-.18 0-.311.06-.411.17-.1.11-.149.27-.139.48 0 1.12-.001 1.68.019 2.8 0 .42.19.63.56.63.18 0 .311-.05.411-.15.1-.1.14-.26.14-.47V752.76ZM505.861 754.68c.28 0 .41 0 .69.02 0 .35-.01.53-.02.89-.01.45-.131.78-.341.99-.21.21-.519.32-.919.31-.42 0-.73-.13-.93-.36-.2-.24-.3-.57-.3-1 .01-1.09.02-1.64.04-2.74 0-.45.12-.78.33-1 .22-.22.53-.32.94-.31.42 0 .73.13.95.35.21.22.31.56.3 1 0 .25 0 .38-.02.63-.28 0-.42-.01-.69-.02 0-.25 0-.38.01-.63 0-.21-.04-.37-.13-.48-.09-.11-.23-.17-.41-.18-.37 0-.55.2-.56.63l-.051 2.81c0 .2.04.36.12.47.08.11.221.16.411.17.36 0 .55-.2.56-.61 0-.37.01-.56.02-.93v-.01ZM510.34 754.84c.27.01.41.02.69.03-.02.35-.03.53-.04.89-.02.45-.14.78-.36.98-.22.21-.53.3-.93.29-.42-.02-.72-.15-.92-.39-.2-.24-.29-.58-.28-1.01l.1-2.73c.02-.45.13-.78.36-.99.22-.21.54-.31.95-.29.42.02.73.14.94.37.21.23.3.57.28 1.01-.01.25-.02.38-.03.63-.28-.01-.42-.02-.69-.03.01-.25.02-.38.03-.63 0-.21-.03-.37-.12-.49s-.22-.18-.41-.19c-.37-.02-.56.19-.57.62-.05 1.12-.07 1.68-.11 2.81 0 .2.03.36.11.47.08.11.22.17.4.18.36.02.56-.18.57-.6.02-.37.03-.56.04-.93h-.01ZM512.88 757.14c.13-2.12.19-3.18.32-5.3.79.05 1.18.07 1.97.13-.02.26-.03.39-.04.65-.5-.03-.75-.05-1.24-.08l-.1 1.55c.45.03.68.04 1.13.07l-.05.65c-.45-.03-.67-.05-1.12-.07-.05.72-.07 1.08-.11 1.8.51.03.77.05 1.28.09l-.05.65c-.79-.06-1.19-.08-1.98-.13l-.01-.01ZM516.771 757.41c.17-2.12.249-3.18.419-5.29.61.05.911.07 1.521.13.38.03.64.15.78.35.14.2.19.47.16.8-.03.29-.04.44-.07.73-.02.24-.091.43-.201.57a.686.686 0 0 1-.429.24v.03c.19.05.32.15.4.29.08.14.109.35.089.61-.07.7-.099 1.06-.159 1.76-.28-.03-.42-.04-.7-.06.06-.73.1-1.09.16-1.82.02-.17-.001-.3-.061-.38-.06-.08-.169-.13-.349-.15-.26-.02-.391-.03-.651-.06-.08.92-.119 1.38-.189 2.3-.28-.02-.42-.03-.7-.06l-.02.01Zm2.159-4c.01-.16-.009-.29-.079-.38-.07-.09-.19-.14-.36-.16l-.63-.05-.15 1.75.63.05c.15.01.259-.02.349-.09.09-.07.151-.21.161-.41.03-.28.04-.43.06-.71h.019Z' />
      </g>
    </svg>
  )
}

export default Modelo2