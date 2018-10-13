import Layout from "../components/Layout"
const title = "Saboteur 2 - релизы игры, официальные, неофициальные, издания, диск, кассета, версия"
const footer = "Релизы Saboteur 2. Сравни все издания игры."

export default () => (
    <Layout {...{footer, title}}>
        <h1>Релизы Saboteur 2</h1>

        <p>
            Saboteur 2 официально был издан для 4-ех платформ :<br />
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

        <section className="releases">
            <div className="release">
                <h2>ZX Spectrum</h2>
                <ul>
                    <li><img src="static/images/release_zx_spectrum_cass.jpg" className="cover-illustration" alt=""/></li>
                    <li><img src="static/images/sab2_zx1.png" className="bordered" alt=""/></li>
                    <li><img src="static/images/sab2_zx2.png" className="bordered" alt=""/></li>
                    <li><img src="static/images/sab2_zx3.png" className="bordered" alt=""/></li>
                    <li><img src="static/images/sab2_zx4.png" className="bordered" alt=""/></li>
                </ul>
            </div>
    
            <div className="release">
                <h2>IBM PC</h2>
                <ul>
                    <li><img src="static/images/release_ibm_pc_disk.jpg" className="cover-illustration" alt=""/></li>
                    <li><img src="static/images/sab2_pc1.png" className="bordered" alt=""/></li>
                    <li><img src="static/images/sab2_pc2.png" className="bordered" alt=""/></li>
                    <li><img src="static/images/sab2_pc3.png" className="bordered" alt=""/></li>
                    <li><img src="static/images/sab2_pc4.png" className="bordered" alt=""/></li>
                </ul>
            </div>
    
            <div className="release">
                <h2>Amstrad CPC</h2>
                <ul>
                    <li><img src="static/images/release_cpc_disk.jpg" className="cover-illustration" alt=""/></li>
                    <li><img src="static/images/sab2_cpc1.png" className="bordered" alt=""/></li>
                    <li><img src="static/images/sab2_cpc2.png" className="bordered" alt=""/></li>
                    <li><img src="static/images/sab2_cpc3.png" className="bordered" alt=""/></li>
                    <li><img src="static/images/sab2_cpc4.png" className="bordered" alt=""/></li>
                </ul>
            </div>
    
            <div className="release">
                <h2>Commodore C64</h2>
                <ul>
                    <li><img src="static/images/release_c64_disk.jpg" className="cover-illustration" alt=""/></li>
                    <li><img src="static/images/sab2_c641.png" className="bordered" alt=""/></li>
                    <li><img src="static/images/sab2_c642.png" className="bordered" alt=""/></li>
                    <li><img src="static/images/sab2_c643.png" className="bordered" alt=""/></li>
                    <li><img src="static/images/sab2_c644.png" className="bordered" alt=""/></li>
                </ul>
            </div>
    
            <div className="release">
                <h2>Commodore Plus/4</h2>
                <ul>
                    <li><img src="static/images/sab2_cplus41.png" className="bordered" alt=""/></li>
                    <li><img src="static/images/sab2_cplus42.png" className="bordered" alt=""/></li>
                </ul>
            </div>
        </section>
    </Layout>
)