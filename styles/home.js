import { createGlobalStyle } from "styled-components";

export const HomeStyles = createGlobalStyle`
body {
    background-color:black;
    font-family: 'Oswald', sans-serif;
}
.websiteContainer {
        overflow:hidden;
    .bgImage {
        z-index:50;
        position:fixed;
        min-width:100vw;
        min-height:100vh;
        .bgImg {
            margin-left: 50%;
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
        h1 {
            font-size:60px;
            color:white;
            font-family: 'Cinzel', serif;
            text-shadow: 3px 3px 4px rgba(0,0,0,0.6);
        }
        hr {
            border: 2px solid white;
            width:100px;
            box-shadow: 3px 3px 4px rgba(0,0,0,0.6);
            margin:20px auto;
            opacity:1;
        }
        h2 {
            font-family: 'Oswald', sans-serif;
            text-shadow: 2px 2px 2px rgba(0,0,0,0.8);
            color:white;
            font-size:23px;
        }
        .rsvpButton {
            overflow:hidden;
            font-family: 'Oswald', sans-serif;
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
    }

    .rsvpContainer {
        position:relative;
        z-index:100;
        min-width:100vw;
        min-height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
    }

    .myForm {
        width:300px;
        p {   
            text-shadow: 2px 2px 2px rgba(0,0,0,0.8);
            margin:0 0 5px 0;
        }
        .textForm {
            label {
                width:100%;
                display:flex;
                flex-direction:column;
                align-items:flex-start;
                color:white;
                input[type="text"] {
                    width:100%;
                    background-color:rgba(255,255,255,0.5);
                    border:1px solid white;
                    padding:5px;
                }
                select {
                    width:100%;
                    background-color:rgba(255,255,255,0.5);
                    border:1px solid white;
                    padding:5px;
                    color:white;
                }
            }
        }
        .attending {
            margin:20px 0 15px 0;
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
                        background-color:rgba(255,255,255,0.5);
                        width:100%;
                    }
                    .highlightButton {
                        border:1px solid #6ec3ea;
                        background-color:rgba(160,169,206,0.5);
                    }
                }
            }
        }
        .submitContainer {
            margin:15px 0 0 0;
            width:100%;
        }
        
    }
    
}
`;
