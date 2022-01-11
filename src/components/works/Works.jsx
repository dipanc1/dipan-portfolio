import { useState } from 'react'
import './works.scss'

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: 1,
            title: "Fetching News from NewsAPI",
            desc: "Fetching Data Using News API, and showing it Dynamically on Bootstrap Web Application, Parsing JSON Data In HTML",
            img:
                "https://lh3.googleusercontent.com/ANsHQP-sySjTushM6IX27iWswUKQtLNXFaTIRWZ3Hep3ifZvpwoFvkkouaFUuSBCXNYKLzt5WsOGVvBhS6OpQ8U701wsuGRH6KdeaCvhIm6XVZEX0nC9JQ1VAVZw2k-Icdejl4sOkb2Gn2kKUzwwka2iagCkiqshMSZl8P0ac89Tuhtze6lDoQwEQdnVVY_ZTzXvcAO5p7TMJr9dQFX96YVbqgiUFq3QNDG6IAf3JW88XT94Jega0-ajtiD81Hm3F9M00kxj8Zxqp6Hcz7AIzYmCvXFP-bFUyiKMdV_kNGupB_KZrMtw89pEl5yQeIjvu3vufowyKXeB02FOVYkquT13e5Z-iLLqaj9LpP7pHmd3LTB3pBMEn622OsySxoI1cx8eU3_zIXqoTZuXRVnuPC60JjvB0Z3P85xxUPUp2vAUGYezIPXawp4MCTZDYBcB5jtsUpFD0PXI5_MqM79ghazXj50_8-Z49Yk3OEmtf8I4o6ZZ3ppsd_gUEUUsfcJSfuCMANg-On6VqzsnbZzPBLu4xV4WM6rXpv0CXzhdZ2Y_UtwmO7g4e5T3T5UzYvMCXlE3Ky5ydezeLKE37WYlR2cUNt-ggaax9WwPmEZXiLoCf1tS9knCT78u-B-jQpBX6DS5pXjp1_4-Fy-PZBMK_x3TkT_PsXQ-wmme2PAzJsPKRP6pS6WQQf7lUYmCYJURSNE0c4sm-SLLM9LewGN5AxW4=w1614-h909-no?authuser=0",
        },
        {
            id: 2,
            title: "Blog Website Using Pure HTML, CSS & JavaScript",
            desc: "Resposive Blog Website Without Backend But Can Be Added.",
            img:
                "https://lh3.googleusercontent.com/clQ_Dm_TcUwXrGk8VBMRYi2I1TePKJrcJ76_1rk-ZefgyTJMAzN57owel9xnjnCT_Xq_vC2wFgkrqP0rHpuyU7X-Xv2qZN0XqHuwMAmoupTC2ILgiEW48--5zfG1u2vE1wr76Aht9VwIvHn1_jG5SE3UeFlnFkoR1S1NZXuYn9r9z1qzCNzCOXDuYrjbFpl5qYLJSafXIYg6FvhyhBpLVyKQLA-egczvg_UHITr4SzIMrwOUfQSDdn_6rwtOgs78yFSKOm-2Qy2q0PuyFyj-QGhlKvt2uscVkkWkIcYTwEcaRVVXeUOy8zEeqBBhiS2hJFaQBqBEWPWZDUkhD0XrvWKkF05T1pTDuFyLPmaV25Ke_5mTk4T852fTmg7DAwE4Qx_tNEUDXV5WxeJ_VMpIvh-tmRiiihkeYQ7IVXlo6jX7UJHkVUkw9tNiAVdyniUf9lMfsRADVBrn4Wl6jfxdbePHEx88AvaweOPq0FxFOZg8qcMag-cCSYEoHI_ACIHeH4aXPMFHxlOrmRHefpAHcH51N6-pdkG5KjI6mnCO_X2uOB3iE4H_whg5KDXd-DTI9xPqBstKILjVys_pHO1ZCnfARwFrBpBVJClMgJNOc3deHqKTNGCgpgSdHUFRgqUHqdBQXy0E-KG9bPCmS9HL5Lq1GGRnQcBS2Awwg4RxDZMxAGlI5xh63Zub9mpd7KuQUVvLTT5tUOol76XWAduijOjT=w1614-h909-no?authuser=0",
        },
        {
            id: 3,
            title: "Chat App Using BootStrap, Nodejs And SocketIO.",
            desc: "Made It Using Nodejs In Server, JavaScript and Bootstrap In FrontEnd and Hosted It on Digital Ocean Using Apache Server",
            img:
                "https://lh3.googleusercontent.com/v3hA3ZNYh6860WWA2r__wdhmXfc4-oHlZbEFr8NrjRC7pq4IeV5k6b9nzC64aUQq-3aYL4GFyE8zyahtg6OJosbsVujYzSuMg52WM8Vdm0nbUAWdFC5GLgZiXgB-Fl1rq-wmvLVlsyF2jWjg3OMglYBYhD-WYbP-NI_w5jLdfvobhGVh-hf7TpJNhIEm2y7sJqxbb5K8AGS5ys1OWUQ_M8sovKEP_BYRxjoGl7ZdGnQXFkFjQMJu82Kikr3WhYBeYEYAwh8PSHqw3qwWVmg864tMwzbaz9i7ffvvWdYSyrfgZL4S1TDaGH660c45U0_WXQABYajtR1DhZJe3Fwz6hR2Hue38yynJ-ad5ypUWx2kfT91AjTsIc9CzWmLmji4Q1vZCVLtlrkNfgV7R_O3dq0dBuPhBcP391F3oerEYXRrEAk5hxw9kv9iIhHQmN8nNviX1wDWi0WWh5qzK3jeoBGX_9cFjpmKC32scnPej4aPRwgeOH5LZEtkVQmfhwUV1AZ1rBCbgxiJeywU3uR8S64LmvNHcAvMyIMW7g6gB_KmgStYUrOZggXphzWfwuFdlTPNuceJFf5vtz6MRDcjDjury0GwJChbbak-WVUuARZdX0m-FDKGDEze99DV_N330ddvm9F3ualnAeq1yNS5AACNJ-fnEXt8ZqYn5FtMWDRMUksMpGEIEL5jb-NDlfs-snhtgZfLAUIQRHQ61dLLUxqfG=w1614-h909-no?authuser=0",
        },
    ];
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    };

    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map(d => (
                    <div className="container">
                        <div className="items">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>

                    </div>))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="arrow" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="arrow" onClick={() => handleClick("right")} />
        </div>
    )
}
