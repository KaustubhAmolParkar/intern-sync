import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-16 h-16', className)}
    >
      <rect width="600" height="600" rx="300" className="fill-primary" />
      <g filter="url(#filter0_d_9_369)">
        <path
          d="M196.588 477C196.332 476.762 196.502 476.343 196.45 476.313C191.431 473.424 190.203 468.876 190.748 463.491C190.883 462.155 190.768 460.794 190.768 459.089C189.089 459.089 187.749 459.089 186.409 459.089C171.527 459.089 156.645 459.03 141.764 459.107C130.777 459.164 122.638 453.69 116.07 445.612C111.178 439.594 109.042 432.366 109 424.577C108.953 415.617 112.525 408.058 117.756 401.002C127.259 388.183 136.576 375.224 145.943 362.303C156.094 348.3 166.253 334.303 176.335 320.25C186.087 306.656 195.623 292.906 205.484 279.393C212.886 269.252 222.577 262.422 235.298 260.717C238.767 260.252 242.294 260.035 245.795 260.03C283.228 259.982 320.662 259.896 358.094 260.064C369.314 260.114 379.515 263.941 387.222 272.208C393.337 278.768 398.559 286.193 403.904 293.437C413.178 306.007 422.269 318.714 431.382 331.402C438.259 340.977 445.029 350.629 451.886 360.218C462.408 374.935 473.124 389.516 483.405 404.399C486.414 408.756 488.223 413.945 490.82 418.599C491.056 423.74 491.056 429.036 490.841 434.462C490.314 435.036 489.882 435.439 489.708 435.933C484.769 449.97 471.369 459.683 456.316 459.19C441.922 458.719 427.502 459.089 413.093 459.089C411.889 459.089 410.684 459.089 409.285 459.089C409.285 460.736 409.242 461.872 409.292 463.004C409.527 468.293 409.895 473.621 404.081 476.57C404.212 476.714 404.343 476.857 404.475 477C335.286 477 266.098 477 196.588 477ZM406.655 322.434C404.735 318.978 401.897 317.162 397.856 317.163C332.36 317.184 266.863 317.175 201.367 317.183C195.802 317.184 191.47 321.48 191.469 326.947C191.463 369.305 191.461 411.664 191.459 454.022C191.459 455.137 191.459 456.251 191.459 457.483C263.766 457.483 335.708 457.483 407.911 457.483C407.911 455.9 407.911 454.542 407.911 453.185C407.911 411.974 407.925 370.763 407.872 329.553C407.869 327.32 407.307 325.087 406.655 322.434Z"
          fill="white"
        />
      </g>
      <g filter="url(#filter1_d_9_369)">
        <path
          d="M301.115 74C302.108 74.6917 302.699 75.6117 303.539 76.0396C311.068 79.8729 318.658 83.5869 326.198 87.3987C341.888 95.3305 357.576 103.267 373.231 111.267C383.372 116.449 393.455 121.746 403.56 126.997C404.046 127.25 404.5 127.564 405.559 128.208C399.286 131.618 393.498 134.985 387.497 137.916C385.152 139.062 384.48 140.356 384.493 142.84C384.591 161.437 384.786 180.039 384.418 198.63C384.287 205.261 389.587 211.831 396.929 211.943C396.929 214.075 396.929 216.219 396.929 218.364C396.929 220.404 396.929 222.443 396.929 224.423C385.2 226.441 373.107 217.73 371.507 206.317C371.115 203.52 370.847 200.681 370.835 197.861C370.771 182.478 370.804 167.094 370.804 151.711C370.804 150.473 370.804 149.236 370.804 147.366C368.508 148.606 366.562 149.441 364.864 150.631C362.987 151.946 362.159 151.529 361.06 149.588C353.434 136.109 342.748 125.826 328.596 119.43C313.242 112.491 297.306 111.145 281.064 115.593C270.637 118.448 261.376 123.507 253.179 130.808C246.649 136.623 241.651 143.417 237.366 150.886C236.633 152.164 236.205 152.992 234.319 151.988C220.89 144.841 207.364 137.877 193.34 130.58C199.031 127.477 204.457 124.445 209.949 121.539C227.771 112.108 245.624 102.736 263.453 93.3169C274.297 87.5874 285.121 81.819 295.942 76.0446C296.819 75.5766 297.599 74.9261 298.195 74.1802C298.92 74 299.874 74 301.115 74Z"
          fill="white"
        />
      </g>
      <g filter="url(#filter2_d_9_369)">
        <path
          d="M261.729 232.284C252.656 225.075 246.687 216 242.94 205.361C239.367 195.215 238.545 184.815 240.429 174.27C242.867 160.623 249.222 148.99 259.559 139.778C268.92 131.434 279.8 126.394 292.431 124.859C300.817 123.839 308.796 124.778 316.802 127.001C324.355 129.099 331.029 132.795 337.105 137.684C345.739 144.631 352.059 153.314 355.633 163.774C357.323 168.72 358.176 173.984 359.085 179.162C360.985 189.991 358.489 200.265 354.237 210.095C350.516 218.7 344.832 225.885 337.55 231.945C329.842 238.359 321.152 242.775 311.495 244.542C295.659 247.441 280.508 245.095 266.809 235.989C265.134 234.875 263.539 233.639 261.729 232.284Z"
          fill="white"
        />
      </g>
      <g filter="url(#filter3_d_9_369)">
        <path
          d="M330.151 411.686C316.524 429.718 295.401 430.751 280.958 422.856C267.179 415.324 260.951 402.749 261.893 387.6C262.977 370.15 273.689 358.395 288.094 353.785C308.933 347.116 331.297 359.51 336.203 381.215C338.532 391.515 337.443 402.309 330.151 411.686Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_9_369"
          x="107"
          y="259.965"
          width="390"
          height="226.035"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="5" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_369"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_369"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_9_369"
          x="191.34"
          y="74"
          width="220.219"
          height="159.714"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="5" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_369"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_369"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_9_369"
          x="237.447"
          y="124.448"
          width="128.283"
          height="130.266"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="5" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_369"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_369"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_9_369"
          x="259.8"
          y="351.979"
          width="83.5012"
          height="84.5669"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="5" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_369"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_369"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Logo;
