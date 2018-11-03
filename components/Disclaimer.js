/**
 * Renders somewhat independent part of the page - the disclaimer overlay
 */

export default () => (
    <div id="disclaimer">
        <div id="popup">
            <div id="disclaimer-message">
                <em>Важно!</em> Сайт, на котором вы сейчас находитесь &mdash; реплика
                сайта <a href="http://www.saboteur2.ru">www.saboteur2.ru</a>, созданная как
                упражнение в HTML5+CSS. Авторские права на статьи сайта и все 
                визуальные решения принадлежат автору исходного сайта. Я 
                всего лишь перевёл содержимое на современные веб технологии.
                См. <a href="https://bitbucket.org/GlebVarenov/saboteur2_remake#readme">
                проект</a> на Bitbucket.
            </div>
        </div>
        <div id="corner"></div>
        <div id="anchor">!</div>
        <style jsx global>{`
            div#disclaimer {
                position: fixed;
                bottom: 0;
                left: 0;
                font-size: 5em;
                height: 1em;
                width: 0.5em;
                overflow: hidden;

                text-align: left;
            }

            div#disclaimer div#corner {
                /* height: 1em; */
                /* width: 0.5em; */
                border-left: 0.5em solid gold;
                border-top: 0.5em solid transparent;
                border-bottom: 0.5em solid transparent;
                /* box-sizing: border-box; */
                position: relative; /* makes z-index applicable to this */
            }

            div#disclaimer div#anchor {
                font-weight: bold;
                color: red;
                line-height: 2em;
                padding-left: 0.1em;
                font-size: 0.5em;

                /* putting this over #corner */
                position: relative;
                top: -2em;
            }

            div#disclaimer div#popup {
                visibility: hidden;

                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 0; /* put this under #corner */
                min-height: 1em;

                padding-left: 0.5em; /* give space to #corner */

                display: flex;
                align-items: center;
                background-color: rgba(36, 112, 141, 0.9);
            }

            div#disclaimer:hover div#popup {
                visibility: visible;
            }

            div#disclaimer-message {
                width: 100%;
                font-size: 0.2em;
                line-height: 1.5em;

                padding: 1em;

                color: gold;
                text-shadow: 1px 2px gray;
            }

            div#disclaimer-message a {
                text-shadow: none;
                color: navy;
                font-family: Arial, Helvetica, sans-serif;
                font-style: italic;
                text-decoration: none;
                font-size: 1em;
            }

        `}</style>
    </div>
)