import { createGlobalStyle } from "styled-components";

export const HomeStyles = createGlobalStyle`
    body {
        background-color:#cab6ac;
        font-family: 'Libre Franklin', sans-serif;
    }
    a {
        color:#013550;
        transition:0.4s ease all;
        &:hover {
            color:white;
        }
    }
    h1 {
        font-size:60px;
        color:white;
        margin:0;
        font-family: 'Libre Baskerville', serif;
        text-shadow: 3px 3px 4px rgba(0,0,0,0.6);
        @media (max-width: 700px) {
            font-size:45px;
        }
        &:nth-of-type(2) {
            line-height:30px;
            margin: 7px 0;
            display: flex;
            align-items: center;
        }
        span {
            font-size:25px;
            line-height:22px;
            &:first-of-type {
                width:170px;
                height:2px;
                display:block;
                margin-right:15px;
                background-color:white;
            }
            &:last-of-type {
                width:170px;
                height:2px;
                display:block;
                margin-left:15px;
                background-color:white;
            }
        }
    }
    h2 {
        font-family: 'Libre Franklin', sans-serif;
        color:#013550;
        font-size:30px;
    }
    .fatHR {
        border: 2px solid white;
        width:100px;
        box-shadow: 3px 3px 4px rgba(0,0,0,0.6);
        margin:20px auto;
        background-color:white;
        opacity:1;
    }
    .thinHR {
        color:white;
        width:100px;
        box-shadow: 3px 3px 4px rgba(0,0,0,0.6);
        margin:20px auto;
        opacity:1;
    }
    a {    
        text-decoration:none;
    }
    .rsvpButton {
        overflow:hidden;
        font-family: 'Libre Franklin', sans-serif;
        border:2px solid white;
        font-size:20px;
        padding:5px;
        width:120px;
        margin:30px auto 0;
        color:white;
        transition:0.4s ease all;
        cursor:pointer;
        &:hover {
            background-color:white;
            color:black;
        }
    }
    .websiteContainer {
        overflow:hidden;
        .bgImage {
            z-index:50;
            position:fixed;
            min-width:100vw;
            min-height:100vh;
            .bgImg {
                margin-left: 50vw;
                transform: translateX(-50%);
                min-width:100vw;
                min-height:100vh;
                width:auto;
                height:auto;
            }
            .gradient {
                width:100vw;
                height:100vh;
                position:absolute;
                z-index:10;
                background: linear-gradient(0deg, rgba(0,0,0,0.6320903361344538) 0%, rgba(0,0,0,0) 49%, rgba(0,0,0,0.6376925770308124) 100%);
            }
        }
        .contentContainer {
            overflow:hidden;
            position:relative;
            z-index:100;
            min-width:100vw;
            min-height:100vh;
            display:flex;
            align-items:center;
            justify-content:center;
            text-align:center;
            a {
                text-decoration:none;
            }
            h2 {
                color:white;
                margin-top:15px;
            }
        }
        .detailsContainer {
            position:relative;
            z-index:100;
            min-width:100vw;
            min-height:100vh;
            display:flex;
            align-items:center;
            justify-content:center;
            text-align:center;
            padding:0 20px;
            p {
                color:#013550;
                font-family: 'Libre Franklin', sans-serif;
                font-size:18px;
                max-width:400px;
                margin:4px auto;
            }
            h1 {
                font-size:40px;
            }
        }
        .moreInfoContainer {
            position:relative;
            z-index:100;
            min-height:100vh;
            display:flex;
            align-items:center;
            justify-content:center;
            .faq-row-wrapper {
                width:100%;
                max-width:600px;
                margin:0 auto;
                .faq-title {
                    justify-content: center;
                    padding-bottom:15px;
                    h2 {
                        font-family: 'Libre Baskerville', serif;
                        color:white;
                        font-size: 40px;
                        text-shadow: 3px 3px 4px rgb(0 0 0 / 60%);
                    }
                }
                .row-content-text {
                    padding:10px 0 20px 0 !important;
                    color:#013550 !important;
                }
                .row-title-text {
                    color:#013550 !important;
                }
            }
        }
        .rsvpContainer {
            position:relative;
            z-index:100;
            min-height:100vh;
            padding:100px 0;
            h1, .rsvpBy {
                text-align:center;
            }
            .rsvpBy {
                color:#013550;
                margin-top:10px;
            }
        }

        .myForm {
            width:100%;
            max-width:600px;
            margin:0 auto;
            padding:0 5%;
            p {   
                color:#013550;
                margin:0 0 10px 0;
            }
            .textForm {
                label {
                    width:100%;
                    display:flex;
                    flex-direction:column;
                    align-items:flex-start;
                    color:white;
                    input[type="text"] {
                        color:#013550;
                        width:100%;
                        background-color:rgba(255,255,255,0);
                        border:none;
                        border-bottom:2px solid white;
                        padding:5px;
                        transition:0.4s ease all;
                    }
                    select {
                        width:100%;
                        background-color:rgba(255,255,255,0);
                        border:none;
                        border-bottom:2px solid white;
                        padding:5px;
                        color:#013550;
                        transition:0.4s ease all;
                    }
                    select * {
                        border-radius: 15px;
                        background-color: #898181;
                    }
                }
            }
            .attending {
                margin:25px 0 25px 0;
                color:white;
                text-align:left;
                .attendingRadio {
                    display:flex;
                    justify-content:space-between;
                    input {
                        opacity:0;
                        position:absolute;
                    }
                    label {
                        display:flex;
                        align-items:center;
                        width:48%;
                        .radioButton {
                            text-align:center;
                            cursor:pointer;
                            margin:0;
                            border:1px solid white;
                            padding:4px 0;
                            background-color:rgba(255,255,255,0.5);
                            width:100%;
                            transition:0.4s ease all;
                            color:black;
                            &:hover {
                                background-color:rgba(255,255,255,1);
                                border:1px solid white;
                                box-shadow:0 0 10px rgba(255,255,255,0.5);
                            }
                        }
                        .highlightButton {
                            border:1px solid #013550;
                            background: #013550;
                            color:white;
                            /*background: linear-gradient(132deg,rgb(255 199 144) 0%,rgb(190 128 67) 19%,rgb(74 56 46) 100%);*/
                            &:hover {
                                border:1px solid white;
                                box-shadow:0 0 10px rgba(255,255,255,0.5);
                            }
                        }
                    }
                }
            }
            .submitContainer {
                margin:30px 0 0 0;
                width:100%;
                border:1px solid #013550;
                padding:10px 0;
                background: #013550;
                color:white;
                transition:0.4s ease all;
                &:hover {
                    border:1px solid white;
                    box-shadow:0 0 10px rgba(255,255,255,0.5);
                }
            }
            
        }
        .thanksContainer {
            color:#013550;
            font-size:36px;
            text-align:center;
        }
        .loader {
            display:flex;
            justify-content:center;
        }
    }
`;
