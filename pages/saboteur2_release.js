import Layout from "../components/Layout"
const meta_descr = "Здесь дана полная информация относительно релизов игры Saboteur 2 (1987). Показано, как выглядели все официальные и неофициальные издания игры. Даны фото коробок и кассет, также дисков. Показаны скриншоты из игр всех изданий, что позволяет детально их сравнить и сделать соответствующие выводы." 
const title = "Saboteur 2 - релизы игры, официальные, неофициальные, издания, диск, кассета, версия" 
const footer_note = "Релизы Saboteur 2. Сравни все издания игры." 

export default () => (
    <Layout {...{footer_note, title, meta_descr}}>
        <h1>Релизы Saboteur 2</h1>

        <section className="mono-column">
            <p>
                Saboteur 2 официально был издан для 4-ех платформ :<br/>
                ZX-Spectrum, Amstrad CPC, Commodore C64 и IBM PC.
            </p>

            <p>
                Если первые два компьютера имели большее распространение в Европе, то две другие - в США. Соответственно, 
                издателем для этих двух платформ была фирма Keypunch Software, Inc. У нее было лецинзионное соглашение с 
                Durell.
            </p>

            <p>
                Также, некая группа программистов под названием Muffbusters (MB) из Венгрии во главе с M.Peter сделала так 
                называемый порт Saboteur 2 с Commodore C64 на Commodore Plus/4. Это неофициальный релиз, что впрочем не 
                мешало игре прекрасно работать и на этой платформе.
            </p>

            <p>
                Первое издание игры было в 1987 году, как я уже и говорил ранее. Последующим переизданием по лицензии 
                Durell занимались фирмы: Edos (UK), Erbe Software S.A. (Spain) и Encore (UK). На IBM PC и Commodore C64 
                переизданий не было. Они издавались Keypunch Software, Ltd. по лицензии Durell, вплоть до 1993 года.
            </p>

            <p>
                Ниже Вы можете посмотреть как выглядел Saboteur 2 на разных платформах:
            </p>
        </section>

        <section className="releases">
            <div className="release">
                <h2>ZX Spectrum</h2>
                <ul className="flex-container">
                    <li><img src="static/images/release_zx_spectrum_cass.jpg" className="cover-illustration" alt="" width="400" height="244"/></li>
                    <li><img src="static/images/sab2_zx1.png" className="bordered" alt="Иллюстрация игры для ZX 48K" width="256" height="192"/></li>
                    <li><img src="static/images/sab2_zx2.png" className="bordered" alt="Иллюстрация игры для ZX 48K" width="256" height="192"/></li>
                    <li><img src="static/images/sab2_zx3.png" className="bordered" alt="Иллюстрация игры для ZX 48K" width="256" height="192"/></li>
                    <li><img src="static/images/sab2_zx4.png" className="bordered" alt="Иллюстрация игры для ZX 48K" width="256" height="192"/></li>
                </ul>
            </div>
    
            <div className="release">
                <h2>IBM PC</h2>
                <ul className="flex-container">
                    <li><img src="static/images/release_ibm_pc_disk.jpg" className="cover-illustration" alt="" width="291" height="371"/></li>
                    <li><img src="static/images/sab2_pc1.png" className="bordered" alt="Иллюстрация игры для ZX 128K" width="256" height="192"/></li>
                    <li><img src="static/images/sab2_pc2.png" className="bordered" alt="Иллюстрация игры для ZX 128K" width="256" height="192"/></li>
                    <li><img src="static/images/sab2_pc3.png" className="bordered" alt="Иллюстрация игры для ZX 128K" width="256" height="192"/></li>
                    <li><img src="static/images/sab2_pc4.png" className="bordered" alt="Иллюстрация игры для ZX 128K" width="256" height="192"/></li>
                </ul>
            </div>
    
            <div className="release">
                <h2>Amstrad CPC</h2>
                <ul className="flex-container">
                    <li><img src="static/images/release_cpc_disk.jpg" className="cover-illustration" alt="" width="400" height="200"/></li>
                    <li><img src="static/images/sab2_cpc1.png" className="bordered" alt="Иллюстрация игры для Amstrad CPC" width="256" height="192"/></li>
                    <li><img src="static/images/sab2_cpc2.png" className="bordered" alt="Иллюстрация игры для Amstrad CPC" width="256" height="192"/></li>
                    <li><img src="static/images/sab2_cpc3.png" className="bordered" alt="Иллюстрация игры для Amstrad CPC" width="256" height="192"/></li>
                    <li><img src="static/images/sab2_cpc4.png" className="bordered" alt="Иллюстрация игры для Amstrad CPC" width="256" height="192"/></li>
                </ul>
            </div>
    
            <div className="release">
                <h2>Commodore C64</h2>
                <ul className="flex-container">
                    <li><img src="static/images/release_c64_disk.jpg" className="cover-illustration" alt="" width="291" height="400"/></li>
                    <li><img src="static/images/sab2_c641.png" className="bordered" alt="Иллюстрация игры для Commodore C64" width="286" height="200"/></li>
                    <li><img src="static/images/sab2_c642.png" className="bordered" alt="Иллюстрация игры для Commodore C64" width="286" height="200"/></li>
                    <li><img src="static/images/sab2_c643.png" className="bordered" alt="Иллюстрация игры для Commodore C64" width="286" height="200"/></li>
                    <li><img src="static/images/sab2_c644.png" className="bordered" alt="Иллюстрация игры для Commodore C64" width="286" height="200"/></li>
                </ul>
            </div>
    
            <div className="release">
                <h2>Commodore Plus/4</h2>
                <ul className="flex-container">
                    <li><img src="static/images/sab2_cplus41.png" className="bordered" alt="Иллюстрация игры для Commodore Plus/4" width="286" height="200"/></li>
                    <li><img src="static/images/sab2_cplus42.png" className="bordered" alt="Иллюстрация игры для Commodore Plus/4" width="286" height="200"/></li>
                </ul>
            </div>
        </section>
    </Layout>
)