import React from "react";
import webos from "./images/webos.png"

const Distrubution = () => {
  return (
    <div>
      <div>
        <div>
          <div style={{ backgroundColor: "#f7fafc" }}>
            <br />
            <br />

            <div className="px-72">
              <h1 className="text-2xl mb-2  ">Web Platform</h1>
            </div>
            <br />
            <div
              className="grid grid-cols-3 gap-4 px-36"
              style={{ paddingLeft: "18%" }}
            >
              <div className="max-w-md mx-auto bg-white  shadow-md overflow-hidden md:max-w-sm bg-white border border-gray-300 rounded shadow flex flex-col justify-center items-center p-16">
                <div className=" mx-auto">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="162"
                      className="mx-auto"
                      height="101"
                      viewBox="0 0 162 101"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <g fill="#141516">
                          <path d="M17.906 78.333h117.188V4.51H17.906v73.824zM134.314 0H18.686C16.098 0 14 2.113 14 4.72V84h125V4.72c0-2.607-2.098-4.72-4.686-4.72z" />
                          <path d="M143.63 89H9.37a12.274 12.274 0 0 1-8.184-3.13l-.997-.891A.56.56 0 0 1 .56 84h151.88a.56.56 0 0 1 .372.979l-.997.892A12.275 12.275 0 0 1 143.631 89" />
                        </g>
                        <path
                          fill="#FFF"
                          d="M124.176 18h29.648A6.175 6.175 0 0 1 160 24.174v68.652A6.175 6.175 0 0 1 153.824 99h-29.648A6.175 6.175 0 0 1 118 92.826V24.174A6.175 6.175 0 0 1 124.176 18"
                        />
                        <path
                          stroke="#006AFF"
                          stroke-width="3"
                          d="M124.176 18h29.648A6.175 6.175 0 0 1 160 24.174v68.652A6.175 6.175 0 0 1 153.824 99h-29.648A6.175 6.175 0 0 1 118 92.826V24.174A6.175 6.175 0 0 1 124.176 18z"
                        />
                        <path
                          fill="#006AFF"
                          d="M126 19.25V18h25v1.25c-.571-.003-.98.414-1.226 1.25a2.069 2.069 0 0 1-1.976 1.5h-18.596c-.911 0-1.715-.61-1.976-1.5-.246-.836-.655-1.253-1.226-1.25"
                        />
                      </g>
                    </svg>
                  </div>
                  <a href="https://s2i.uscreen.io">
                    <span
                      className=" text-sm my-5 pl-12 text-center"
                      style={{ color: "#75aeff" }}
                    >
                      https://s2i.uscreen.io
                    </span>
                  </a>
                  <button
                    className=" box-border mx-auto connected
                 inline-flex items-center text-base leading-normal font-medium rounded  transition duration-200   
                 disabled:opacity-50   justify-center w-full mt-4 text-white "
                 disabled style={{ backgroundColor: "#d1d8e1", height: "36px" }}
                  >
                    Connected
                  </button>
                  <div className="text-sm text-gray-800 text-center mt-4">
                    Works on all web browsers.
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-300 rounded shadow col-span-2 p-8 bg-gray-200">
                <div className="inline-block p-3 bg-white shadow rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="34"
                    viewBox="0 0 35 34"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        stroke="#006AFF"
                        stroke-linecap="round"
                        d="M24.466 12.8c4.918.703 8.699 4.933 8.699 10.046 0 1.841-.49 3.568-1.348 5.056-.5.868-.51 1.932-.003 2.795l1.35 2.297H23.017c-5.062 0-9.259-3.707-10.023-8.555"
                      />
                      <path
                        stroke="#000"
                        d="M12.993 24.33c6.528 0 11.767-5.516 11.31-12.142-.386-5.59-4.916-10.12-10.506-10.505C7.17 1.225 1.654 6.464 1.654 12.993c0 2.057.549 3.986 1.507 5.65a3.1 3.1 0 0 1 .002 3.121l-1.509 2.567h11.339z"
                      />
                    </g>
                  </svg>
                </div>
                <h3 className="text-lg mt-4 mb-2">
                  What’s the difference between the Web Platform and Native OTT
                  Apps?
                </h3>{" "}
                <p className="mb-2 text-sm text-gray-700">
                  The <strong>Web Platform</strong> streams your video content
                  via any browser accessible on computers, phones, tablets, etc.{" "}
                  <br /> <strong>Native OTT Apps</strong> deliver video
                  streaming directly to user’s mobile device or TV via an
                  installed app - no browser necessary. Research shows that
                  majority of users prefer native OTT apps over the internet
                  browser, which is a strong consideration if you’re planning to
                  scale your service. Depending on your package, additional fees
                  may apply.
                </p>{" "}
                <button
                  type="button"
                  className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition duration-200 color-primary size-sm variant-light"
                >
                  <a href="https://www.uscreen.tv/ott-platform/">Learn more</a>
                </button>
              </div>
            </div>
            <div className="px-72 pt-7">
              <h1 className="text-2xl mb-2  ">Native Apps</h1>
            </div>
            <div
              className="grid grid-cols-3  p-3 justify-center pl-4"
              style={{ paddingLeft: "18%", width: "96%" }}
            >
              <div
                className="bg-white border border-gray-300 rounded shadow flex flex-col  items-center justify-center"
                style={{ height: "90%", width: "90%" }}
              >
                <div
                  className="flex items-center pt-10"
                  style={{ height: "80px" }}
                >
                  <svg
                    width="70px"
                    height="70px"
                    viewBox="0 0 70 70"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>Group 2</title>
                    <desc>Created with Sketch.</desc>
                    <defs>
                      <path
                        d="M21.4589844,42 L21.4589844,32.5253906 L22.9707031,32.5253906 L22.9707031,42 L21.4589844,42 Z M22.2148438,30.6005859 C21.6347656,30.6005859 21.1601562,30.1259766 21.1601562,29.5458984 C21.1601562,28.9658203 21.6347656,28.4912109 22.2148438,28.4912109 C22.7949219,28.4912109 23.2695312,28.9658203 23.2695312,29.5458984 C23.2695312,30.1259766 22.7949219,30.6005859 22.2148438,30.6005859 Z M31.3818359,29.0185547 C34.9853516,29.0185547 37.1826172,31.5849609 37.1826172,35.6542969 C37.1826172,39.7060547 35.0029297,42.2988281 31.3818359,42.2988281 C27.7431641,42.2988281 25.5546875,39.7148438 25.5546875,35.6542969 C25.5546875,31.5761719 27.7958984,29.0185547 31.3818359,29.0185547 Z M31.3818359,30.4775391 C28.7978516,30.4775391 27.1806641,32.4814453 27.1806641,35.6542969 C27.1806641,38.8007812 28.7451172,40.8398438 31.3818359,40.8398438 C33.9833984,40.8398438 35.5566406,38.8007812 35.5566406,35.6542969 C35.5566406,32.4814453 33.9746094,30.4775391 31.3818359,30.4775391 Z M39.3183594,38.6865234 L40.9179688,38.6865234 C41.1113281,40.0136719 42.3769531,40.8574219 44.1787109,40.8574219 C45.8837891,40.8574219 47.140625,39.9345703 47.140625,38.6777344 C47.140625,37.5966797 46.3496094,36.9111328 44.6005859,36.4716797 L42.9746094,36.0498047 C40.6806641,35.4697266 39.6875,34.4326172 39.6875,32.6308594 C39.6875,30.4775391 41.4892578,29.0185547 44.1699219,29.0185547 C46.6220703,29.0185547 48.4501953,30.4775391 48.5820312,32.5253906 L46.9912109,32.5253906 C46.7714844,31.2246094 45.6992188,30.4511719 44.1171875,30.4511719 C42.4296875,30.4511719 41.3134766,31.2949219 41.3134766,32.578125 C41.3134766,33.5712891 42.0078125,34.1425781 43.7568359,34.5908203 L45.0839844,34.9423828 C47.7119141,35.6015625 48.7666016,36.6210938 48.7666016,38.484375 C48.7666016,40.8134766 46.9296875,42.2988281 44.0292969,42.2988281 C41.3398438,42.2988281 39.4853516,40.875 39.3183594,38.6865234 Z"
                        id="path-1"
                      ></path>
                    </defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Distribution"
                        transform="translate(-361.000000, -654.000000)"
                        fill-rule="nonzero"
                      >
                        <g
                          id="i-os"
                          transform="translate(361.000000, 654.000000)"
                        >
                          <g id="Group-2">
                            <rect
                              id="Rectangle-path"
                              fill="#101324"
                              x="0"
                              y="0"
                              width="70"
                              height="70"
                              rx="16"
                            ></rect>
                            <g id="iOS">
                              <use fill="#000000" xlinkHref="#path-1"></use>
                              <use fill="#FFFFFF" xlinkHref="#path-1"></use>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="my-4 font-medium text-lg pt-3">iOS</div>{" "}
                <button
                  type="button"
                  className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                  style={{
                    backgroundColor: "#006aff",
                    height: "65px",
                    color: "white",
                    width: "80%",
                  }}
                >
                  Request app
                </button>{" "}
                <a
                  href="https://www.uscreen.tv/ios-app/"
                  target="_blank"
                  className="block mt-4  text-sm break-all pb-7"
                  style={{ color: "#006aff" }}
                >
                  Find out more
                </a>
              </div>

              <div
                className="bg-white border border-gray-300 rounded shadow flex flex-col   items-center justify-center"
                style={{ height: "90%", width: "90%" }}
              >
                <div
                  className="flex items-center pt-8"
                  style={{ height: "80px" }}
                >
                  <svg
                    width="81px"
                    height="70px"
                    viewBox="0 0 81 70"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>android</title>
                    <desc>Created with Sketch.</desc>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Distribution---In-progress"
                        transform="translate(-640.000000, -654.000000)"
                        fill-rule="nonzero"
                      >
                        <g
                          id="android"
                          transform="translate(640.000000, 654.000000)"
                        >
                          <g
                            id="g80302"
                            transform="translate(0.063266, 52.125138)"
                            fill="#000000"
                          >
                            <path
                              d="M5.66499852,5.75165494 C2.91105258,5.75165494 0.0792596293,7.95847207 0.0792596293,11.821202 C0.0792596293,15.3524981 2.56906807,17.846754 5.66499852,17.846754 C8.22053537,17.846754 9.35949983,16.1314481 9.35949983,16.1314481 L9.35949983,16.8791458 C9.35949983,17.232545 9.69362924,17.6268434 10.1071975,17.6268434 L11.9544481,17.6268434 L11.9544481,6.01555246 L9.35949983,6.01555246 L9.35949983,7.48895829 C9.35949983,7.48895829 8.21099247,5.75165494 5.66499852,5.75165494 Z M6.12724113,8.12592473 C8.3943233,8.12592473 9.58352995,10.1197345 9.58352995,11.8203381 C9.58352995,13.7145353 8.17157302,15.5134715 6.13204857,15.5134715 C4.42713348,15.5134715 2.71930672,14.132679 2.71930672,11.7953409 C2.71930672,9.68548061 4.18900098,8.12592473 6.12724113,8.12592473 Z"
                              id="path825"
                            ></path>
                            <path
                              d="M15.5609836,17.6268514 C15.1623016,17.6268514 14.813286,17.3408925 14.813286,16.8791538 L14.813286,6.01556046 L17.4082343,6.01556046 L17.4082343,7.45244251 C17.9962543,6.56860059 19.1450497,5.74812735 20.908358,5.74812735 C23.7903852,5.74812735 25.3250319,8.04555001 25.3250319,10.1938699 L25.3250319,17.6268514 L23.5217602,17.6268514 C23.0489188,17.6268514 22.7300836,17.2310172 22.7300836,16.8351749 L22.7300836,10.7656359 C22.7300836,9.57482139 22.0004799,8.12861242 20.3131068,8.12861242 C18.492381,8.12861242 17.4082343,9.84932569 17.4082343,11.4693466 L17.4082343,17.6268514 L15.5609836,17.6268514 Z"
                              id="path829"
                            ></path>
                            <path
                              d="M32.8899582,5.75165494 C30.1360203,5.75165494 27.3042273,7.95847207 27.3042273,11.821202 C27.3042273,15.3524981 29.7940358,17.846754 32.8899582,17.846754 C35.4454951,17.846754 36.5844675,16.1314481 36.5844675,16.1314481 L36.5844675,16.8791458 C36.5844675,17.232545 36.9185969,17.6268434 37.3321652,17.6268434 L39.1794158,17.6268434 L39.1794158,0.209910974 L36.5844675,0.209910974 L36.5844675,7.4889503 C36.5844675,7.4889503 35.4359522,5.75165494 32.8899582,5.75165494 Z M33.3522088,8.12592473 C35.619291,8.12592473 36.8084977,10.1197345 36.8084977,11.8203381 C36.8084977,13.7145353 35.3965327,15.5134715 33.3570163,15.5134715 C31.6521012,15.5134715 29.9442744,14.132679 29.9442744,11.7953409 C29.9442744,9.68547261 31.4139607,8.12592473 33.3522088,8.12592473 L33.3522088,8.12592473 Z"
                              id="path833"
                            ></path>
                            <path
                              d="M42.7859513,17.6268514 C42.3872694,17.6268514 42.0382537,17.3408925 42.0382537,16.8791538 L42.0382537,6.01556046 L44.633202,6.01556046 L44.633202,7.95077696 C45.0798544,6.86666217 46.0436871,5.8836157 47.7559373,5.8836157 C48.2332662,5.8836157 48.6795666,5.97158154 48.6795666,5.97158154 L48.6795666,8.65448768 C48.6795666,8.65448768 48.122279,8.43457708 47.4480609,8.43457708 C45.6273351,8.43457708 44.633202,10.1552904 44.633202,11.7753193 L44.633202,17.6268514 L42.7859513,17.6268514 Z"
                              id="path835"
                            ></path>
                            <path
                              d="M64.4251801,17.6268514 C64.0264982,17.6268514 63.6774825,17.3408925 63.6774825,16.8791538 L63.6774825,6.01556046 L66.2724308,6.01556046 L66.2724308,17.6268514 L64.4251801,17.6268514 Z"
                              id="path837"
                            ></path>
                            <path
                              d="M73.881352,5.75165494 C71.1274061,5.75165494 68.2956131,7.95847207 68.2956131,11.821202 C68.2956131,15.3524981 70.7854216,17.846754 73.881352,17.846754 C76.4368809,17.846754 77.5758493,16.1314481 77.5758493,16.1314481 L77.5758493,16.8791458 C77.5758493,17.232545 77.9099787,17.6268434 78.323547,17.6268434 L80.1707976,17.6268434 L80.1707976,0.209910974 L77.5758493,0.209910974 L77.5758493,7.4889503 C77.5758493,7.4889503 76.427346,5.75165494 73.881352,5.75165494 L73.881352,5.75165494 Z M74.3435946,8.12592473 C76.6106768,8.12592473 77.7998794,10.1197345 77.7998794,11.8203381 C77.7998794,13.7145353 76.3879265,15.5134715 74.3484021,15.5134715 C72.643487,15.5134715 70.9356602,14.132679 70.9356602,11.7953409 C70.9356602,9.68547261 72.4053545,8.12592473 74.3435946,8.12592473 Z"
                              id="path839"
                            ></path>
                            <circle
                              id="path841"
                              cx="64.954531"
                              cy="1.79483993"
                              r="1.71630646"
                            ></circle>
                            <path
                              d="M55.5230883,5.74779139 C52.6389654,5.74779139 49.4702993,7.90064675 49.4702993,11.8005803 C49.4702993,15.3544339 52.1692596,17.847186 55.516817,17.847186 C59.6423405,17.847186 61.6567959,14.530697 61.6567959,11.8230897 C61.6567959,8.50057746 59.0628234,5.74779139 55.5230883,5.74779139 Z M55.5325272,8.17111151 C57.5269768,8.17111151 59.014677,9.77858186 59.014677,11.8078835 C59.014677,13.8723811 57.4354114,15.4654531 55.5384545,15.4654531 C53.7775219,15.4654531 52.0657516,14.0324186 52.0657516,11.8425915 C52.0657516,9.61626461 53.6938195,8.17111151 55.5325272,8.17111151 L55.5325272,8.17111151 Z"
                              id="path843"
                            ></path>
                          </g>
                          <path
                            d="M59.7355163,13.5854035 L66.374854,2.08418513 C66.7495159,1.43942278 66.5229782,0.620394357 65.8869217,0.245732452 C65.2508713,-0.128923398 64.423131,0.0888993481 64.057184,0.733664728 L57.3307148,12.3830073 C52.1987306,10.0391955 46.4219871,8.73224082 40.20958,8.73224082 C33.9971788,8.73224082 28.2204323,10.0391955 23.0884481,12.3830073 L16.3619789,0.733664728 C15.987317,0.0888993481 15.1682916,-0.128923398 14.5235262,0.245732452 C13.8787578,0.620394357 13.660932,1.43942278 14.0355939,2.08418513 L20.6749347,13.5854035 C9.22599487,19.7890957 1.4713828,31.3774426 0.190567012,44.9436545 L80.2285962,44.9436545 C78.9477774,31.3774426 71.1931629,19.7890957 59.7355163,13.5854035 Z M21.8337681,33.7038246 C19.9778886,33.7038246 18.479247,32.196468 18.479247,30.3493064 C18.479247,28.4934238 19.9866035,26.9947853 21.8337681,26.9947853 C23.6896477,26.9947853 25.1883302,28.5021388 25.1883302,30.3493064 C25.1970406,32.196468 23.6896477,33.7038246 21.8337681,33.7038246 Z M58.5766798,33.7038246 C56.7208033,33.7038246 55.2221526,32.196468 55.2221526,30.3493064 C55.2221526,28.4934238 56.7295122,26.9947853 58.5766798,26.9947853 C60.4325624,26.9947853 61.9312386,28.5021388 61.9312386,30.3493064 C61.939919,32.196468 60.4325624,33.7038246 58.5766798,33.7038246 Z"
                            id="path80319"
                            fill="#32DE84"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="my-4 font-medium text-lg pt-3">Android</div>{" "}
                <button
                  type="button"
                  className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                  style={{
                    backgroundColor: "#006aff",
                    height: "65px",
                    color: "white",
                    width: "80%",
                  }}
                >
                  Request app
                </button>{" "}
                <a
                  href="https://www.uscreen.tv/ios-app/"
                  target="_blank"
                  className="block mt-4  text-sm break-all pb-7"
                  style={{ color: "#006aff" }}
                >
                  Find out more
                </a>
              </div>

              <div
                className="bg-white border border-gray-300 rounded shadow flex flex-col   items-center justify-center"
                style={{ height: "90%", width: "90%" }}
              >
                <div
                  className="flex items-center pt-8"
                  style={{ height: "80px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="104"
                    height="32"
                    viewBox="0 0 104 32"
                  >
                    <defs>
                      <path id="a" d="M0 0h28.044v31.504H0z" />
                      <path id="c" d="M.015.011h78.434v25.68H.015z" />
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                      <g>
                        <mask id="b" fill="#fff">
                          <use xlinkHref="#a" />
                        </mask>
                        <path
                          fill="#6C3C97"
                          fill-rule="nonzero"
                          d="M28.044 31.504h-9.531l-7.568-10.501H8.4V31.48H0V0h12.034c6.937 0 12.6 4.718 12.6 10.522 0 3.54-2.171 6.702-5.475 8.636l8.885 12.346M16.233 10.522c0-2.928-2.356-5.286-5.236-5.286H8.4v10.525h2.597c2.88 0 5.236-2.36 5.236-5.24"
                          mask="url(#b)"
                        />
                      </g>
                      <g transform="translate(24.619 6.31)">
                        <mask id="d" fill="#fff">
                          <use xlinkHref="#c" />
                        </mask>
                        <path
                          fill="#6C3C97"
                          fill-rule="nonzero"
                          d="M45.542.534l-9.677 9.675V.502h-8.398v24.67h8.398V15.165l10.103 10.007h10.57l-12.837-12.84L54.334 1.704v14.64c0 4.862 2.924 9.347 10.285 9.347 3.495 0 6.702-1.982 8.26-3.775l3.777 3.257h1.793V.534H70.05v15.952c-.946 1.65-2.263 2.688-4.3 2.688-2.067 0-3.015-1.225-3.015-5.143V.534H45.542zM25.829 12.85c0 7.13-5.799 12.84-12.93 12.84C5.771 25.69.015 19.98.015 12.85.015 5.725 5.77.01 12.899.01c7.131 0 12.93 5.714 12.93 12.839v.001zM12.9 6.102c-2.218 0-4.105 3.015-4.105 6.748 0 3.732 1.887 6.752 4.105 6.752 2.27 0 4.154-3.02 4.154-6.752 0-3.733-1.884-6.748-4.154-6.748z"
                          mask="url(#d)"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="my-5 font-medium text-lg pt-3">Roku</div>{" "}
                <button
                  type="button"
                  className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                  style={{
                    backgroundColor: "#006aff",
                    height: "65px",
                    color: "white",
                    width: "80%",
                  }}
                >
                  Request app
                </button>{" "}
                <a
                  href="https://www.uscreen.tv/ios-app/"
                  target="_blank"
                  className="block mt-4  text-sm break-all pb-7"
                  style={{ color: "#006aff" }}
                >
                  Find out more
                </a>
              </div>
            </div>
            <div
              className="grid grid-cols-3  p-3 justify-center pl-4"
              style={{ paddingLeft: "18%", width: "96%" }}
            >
              <div
                className="bg-white border border-gray-300 rounded shadow flex flex-col  items-center justify-center"
                style={{ height: "90%", width: "90%" }}
              >
                <div
                  className="flex items-center pt-10"
                  style={{ height: "80px" }}
                >
                  <svg
                    width="92px"
                    height="44px"
                    viewBox="0 0 92 44"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>apple-tv</title>
                    <desc>Created with Sketch.</desc>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Distribution---In-progress"
                        transform="translate(-920.000000, -665.000000)"
                        fill="#000000"
                        fill-rule="nonzero"
                      >
                        <g
                          id="apple-tv"
                          transform="translate(920.000000, 665.000000)"
                        >
                          <path
                            d="M24.425,7.2 C26.05,5.2 26.825,2.65 26.6,0.1 C24.1,0.35 21.775,1.55 20.125,3.45 C18.475,5.3 17.625,7.725 17.8,10.2 C20.325,10.3 22.8,9.175 24.425,7.2"
                            id="Path"
                          ></path>
                          <path
                            d="M24.425,7.025 C26,5.075 26.775,2.575 26.6,0.075 C24.1,0.325 21.775,1.525 20.125,3.425 C18.475,5.275 17.625,7.7 17.8,10.175 C20.375,10.25 22.825,9.075 24.425,7.025"
                            id="Path"
                          ></path>
                          <path
                            d="M26.55,10.6 C22.95,10.375 19.875,12.65 18.225,12.65 C16.575,12.65 13.875,10.7 11,10.75 C7.2,10.85 3.75,12.975 1.95,16.3 C-1.95,23 0.925,33 4.725,38.35 C6.55,41.125 8.75,43.9 11.675,43.9 C14.6,43.9 15.5,42.125 18.85,42.125 C22.2,42.125 23.15,43.9 26.075,43.85 C29,43.8 30.975,41.075 32.8,38.45 C34.1,36.55 35.1,34.45 35.8,32.25 C32.25,30.675 29.975,27.15 30,23.275 C30.05,19.875 31.85,16.725 34.75,14.95 C32.9,12.325 29.925,10.7 26.725,10.6"
                            id="Path"
                          ></path>
                          <path
                            d="M54.975,7.05 L54.975,13.975 L60.525,13.975 L60.525,18.75 L54.975,18.75 L54.975,35 C54.975,37.525 56.075,38.7 58.55,38.7 C59.225,38.7 59.875,38.65 60.55,38.55 L60.55,43.3 C59.45,43.5 58.325,43.6 57.2,43.575 C51.225,43.575 48.875,41.325 48.875,35.625 L48.875,18.825 L44.675,18.825 L44.675,13.975 L48.95,13.975 L48.95,7.05 L54.975,7.05 L54.975,7.05 Z"
                            id="Path"
                          ></path>
                          <polygon
                            id="Path"
                            points="80.85 43.5 74.4 43.5 63.75 13.975 70.2 13.975 77.6 37.525 77.6 37.525 85.1 13.975 91.425 13.975"
                          ></polygon>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="my-4 font-medium text-lg pt-3">Apple TV</div>{" "}
                <button
                  type="button"
                  className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                  style={{
                    backgroundColor: "#006aff",
                    height: "65px",
                    color: "white",
                    width: "80%",
                  }}
                >
                  Request app
                </button>{" "}
                <a
                  href="https://www.uscreen.tv/ios-app/"
                  target="_blank"
                  className="block mt-4  text-sm break-all pb-7"
                  style={{ color: "#006aff" }}
                >
                  Find out more
                </a>
              </div>

              <div
                className="bg-white border border-gray-300 rounded shadow flex flex-col   items-center justify-center"
                style={{ height: "90%", width: "90%" }}
              >
                <div
                  className="flex items-center pt-8"
                  style={{ height: "80px" }}
                >
                  <svg
                    width="99px"
                    height="54px"
                    viewBox="0 0 99 54"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsxlink="http://www.w3.org/1999/xlink"
                  >
                    <title>fire-tv</title>
                    <desc>Created with Sketch.</desc>
                    <defs>
                      <polygon
                        id="path-1"
                        points="0.023605245 0.0865902062 70.6401958 0.0865902062 70.6401958 16 0.023605245 16"
                      ></polygon>
                      <polygon
                        id="path-3"
                        points="0 0.844479163 14.4157 0.844479163 14.4157 31.5145 0 31.5145"
                      ></polygon>
                      <polygon
                        id="path-5"
                        points="0.0249715618 0.893 19.909 0.893 19.909 21.515 0.0249715618 21.515"
                      ></polygon>
                    </defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Distribution---In-progress"
                        transform="translate(-346.000000, -967.000000)"
                      >
                        <g
                          id="fire-tv"
                          transform="translate(346.000000, 966.000000)"
                        >
                          <g
                            id="Group-3"
                            transform="translate(10.000000, 38.155500)"
                          >
                            <mask id="mask-2" fill="white">
                              <use xlinkHref="#path-1"></use>
                            </mask>
                            <g id="Clip-2"></g>
                            <path
                              d="M68.7836,4.4361 C59.2796,8.4671 48.9516,10.4171 39.5546,10.4171 C25.6266,10.4171 12.1396,6.5961 1.2346,0.2501 C0.2806,-0.3049 -0.4274,0.6731 0.3666,1.3901 C10.4736,10.5171 23.8316,16.0001 38.6636,16.0001 C49.2476,16.0001 61.5386,12.6731 70.0156,6.4171 C71.4186,5.3801 70.2166,3.8281 68.7836,4.4361"
                              id="Fill-1"
                              fill="#FC4C02"
                              mask="url(#mask-2)"
                            ></path>
                          </g>
                          <path
                            d="M73.4332,39.0661 C72.6872,39.5901 72.8152,40.3141 73.6432,40.2141 C76.3762,39.8871 82.4592,39.1561 83.5442,40.5451 C84.6292,41.9341 82.3382,47.6551 81.3142,50.2111 C81.0042,50.9831 81.6702,51.2961 82.3692,50.7111 C86.9172,46.9061 88.0932,38.9341 87.1622,37.7831 C86.2372,36.6421 78.2862,35.6581 73.4332,39.0661"
                            id="Fill-4"
                            fill="#FC4C02"
                          ></path>
                          <path
                            d="M48.9597,13.52 C53.7337,13.52 53.6897,17.695 53.5747,19.495 L43.4867,19.495 C43.6687,16.363 45.1807,13.52 48.9597,13.52 M49.7327,32.312 C51.2747,32.312 54.2637,31.984 56.1407,31.048 C56.8307,30.79 56.8397,30.48 56.8397,29.827 L56.8397,28.7 C56.8397,28.087 56.5757,27.84 55.9127,28.053 C53.7537,28.781 51.5857,29.071 50.2757,29.071 C48.0217,29.071 46.0507,28.416 44.9647,27.129 C43.8917,25.733 43.5357,24.165 43.4437,22.269 L56.6077,22.269 C57.2127,22.269 57.2927,20.266 57.3217,19.419 C57.5497,13.347 54.3437,10.398 49.1287,10.398 C46.2517,10.398 43.5977,11.438 41.9367,13.445 C40.3957,15.28 39.5087,17.873 39.5087,21.371 C39.5087,24.81 40.2907,27.385 41.7857,29.198 C43.3267,31.032 45.6657,32.312 49.7327,32.312"
                            id="Fill-6"
                            fill="#000000"
                          ></path>
                          <g
                            id="Group-10"
                            transform="translate(0.000000, 0.155500)"
                          >
                            <mask id="mask-4" fill="white">
                              <use xlinkHref="#path-3"></use>
                            </mask>
                            <g id="Clip-9"></g>
                            <path
                              d="M14.1437,13.2545 L14.1437,11.6715 C14.1437,11.0955 13.8817,10.8665 13.3417,10.8665 L7.8817,10.8665 L7.8817,6.8475 C7.8817,3.6345 11.1047,4.0445 13.1557,4.3025 C14.0697,4.4795 14.4157,4.3285 14.4157,3.6155 L14.4157,2.2865 C14.4157,1.6225 14.1487,1.3865 13.2447,1.1445 C8.1977,0.2105 3.8097,1.2165 3.8097,7.6235 L3.8097,10.9745 L0.8567,11.3165 C0.2297,11.3725 -0.0003,11.5655 -0.0003,12.1955 L-0.0003,13.2545 C-0.0003,13.8295 0.2477,14.0605 0.8017,14.0605 L3.8097,14.0605 L3.8097,30.7135 C3.8097,31.2855 4.0397,31.5145 4.6157,31.5145 L7.0767,31.5145 C7.6517,31.5145 7.8817,31.2855 7.8817,30.7135 L7.8817,14.0605 L13.3417,14.0605 C13.9147,14.0605 14.1437,13.8295 14.1437,13.2545"
                              id="Fill-8"
                              fill="#000000"
                              mask="url(#mask-4)"
                            ></path>
                          </g>
                          <path
                            d="M20.8633,11.0482 L18.4463,11.0482 C17.8713,11.0482 17.6413,11.2782 17.6413,11.8502 L17.6413,30.8682 C17.6413,31.4412 17.8713,31.6702 18.4463,31.6702 L20.8633,31.6702 C21.4383,31.6702 21.6683,31.4412 21.6683,30.8682 L21.6683,11.8502 C21.6683,11.3922 21.4383,11.0482 20.8633,11.0482"
                            id="Fill-11"
                            fill="#000000"
                          ></path>
                          <path
                            d="M19.6846,7.4071 C21.2316,7.4071 22.2286,6.4521 22.2286,4.9321 C22.2286,3.2511 21.1696,2.4571 19.6456,2.4571 C18.2276,2.4571 17.1406,3.4121 17.1406,4.9321 C17.1406,6.4711 18.1356,7.4071 19.6846,7.4071"
                            id="Fill-13"
                            fill="#000000"
                          ></path>
                          <g
                            id="Group-17"
                            transform="translate(79.000000, 10.155500)"
                          >
                            <mask id="mask-6" fill="white">
                              <use xlinkHref="#path-5"></use>
                            </mask>
                            <g id="Clip-16"></g>
                            <path
                              d="M19.2035,0.893 L16.7325,0.893 C16.1555,0.893 15.9085,1.122 15.6545,1.695 L10.0315,17.789 L4.3735,1.695 C4.1905,1.237 3.9675,0.893 3.4135,0.893 L0.6525,0.893 C0.0445,0.893 -0.1015,1.269 0.1275,1.842 L7.6095,20.713 C7.8385,21.286 8.1585,21.515 8.7345,21.515 L11.3125,21.515 C11.8675,21.515 12.1055,21.172 12.3105,20.713 L19.7955,1.824 C20.0495,1.251 19.8895,0.893 19.2035,0.893"
                              id="Fill-15"
                              fill="#FC4C02"
                              mask="url(#mask-6)"
                            ></path>
                          </g>
                          <path
                            d="M63.6894,14.2156 L66.6694,14.2156 L66.6694,26.3826 C66.6694,31.1846 69.9794,31.9746 72.3744,31.9746 C73.6614,31.9746 74.7004,31.8426 75.7354,31.6246 C77.0004,31.2576 76.984405,31.0436 76.984405,30.4686 L76.984405,29.0046 C76.984405,28.4296 76.7074,28.2476 76.1664,28.3756 C75.1994,28.5326 74.5594,28.6456 73.5984,28.6846 C70.9414,28.4996 70.6974,27.6466 70.6974,25.0596 L70.6974,14.2156 L76.0384,14.2156 C76.6114,14.2156 76.8404,13.9856 76.8404,13.4096 L76.8404,11.8026 C76.8404,11.2276 76.5784,10.9976 76.0384,10.9976 L70.6974,10.9976 L70.6974,6.0416 C70.6974,5.5836 70.4664,5.2396 69.8914,5.2396 L68.2734,5.2396 C67.6434,5.2396 67.3304,5.4686 67.2754,6.0966 L66.7614,11.1016 L63.7444,11.4726 C63.1164,11.5276 62.8874,11.8396 62.8874,12.4696 L62.8874,13.4096 C62.8874,13.9856 63.2314,14.2156 63.6894,14.2156"
                            id="Fill-18"
                            fill="#FC4C02"
                          ></path>
                          <path
                            d="M27.8002,31.6705 L30.2062,31.6705 C30.7792,31.6705 31.0082,31.4405 31.0082,30.8685 L31.0082,16.4625 C32.5802,15.3085 33.9332,14.5245 37.0182,14.5245 C37.7732,14.5375 38.8382,14.8215 38.8382,14.0145 L38.8382,11.6555 C38.8382,11.1265 38.5252,10.8345 37.5112,10.8345 C34.9652,10.8345 33.2562,11.4785 30.8332,14.0175 L30.5362,11.6935 C30.4052,11.1225 30.0782,11.0475 29.6052,11.0475 L27.8002,11.0485 C27.2272,11.0485 26.9982,11.2775 26.9982,11.8505 L26.9982,30.8685 C26.9982,31.4405 27.2272,31.6705 27.8002,31.6705"
                            id="Fill-20"
                            fill="#000000"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="my-4 font-medium text-lg pt-3">Fire TV</div>{" "}
                <button
                  type="button"
                  className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                  style={{
                    backgroundColor: "#006aff",
                    height: "65px",
                    color: "white",
                    width: "80%",
                  }}
                >
                  Request app
                </button>{" "}
                <a
                  href="https://www.uscreen.tv/ios-app/"
                  target="_blank"
                  className="block mt-4  text-sm break-all pb-7"
                  style={{ color: "#006aff" }}
                >
                  Find out more
                </a>
              </div>

              <div
                className="bg-white border border-gray-300 rounded shadow flex flex-col   items-center justify-center"
                style={{ height: "90%", width: "90%" }}
              >
                <div
                  className="flex items-center pt-8"
                  style={{ height: "80px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="138"
                    height="24"
                    viewBox="0 0 138 24"
                  >
                    <g fill="none" fill-rule="nonzero">
                      <path
                        fill="#62C248"
                        d="M109 23.636V1.108h-4.205V7.76c-1.176-1.16-2.776-1.8-4.75-1.8-4.82 0-8.482 3.986-8.482 8.975 0 5.01 3.662 9.064 8.481 9.064 1.975 0 3.575-.694 4.75-1.854v1.49H109zm-8.497-3.761c-2.588 0-4.682-2.201-4.682-4.939 0-2.686 2.094-4.921 4.683-4.921 1.72 0 3.353.867 4.17 2.305.054.104.12.242.12.417v4.4a.732.732 0 0 1-.084.295c-.8 1.489-2.434 2.443-4.206 2.443zm-15.055 3.76h4.207V6.306h-4.208v17.33h.001zM87.56 4.99c1.347 0 2.437-1.127 2.437-2.496a2.505 2.505 0 0 0-.71-1.762A2.418 2.418 0 0 0 87.56 0a2.418 2.418 0 0 0-1.726.733 2.505 2.505 0 0 0-.708 1.762c0 1.369 1.09 2.497 2.434 2.497V4.99zM74.635 23.984c4.924 0 8.907-4.039 8.907-9.048 0-4.99-3.983-8.975-8.907-8.975-4.902 0-8.887 3.986-8.887 8.975a9.124 9.124 0 0 0 2.601 6.398 8.808 8.808 0 0 0 6.286 2.65zm0-4.315c-2.554 0-4.63-2.116-4.63-4.733.002-2.601 2.074-4.71 4.63-4.712a4.588 4.588 0 0 1 3.288 1.373 4.753 4.753 0 0 1 1.363 3.34 4.76 4.76 0 0 1-1.358 3.35 4.595 4.595 0 0 1-3.293 1.382zm-13.299 3.967V14.38c0-2.738 1.414-4.192 4.104-4.192V5.96c-5.415 0-8.309 2.928-8.309 8.42v9.255h4.205zm-6.435 0V1.108h-4.209V7.76c-1.172-1.16-2.774-1.854-4.749-1.854-4.82 0-8.48 4.039-8.48 9.03 0 5.01 3.66 9.047 8.48 9.047 1.975 0 3.577-.678 4.75-1.838v1.49h4.208zm-8.499-3.761c-2.589 0-4.683-2.201-4.683-4.939 0-2.686 2.095-4.921 4.683-4.921 1.72 0 3.356.867 4.174 2.305.05.104.117.242.117.417v4.384a.856.856 0 0 1-.083.31c-.801 1.49-2.437 2.444-4.208 2.444zm-10.694 3.76v-9.373c0-4.611-3.523-8.3-8.02-8.3-4.512 0-8.02 3.689-8.02 8.3v9.374h4.205v-9.374c0-2.27 1.568-4.005 3.815-4.005 2.23 0 3.815 1.734 3.815 4.005v9.374h4.205zm-18.27 0V6.306H13.23v1.456c-1.176-1.159-2.776-1.8-4.75-1.8C3.66 5.961 0 9.947 0 14.936c0 5.01 3.66 9.048 8.48 9.048 1.974 0 3.574-.678 4.75-1.838v1.49h4.207zm-8.498-3.76c-2.59 0-4.684-2.201-4.684-4.939 0-2.686 2.095-4.921 4.684-4.921 1.719 0 3.44.816 4.172 2.305.072.127.112.27.118.417v4.365a.915.915 0 0 1-.086.33c-.799 1.489-2.434 2.443-4.204 2.443z"
                      />
                      <path
                        fill="#868686"
                        d="M119.742 24h-.363c-4.482 0-7.379-2.623-7.379-7.065V2h3.118v4.648h4.502v2.83h-4.502v7.457c0 2.521 1.761 4.014 4.261 4.014h.379l-.016 3.05V24zm11.257-.205h-3.414l-7-17.147h3.622l5.41 13.32 4.866-13.338H138l-7 17.165z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="my-5 font-medium text-lg pt-3">Android TV</div>{" "}
                <button
                  type="button"
                  className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                  style={{
                    backgroundColor: "#006aff",
                    height: "65px",
                    color: "white",
                    width: "80%",
                  }}
                >
                  Request app
                </button>{" "}
                <a
                  href="https://www.uscreen.tv/ios-app/"
                  target="_blank"
                  className="block mt-4  text-sm break-all pb-7"
                  style={{ color: "#006aff" }}
                >
                  Find out more
                </a>
              </div>
            </div>
            <div
              className="grid grid-cols-3  p-3 justify-center pl-4"
              style={{ paddingLeft: "18%", width: "96%" }}
            >
              <div
                className="bg-white border border-gray-300 rounded shadow flex flex-col  items-center justify-center"
                style={{ height: "90%", width: "90%" }}
              >
                <div
                  className="flex items-center pt-10"
                  style={{ height: "80px" }}
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="118.70473406790597 86.32682171194665 73.99999999999997 74"
                    width="70"
                    height="70"
                  >
                    <defs>
                      <path
                        d="M137.72 129.54C137.72 134.85 140.45 138.2 144.82 138.2C149.17 138.2 151.92 134.85 151.92 129.54C151.92 124.21 149.17 120.86 144.82 120.86C140.45 120.86 137.72 124.21 137.72 129.54Z"
                        id="a4di4msWS8"
                      ></path>
                      <path
                        d="M149.77 112.37C150.87 112.37 151.69 111.67 151.69 110.7C151.69 110.66 151.69 110.47 151.69 110.13C150.62 110.19 150.02 110.23 149.91 110.24C148.9 110.31 148.37 110.68 148.37 111.33C148.37 111.96 148.92 112.37 149.77 112.37Z"
                        id="d3JiuiYkNi"
                      ></path>
                      <path
                        d="M119.7 122.33C119.7 141.63 135.4 157.33 154.7 157.33C174 157.33 189.7 141.63 189.7 122.33C189.7 103.03 174 87.33 154.7 87.33C135.4 87.33 119.7 103.03 119.7 122.33ZM168.02 103.4L168.02 107.39C168.03 107.39 168.04 107.39 168.05 107.39C168.48 106.54 169.23 106.1 
    170.34 106.1C171.93 106.1 172.89 107.17 172.89 108.8C172.89 109.11 172.89 110.65 172.89 113.42L171.5 113.42C171.5 110.8 171.5 109.35 171.5 109.06C171.5 107.97 170.95 107.3 169.87 107.3C168.72 107.3 168.02 108.08 168.02 109.27C168.02
     109.55 168.02 110.93 168.02 113.42L166.64 113.42L166.64 103.4L168.02 103.4ZM165.41 108.63C165.27
     108.63 164.21 108.63 164.07 108.63C163.94 107.86 163.32 107.27 162.31 107.27C161.13 107.27 160.33 108.27 160.33 109.8C160.33 111.38 161.13 
    112.34 162.32 112.34C163.27 112.34 163.9 111.87 164.09 111.02C164.22 111.02 165.29 111.02 165.42 111.02C165.25 112.51 164.03 113.51 162.31 113.51C160.27 113.51 158.92 112.1 158.92 109.8C158.92 107.56 160.27 106.09 162.3 106.09C164.14
     106.09 165.27 107.26 165.41 108.63ZM148.63 108.31C148.5 108.31 147.46 108.31 147.33 108.31C147.37 107.04 148.57 106.09 150.18 106.09C151.93 106.09 153.07 107.02 153.07 108.45C153.07 108.78 153.07 110.44 153.07 113.43L151.75 113.43L151.75 112.21C151.73 112.21 151.72 112.21 151.72 112.21C151.31 113 150.41 113.5 149.41
      113.5C147.97 113.5 146.98 112.64 146.98 111.36C146.98 110.09 147.94 109.36 149.73 109.24C149.86 109.24 150.51 109.2 151.69 109.13C151.69 108.78 151.69 108.59 151.69 108.56C151.69 107.72 151.14 107.25 150.15 107.25C149.34 107.25 148.76 107.67 148.63 108.31ZM139.31 111.95L139.34 111.95L140.89 106.17L142.23 106.17L143.79 111.95L143.82 111.95L145.19 106.17L146.56 
      106.17L144.56 113.43L143.13 113.43L141.57 107.93L141.54 107.93L139.97 113.43L138.56 113.43L136.55 106.17L137.93 106.17L139.31 111.95ZM134.45 129.54C134.45 122.47 138.44 118.02 144.82 118.02C151.19 118.02 155.18 122.47 155.18 129.54C155.18 136.61 151.19 141.04 144.82 141.04C138.44 141.04 134.45 136.61 134.45 129.54ZM155.12 107.29L154.07 107.29L154.07 106.17L155.12 106.17L155.12 104.44L156.51
       104.44L156.51 106.17L157.9 106.17L157.9 107.29L156.51 107.29C156.51 109.75 156.51 111.12 156.51 111.4C156.51 112.03 156.79 112.33 157.4 112.33C157.55 112.33 157.81 112.31 157.9 112.29C157.9 112.41 157.9 113.29 157.9 113.41C157.74 113.45 157.4 113.47 157.09 113.47C155.68 113.47 155.12 112.92 155.12 111.52C155.12 110.96 155.12 109.55 155.12 107.29ZM157.4 134.49C157.71 134.49 160.24 134.49 160.56
        134.49C160.81 136.78 163.02 138.29 166.04 138.29C168.94 138.29 171.03 136.78 171.03 134.71C171.03 132.92 169.76 131.84 166.83 131.1C166.54 131.03 164.26 130.46 163.97 130.39C159.87 129.37 158 127.5 158 124.43C158 120.65 161.3 118.02 166.01 118.02C170.61 118.02 173.82 120.66 173.95 124.46C173.63 124.46 171.12 124.46 170.81 124.46C170.6 122.18 168.73 120.77 165.95 120.77C163.19 120.77 161.27 122.19 161.27 124.24C161.27 125.86 162.48 126.82
         165.41 127.56C165.65 127.62 167.58 128.1 167.82 128.16C172.4 129.28 174.28 131.08 174.28 134.32C174.28 138.46 171.01 141.04 165.79 141.04C160.93 
        141.04 157.63 138.49 157.4 134.49Z"
                        id="cHSqT0Qxr"
                      ></path>
                    </defs>
                    <g>
                      <g>
                        <use
                          xlinkHref="#a4di4msWS8"
                          opacity="1"
                          fill="#000000"
                          fill-opacity="1"
                        ></use>
                        <g>
                          <use
                            xlinkHref="#a4di4msWS8"
                            opacity="1"
                            fill-opacity="0"
                            stroke="#000000"
                            stroke-width="1"
                            stroke-opacity="0"
                          ></use>
                        </g>
                      </g>
                      <g>
                        <use
                          xlinkHref="#d3JiuiYkNi"
                          opacity="1"
                          fill="#000000"
                          fill-opacity="1"
                        ></use>
                        <g>
                          <use
                            xlinkHref="#d3JiuiYkNi"
                            opacity="1"
                            fill-opacity="0"
                            stroke="#000000"
                            stroke-width="1"
                            stroke-opacity="0"
                          ></use>
                        </g>
                      </g>
                      <g>
                        <use
                          xlinkHref="#cHSqT0Qxr"
                          opacity="1"
                          fill="#000000"
                          fill-opacity="1"
                        ></use>
                        <g>
                          <use
                            xlinkHref="#cHSqT0Qxr"
                            opacity="1"
                            fill-opacity="0"
                            stroke="#000000"
                            stroke-width="1"
                            stroke-opacity="0"
                          ></use>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="my-4 font-medium text-lg pt-3">
                  watchOS Fitness App
                </div>{" "}
                <button
                  type="button"
                  className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                  style={{
                    backgroundColor: "#006aff",
                    height: "65px",
                    color: "white",
                    width: "80%",
                  }}
                >
                  Request app
                </button>{" "}
                <a
                  href="https://www.uscreen.tv/ios-app/"
                  target="_blank"
                  className="block mt-4  text-sm break-all pb-7"
                  style={{ color: "#006aff" }}
                >
                  Find out more
                </a>
              </div>

              <div
                className="bg-white border border-gray-300 rounded shadow flex flex-col   items-center justify-center"
                style={{ height: "90%", width: "90%" }}
              >
                <div
                  className="flex items-center pt-8"
                  style={{ height: "80px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="141"
                    height="55"
                    viewBox="0 0 141 55"
                  >
                    <defs>
                      <path id="a" d="M0 1.003h16.175v22.01H0z" />
                      <path id="c" d="M0 .006h6.834v11.04H0z" />
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                      <path
                        fill="#1954A5"
                        d="M41.928 32.447v12.167l-9.62-6.804z"
                      />
                      <path
                        fill="#8EA955"
                        d="M22.737 32.447v12.167l9.62-6.804z"
                      />
                      <path
                        fill="#FFDD2E"
                        d="M32.358 20.142l-12.437 7.01 12.437-.035z"
                      />
                      <path
                        fill="#EBBAB6"
                        d="M32.348 20.142l12.433 7.01-12.433-.035z"
                      />
                      <path
                        fill="#C9DA36"
                        d="M32.358 37.81l-12.41 8.7h12.41z"
                      />
                      <path
                        fill="#14B0E6"
                        d="M32.348 37.81l12.42 8.7h-12.42z"
                      />
                      <path
                        fill="#F5EF85"
                        d="M19.948 46.51l12.399 8.483V46.51z"
                      />
                      <path
                        fill="#9CDBF8"
                        d="M32.347 46.51v8.483L44.73 46.51z"
                      />
                      <path fill="#F58B32" d="M19.948 27.119h12.437v6.909z" />
                      <path fill="#EE4D8E" d="M44.794 27.119H32.36v6.909z" />
                      <path
                        fill="#231F20"
                        d="M44.766 46.545V27.118l-12.41 6.91-12.408-6.91v19.418l2.789 1.891v-15.98l9.62 5.316 9.571-5.33v15.994zM81.342 39.47a6.041 6.041 0 0 0 2.651-1.93c.852-1.072 1.283-2.357 1.283-3.813 0-.947-.167-1.82-.491-2.6a5.527 5.527 0 0 0-1.486-2.063c-.645-.564-1.444-1.003-2.368-1.3-.906-.29-1.955-.438-3.126-.438H69.77V48.6h2.814V30.028h5.222c1.504 0 2.665.327 3.466.958.76.62 1.13 1.514 1.13 2.741s-.37 2.122-1.13 2.739c-.797.636-1.962.964-3.466.964H74.36v2.674h4.159l3.95 8.496h3.096l-4.223-9.13zM87.676 27.325v2.729h6.4v18.548h2.82V30.054h6.43v-2.729zM54.169 39.425l2.875-7.551 2.933 7.556-5.808-.005zm4.068-12.1h-2.371l-8.164 21.277h2.972l2.571-6.666 7.736.036 2.569 6.63h2.943l-8.256-21.276z"
                      />
                      <g transform="translate(0 25.956)">
                        <mask id="b" fill="#fff">
                          <use xlinkHref="#a" />
                        </mask>
                        <path
                          fill="#231F20"
                          d="M15.743 14.36a5.883 5.883 0 0 0-1.222-1.857 6.742 6.742 0 0 0-1.849-1.33 
      7.502 7.502 0 0 0-2.343-.684l-3.816-.475a6.4 6.4 0 0 1-1.202-.279 2.942 2.942 0 0 1-.923-.51 2.413 2.413 0 0 1-.612-.81c-.156-.322-.233-.73-.233-1.235 0-.548.099-.994.311-1.364a3.96 3.96 0 0 1 
      .829-1.038 3.749 3.749 0 0 1 1.49-.788 6.994 6.994 0 0 1 1.905-.257c.841 0 1.622.136 2.319.408.665.252 1.181.614 1.554 1.078.28.323.494.656.631.993.15.352.261.759.32 1.209l.088.564h2.815l-.06-.716c-.064-.798-.25-1.515-.546-2.132a7.337 7.337 0 0 0-1.15-1.709c-
      .637-.733-1.507-1.327-2.601-1.77a8.917 8.917 0 0 0-3.37-.655 8.917 8.917 0 0 0-2.95.49c-.958.329-1.793.808-2.477 1.43A6.751 6.751 0 0 0 1.25 4.696C.864 5.39.668 6.224.668 7.18c0 .858.143 1.628.419 2.282a5.04 5.04 0 0 0 1.194 1.724c.497.48 1.094.862 1.77 1.138a8.86 8.86 0 0 0 2.152.556l3.755.476a4.453 4.453 0 0 1 1.424.397c.42.206.766.45 1.057.743.277.283.495.607.64.972.146.352.218.726.218 1.114 0
       .534-.088 1.005-.262 1.381-.186.391-.425.73-.72 1.01-.475.447-1.073.776-1.779.983a8.478 8.478 0 0 1-2.344.324 6.653 6.653 0 0 1-2.221-.37 4.587 4.587 0 0 1-1.735-1.06 5.14 5.14 0 0 1-.856-1.215 4.585 4.585 0 0 1-.44-1.478l-.078-.577H0l.067.727c.084.844.312 1.646.663 2.383a7.514 7.514 0 0 0 1.34 1.97 6.886 6.886 0 0 0 2.704 1.776c1.034.38 2.188.578 3.418.578 1.232 0 2.388-.177 3.445-.514a7.163 7.163 0 0 0 2.747-1.626 6.55 6.55 0 0 0 1.282-1.78c.335-.691.51-1.537.51-2.512a5.83 5.83 0 0 0-.433-2.221"
                          mask="url(#b)"
                        />
                      </g>
                      <path
                        fill="#231F20"
                        d="M130.9 48.675h1.872L141 27.233h-2.147l-7 18.39-7.153-18.39h-15.668v1.955h6.729v19.487h2.042V29.188h5.543zM41.928 32.43v15.998l2.837-1.883V27.117l-12.408 6.91v3.735z"
                      />
                      <g transform="translate(0 .03)">
                        <mask id="d" fill="#fff">
                          <use xlinkHref="#c" />
                        </mask>
                        <path
                          fill="#231F20"
                          d="M1.76 5.452C.456 4.992.086 3.947.086 2.938v-.263C.087.958 1.056.006 3.003.006h.962c1.539 0 2.488.662 2.488 2.255 0 .368-.187.707-.706.707-.491 0-.709-.34-.709-.707 0-.627-.445-.905-1.073-.905h-.962c-1.057 0-1.506.4-1.506 1.32v.262c0 .626.371 1.009.835 1.177l2.74.986c1.166.41 1.762 1.268 1.762 2.585v.538c0 1.718-.966 2.821-2.912 2.821H2.48C.947 11.045 0 10.387 0 8.791c0-.366.18-.703.704-.703.489 0 .7.337.7.703 0 .645.452.905 1.076.905h1.442c1.057 0 1.517-.553 1.517-1.472v-.538c0-.672-.304-1.043-.768-1.21L1.76 5.451z"
                          mask="url(#d)"
                        />
                      </g>
                      <path
                        fill="#231F20"
                        d="M12.92 9.634V6.906h-2.148c-.627 0-.935.309-.935.798v1.148c0 .459.308.782.935.782h2.149zM11.85 2.95c1.514 0 2.452.968 2.452 2.363v4.905c0 .364-.218.705-.706.705h-2.823c-1.407 0-2.315-.658-2.315-2.07v-1.18c0-1.408.908-2.052 2.315-2.052h2.149v-.292c0-.768-.445-1.088-1.072-1.088h-1.98c-.38 0-.687-.186-.687-.644 0-.46.307-.647.687-.647h1.98zM23.896 5.742c0-.92-.428-1.472-1.454-1.472h-.877v6.1c0 .37-.183.706-.69.706-.5 0-.692-.336-.692-.706v-6.1h-2.33v6.1c0 .37-.18.706-.686.706s-.694-.336-.694-.706V3.657c0-.383.203-.705.694-.705h5.275c1.912 0 2.832 1.072 2.832 2.79v4.628c0 .37-.18.706-.688.706-.522 0-.69-.336-.69-.706V5.742zM29.476 11.076c-1.408 0-2.25-.569-2.25-1.855 0-.4.155-.72.683-.72.526 0 .647.32.677.72.017.353.336.614.89.614h1.24c.737 0 .964-.37.964-.83V8.47c0-.367-.193-.567-.562-.676l-2.41-.672c-.92-.26-1.392-.889-1.392-1.886v-.366c0-1.41.795-2.07 2.328-2.07h.858c1.411 0 2.257.566 2.257 1.854 0 .4-.153.72-.679.72-.519 0-.655-.32-.69-.72-.015-.354-.322-.613-.874-.613h-.872c-.75 0-.98.368-.98.829v.366c0 .338.188.568.563.676l2.394.658c.935.262 1.411.87 1.411 1.9v.536c0 1.412-.812 2.071-2.317 2.071h-1.239zM36.252 8.132c0 .921.432 1.472 1.458 1.472h1.839V3.502c0-.366.166-.705.689-.705.489 0 .69.339.69.705v6.718c0 .377-.201.7-.69.7H37.71c-1.918 0-2.838-1.071-2.838-2.788v-4.63c0-.366.187-.705.686-.705.526 0 .694.339.694.705v4.63zM47.871 5.742c0-.92-.429-1.472-1.459-1.472h-1.835v6.1c0 .37-.171.706-.691.706-.488 0-.69-.336-.69-.706V3.657c0-.383.202-.705.69-.705h2.526c1.919 0 2.836 1.072 2.836 2.79v4.628c0 .37-.181.706-.687.706-.522 0-.69-.336-.69-.706V5.742zM54.112 4.27c-1.028 0-1.489.707-1.489 1.685v2.176c0 .922.414 1.472 1.44 1.472h1.859V4.27h-1.81zm3.187 7.494c0 1.704-.964 2.99-2.885 2.99h-1.713c-.354 0-.677-.17-.677-.659 0-.46.323-.657.677-.657h1.713c1.032 0 1.508-.691 1.508-1.674v-.843h-1.858c-1.919 0-2.824-1.072-2.824-2.79V5.955c0-1.715.955-3.006 2.872-3.006h2.484c.503 0 .703.338.703.706v8.109z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="my-4 font-medium text-lg pt-3">Samsung TV</div>{" "}
                <button
                  type="button"
                  className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                  style={{
                    backgroundColor: "#d1d8e1",
                    height: "60px",
                    color: "white",
                    width: "80%",
                  }}
                >
                  Under Consideration
                </button>{" "}
                <a
                  href="https://www.uscreen.tv/ios-app/"
                  target="_blank"
                  className="block mt-4  text-sm break-all pb-7"
                  style={{ color: "#006aff" }}
                >
                  Find out more
                </a>
              </div>

              <div
                className="bg-white border border-gray-300 rounded shadow flex flex-col   items-center justify-center"
                style={{ height: "90%", width: "90%" }}
              >
                <div
                  className="flex items-center pt-8"
                  style={{ height: "80px" }}
                >
     <img src={webos} width="150px"/>

                </div>
                <div className="my-5 font-medium text-lg pt-3">LG WebOS</div>{" "}
                <button
                  type="button"
                  className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                  style={{
                    backgroundColor: "#d1d8e1",
                    height: "70px",
                    color: "white",
                    width: "80%",
                  }}
                >
                 Under Consideration
                </button>{" "}
                <a
                  href="https://www.uscreen.tv/ios-app/"
                  target="_blank"
                  className="block mt-4  text-sm break-all pb-7"
                  style={{ color: "#006aff" }}
                >
                  Find out more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distrubution;
