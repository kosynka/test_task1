<template>
    <header class="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-2">
        <!-- Logo svg start -->
        <a href="#" class="d-flex align-items-center col-md-3 mb-md-0">
            <svg width="120" height="26" viewBox="0 0 360 78" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <path id="a" d="M78.802 32.94H0V.495h78.802z" />
                </defs>
                <g fill="none" fill-rule="evenodd">
                    <path d="M133.932 37.586l-6.545-1.42c-3.275-.71-5.078-2.73-5.078-5.69 0-3.762 3.34-6.6 7.77-6.6 6.13 0 7.94 4.51 8.35 5.894.13.46.45.85.88 1.065.42.215.89.247 1.34.09l3.45-1.217c.86-.302 1.33-1.226 1.08-2.104-.89-3.13-4.16-10.41-15.25-10.41-8.21 0-15.14 6.28-15.14 13.715 0 6.39 4.193 11.11 11.22 12.64l6.24 1.36c3.756.79 6 3.08 6 6.12 0 3.88-3.19 6.29-8.33 6.29-6.04 0-8.95-3.96-9.66-7.67-.093-.49-.39-.91-.81-1.16-.42-.25-.93-.31-1.4-.16l-3.79 1.21c-.83.26-1.333 1.09-1.17 1.93 1.18 6.15 6.233 12.71 16.9 12.71 9.014 0 15.812-5.87 15.812-13.65 0-6.57-4.336-11.29-11.9-12.96m38.752 6c.02.13-.04.23-.08.27-.04.05-.13.13-.275.13h-13.9c-.11 0-.217-.05-.287-.14-.04-.05-.097-.14-.07-.27.635-2.898 3.12-5.82 7.24-5.82 4.047 0 6.8 2.17 7.365 5.813zm-7.426-12.32c-7.32 0-14.89 6.12-14.89 16.37 0 4.94 1.62 9.16 4.69 12.19 2.844 2.81 6.73 4.36 10.94 4.36 6.27 0 11.35-3.276 13.59-8.76.18-.45.17-.95-.024-1.39-.197-.435-.554-.76-1.005-.916l-3.06-1.06c-.85-.29-1.79.122-2.137.943-1.32 3.11-3.8 4.68-7.37 4.68-4.32 0-7.61-2.91-8.18-7.243-.02-.13.045-.23.085-.27.04-.05.13-.13.27-.13h20.284c.91 0 1.67-.71 1.72-1.616.02-.29.03-.61.03-.926 0-10.02-5.73-16.243-14.95-16.243zm34.54 24.32c-4.87 0-7.9-3.38-7.9-8.82 0-5.36 3.1-8.824 7.9-8.824 4.65 0 7.774 3.54 7.774 8.82 0 5.274-3.126 8.82-7.775 8.82zm12.98-23.4h-3.67c-.95 0-1.725.773-1.725 1.77 0 .215-.17.31-.22.33-.07.03-.21.07-.336-.05-1.89-1.728-4.55-2.605-7.9-2.605-8.303 0-14.33 6.37-14.33 15.14 0 8.732 6.027 15.07 14.33 15.07 3.07 0 5.85-1.008 7.83-2.838.13-.12.27-.09.34-.06.05.02.22.11.22.33v1.26c0 6.1-2.67 8.945-8.39 8.945-3.63 0-6.48-2.25-7.25-5.728-.1-.45-.37-.83-.76-1.073s-.86-.32-1.31-.22l-3.604.83c-.92.218-1.487 1.12-1.294 2.06 1.29 6.32 7.006 10.57 14.21 10.57 5.37 0 9.46-1.635 12.16-4.86 2.23-2.666 3.41-6.367 3.41-10.703V33.92c0-.95-.77-1.72-1.72-1.72zm43.63-.864c-4.06 0-7.363 1.532-9.554 4.44-.083.11-.2.174-.335.164-.104 0-.186-.05-.24-.135-1.837-2.84-5.008-4.47-8.7-4.47-2.937 0-5.76 1.032-7.748 2.835-.155.148-.318.1-.38.07-.075-.03-.2-.12-.2-.312 0-.95-.774-1.72-1.724-1.72h-3.486c-.95 0-1.72.77-1.72 1.72v27.63c0 .95.774 1.722 1.724 1.722h3.67c.95 0 1.72-.776 1.72-1.726V44.68c0-4.093 2.5-6.844 6.23-6.844 4.88 0 5.61 3.827 5.61 6.107v17.61c0 .95.77 1.72 1.72 1.72h3.733c.95 0 1.72-.774 1.72-1.724V44.62c0-3.996 2.54-6.786 6.17-6.786 4.883 0 5.61 3.83 5.61 6.11v17.61c0 .95.77 1.72 1.72 1.72h3.67c.95 0 1.72-.774 1.72-1.724V43.32c0-8.28-5.49-11.983-10.93-11.983m24.81 12.656c-.11 0-.216-.05-.287-.138-.036-.045-.094-.14-.066-.266.636-2.9 3.12-5.82 7.244-5.82 4.046 0 6.8 2.17 7.364 5.81.02.13-.043.23-.08.27-.043.04-.13.12-.275.12h-13.9zm6.83-12.72c-7.32 0-14.89 6.124-14.89 16.37 0 4.946 1.62 9.163 4.686 12.196 2.84 2.81 6.72 4.35 10.94 4.35 6.26 0 11.34-3.28 13.59-8.77.18-.45.17-.95-.03-1.39-.2-.44-.56-.76-1.01-.92l-3.06-1.058c-.85-.293-1.79.12-2.138.942-1.32 3.102-3.8 4.68-7.37 4.68-4.32 0-7.61-2.916-8.18-7.25-.02-.135.04-.23.08-.276.04-.05.13-.125.27-.125h20.29c.91 0 1.667-.71 1.72-1.617.017-.29.03-.61.03-.93 0-10.02-5.73-16.25-14.95-16.25zm36.77.063c-3.105 0-5.827 1.058-7.87 3.06-.14.134-.29.1-.366.07-.06-.03-.21-.115-.21-.324v-.22c0-.95-.774-1.72-1.724-1.72h-3.6c-.95 0-1.724.77-1.724 1.72v27.625c0 .95.77 1.723 1.72 1.723h3.73c.95 0 1.725-.775 1.725-1.725V45.418c0-3.608 1.635-7.464 6.23-7.464 4.13 0 6.226 2.283 6.226 6.785v16.8c0 .95.77 1.72 1.72 1.72h3.73c.95 0 1.722-.78 1.722-1.73V43.75c0-7.66-4.338-12.42-11.31-12.42m28.69 7.488h4.35c.95 0 1.72-.775 1.72-1.724V33.92c0-.95-.77-1.72-1.72-1.72h-4.35c-.196 0-.35-.158-.35-.35v-7.314c0-.95-.776-1.722-1.725-1.722h-3.24c-.95 0-1.72.772-1.72 1.722v3.78c0 1.77-.678 3.883-3.888 3.883H342c-.95 0-1.72.77-1.72 1.72v3.17c0 .95.773 1.72 1.72 1.72h3.61c.195 0 .35.15.35.35v15.27c0 5.64 3.435 9.14 8.96 9.14 1.54 0 2.738-.22 3.315-.35.78-.18 1.328-.87 1.328-1.68V58.6c0-.487-.21-.952-.57-1.277-.36-.328-.85-.486-1.338-.436-.39.04-.768.063-1.064.063-2.51 0-3.45-.92-3.45-3.39v-14.4c0-.192.16-.348.35-.348" fill="#43AF79" />
                    <g transform="translate(0 45)">
                        <mask id="b" fill="#fff">
                            <use xlink:href="#a" />
                        </mask>
                        <path d="M51.926 8.497H4c-2.21 0-4-1.79-4-4s1.79-4 4-4h47.926c2.21 0 4 1.79 4 4s-1.79 4-4 4" fill="#93C8A2" mask="url(#b)" />
                        <path d="M41.65 33c-3.904 0-7.76-.58-11.46-1.727-2.11-.654-3.29-2.894-2.637-5.004.654-2.12 2.9-3.3 5.005-2.64 2.932.91 5.99 1.37 9.092 1.37 13.573 0 25.358-8.71 29.327-21.68.646-2.11 2.88-3.3 4.995-2.65 2.112.64 3.3 2.88 2.654 4.99C73.622 22.01 58.762 33 41.65 33" fill="#43AF79" mask="url(#b)" />
                    </g>
                    <path d="M79.3 33.175H31.376c-2.21 0-4-1.79-4-4s1.79-4 4-4H79.3c2.21 0 4 1.79 4 4s-1.79 4-4 4" fill="#93C8A2" />
                    <path d="M8.5 33.176c-.387 0-.78-.057-1.17-.176-2.114-.648-3.302-2.884-2.655-4.996C9.68 11.654 24.54.672 41.65.672c3.907 0 7.763.58 11.46 1.728 2.112.655 3.29 2.895 2.637 5.005-.654 2.11-2.896 3.297-5.005 2.636-2.93-.9-5.99-1.36-9.092-1.36-13.57 0-25.357 8.71-29.326 21.68-.527 1.72-2.11 2.83-3.823 2.83" fill="#43AF79" />
                    <path d="M69.392 13.932c0 2.21-1.79 4-4 4-2.208 0-4-1.79-4-4s1.792-4 4-4c2.21 0 4 1.79 4 4M21.907 64.746c0 2.21-1.79 4-4 4-2.208 0-4-1.79-4-4s1.792-4 4-4c2.21 0 4 1.79 4 4" fill="#93C8A2" />
                </g>
            </svg>
        </a>
        <!-- Logo svg end -->
        <ul class="fw-bolder nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 pe-4 link-dark">Products</a></li>
            <li><a href="#" class="nav-link px-2 pe-4 link-dark">Pricing</a></li>
            <li><a href="#" class="nav-link px-2 pe-4 link-dark">Docs</a></li>
            <li><a href="#" class="nav-link px-2 link-dark">Company</a></li>
        </ul>
        <div class="col-md-3 text-end">
            <button type="button" class="btn me-2">Log in</button>
            <button type="button" class="btn btn-success">Sign up</button>
        </div>
    </header>

    <main>
        <div class="container">
            <div id="secondary-nav-bar" class="container py-1 mb-2 border-bottom d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
                <ul class="nav navbar-light col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a id="active" href="#" class="nav-link pe-4 text-secondary">Popular</a></li>
                    <li><a href="#" class="nav-link pe-4 text-secondary">Engineering</a></li>
                    <li><a href="#" class="nav-link pe-4 text-secondary">Growth marketing</a></li>
                    <li><a href="#" class="nav-link pe-4 text-secondary">Company</a></li>
                </ul>
                <form class="text-end row">
                    <svg class="col mt-3 p-0 text-secondary" fill="grey" xmlns="http://www.w3.org/2000/svg" height="10" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 487.95 487.95" style="enable-background:new 0 0 487.95 487.95;" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1    c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4    c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z" />
                            </g>
                        </g>
                    </svg>
                <input id="search" class="form-control col" type="search" placeholder="Search" aria-label="Search">
            </form>
            </div>

            <div class="container mt-5 row">
                <div class="col-md-6">
                    <div class="h-100 text-dark">
                        <h3>Introducing Segment Data Lakes:</h3>
                        <h3>How to start using advanced analytics</h3>
                        <div>
                            <img id="ava" src="https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80">
                            <a>Nicole Nearhood on September 8th 2020</a>
                        </div>
                        <p class="text-secondary">We're excited to announce the launch of Segment Data Lakes, a new turnkey customer data lake that provides the data engineering foundation needed to power data science and advanced analytics use cases.</p>
                        <button id="company-btn" class="btn" type="button">Company</button>
                    </div>
                </div>
                <div class="col-md-6">
                    <div>
                        <img width="564" src="https://images.ctfassets.net/i8bfc4nr05rq/3J0QtBEi89aF5qc3XvuKMR/10d7401dd01fe078a431db54f936e224/Graphic-Header.png">
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- dark mode button -->
    <button>
        <!-- @click="toggleDark()" -->
        <!-- class="dark: bg-purple-500" -->
        <a id="float">
            <i class="my-float"></i>
        </a>
    </button>
