import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";
import profilePic from "../../assets/aboutImg.png";

function About() {
    return (
        <section>
            <div className="aboutSec">
                <h1 id="about">About Me</h1>
                <div className="aboutSec flex-row1 container">
                    <div className="aboutTextCont">
                    <p id="aboutText"className="col">
                    I am a Full Stack Developer with experience in User Experience, UX Design, Customer Journey Mapping, and focusing on the customer to find their needs. I attended the BYU Marriott School of Business where I received my BS in Experience and Design Management. I recently received a certificate in Full Stack Web Development from the University of Utah. I believe that with my unique experience and skills, I can provide unique insight into customers needs and provide them with excellent solutions to resolve their needs.
                    </p>
                    </div>
                    <div className="proPicCon">
                    <img src={profilePic} id="profilePic" alt="Business Pic of David McDougal" className="col"/>
                    </div>
                 
                </div>
            </div>
            <h2>Skills</h2>
            <div>
                <div class="displaySkill">
                    <div class="Sitem">
                    <svg viewBox="0 0 128 128">
                        <g fill="#61DAFB"><circle cx="64" cy="47.5" r="9.3"></circle><path d="M64 81.7C71.3 88.8 78.5 93 84.3 93c1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3C56.7 6.3 49.5 2.1 43.7 2.1c-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zM46 57.9c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zM69.6 26.8c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zM40.9 7.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7C24.5 56.9 17.8 52 17.8 47.5c0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6zm2.1 11c.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10-1.1 0-2-.2-2.9-.7-3.4-1.9-4.5-8-3.1-16.5zm-4.2 41.2c2.2-2.7 2.3-5.7 1.1-8.7-1.2-3-3.7-4.4-6.8-4.5-3.7-.1-7.5 0-11.2 0H16V125h3v-9.8h4.7c.6 0 1.1.2 1.4.7l6 9.3c.1.2.4.5.6.5h3.9c-2.4-3.7-4.7-7.2-7.1-10.8 2.1-.3 3.9-1 5.1-2.6zm-14.6-.2v-9.9h1.1c2.3 0 4.7-.1 7 .1 2.7.1 4.6 2.2 4.6 4.9s-2.2 4.8-4.9 4.9c-2.4.1-4.8 0-7.8 0zm38.7 1.3c-1.6-7-8-8.8-12.9-6.6-3.8 1.7-5.5 5-5.6 9.1-.1 3.1.8 5.9 3.2 8 2.7 2.4 6 2.7 9.4 2.1 1.9-.4 3.6-1.3 4.9-2.7-.5-.7-1-1.4-1.5-2-2.8 2.4-5.9 3.2-9.3 1.6-2.2-1.1-3.3-3.8-3.5-5.8h15.5v-1.3c.1-.9 0-1.7-.2-2.4zM42.6 115c-.3-3 2.7-6.2 6-6.2 3.8-.1 6.2 2.2 6.3 6.2H42.6zm30.7-8.7c-1.5-.3-3.1-.4-4.6-.3-2.4.2-4.5 1.3-6.2 3.1.5.7.9 1.4 1.5 2.2.2-.2.4-.4.6-.5 1.6-1.5 3.5-2.3 5.8-2.1 1.8.1 3.5.7 4 2.5.4 1.4.3 2.9.4 4.4-.3 0-.4-.1-.5-.2-2.4-2-5.1-2.4-8-1.7-2.7.7-4.4 2.8-4.6 5.5-.2 3.1 1.2 5.4 3.9 6.5 1.7.7 3.6.7 5.4.3 1.4-.3 2-1.1 4-2.2v1.3h2.8c0-4 .1-8.9 0-13.5 0-2.9-1.7-4.7-4.5-5.3zm1.4 12.6c-.1.3 0 .6 0 .9 0 2.1-.5 2.8-2.5 3.6-1.4.5-2.9.7-4.4.2-1.7-.5-2.9-2-2.9-3.7-.1-1.7 1-3.4 2.7-3.9 2.3-.8 4.4-.3 6.3 1.1.6.5 1 1 .8 1.8zm15.6-9.9c2.6-.8 5-.3 6.8 1.9l.3.2c.7-.6 1.3-1.2 2.1-1.9-.3-.3-.4-.5-.6-.8-2.9-3.1-8.6-3.5-12.1-1-4.9 3.6-4.8 10.6-2.4 14.3 2.3 3.5 5.6 4.7 9.5 4.2 2.3-.3 4.2-1.4 5.7-3.3-.7-.6-1.4-1.2-2.1-1.9-.2.2-.3.3-.4.5-2.7 3-7.2 2.7-9.6-.5-1.4-1.9-1.7-4.1-1.3-6.3.2-2.5 1.5-4.5 4.1-5.4zm20.8 13.6c-.2.1-.3.2-.3.2-.8.6-1.6.7-2.5.4-.9-.4-1-1.2-1.1-2v-11.4c0-.2 0 .2.1-.8h3.8v-3h-4v-5h-3v5.4h-2.6c-.2 0-.5.2-.5.4-.1.7 0 1.2 0 2.2h3.2v12.8c0 1.6.4 3 1.8 3.8 1.5.9 4.4.7 5.7-.4.2-.1.3-.5.3-.6-.3-.6-.6-1.3-.9-2z"></path></g>
                        </svg>
                    </div>
                    <div class="Sitem">
                         {/* gathered from https://devicon.dev/ */}
                        <svg viewBox="0 0 128 128">
                            <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
                        </svg>
                    </div>
                    <div class="Sitem">
                        <svg viewBox="0 0 128 128">
                        <g fill="#E434AA"><path d="M35.387 71.79L32.5 70.128l32.152-55.43 2.883 1.656zm0 0"></path><path d="M31.84 65.7h64.3v3.32h-64.3zm0 0"></path><path d="M65.273 86.05l-32.16-18.484 1.664-2.875 32.164 18.485zm0 0M93.215 37.871L61.05 19.387l1.668-2.871L94.879 35zm0 0"></path><path d="M34.785 37.86l-1.664-2.872 32.164-18.484 1.664 2.871zm0 0"></path><path d="M92.621 71.79L60.47 16.354l2.886-1.656 32.153 55.43zm0 0M34.39 32.79h3.333v36.968H34.39zm0 0"></path><path d="M90.277 32.79h3.332v36.968h-3.332zm0 0"></path><path d="M64.707 84.645l-1.457-2.508 27.973-16.078 1.457 2.507zm0 0"></path><path d="M98.027 70.836c-1.925 3.34-6.222 4.477-9.574 2.559a6.962 6.962 0 01-2.57-9.532c1.926-3.34 6.222-4.476 9.574-2.558 3.375 1.937 4.52 6.195 2.57 9.53M42.098 38.684c-1.926 3.336-6.223 4.476-9.575 2.558a6.967 6.967 0 01-2.57-9.535c1.926-3.336 6.223-4.477 9.574-2.559 3.352 1.942 4.496 6.196 2.57 9.536M29.973 70.836c-1.93-3.336-.785-7.594 2.57-9.531 3.352-1.918 7.629-.782 9.574 2.558 1.93 3.336.785 7.594-2.57 9.532-3.371 1.918-7.649.78-9.574-2.56M85.902 38.684c-1.925-3.34-.78-7.594 2.57-9.536 3.352-1.918 7.63-.777 9.575 2.559 1.93 3.34.785 7.594-2.57 9.535-3.352 1.918-7.649.778-9.575-2.558M64 90.402c-3.875 0-7.008-3.117-7.008-6.976 0-3.856 3.133-6.973 7.008-6.973s7.008 3.117 7.008 6.973c0 3.836-3.133 6.976-7.008 6.976M64 26.094c-3.875 0-7.008-3.117-7.008-6.977 0-3.855 3.133-6.972 7.008-6.972s7.008 3.117 7.008 6.972c0 3.86-3.133 6.977-7.008 6.977M106.625 121.508a.604.604 0 01-.45-.168.606.606 0 01-.171-.45v-18.464c0-.188.058-.34.172-.453a.604.604 0 01.449-.168h.54c.187 0 .339.054.452.168a.613.613 0 01.168.453v17.394h9.758c.207 0 .367.055.48.168.114.114.168.274.168.477v.426a.604.604 0 01-.168.449c-.113.113-.273.168-.48.168zm0 0M100.094 123.336a.704.704 0 01-.535-.238 8.22 8.22 0 01-.368-.407l-1.246-1.718c-1.129.543-2.449.816-3.957.816-1.566 0-2.894-.277-3.988-.828-1.094-.555-1.934-1.41-2.516-2.563-.586-1.156-.906-2.613-.96-4.378-.02-.844-.032-1.633-.032-2.364 0-.73.012-1.52.031-2.363.055-1.746.395-3.195 1.016-4.352.621-1.152 1.484-2.011 2.59-2.574 1.101-.562 2.387-.844 3.86-.844 1.468 0 2.753.282 3.859.844 1.101.563 1.968 1.422 2.601 2.574.63 1.157.965 2.606 1.004 4.352a57.2 57.2 0 01.055 2.363c0 .73-.02 1.52-.055 2.364-.094 2.683-.785 4.656-2.066 5.914l1.812 2.53a.41.41 0 01.055.099c.02.046.027.117.027.21a.535.535 0 01-.168.395.541.541 0 01-.394.168zm-6.106-3.234c1.621 0 2.953-.489 4-1.465 1.047-.977 1.606-2.563 1.684-4.758.035-.844.055-1.586.055-2.223 0-.636-.02-1.379-.055-2.222-.04-1.465-.309-2.657-.809-3.575-.5-.921-1.168-1.59-2.008-2.015-.835-.422-1.793-.633-2.867-.633-1.058 0-2.004.21-2.843.633-.84.426-1.508 1.094-2.008 2.015-.5.918-.778 2.11-.832 3.575-.02.843-.032 1.586-.032 2.222 0 .637.012 1.38.032 2.223.074 2.195.64 3.781 1.695 4.758 1.055.976 2.383 1.465 3.988 1.465zm0 0M70.855 121.508a.604.604 0 01-.449-.168.606.606 0 01-.172-.45v-18.75c0-.187.059-.335.172-.449a.604.604 0 01.45-.168h.48c.191 0 .34.055.453.168a.606.606 0 01.172.45v6.671a6.13 6.13 0 011.852-1.601c.726-.414 1.69-.621 2.898-.621 1.281 0 2.352.277 3.207.832.86.55 1.5 1.3 1.926 2.25.422.95.636 2.023.636 3.223v7.996a.606.606 0 01-.171.449.607.607 0 01-.454.168h-.48a.613.613 0 01-.453-.168.604.604 0 01-.168-.45v-7.855c0-1.5-.367-2.68-1.102-3.531-.738-.856-1.812-1.281-3.226-1.281-1.336 0-2.414.425-3.235 1.28-.82.852-1.23 2.032-1.23 3.532v7.856a.606.606 0 01-.172.449.607.607 0 01-.453.168zm0 0M54.43 126.855a.607.607 0 01-.453-.168.606.606 0 01-.172-.449v-18.746c0-.187.058-.34.172-.453a.607.607 0 01.453-.168h.48c.188 0 .34.055.453.168a.613.613 0 01.168.453v1.32c.473-.636 1.09-1.167 1.852-1.59.765-.421 1.73-.632 2.898-.632 1.114 0 2.047.191 2.801.578a5.114 5.114 0 011.836 1.531c.473.64.82 1.352 1.047 2.14.226.79.347 1.595.367 2.423.02.281.027.59.027.93 0 .335-.007.644-.027.925a9.539 9.539 0 01-.367 2.422c-.227.79-.574 1.5-1.047 2.14a5.114 5.114 0 01-1.836 1.532c-.754.387-1.687.578-2.8.578-1.169 0-2.134-.215-2.9-.648-.76-.43-1.378-.957-1.85-1.575v6.672a.604.604 0 01-.169.45.613.613 0 01-.453.167zm5.683-6.699c1.11 0 1.989-.242 2.63-.73a4.097 4.097 0 001.386-1.914c.281-.79.441-1.633.48-2.535a26.44 26.44 0 000-1.575 8.613 8.613 0 00-.48-2.535 4.117 4.117 0 00-1.387-1.914c-.64-.488-1.52-.73-2.629-.73-1.074 0-1.941.254-2.601.757a4.528 4.528 0 00-1.457 1.903 6.899 6.899 0 00-.524 2.293c-.02.281-.027.648-.027 1.097 0 .45.008.817.027 1.098.02.75.192 1.492.524 2.223a4.508 4.508 0 001.5 1.832c.668.488 1.52.73 2.558.73zm0 0M42.582 121.79a5.595 5.595 0 01-2.504-.563 5.079 5.079 0 01-1.851-1.508 3.436 3.436 0 01-.707-2.125c0-1.274.52-2.297 1.554-3.067 1.035-.77 2.383-1.265 4.043-1.492l4.469-.617v-.988c0-.993-.309-1.778-.918-2.348-.613-.574-1.59-.86-2.93-.86-.98 0-1.77.192-2.375.579-.601.383-1.015.886-1.242 1.504-.094.28-.273.422-.539.422h-.45c-.226 0-.386-.059-.484-.184a.687.687 0 01-.14-.434c0-.265.101-.593.297-.984.199-.395.504-.785.922-1.172.414-.383.949-.707 1.609-.969.66-.261 1.46-.394 2.402-.394 1.114 0 2.032.148 2.758.45.727.3 1.293.69 1.7 1.167.402.48.69 1.012.859 1.59.172.582.254 1.156.254 1.719v9.375a.604.604 0 01-.168.449.613.613 0 01-.453.168h-.481a.613.613 0 01-.453-.168.604.604 0 01-.168-.45v-1.324a4.776 4.776 0 01-.961 1.012c-.414.34-.95.625-1.598.86-.652.234-1.465.351-2.445.351zm.281-1.634c.867 0 1.66-.187 2.375-.562.715-.375 1.285-.953 1.711-1.73.426-.778.637-1.759.637-2.942v-.957l-3.648.508c-1.547.203-2.715.562-3.508 1.066-.79.508-1.188 1.145-1.188 1.914 0 .621.18 1.129.54 1.524.359.39.816.687 1.37.882.555.2 1.125.297 1.711.297zm0 0M29.629 121.508a.613.613 0 01-.453-.168.62.62 0 01-.168-.45v-13.37c0-.188.058-.344.168-.465a.594.594 0 01.453-.184h.453c.188 0 .344.063.469.184a.633.633 0 01.183.465v1.293a3.224 3.224 0 011.47-1.461c.64-.32 1.433-.48 2.374-.48h1.047c.188 0 .34.054.453.167a.613.613 0 01.168.453v.39c0 .192-.055.34-.168.454a.613.613 0 01-.453.168H34.41c-1.133 0-2.027.328-2.687.984-.66.657-.989 1.551-.989 2.676v8.727a.586.586 0 01-.183.449.67.67 0 01-.469.168zm0 0M17.387 121.79c-1.621 0-2.985-.313-4.086-.942a6.24 6.24 0 01-2.516-2.633c-.578-1.125-.89-2.422-.95-3.883-.019-.848-.026-1.738-.026-2.676 0-.937.007-1.828.027-2.676.059-1.48.371-2.78.95-3.898a6.237 6.237 0 012.53-2.617c1.11-.63 2.47-.942 4.07-.942 1.302 0 2.415.192 3.337.579.925.382 1.68.863 2.261 1.433.586.574 1.02 1.149 1.301 1.73.285.583.434 1.07.453 1.465a.446.446 0 01-.14.407.64.64 0 01-.453.156h-.622c-.171 0-.293-.043-.367-.125-.078-.086-.152-.23-.226-.438a5.107 5.107 0 00-.95-1.675c-.44-.535-1.035-.977-1.78-1.32-.743-.348-1.684-.524-2.813-.524-1.68 0-3.04.457-4.086 1.367-1.047.91-1.606 2.426-1.684 4.547a78.247 78.247 0 000 5.066c.078 2.102.637 3.61 1.684 4.532 1.047.918 2.406 1.379 4.086 1.379 1.113 0 2.11-.211 2.996-.633a4.726 4.726 0 002.094-1.946c.507-.87.761-1.984.761-3.332v-1.437H18.32a.594.594 0 01-.453-.184.654.654 0 01-.168-.465v-.394c0-.203.055-.363.168-.477a.613.613 0 01.453-.168h6.051c.207 0 .367.055.48.168.114.114.169.274.169.477v2.48c0 1.5-.297 2.825-.891 3.97a6.353 6.353 0 01-2.602 2.671c-1.14.637-2.52.957-4.14.957zm0 0"></path></g>
                        </svg>
                    </div>
                    <div class="Sitem">
                        <svg viewBox="0 0 128 128">
                            <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
                        </svg>
                    </div>
                    <div class="Sitem">
                        <svg viewBox="0 0 128 128">
                            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
                        </svg>
                    </div>
                </div>
                <div class="displaySkill">
                    <div class="Sitem">
                        <svg viewBox="0 0 128 128">
                            <path fill-rule="evenodd" clip-rule="evenodd" fill="#94795D" d="M87.259 100.139c.169-.325.331-.612.469-.909.087-.19.221-.228.41-.223 1.133.032 2.266.067 3.4.078.963.01 1.928-.008 2.892-.019 1.086-.013 2.172-.07 3.257-.039 1.445.042 2.853.325 4.16.968 1.561.769 2.742 1.94 3.547 3.483a8.71 8.71 0 01.931 3.14c.172 1.608.059 3.179-.451 4.717-.632 1.906-1.832 3.365-3.499 4.458-1.283.841-2.69 1.338-4.198 1.622-1.596.301-3.197.204-4.798.209-1.756.007-3.511-.031-5.267-.051-.307-.003-.351-.061-.27-.354l.075-.27c.171-.538.263-.562.809-.652a2.83 2.83 0 001.087-.413c.184-.122.26-.44.332-.685.062-.214.065-.449.067-.675.025-3.425.051-6.849.065-10.272a44.077 44.077 0 00-.065-2.596c-.034-.605-.357-1.019-1.077-1.162-.56-.111-1.124-.197-1.687-.296l-.189-.059zm16.076 8.293c-.076-.682-.113-1.37-.235-2.042-.292-1.613-.998-3.018-2.238-4.119-2.005-1.779-4.419-2.053-6.949-1.841-.576.048-.7.245-.709.837-.014.84-.028 1.68-.029 2.52-.004 2.664-.004 5.328 0 7.992.001.758.009 1.516.031 2.272.024.774.305 1.429 1.063 1.729 1.195.473 2.452.529 3.706.336 2.003-.307 3.404-1.474 4.344-3.223.744-1.388.954-2.903 1.016-4.461zm4.869 9.071c-.024-.415.146-.758.356-1.073.057-.085.253-.081.388-.108l1.146-.227c.405-.086.618-.358.675-.755.038-.262.074-.527.077-.792a879.6 879.6 0 00.059-6.291c.01-2.1.002-4.2.002-6.3l-.009-.401c-.041-.675-.367-1.025-1.037-1.124l-1.453-.221c-.179-.024-.244-.11-.179-.269.112-.271.219-.552.377-.796.059-.09.258-.125.392-.122.694.01 1.388.062 2.082.061l6.041-.036c1.164-.001 2.288.202 3.332.759 1.149.612 1.792 1.559 1.976 2.849.192 1.355-.219 2.497-1.209 3.404-.407.374-.934.618-1.406.922l-.154.096c.438.161.855.3 1.261.466 1.188.487 2.133 1.248 2.633 2.463.395.959.395 1.959.161 2.953-.364 1.556-1.389 2.591-2.722 3.374-1.251.735-2.605 1.163-4.047 1.235-1.33.067-2.666.042-3.999.057l-.772.004a996.106 996.106 0 01-3.854-.096l-.117-.032zm5.537-6.089h.013c0 .658-.009 1.316.003 1.974.008.426-.007.864.085 1.274.138.613.418 1.166 1.106 1.342a6.671 6.671 0 002.818.124c1.177-.205 2.116-.795 2.631-1.916.382-.833.439-1.716.308-2.618-.174-1.188-.805-2.05-1.854-2.615-.688-.371-1.422-.598-2.204-.628-.876-.033-1.753-.035-2.629-.062-.246-.007-.28.118-.279.32.005.934.002 1.869.002 2.805zm1.865-4.475c.479-.024 1.021-.031 1.56-.085 1.032-.103 1.759-.622 2.138-1.609.193-.501.185-1.017.19-1.538.015-1.357-.777-2.469-2.066-2.929-.995-.355-2.021-.361-3.053-.333-.418.011-.605.194-.611.615l-.062 5.489c-.003.218.091.312.303.319l1.601.071z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#50382B" d="M10.543 116.448l-.073.944c-.68 0-1.307-.005-1.934.002-1.181.012-2.362.031-3.544.048l-.114.007c-.169-.02-.476-.02-.484-.07-.05-.281-.034-.576-.021-.867.001-.033.116-.075.183-.091l.919-.205c.573-.149.775-.396.802-.988.031-.667.062-1.335.065-2.002.009-1.642-.001-3.282.006-4.924.001-.384-.132-.67-.49-.826a43.787 43.787 0 00-1.285-.546c-.204-.082-.469-.127-.445-.401.024-.279.281-.352.523-.407 1.002-.229 2.005-.452 3.004-.696.322-.079.63-.212 1.015-.346.02.208.057.406.053.604l-.059.941c-.001.106.054.248.133.307.048.037.209-.03.289-.092.854-.65 1.758-1.211 2.789-1.538 1.597-.507 2.968-.037 3.928 1.34.338.485.339.485.808.146.805-.585 1.647-1.101 2.589-1.441 2.068-.747 4.055.201 4.774 2.284.262.756.362 1.537.36 2.335l-.019 5.298c-.001.437.144.686.56.822.467.153.951.258 1.477.396l-.122.911c-.598 0-1.148-.004-1.698.001-1.344.012-2.688.019-4.031.05-.234.006-.295-.052-.307-.271-.039-.701-.045-.7.615-.858l.222-.057c.645-.176.86-.374.865-1.028.015-1.878.054-3.761-.041-5.635-.099-1.944-1.642-2.979-3.526-2.481a5.194 5.194 0 00-1.69.814c-.175.125-.208.269-.194.488.053.828.086 1.657.093 2.486.012 1.451-.006 2.902 0 4.354.002.588.203.813.784.949l.863.199.16.036c.012.276.023.552.01.828-.008.173-.142.188-.292.185-.839-.021-1.679-.049-2.518-.047-1.021.002-2.041.031-3.061.049h-.24c0-.293-.014-.573.01-.852.005-.067.123-.161.204-.182l1.006-.213c.427-.105.631-.324.655-.758.114-2.01.196-4.021.007-6.03a3.695 3.695 0 00-.326-1.145c-.515-1.138-1.674-1.613-3.011-1.271-.635.162-1.208.453-1.75.82a.795.795 0 00-.378.695c0 2.005.007 4.01.013 6.014l.011.773c.012.539.241.823.776.939.344.078.692.131 1.082.203z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#4F382B" d="M71.001 105.285c.155.754.152 1.432-.402 1.946-.55.511-1.246.339-1.925.225.063.358.133.662.167.97.247 2.289-.738 3.988-2.861 4.959-.802.366-1.653.502-2.522.572-.432.034-.81.364-.851.719-.042.36.184.73.636.838.533.127 1.089.163 1.636.226 1.174.134 2.361.195 3.521.405 1.754.316 2.733 1.847 2.424 3.609-.275 1.568-1.183 2.709-2.449 3.584-2.133 1.478-4.473 1.91-6.965 1.156-1.425-.432-2.43-1.369-2.777-2.885-.174-.759.011-1.446.582-1.961.679-.61 1.418-1.154 2.129-1.73l.23-.231-.264-.185c-.725-.344-1.305-.815-1.53-1.633-.077-.277.003-.459.238-.601.4-.241.798-.486 1.193-.735.186-.116.37-.236.543-.37.236-.18.215-.314-.067-.418-.656-.242-1.239-.593-1.691-1.133-.755-.901-.969-1.974-.907-3.107.097-1.77 1.058-2.936 2.62-3.686 1.857-.891 3.72-.947 5.613-.135.7.3 1.438.364 2.189.312.561-.04 1.051-.252 1.49-.711zm-6.843 12.681c-1.394-.012-1.831.16-2.649.993-.916.934-.911 2.229.003 3.167.694.711 1.56 1.044 2.523 1.144 1.125.116 2.233.069 3.255-.494 1.09-.603 1.632-1.723 1.387-2.851-.203-.931-.889-1.357-1.724-1.602-.95-.278-1.932-.331-2.795-.357zm-2.738-8.908c.051.387.072.779.158 1.158.223.982.65 1.845 1.627 2.282 1.147.515 2.612.294 3.114-1.316a4.853 4.853 0 00-.113-3.274 2.512 2.512 0 00-.91-1.184c-.996-.695-2.793-.787-3.525.749-.238.499-.331 1.03-.351 1.585z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#4F372B" d="M47.35 105.038c.037.171.111.365.113.56.003.371-.037.742-.058 1.113v.322l.314-.24c.86-.708 1.784-1.311 2.86-1.636 1.942-.585 3.882.478 4.515 2.456.24.752.335 1.525.344 2.311.02 1.746.032 3.492.05 5.238.006.627.078.739.671.92a7.4 7.4 0 001.03.229c.191.03.273.105.263.292l.002.172c-.007.723-.057.756-.758.754-1.678-.003-3.355.007-5.033.021-.5.004-.501.019-.551-.475l-.01-.284c.031-.426.041-.422.46-.484.282-.042.562-.107.837-.179.283-.073.419-.282.457-.562.019-.142.044-.284.043-.426-.024-1.908.007-3.818-.097-5.723-.084-1.541-1.26-2.459-2.807-2.354a4.047 4.047 0 00-2.071.743c-.413.289-.496.706-.494 1.155.008 1.784.025 3.568.044 5.353.004.391.015.782.052 1.17.039.424.188.595.604.687.398.088.804.139 1.229.21l.036.328c.014.765-.066.822-.809.819-1.735-.007-3.47.004-5.204.023-.273.004-.389-.082-.382-.348l-.004-.114c-.045-.689-.025-.715.627-.827l.308-.062c.706-.159.887-.347.897-1.064.033-2.271.045-4.541.068-6.812.003-.326-.12-.579-.424-.714a53.88 53.88 0 00-1.287-.544c-.238-.098-.51-.16-.519-.489-.006-.232.242-.437.581-.506.681-.138 1.368-.253 2.041-.422.67-.167 1.328-.391 2.062-.611z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#4F382B" d="M84.865 110.97c-.032 2.121-.583 3.836-2.083 5.123-1.9 1.633-4.864 2.188-7.287.967-1.034-.521-1.794-1.32-2.289-2.357-.759-1.595-.949-3.272-.553-4.99.392-1.699 1.421-2.93 2.961-3.727 1.584-.819 3.252-1.139 5.011-.709 2.225.543 3.824 2.357 4.142 4.667.057.405.079.815.098 1.026zm-2.577 1.149l-.086-.01c0-.2.011-.4-.002-.6-.073-1.246-.353-2.433-1.075-3.476-.685-.988-1.618-1.571-2.832-1.656-1.359-.096-2.501.664-2.902 2.052-.602 2.084-.398 4.115.66 6.024.461.832 1.144 1.446 2.059 1.769 1.793.631 3.383-.186 3.85-2.022.172-.678.222-1.387.328-2.081z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#4F372B" d="M40.819 111.134c-.037 1.522-.396 2.929-1.336 4.152-1.007 1.31-2.391 2.01-3.965 2.305-1.861.348-3.609.032-5.104-1.217-.71-.594-1.195-1.355-1.515-2.221-.525-1.42-.656-2.875-.333-4.358.345-1.587 1.241-2.8 2.63-3.614 1.606-.939 3.339-1.358 5.19-.936 2.38.544 3.754 2.095 4.262 4.443.102.474.116.964.171 1.446zm-2.606 1.004l-.069-.01v-.286c-.039-1.396-.312-2.726-1.145-3.886-.617-.861-1.443-1.401-2.502-1.552-1.726-.246-2.854.778-3.228 2.169-.488 1.817-.335 3.612.42 5.335.471 1.074 1.215 1.911 2.358 2.317 1.782.633 3.396-.205 3.847-2.034.166-.669.216-1.367.319-2.053z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#439934" d="M82.362 33.544c1.227 3.547 2.109 7.168 2.4 10.92.36 4.656.196 9.28-.786 13.859l-.126.366c-.308.001-.622-.038-.923.009-2.543.4-5.083.814-7.624 1.226-2.627.426-5.256.835-7.878 1.289-.929.16-2.079-.031-2.454 1.253l-.18.061.127-7.678-.129-18.526 1.224-.21c2.001-.327 4.002-.66 6.006-.979 2.39-.379 4.782-.749 7.174-1.119 1.056-.162 2.113-.313 3.169-.471z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#45A538" d="M62.265 84.911c-1.291-1.11-2.627-2.171-3.864-3.339-6.658-6.28-11.529-13.673-13.928-22.586-.661-2.452-1.101-4.945-1.243-7.479-.1-1.774-.243-3.563-.117-5.328.333-4.693 1.012-9.341 2.388-13.862l.076-.105c.134.178.326.336.394.537 1.344 3.956 2.677 7.916 4.004 11.879 4.169 12.451 8.333 24.905 12.509 37.354.082.243.293.442.445.661l-.664 2.268z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#46A037" d="M82.362 33.544c-1.057.157-2.114.309-3.169.471-2.392.37-4.784.74-7.174 1.119-2.003.318-4.004.651-6.006.979l-1.224.21-.01-.798c-.041-.656-.109-1.312-.118-1.968l-.137-12.554c-.032-2.619-.08-5.238-.133-7.856a198.423 198.423 0 00-.141-4.88c-.04-.873-.181-1.742-.237-2.615-.033-.502.011-1.008.022-1.512.624 1.209 1.235 2.427 1.876 3.627 1.013 1.897 2.628 3.295 4.083 4.82 5.746 6.031 9.825 13.039 12.368 20.957z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#409433" d="M64.792 62.527l.18-.061c.375-1.284 1.525-1.093 2.454-1.253 2.622-.454 5.251-.863 7.878-1.289 2.541-.411 5.081-.825 7.624-1.226.301-.047.615-.008.923-.009-.475 1.696-.849 3.429-1.452 5.078-.685 1.87-1.513 3.696-2.392 5.486a37.595 37.595 0 01-4.853 7.458c-1.466 1.762-3.1 3.393-4.737 5.002-.906.889-1.972 1.614-2.966 2.414l-.258-.176-.927-.792-.959-2.104a31.65 31.65 0 01-1.065-7.516l.018-.428.131-1.854c.043-.633.101-1.265.128-1.898.096-2.276.182-4.554.273-6.832z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M64.792 62.527c-.09 2.278-.176 4.557-.273 6.835-.027.634-.084 1.266-.128 1.898l-.584.221c-1.298-3.821-2.597-7.602-3.867-11.392-2.101-6.271-4.176-12.551-6.274-18.824a3423.013 3423.013 0 00-5.118-15.176c-.081-.236-.311-.422-.471-.631l3.74-6.877c.129.223.298.432.379.672 1.73 5.12 3.457 10.241 5.169 15.367 2.228 6.67 4.441 13.343 6.667 20.014.089.266.235.512.375.811l.512-.596-.127 7.678z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#4AA73C" d="M48.076 25.458c.161.209.391.395.471.631a3379.774 3379.774 0 015.118 15.176c2.098 6.273 4.173 12.553 6.274 18.824 1.27 3.79 2.569 7.57 3.867 11.392l.584-.221-.131 1.854-.119.427c-.203 2.029-.374 4.062-.622 6.087-.124 1.015-.389 2.011-.59 3.015-.151-.219-.363-.418-.445-.661-4.177-12.449-8.34-24.903-12.509-37.354a3010.791 3010.791 0 00-4.004-11.879c-.068-.201-.26-.359-.394-.537l2.5-6.754z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#57AE47" d="M64.918 54.849l-.512.596c-.14-.299-.286-.545-.375-.811-2.226-6.671-4.439-13.344-6.667-20.014a4618.057 4618.057 0 00-5.169-15.367c-.081-.24-.25-.449-.379-.672l4.625-6.084c.146.194.354.367.429.586 1.284 3.76 2.556 7.523 3.822 11.289 1.182 3.518 2.346 7.04 3.542 10.552.08.235.359.401.545.601l.01.798.129 18.526z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#60B24F" d="M64.779 35.525c-.187-.199-.465-.365-.545-.601-1.195-3.512-2.36-7.034-3.542-10.552a2495.581 2495.581 0 00-3.822-11.289c-.075-.219-.283-.392-.429-.586 1.504-1.473 2.961-2.999 4.526-4.404 1.391-1.248 2.509-2.586 2.561-4.559l.11-.393.396.998c-.01.504-.055 1.01-.022 1.512.057.873.198 1.742.237 2.615.073 1.625.108 3.253.141 4.88.053 2.618.101 5.237.133 7.856l.137 12.554c.01.657.079 1.313.119 1.969z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#A9AA88" d="M62.929 82.642c.201-1.004.466-2 .59-3.015.248-2.024.419-4.058.622-6.087l.051-.008.05.009a31.65 31.65 0 001.065 7.516c-.135.178-.324.335-.396.535-.555 1.566-1.079 3.145-1.637 4.71-.076.214-.29.381-.439.568l-.571-1.96.665-2.268z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#B6B598" d="M62.835 86.871c.149-.188.363-.354.439-.568.558-1.565 1.082-3.144 1.637-4.71.071-.2.261-.357.396-.535l.959 2.104c-.189.268-.451.511-.556.81l-1.836 5.392c-.076.217-.333.369-.507.552l-.532-3.045z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#C2C1A7" d="M63.367 89.915c.173-.183.431-.335.507-.552l1.836-5.392c.104-.299.367-.542.556-.81l.928.791c-.448.443-.697.955-.547 1.602l-.282.923c-.128.158-.314.296-.377.477-.641 1.836-1.252 3.682-1.898 5.517-.082.232-.309.415-.468.621l-.255-3.177z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#CECDB7" d="M63.621 93.091c.16-.206.387-.389.468-.621.646-1.835 1.258-3.681 1.898-5.517.063-.181.249-.318.377-.477l-.389 4.236c-.104.12-.254.225-.304.364l-1.294 3.708c-.091.253-.265.479-.401.716-.121-.158-.337-.311-.347-.475-.038-.642-.011-1.289-.008-1.934z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#DBDAC7" d="M63.977 95.501c.136-.237.31-.463.401-.716l1.294-3.708c.05-.14.201-.244.304-.364l.01 2.78-.931 2.387-1.078-.379z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#EBE9DC" d="M65.055 95.88l.931-2.387.192 2.824-1.123-.437z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#CECDB7" d="M66.646 85.554c-.149-.646.099-1.158.547-1.602l.258.176-.805 1.426z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M64.242 73.542l-.05-.009-.051.008.119-.427-.018.428z"></path>
                        </svg>
                    </div>
                    <div class="Sitem">
                        <svg viewBox="0 0 128 128">
                            <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
                        </svg>
                    </div>
                    <div class="Sitem">
                        <svg viewBox="0 0 128 128">
                            <path fill="#00618A" d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"></path>
                        </svg>
                    </div>
                    <div class="Sitem">
                        <svg viewBox="0 0 128 128">
                            <path fill="#99425B" d="M124.129 63.02c0-7.692-5.828-14.165-13.652-16.012L128 .113H41.16l17.563 47.043c-7.578 1.996-13.164 8.356-13.164 15.903 0 5.546 3.058 10.464 7.703 13.496-1.832 2.367-3.953 4.55-6.356 6.62-4.523 3.848-9.539 6.805-14.957 8.766-4.89-2.996-7.008-8.285-5.094-13.02 7.457-2.07 12.88-8.394 12.88-15.827 0-9.133-8.192-16.532-18.22-16.532-10.066 0-18.253 7.434-18.253 16.57 0 4.513 2.035 8.653 5.297 11.61-.286.52-.57 1.035-.856 1.59C4.973 81.438 1.875 87.207.691 93.68c-2.363 12.941 1.508 23.336 10.84 29.215 5.258 3.293 11.047 4.957 17.282 4.957 10.714 0 21.597-4.883 32.109-9.618 7.5-3.363 15.242-6.879 22.863-8.578 2.813-.629 5.746-1 8.844-1.406 6.273-.813 12.754-1.664 18.582-4.734 6.805-3.586 11.45-9.579 12.797-16.457 1.015-5.29 0-10.614-2.61-15.274a15.35 15.35 0 002.73-8.765zm-7.945 0c0 5.14-4.606 9.32-10.27 9.32s-10.27-4.18-10.27-9.32c0-1.665.489-3.254 1.344-4.622.325-.52.735-1.035 1.14-1.48a8.517 8.517 0 011.427-1.219l.043-.039c.324-.222.691-.445 1.058-.664 0 0 .04 0 .04-.039.163-.074.327-.184.492-.258.039 0 .078-.039.12-.039.165-.07.368-.144.57-.219a8.78 8.78 0 00.571-.222c.04 0 .082-.04.121-.04.164-.034.328-.109.489-.144.043 0 .125-.039.164-.039.203-.035.367-.074.57-.11h.043l.61-.113c.042 0 .12 0 .163-.035.164 0 .325-.039.489-.039h.203c.203 0 .41-.035.652-.035h.531c.16 0 .286 0 .446.035h.082c.328.04.652.074.98.149 4.645.886 8.192 4.66 8.192 9.172zM52.527 7.508h64.102l-14.711 39.387c-.61.113-1.223.296-1.832.48l-15.484-28.66L69.074 47.19c-.613-.183-1.265-.296-1.914-.406zM81.664 59.8c-.773-3.477-2.73-6.582-5.5-8.875l8.438-15.457 8.515 15.789c-2.527 2.293-4.36 5.215-5.094 8.543zM61.25 53.96c.203-.04.367-.074.57-.113h.121c.164-.035.329-.035.489-.075h.164c.164 0 .285-.035.449-.035h1.59c.16 0 .285.035.406.035.082 0 .121 0 .203.04.164.035.285.035.45.074.038 0 .081 0 .163.035.204.039.407.074.57.113h.04c.164.035.328.07.488.145.043 0 .082.039.164.039.121.035.285.074.406.148.043 0 .082.035.125.035.16.075.325.114.489.188h.039c.203.07.367.144.531.258h.04c.163.074.327.183.491.257.04 0 .04.04.078.04.164.07.286.183.45.257l.043.035c.488.333.937.704 1.382 1.075l.043.035c.407.406.813.851 1.141 1.332 1.059 1.48 1.672 3.219 1.672 5.105 0 5.141-4.606 9.317-10.27 9.317s-10.27-4.176-10.27-9.317c-.042-4.328 3.259-7.988 7.743-9.023zm-40.102-.262c5.665 0 10.27 4.18 10.27 9.32 0 5.141-4.605 9.32-10.27 9.32-5.664 0-10.27-4.179-10.27-9.32 0-5.14 4.606-9.32 10.27-9.32zm94.79 32.067c-.895 4.73-4.118 8.875-8.844 11.351-4.442 2.332-9.903 3.07-15.649 3.809-3.136.406-6.437.851-9.617 1.554-8.476 1.887-16.625 5.586-24.531 9.133-10.106 4.551-19.645 8.84-28.484 8.84-4.606 0-8.723-1.183-12.633-3.66-8.965-5.621-8.52-16.16-7.457-21.93.976-5.402 3.707-10.468 6.316-15.312.16-.297.285-.555.445-.852.899.297 1.836.52 2.813.668-1.547 7.84 2.851 15.938 11.41 19.934l1.55.738 1.669-.555c7.133-2.293 13.734-6.027 19.562-11.02 3.301-2.812 6.114-5.843 8.477-9.136.937.149 1.875.188 2.812.188 8.477 0 15.606-5.29 17.645-12.391h6.844c2.039 7.137 9.171 12.39 17.648 12.39 3.383 0 6.52-.85 9.207-2.292 1.063 2.773 1.387 5.656.817 8.543zm0 0"></path>
                        </svg>
                    </div>
                    <div class="Sitem">
                        <svg viewBox="0 0 128 128">
                            <path fill="#2f406a" d="M101.84 41.72V86l-37.66 22.32-.34.31v16.57l.34.32 53-30.64V33.12l-.5-.12-15 8.36.08.36"></path><path fill="#2379bd" d="M26.4 86.4l37.78 21.92v17.2l-53.4-30.76V33.24l.55-.08 14.91 8.67.16.5V86.4"></path><path fill="#03afef" d="M26.4 42.32l-15.62-9.08L64.06 2.48l53.16 30.64-15.38 8.6-37.78-21.56L26.4 42.32"></path><path fill="#2f406a" d="M63.53 81.33l-.41-.42V64.27l.41-.21.1-.41 14.27-8.32.44.1v17.15l-14.8 8.76"></path><path fill="#2379bd" d="M48.48 73.11V55.3h.41l14.51 8.45.12.33v17.25l-15.04-8.22"></path><path fill="#03afef" d="M63.29 46.54L48.48 55.3l15.05 8.76 14.8-8.64-15.04-8.88"></path><path fill="#2f406a" d="M45.11 92.19l-.41-.42V75.13l.41-.21.1-.41 14.27-8.32.44.1v17.14l-14.8 8.76"></path><path fill="#2379bd" d="M30.06 84V66.16h.41L45 74.59l.12.33v17.27L30.06 84"></path><path fill="#03afef" d="M44.86 57.4l-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88"></path><path fill="#2f406a" d="M83.27 92.6l-.41-.42V75.54l.41-.21.1-.41 14.27-8.32.44.1v17.14L83.27 92.6"></path><path fill="#2379bd" d="M68.22 84.38V66.57h.41L83.15 75l.12.33V92.6l-15.05-8.22"></path><path fill="#03afef" d="M83 57.81l-14.8 8.76 15.05 8.76 14.8-8.64L83 57.81"></path><path fill="#2f406a" d="M64.85 103.46l-.41-.42V86.4l.41-.21.1-.41 14.27-8.32.44.1V94.7l-14.8 8.76"></path><path fill="#2379bd" d="M49.8 95.23v-17.8h.41l14.51 8.45.12.33v17.27L49.8 95.23"></path><path fill="#03afef" d="M64.6 68.67l-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88"></path><path fill="#2f406a" d="M63.53 57.73l-.41-.42V40.67l.41-.21.1-.41 14.27-8.33.44.1V49l-14.8 8.76"></path><path fill="#2379bd" d="M48.48 49.5V31.7h.41l14.51 8.45.12.33v17.25L48.48 49.5"></path><path fill="#03afef" d="M63.29 22.94L48.48 31.7l15.05 8.76 14.8-8.64-15.04-8.88"></path><path fill="#2f406a" d="M45.11 68.59l-.41-.42V51.53l.41-.21.1-.41 14.27-8.32.44.1v17.14l-14.8 8.76"></path><path fill="#2379bd" d="M30.06 60.36V42.55h.41L45 51l.12.33v17.26l-15.06-8.23"></path><path fill="#03afef" d="M44.86 33.8l-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88"></path><path fill="#2f406a" d="M83.27 69l-.41-.42V51.94l.41-.21.1-.41L97.64 43l.44.1v17.14L83.27 69"></path><path fill="#2379bd" d="M68.22 60.77V43h.41l14.51 8.45.12.33V69l-15.04-8.23"></path><path fill="#03afef" d="M83 34.21L68.22 43l15.05 8.76 14.8-8.64L83 34.21"></path><path fill="#2f406a" d="M64.85 79.85l-.41-.42V62.79l.41-.21.1-.41 14.27-8.32.44.1v17.14l-14.8 8.76"></path><path fill="#2379bd" d="M49.8 71.63V53.82h.41l14.51 8.45.12.33v17.25L49.8 71.63"></path><path fill="#03afef" d="M64.6 45.06l-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88"></path>
                        </svg>
                    </div>
            </div>
            </div>
        </section>
    );
}

export default About;