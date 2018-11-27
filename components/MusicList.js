/**
 * This module is just a data provider about musical tracks available
 * on "Music" page of the site (/saboteur2_music). It is a set of 
 * objects {audiofile, image:{src, alt, width, height}, text}, keyed by
 * a string id (audiofile name is used for id purposes)
 */

export default {
    "sab2_zx48k_sp": {
        audiofile: "sab2_zx48k_sp",
        linkText: "Spectrum 48k",
        group: "originals",
        image: {
            src: "/static/images/zx_spectrum_48k_.jpg",
            alt: "Изображение ZX Spectrum 48K",
            width:"600",
            height:"441"
        },
    },
    "sab2_zx128k_ay": {
        audiofile: "sab2_zx128k_ay",
        linkText: "Spectrum 128k",
        group: "originals",
        image: {
            src: "/static/images/zx_spectrum_128k_.jpg",
            alt: "Изображение ZX Spectrum 128K",
            width:"600",
            height:"385"
        },
    },
    "sab2_amstrad_cpc": {
        audiofile: "sab2_amstrad_cpc",
        linkText: "Amstrad CPC",
        group: "originals",
        image: {
            src: "/static/images/amstrad_cpc_.jpg",
            alt: "Изображение компьютера Amstrad",
            width:"600",
            height:"391"
        },
    },
    "sab2_c64": {
        audiofile: "sab2_c64",
        linkText: "Commodore C64",
        group: "originals",
        image: {
            src: "/static/images/commodore_c64_.jpg",
            alt: "Изображение компьютера Commodore 64",
            width:"600",
            height:"380"
        },
    },

    "sab2_hubbard": {
        audiofile: "sab2_hubbard",
        linkText: "Rob Hubbard",
        group: "remixes",
        image: {
            src: "/static/images/rob_hubbard_1.jpg",
            alt: "Роб Хуббард",
            width:"579",
            height:"443"
        },
        text: <p>
            Обработка самого Роба Хуббарда (Rob hubbard).<br/>
            Создана на Commodore C64<br/>
            Сделано довольно-таки занятно. Слушаем.
        </p>,
    },

    "sab2_marcel_donne": {
        audiofile: "sab2_marcel_donne",
        linkText: "Marcel Donne",
        group: "remixes",
        image: {
            src: "/static/images/marcel_donne.jpg",
            alt: "Марсель Донне",
            width:"579",
            height:"443"
        },
        text: <p>
            Марсель Донне (Marcel Donne) родился в 1969 году, в Нидерландах.<br/>
            Создатель множества обработок компьютерной музыки, написанной в основном на Commodore C64. В числе которых две 
            обработки на тему Saboteur 2, одну из которых Вы можете сейчас слышать.
        </p>,
    },

    "sab2_endika": {
        audiofile: "sab2_endika",
        linkText: "Endika Fernandez - techno-mix",
        group: "remixes",
        image: {
            src: "/static/images/endika.jpg",
            alt: "Фото Эндика Фернандез",
            width:"600",
            height:"399"
        },
        text: <p>
            Saboteur 2 techno remix - REASON 4 - 
            Эндика Мейза Фернандез (Endika Mieza Fernandez) (Испания)<br/>
            Еще называет себя - DJ The BOSS<br/>
            1981 года рождения.<br/>
            Увлекается созданием музыки. 
            В детстве, в возрасте 11 лет проводил много времени за игрой в Saboteur 2 на компьЮтере ZX Spectrum, который 
            был крайне популярен в то время в Испании. 
            Эндика создал данную композицию как это говорится, с нуля. 
            Великолепный ремикс на тему Saboteur 2 - пожалуй лучшая работа по данной теме.<br/>
            Слушаем - наслаждаемся.<br/>
        </p>,
    },

    "sab2_marcel_donne_revisited": {
        audiofile: "sab2_marcel_donne_revisited",
        linkText: "Marcel Donne - Revisited",
        group: "remixes",
        image: {
            src: "/static/images/marcel_donne2.jpg",
            alt: "Марсель Донне",
            width:"512",
            height:"679"
        },
        text: <p>
            Марсель Донне (Marcel Donne) родился в 1969 году, в Нидерландах. <br/>
            Создатель множества обработок компьютерной музыки, написанной в основном на Commodore C64. В числе которых две 
            обработки на тему Saboteur 2, одну из которых, под названием Revisited Вы можете сейчас слышать.
        </p>,
    },

    "sab2_v2009": {
        audiofile: "sab2_v2009",
        linkText: "Saboteur 2 v2009",
        group: "remixes",
        image: {
            src: "/static/images/john_mcklain.jpg",
            alt: "Лого John McKlain",
            width:"541",
            height:"108"
        },
        text: <p className="center">
            Музыка от John McKlain<br/>
            Saboteur 2 - v2009
        </p>,
    },
}