</template>

<script>
// import useDark from '@vueuse/core';
// import useToggle from '@vueuse/core';

// const isDark = useDark();
// const toggleDark = useToggle(isDark);

</script>

<style>
    #search {
        border: none;
        outline: 0;
        width: 90px;
    }

    #search:focus {
        box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 1), 1px 1px 1px rgba(0, 0, 0, 1);
    }

    #search::placeholder {
        text-align: right;
    }

    #secondary-nav-bar li {
        display: inline-block;
        vertical-align: middle;
    }

    #secondary-nav-bar a:hover,
    #secondary-nav-bar a:focus,
    #secondary-nav-bar a:active {
        color: #198754 !important;
        text-decoration: none;
    }

    #secondary-nav-bar a {
        text-decoration: none;
        transition: color 0.1s, background-color 0.1s;
    }

    #secondary-nav-bar a {
        position: relative;
        display: block;
        padding: 16px 0;
        margin: 0 12px;
        line-height: 16px;
        transition: color 0.1s, background-color 0.1s, padding 0.2s ease-in;
        color: grey;
    }

    #secondary-nav-bar a::before {
        content: '';
        display: block;
        position: absolute;
        bottom: -6px;
        height: 3px;
        width: 82%;
        background-color: #198754;
        transform-origin: right top;
        transform: scale(0, 1);
        transition: color 0.05s, transform 0.4s ease-out;
    }

    #secondary-nav-bar a:active::before {
        background-color: #198754;
    }

    #secondary-nav-bar a:hover::before,
    #secondary-nav-bar a:focus::before {
        transform-origin: left top;
        transform: scale(1, 1);
    }

    #company-btn {
        color: DodgerBlue;
        background-color: LightCyan;
        font-size: 14px;
    }

    #ava {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 15px 15px 15px 0;
    }

    #float{
        position:fixed;
        width:60px;
        height:60px;
        bottom:40px;
        right:40px;
        background-color: darkslategrey;
        color: white;
        border-radius:50px;
        text-align:center;
        box-shadow: 2px 2px 3px #999;
    }

    .my-float{
        margin-top:22px;
    }
</style>