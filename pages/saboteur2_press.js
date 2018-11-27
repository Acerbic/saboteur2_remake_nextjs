import Layout from "../components/Layout"
const meta_descr = "Здесь собраны все журналы со статьями и описаниями Saboteur 2. Приведены страницы из изданий таких популярных журналов как Crash, Your Sinclair, YS Smash, Sinclair User, Comp &amp; Video Games, Micro Hobby и т.д." 
const title = "Saboteur 2 - пресса об игре, review, preview, описания, журналы, Crash, Your Sinclair, YS Smash, Sinclair User, Comp & Video Games, Micro Hobby" 
const footer_note = "Журналы о игре Saboteur 2. Все самое интересное в прессе." 

export default () => (
    <Layout {...{footer_note, title, meta_descr}} id="article-press">
        <h1>Пресса о Saboteur 2</h1>

        <section id="press-mentions" className="flex-container">
            <figure>
                <figcaption>Журнал Crash, 09/1986</figcaption>
    
                <img src="/static/images/statya_Crash3200096.jpg" className="bordered" alt="Скан страницы журнала" width="454" height="699"/>
            </figure>
    
            <figure>
                <figcaption>Журнал Crash, 10/1986</figcaption>
    
                <img src="/static/images/statya_Crash3300136.jpg" className="bordered" alt="Скан страницы журнала" width="934" height="661"/>
            </figure>
    
            <figure>
                <figcaption>Журнал Crash, 06/1987</figcaption>
    
                <img src="/static/images/statya_Crash4100050.jpg" className="bordered" alt="Скан страницы журнала" width="926" height="1361"/>
            </figure>
    
            <figure>
                <figcaption>Журнал Crash, 06/1987</figcaption>
    
                <img src="/static/images/statya_Crash4100103.jpg" className="bordered" alt="Скан страницы журнала" width="926" height="1342"/>
            </figure>
    
            <figure>
                <figcaption>Журнал Crash, 07/1987</figcaption>
    
                <img src="/static/images/statya_Crash4200052.jpg" className="bordered" alt="Скан страницы журнала" width="937" height="624"/>
            </figure>
    
            <figure>
                <figcaption>Журнал Crash, 07/1988</figcaption>
    
                <img src="/static/images/statya_Crash5400037.jpg" className="bordered" alt="Скан страницы журнала" width="945" height="763"/>
            </figure>
    
            <figure>
                <figcaption>Журнал Crash, christmas special 1988</figcaption>
    
                <img src="/static/images/statya_Crash5900060.jpg" className="bordered" alt="Скан страницы журнала" width="934" height="423"/>
            </figure>
    
            <figure>
                <figcaption>Журнал Your Sinclair
                </figcaption>
    
                <img src="/static/images/statya_YourSinclair1700089.jpg" className="bordered" alt="Скан страницы журнала" width="934" height="1376"/>
            </figure>
    
            <figure>
                <figcaption>Журнал Comp & Video Games</figcaption>
    
                <img src="/static/images/statya_CVG06900027.jpg" className="bordered" alt="Скан страницы журнала" width="496" height="1318"/>
            </figure>
    
            <figure>
                <figcaption>Журнал MicroHobby</figcaption>
    
                <img src="/static/images/statya_MicroHobby13200014-15.jpg" className="bordered" alt="Скан страницы журнала" width="1921" height="1325"/>
            </figure>
    
            <figure>
                <figcaption>Журнал MicroHobby</figcaption>
    
                <img src="/static/images/statya_MicroHobby13300024.jpg" className="bordered" alt="Скан страницы журнала" width="850" height="709"/>
            </figure>
    
            <figure>
                <figcaption>Журнал MicroHobby</figcaption>
    
                <img src="/static/images/statya_MicroHobby14000028.jpg" className="bordered" alt="Скан страницы журнала" width="630" height="1315"/>
            </figure>
    
            <figure>
                <figcaption>Журнал MicroHobby</figcaption>
    
                <img src="/static/images/statya_MicroHobby16600070.jpg" className="bordered" alt="Скан страницы журнала" width="630" height="370"/>
            </figure>
    
            <figure>
                <figcaption>Журнал MicroHobby</figcaption>
    
                <img src="/static/images/statya_MicroHobby16900069.jpg" className="bordered" alt="Скан страницы журнала" width="921" height="551"/>
            </figure>
    
            <figure>
                <figcaption>Журнал Compter Gamer</figcaption>
    
                <img src="/static/images/statya_ComputerGamer2500045.jpg" className="bordered" alt="Скан страницы журнала" width="898" height="567"/>
            </figure>
        </section>
        <style jsx>{`
            article#article-press section figure {
                max-width: 100%;
                overflow: hidden;
            }
            article#article-press section figure img {
                box-sizing: border-box;
                max-width: 100%;
            }
        `}</style>
    </Layout>
)