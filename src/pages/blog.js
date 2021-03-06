import React, { Component } from "react"
/* import { FaCalendarAlt } from "react-icons/fa" */
import Layout from "../components/layout"
import { Link } from "@reach/router"

//import ReactDOM from 'react-dom'
//import scrollTo from 'gatsby-plugin-smoothscroll';

class Blog extends Component {

  constructor() {
    super()

    this.state = {
      showBlog: false,
      selectedId: '',
      classDisplay: '',
    }
    this.displayBlog = this.displayBlog.bind(this);

    // console.log("window.location.hash: ", window.location.hash)
  }

  /*  componentDidMount() {
 
     if (window.location.hash) {
       let id = window.location.hash
       const blogElToScroll = document.querySelector(id)
       console.log("blogElToScroll: ", blogElToScroll)
       console.log("blogElToScroll.offsetTop: ", blogElToScroll.offsetTop)
 
       if (blogElToScroll) {
         this.displayBlog(null, window.location.hash)
         debugger
 
         //window.scrollTo(0, 1400);
 
       }
     }
   } */
  componentDidMount() {
    if (window.location.hash) {
      let id = window.location.hash
      const blogElToScroll = document.querySelector(id)
      console.log("blogElToScroll: ", blogElToScroll)
      console.log("blogElToScroll.offsetTop: ", blogElToScroll.offsetTop)

      if (blogElToScroll) {
        // 
        //debugger
        // document.getElementById(id.replace('#', '')).scrollTo(0, 3600)

        this.displayBlog(null, window.location.hash)
        let offset = blogElToScroll.offsetTop + 1400
        //debugger
        //blogElToScroll.scrollTo(0, 1000);
        window.scrollTo(0, offset);
        console.log("offset:: ", offset)
        // window.scrollTo(0, blogElToScroll.offsetTop);



      }
    }
  }


  displayBlog = (e, location) => {
    let currentId
    let showBlog = false
    if (e) {
      currentId = e.currentTarget.id
      showBlog = !this.state.showBlog
    }
    else {
      currentId = location.replace('#', '')
      showBlog = true
    }
    console.log("currentId: ", currentId)
    console.log("this.state.selectedId: (previous)", this.state.selectedId)
    console.log("this.state.showBlog: ", this.state.showBlog)

    this.setState({
      ...this.state,
      showBlog: showBlog,
      selectedId: currentId,
    })
  }


  setBlogShow = (val) => {
    this.setState({
      ...this.state,
      showBlog: !this.state.showBlog,
      idBlog: val,
    })
  }

  render() {
    // console.log("render this.state.selectedId: ", this.state.selectedId, this.state.selectedId == "zenska")
    // console.log("blog-item " + this.state.selectedId == 1 ? 'blogShow' : '')
    return (
      <Layout>
        <div className="blog">
          <div className="blog-content">
            <br />
            <br />
            <br />
            <br />
            <div className={`blog-item ${this.state.selectedId == 'zenska' && this.state.showBlog ? 'blogShow' : ''}`}>

              <Link to={"/blog#zenska"} className="blog-title pisava-special brown #zenska" id="zenska" name="1" onClick={(e) => this.displayBlog(e)}>
                <li className={`${this.state.selectedId == 'zenska' && this.state.showBlog ? 'disclosureOpen' : 'disclosureClosed'}`}>??enska</li>
              </Link>


              <div className={this.state.selectedId == "zenska" && this.state.showBlog ? "displayBlog" : "hideBlog"}>
                <div className="blog-text pisava-special brown">

                  Marec, ????enski mesec??. V tem mesecu nam namenijo veliko lepih besed in ??elja. A kaj vse ti to pomeni, ??e ne vidi?? lastne vrednosti? Besede pohvale, zahvale, so kot balzam za du??o, a jih mora?? znati iskreno sprejeti.
                <br />
                  <br />
                Vem, skrbi?? za svoje drage, za star??e, sestro, brata, mo??a, otroke, mogo??e celo za tasta in ta????o, teto, strica???, seznam je lahko neskon??en. A zakaj nositi breme celega sveta na svojih ramenih? Zakaj ima?? potrebo re??evati svet, ??e mora?? re??iti prvo sebe?
                <br />
                  <br />
                Sedaj izberi sebe - imej se rada. Vsak dan si nameni nekaj ??asa zase. Za??ni graditi ljube?? odnos sama s seboj. To je temelj za naprej, za vse tvoje odnose. Dovoli si biti ??enska. Dovoli si prositi za pomo?? in jo tudi sprejeti.
                <br />
                  <br />
                Ne zapletaj se po nepotrebnem v dokazovanja, kdo ima prav in kdo ne. Ne popravljaj ljudi, tudi ??e ve??, da nimajo prav. Ni to tvoja naloga - to je njihova izku??nja.
                <br />
                  <br />
                Dovoli ljudem, da pripovedujejo svoje zgodbe, ??eprav si ji ??e ne??tetokrat sli??ala. Pripovedovanje jih ponese v preteklost in jim pomaga, da jo po??asi spustijo.
                <br />
                  <br />
                Ne barantaj. Ti zaradi tistih par centov ne bo?? obubo??ala, bo?? pa privabila nasmeh na obraz ??loveka, ki ti je storitev prodal. In verjemi, ni lep??ega kot to, ko ??lovek vidi, da se ceni njihovo delo, oziroma izdelek.
                <br />
                  <br />
                Postani dobrosr??na in radodarna s komplimenti. Kompliment osre??i tako tistega, ki ga prejme, kot tebe, ki ga podeli??. ??e ga prejme??, se ga nikoli ne brani ali zavrni - preprosto se zahvali. Tako ti ljudje poka??ejo, da te cenijo, da poznajo tvojo vrednost. Zapusti pa tiste, ki povzro??ajo toksi??nost v tebi.
                <br />
                  <br />
                Nau??i se  pokazati svoja ??ustva. Spregovori o svojih ob??utkih in ??ustvih. To te dela ??loveka, umirja tvoj ego, kar ohranja tvoje odnose. Prevzemi odgovornost za svoje po??utje. Tvoja miselna naravnanost, fizi??na pripravljenost, tisto, kar da?? vase in na kon'c konca tudi nase, je tvoja odlo??itev, kot je tudi sre??a odlo??itev. Saj ve??, sre??a se skriva v majhnih stvareh, samo prepoznati jih je potrebno.
                <br />
                  <br />
                Vsak dan ??ivi, kot da je zadnji. Ker, morda je res.
                <br />
                  <br />
                Ne rabi?? biti ??super woman?? - bodi samo ??enska, v ??enski energiji in ??enskem delovanju. Nau??i se biti sre??na. Vse je v ravnovesju, v razporeditvi ??asa. 33,3% za dru??ino, 33,3% za slu??bo/svoj posel in 33,3% zase. Sprejmi to in imej se rada  <img
                    className="emoji-img"
                    src="../icons/smile.png"
                    width="30px"
                    alt=""
                  />.
                <br />
                  <br />
                In ??isto na koncu, ??enske stopimo skupaj! Podpirajmo ena drugo pri osebnih dose??kih, bodrimo in pomagajmo, kadar lahko in smo napro??ene. Ne bodimo ena drugi konkurenca. Ne me??imo si ??polena pod noge??. Kajti, ko ??enske stopimo skupaj, se ustvari krog, kjer se zgodijo ??udovite ??kreacije??.

              </div>
                {/*   <img className="blogImg" src="../assets/blog-zenska-resiz.png" alt="" /> */}
                <picture className="blog-pict">
                  <source
                    srcSet="../assets/webp/blog-zenska-resiz.webp"
                    alt="Logo"
                    type="image/webp"
                  />
                  <img
                    className="blog-image"
                    src="../assets/blog-zenska-resiz.png"
                    alt="slika"
                    type="image/png"
                  />
                </picture>
              </div>
            </div>
            <br />
            <div className={`blog-item ${this.state.selectedId == 'odlocitve' && this.state.showBlog ? 'blogShow' : ''}`}>
              {/* <div className="blog-title pisava-special brown" id="2" onClick={(e) => this.displayBlog(e)}>Odlo??itve</div>
 */}          <Link to={"/blog#odlocitve"} ref="2" className="blog-title pisava-special brown #odlocitve" id="odlocitve" name="2" onClick={(e) => this.displayBlog(e)}>
                <li className={`${this.state.selectedId == 'odlocitve' && this.state.showBlog ? 'disclosureOpen' : 'disclosureClosed'}`}>Odlo??itve</li>
              </Link>
              <div className={this.state.selectedId == "odlocitve" && this.state.showBlog ? "displayBlog" : "hideBlog"}>

                {/* <div className="displayBlog"> */}
                <div className="blog-text pisava-special brown">
                  Vsak v ??ivljenju pride do to??ke, ko rabi pomo??. Ni pomembno za
                kaj gre. Slu??ba, ??ola, odnosi, delo na sebi... <br />
                Skozi raziskovanja in dela na sebi sem ugotovila, da ??e ko
                spregovori?? o zadevi, ki te "matra", veliko la??je zadiha??. Kot,
                da bi padel "tonski kamen" z ramen. Olaj??a?? si du??o.
                <br /> Vsak, ki dela, raziskuje, gradi, se u??i, takrat, ko
                naleti na problem, poi????e re??itev in ne re??e: " To se ne da, ni
                izvedljivo, ne gre...", nosi v sebi veli??ino.
                <img
                    className="emoji-img"
                    src="../icons/heart.png"
                    width="30px"
                    alt=""
                  />
                  <br /> In, ko se nam zatakne, se zavestno odlo??amo, ali bomo
                poiskali pomo?? ali ne. <br />
                Ko gre?? po pomo?? (kakr??no koli ??e, ali kakr??ne koli oblike),
                gre?? pravzaprav po novo MO??.
                <br /> Po nov zalet.
                <br /> ??e dobro pogleda?? besedo, je to PO_MO??. Lahko je to
                pogovor, poslu??anje, nasvet, usmeritev, rama na katero se
                nasloni?? ali zjoka??, objem, bli??ina nekoga zraven tebe ...
                <br />
                Karkoli, kar ti bo dalo zalet in mo?? za naprej. <br /> Zato,
                upaj si spregovoriti, poiskati po_mo??.
                <br /> En drugemu pomagamo na tak??en ali druga??en na??in. Smo
                povezani, pa ??eprav to velikokrat ni opaziti. <br />
                Vendar ne smemo pozabiti na nekaj zelo pomembnega, da na svet
                ??priveka???? sam in od??el bo?? sam. Vmes pa se zgodi ??ivljenje. In
                ??e ga da?? pod drobnogled ugotovi??, da si tudi v tem obdobju
                "sam".
                <br /> Seveda ima?? okoli sebe ljudi, ki so tvoja dru??ina,
                sorodniki, prijatelji, sodelavci in tudi ??ivljenje te??e po nekih
                ustaljenih tirih...ampak pomisli. <br />
                Ko gre za ??ivljenjske odlo??itve, zdravje ali vsakodnevne poteze,
                ki so v povezavi s teboj, se Ti odlo??i??, ali bo?? zadevo izpeljal
                in kako. Ti se odlo??a??, ??e bo?? pri??gal prvo cigareto, popil
                pivo, zbral pogum in povabil simpatijo na kofe???Ti se bo?? odlo??il
                ali bo?? ??el delati izpit za avto in ??e ja, poiskal re??itve kako
                to izpeljati. Mogo??e bo?? ??e naprej dovoljeval nespo??tljiv odnos
                do sebe ali pa bo?? za??el postavljati meje. Ti se bo?? boril za
                svojo povi??ico pri ??efu. Ti s svojimi odlo??itvami tudi
                definira??, kak??ne ljudi ima?? okoli sebe. Ti se spopada?? s
                svojimi demoni in se bori?? za bolj??i jutri...Ti, ti, ti??? <br />
                In za koga drugega to po??ne?? in se odlo??a??, ??e ne Zase?{" "}
                  <img
                    className="emoji-img"
                    src="../icons/heart.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                Ja, lahko si dele??en podpore, nasvetov, pomo??i (??e prosi?? zanjo)
                in ??e kaj, ampak ve?? kaj? To so samo predlogi. Spoznanja in
                ideje nekoga drugega. Samo Ti, pa ve?? kaj je dobro zate in kaj
                je vredno preizkusiti. To so tvoje odlo??itve.
                <br /> Pomo?? nekoga drugega, Ti lahko odgrne tan??ico skozi
                katero nisi videl, kako naj se zadeve loti??, oziroma kaj naj bo
                tvoj naslednji korak. Te spomni kdo si in da si vreden. Ti
                ponudi roko... <br />
                Od Tebe, pa je odvisno, kaj bo?? s tem naredil. Ti ve??, pri
                kateri informaciji Ti je zaigralo srce in se je pri??gala iskra.
                Ti ve??, kaj ti daje novo mo?? in zalet. Samo Ti ve?? zakaj je temu
                tako in samo Ti ve??, kaj je najbolje zate.
                <br /> Kajti vsak i????e svojo resnico. In vsak se odlo??a po svoji
                vesti.
                </div>
              </div>
            </div>
            <br />
            <div className={`blog-item ${this.state.selectedId == 'svobodnaVolja' && this.state.showBlog ? 'blogShow' : ''}`}>
              <Link to={"/blog#svobodnaVolja"} className="blog-title pisava-special brown #svobodnaVolja" id="svobodnaVolja" onClick={(e) => this.displayBlog(e)}>
                <li className={`${this.state.selectedId == 'svobodnaVolja' && this.state.showBlog ? 'disclosureOpen' : 'disclosureClosed'}`}>
                  Svobodna volja in izbira</li>
              </Link>
              <div className={this.state.selectedId == "svobodnaVolja" && this.state.showBlog ? "displayBlog" : "hideBlog"}>

                <div className="blog-text pisava-special brown">
                  Zanimiva besedna zveza. Zanima me, koliko krat, ste se dejansko
                  zavedali pomena: ??Ima?? svobodno voljo in izbiro.??? Jaz, dokler
                  nisem za??ela delati na sebi in se poglabljati v dolo??ene stvari,
                  bolj malo. Pravzaprav, sploh ne vem, ??e sem jo ??zaznala??.
                  Absolutno, sem se ??e sre??ala s tem, da imamo v ??ivljenju
                  svobodno voljo in izbiro (pa tukaj se ne spu????am v izredne
                  razmere) ampak, ker mi je bilo bolj ??priro??no??, sem to enostavno
                ignorirala.{" "}
                  <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                  <br />
                Ko pa se odlo??i?? v ??ivljenju nekaj spremenit, mora?? za??eti
                delovati zunaj svoje ??cone udobja??, ??e ??eli??, da bo viden kak??en
                rezultat. Pa ne v smislu, da bo okolica videla, kaj vse si
                dosegel, ampak zato da osre??i?? sebe s spremembo. <br />
                  <br />
                Na primer, ko smo pri??li v obdobje samostojnosti (pri enih je to
                bilo prej, pri drugih kasneje), smo se sami za??eli odlo??ati, kaj
                bomo oblekli. Obi??ajno se to za??ne nakazovati ??e v vrtcu. ??e smo
                imeli ob sebi star??a, ki je spodbujal na?? razvoj in je temu
                primerno tudi potrpel, ko smo zjutraj ??filozofirali?? kaj oble??i
                (obi??ajno je bilo celo tako, da je bil zunaj mraz in - jaz/ti pa
                sva hotela ??navle??i?? nase nekaj poletnega{" "}
                  <img
                    className="emoji-img"
                    src="../icons/blushed.png"
                    width="30px"
                    alt=""
                  />
                ) smo imeli sre??o. Kajti potrebna je bila iznajdljivost in
                potrpe??ljivost star??a, da nas je prepri??al, da smo se oblekli
                letnemu ??asu primerno in spodobno. Jaz se spomin, da sem v??asih
                hotela ??navle??i?? nase take kose obla??il, da mi je mami komaj
                dopovedala, da je pust ??e mimo.{" "}
                  <img
                    className="emoji-img"
                    src="../icons/laugh.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                  <br />
                Na drugi strani, pa ima?? star??a, ki ??eli to svobodno voljo in
                izbiro en ??malce presko??iti??. Nekaterim celo uspe. A tukaj zadaj
                se velikokrat skriva ??e vzporedna zgodba star??evskega odnosa.
                Tako imamo v ??ivljenju primer ??maminega sinka?? ali ??o??kove
                pun??ke??, ki so pravzaprav ??rtve odkritega ali prikritega
                incesta. To je globina problema, ki se ga je potrebno lotiti
                postopoma.
                <br />
                  <br />
                V??asih pa nekdo dobi to oznako zato, ker po mnenju partnerja,
                daje preveliko veljavo star??u. Ta se posledi??no preve?? vme??ava v
                ??ivljenje svojega otroka. Nastanejo problemi, katerim bi se
                lahko izognili, ??e bi ??prerezali popkovino??. To je lahko zelo
                bole?? korak. Ker vedno sledijo posledice. Obi??ajno takrat star??
                (iz obupa, ker mu je bilo nekaj odvzeto) poka??e svoj ??drugi
                obraz?? in posku??a kaznovati. Na nas pa je, kako se bomo odlo??ili
                in ali bomo pri odlo??itvi tudi vztrajali.{" "}
                  <img
                    className="emoji-img"
                    src="../icons/think.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                  <br />
                Svobodno voljo in izbiro imamo tako pri vsakodnevnih stvareh,
                kot pri velikih odlo??itvah. Samo poteze, ki jih ??povle??emo?? na
                dnevni bazi, kot so: kaj bomo oblekli, katero hrano bomo vzeli
                iz hladilnika, ali se bo??/bom nau??il za izpit, ali bomo vsak dan
                naredili nekaj zase, kako razmi??ljamo in govorimo o sebi in
                drugih, bomo slepo sledili ??vodji?? (bili del ??tropa??) ali bomo
                uporabljali svojo pamet oziroma ??zdravo kme??ko pamet??, kaj
                spremljamo in poslu??amo ipd., delamo podzavestno in ne
                razmi??ljamo o temu, da delujemo na podlagi svobodne volje in
                izbire.
                <br />
                  <br />
                Kaj pa pri ve??jih stvareh? Velja isto, vendar v povezavi z
                univerzalnim zakonom vesolja: Zakon prepri??anja in izbire.
                <br />
                  <br />
                Pa da nam bo bli??je za razumevanje, vzemimo primer nakupa novega
                avtomobila in ne sanjske hi??e. Ker tu vas ??e kar sli??im, kako
                vam za??nejo ??vigati po glavi vsi ??argumenti??, kako je to
                neizvedljivo, da se to ne da, ni mo??no, ipd. (zakon prepri??anja
                in izbire).{" "}
                  <img
                    className="emoji-img"
                    src="../icons/sunglasses.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                  <br />
                Pa se vrnimo k nakupu avtomobila. Na podlagi svobodne volje in
                izbire se odlo??imo, koliko smo zanj pripravljeni pla??ati in
                gremo v ??iskalno akcijo??. Za??nemo iskati re??itve, kako priti do
                ??eljenega. Preprosto. Nisem napisala, da je lahko, ampak da je
                preprosto. Kajti:
                <br />
                  <br />
                  <strong>
                    Svobodna volja in izbira je v tesni povezavi z motivom in
                    posledi??no i????emo re??itev in ne potenciramo problemov.
                </strong>
                  <br />
                  <br />
                In skupek drobnih odlo??itev, malih korakov v smeri na??ih ??elja,
                prinese na koncu velik rezultat in spremembo. Potrebna je
                vztrajnost, potrpe??ljivost, fokus oziroma motiv. Najbolj??i
                motivi so tisti, ki delujejo znotraj nas in ne iz okolice. Ker
                pravo ??gorivo?? za premike naprej je <strong>MOTIV.</strong>
                  <br />
                  <br />
                Pa ??e nekaj. Svobodno voljo in izbiro se jemlje za samoumevno.
                Pazimo, da nam tega ne vzamejo. Smo v zanimivem obdobju
                (2020/2021???).
              </div>
              </div>
            </div>
            <br />
            <div className={`blog-item ${this.state.selectedId == 'trenutekZdaj' && this.state.showBlog ? 'blogShow' : ''}`}>
              <Link to={"/blog#trenutekZdaj"} className="blog-title pisava-special brown #trenutekZdaj" id="trenutekZdaj" onClick={(e) => this.displayBlog(e)}>
                <li className={`${this.state.selectedId == 'trenutekZdaj' && this.state.showBlog ? 'disclosureOpen' : 'disclosureClosed'}`}>Trenutek zdaj</li>
              </Link>
              <div className={this.state.selectedId == "trenutekZdaj" && this.state.showBlog ? "displayBlog" : "hideBlog"}>
                <div className="blog-text pisava-special brown">
                  ??e kar nekaj ??asa nazaj sem spoznala, da sem v preteklosti,
                  ve??ino dneva "pre??ivela v prihodnosti, ali v preteklosti". Kaj s
                  tem mislim?
                <br />
                  <br />
                Obi??ajno ??e zjutraj, ko sem se zbudila in sem ??e le??ala v
                postelji, se mi je ??e ??vrtelo po glavi??, kaj bom oblekla, kak??no
                vreme bo tisti dan, kaj me danes ??aka v slu??bi, koliko dela, kaj
                moram ??ez dan postoriti, ali sem v??eraj kaj pozabila narediti,
                ipd. Misli so ??vigale naprej in nazaj, samo v trenutku ??zdaj??
                jih ni bilo.
                <br />
                  <br />
                Potem sem se za trenutek vrnila v sedanjost, ko sem se zagledala
                v ogledalo, kako ??pome??kano?? izgledam{" "}
                  <img
                    className="emoji-img"
                    src="../icons/smirk.png"
                    width="30px"
                    alt=""
                  />
                . Na hitro sem se pokritizirala in ??e letela v kuhinjo
                pristavljat vodo za kavo. Ob pitju tega, zame ??ude??nega napitka
                ( ker me dodobra prebudi in postavi na noge, da nisem ve?? kot
                kura, ki leta brez glave in ne ve sama zase ), sem obi??ajno
                premi??ljevala, kako bi bilo fino ??e???.prihodnost.
                <br />
                  <br />
                Ker sem takole odtavala v prihodnost sem obi??ajno izgubila en
                malce ob??utek za ??as. ??ele prazna skodelica kave, pa moja je
                tista, ??ta vlka?? za ??aj, me je povrnila v sedanjost in : ??O
                groza! Koliko je ??e ura!?? Lahko si mislite, da sem postala kot
                tisti iz risanke, modri dirka??{" "}
                  <img
                    className="emoji-img"
                    src="../icons/laugh.png"
                    width="30px"
                    alt=""
                  />
                . Samo sebe sem presenetila s hitrostjo in gib??nostjo, ki jo
                premorem ??e "navsezgodaj zjutraj" ( zame je to med 6 in 7 uro,
                za nekoga drugega pa je to ??e sredi dela{" "}
                  <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />{" "}
                ).
                <br />
                  <br />
                Ko sem se kon??no peljala proti slu??bi, sem se "en malce"
                posve??ala prometu, ker varnost je pa "ipak" na prvem mestu, "en
                mal" pa preigravala misli po glavi{" "}
                  <strong>"kaj bo ??e bo, kaj je bilo???"</strong>. Mimogrede mi je
                ??e ??vignila misel, kaj moram kupiti, kaj bi bilo fino popoldan
                ??e postoriti in tako naprej in tako nazaj.
                <br />
                  <br />
                Na delovnem mestu, ??e sem le imela trenutek, ki ni zahtevalo
                100% skoncentriranosti, ampak sem lahko malce z mislimi
                odplavala, sem ??e razmi??ljala:?? Kaj hudimana, je bilo pa tisto
                zjutraj pri kavi? Kje ??e je rekla, da je to prebrala? Hm, kaj
                sem ??e rekla, da moram kupiti? Ob kateri uri je danes???? Kaj bomo
                po??eli ta vikend? Kako bi bilo fajn...??, ipd., ipd.
                <br />
                  <br />
                Zopet sem bila z glavo nekje v preteklosti, ali pa razmi??ljala o
                prihajajo??ih dneh. Samo v trenutku ZDAJ, sem bila bore malo.
                <br />
                  <br />
                In zmeraj ve??krat se mi je dogajalo, da me je spreletel ob??utek,
                da je dan kar izpuhtel. Za??ela sem se spra??evati, kako hudimana
                je zdaj to, da se 2x obrnem in je ??e ve??er.{" "}
                  <img
                    className="emoji-img"
                    src="../icons/think.png"
                    width="30px"
                    alt=""
                  />
                Ob??utek, da mi je dan spolzel skozi prste mi ni bil prijeten.
                Neka praznina se je naselila v meni, kot da ga nisem
                izkoristila.
                <br />
                  <br />
                No, in ??e pogledamo malo bolj podrobno, ga res nisem. ??e sem
                bila z mislimi konstantno v preteklosti ali prihodnosti nisem
                mogla biti v sedanjosti. In ko sem za??ela analizirati, kako
                ??upo??asnit?? ??as, sem pri??la do spoznanja, da je klju??no, da sem
                ??im ve?? z glavo/mislimi v sedanjem trenutku.
                <br />
                  <br />
                Da zjutraj, ko se prebudim, misli namenim sebi in se pozitivno
                naravnam, da si pomi??iknem ko se zagledam v ogledalu, u??ivam v
                opojnem okusu kave in absolutno tudi "en malce" odtavam z
                mislimi, "kako bi bilo fajn, ??e bi???", samo tokrat kontrolirano{" "}
                  <img
                    className="emoji-img"
                    src="../icons/smile.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                  <br />
                Ko se peljem v slu??bo sem skoncentrirana na promet in ??e en
                malce na okolico na pre??udovito naravo, nebo.
                <br />
                  <br />
                  <strong>
                    {" "}
                  Posku??am zaznati vse odtenke dneva, da sem kar se da prisotna
                  z mislimi in ob??utki v trenutku.{" "}
                    <img
                      className="emoji-img"
                      src="../icons/wink.png"
                      width="30px"
                      alt=""
                    />
                  </strong>
                  <br />
                  <br />
                  <i>
                    Je pa potrebna vaja in vztrajnost, ker misli tako rade uidejo
                    izpod nadzora.
                </i>
                  <br />
                  <br />
                Ugotovila sem, da se mi je dan ??ude??no za??el podalj??evati. No,
                sej vemo, da je to samo "feeling", ampak ob??utek je pa dober{" "}
                  <img
                    className="emoji-img"
                    src="../icons/smile.png"
                    width="30px"
                    alt=""
                  />
                . Dan poteka bolj ??oprijemljivo??, do??iveto. Tudi po??utje je
                postalo druga??no, bolj??e. Dobila sem tisti ob??utek
                ??prisotnosti??. S fokusiranjem nase, na svoje misli, ob??utke,
                dejanja me je pripeljalo do tega , da sem marsikaj ozavestila o
                sebi. Spoznavam sebe, svoje dobre, pa tudi malo manj dobre
                stvari.
                <img
                    className="emoji-img"
                    src="../icons/smirk.png"
                    width="30px"
                    alt=""
                  />{" "}
                In na teh delam, da jih po??asi popravim. Ker nekaj, kar se je
                desetletja ??nalagalo??, ne more?? spremeniti ??ez no??. To je
                dejstvo! Delam stvari, ki me veselijo. Berem knjige, se
                izobra??ujem, se pogovarjamo, hodimo na sprehode po Barju, ali pa
                preprosto ??epimo skupaj na kav??u in u??ivamo v gledanju TV-ja{" "}
                  <img
                    className="emoji-img"
                    src="../icons/smile.png"
                    width="30px"
                    alt=""
                  />
                . Kajti v trenutku, ko zapisujem te moje misli, se pi??e
                ??zanimivo?? l.2020. Iz tega sledi, da ??letanje?? naokoli , razni
                izleti in obiski razli??nih prireditev trenutno odpade.{" "}
                  <img
                    className="emoji-img"
                    src="../icons/neutral.png"
                    width="30px"
                    alt=""
                  />{" "}
                Sploh pri teh stvareh je res super, ??e si 100% prisoten, da si v
                "trenutku zdaj". Ker do??ivi?? dan v vsej njegovi lepoti. Zato iz
                tega, kar nam pa je trenutno omogo??eno, vle??em najbolj??e zase.
                <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />{" "}
                In ??e nekaj sem ugotovila. ??e ima?? doma kosmatega hi??nega
                ljubljen??ka, je greh, da si, ko se pride stisniti k tebi in se
                ??eli ??cortati??, z mislimi nekje drugje. Ker to je pa tako fajn
                "antistresna terapija", da ni za povedati.{" "}
                  <img
                    className="emoji-img"
                    src="../icons/laugh.png"
                    width="30px"
                    alt=""
                  />{" "}
                Samo prisoten mora?? biti. Z mislimi in ob??utki.{" "}
                  <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                  <br />
                Jah, okolici, dogodkom in osebam ne posve??am ve?? toliko
                pozornosti. Posku??am tudi ??im manj vse skupaj opredeljevati s
                predznakom + ali ??? . U??im se, da dogodki in ljudje samo so/smo.
                Mi pa jih z na??o reakcijo opredelimo kot pozitivne, ali
                negativne.
                <br />
                  <br />
                To pa je ??e druga tema{" "}
                  <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                  <br />
                In ti?
                <br />
                  <br />
                Kolikokrat na dan si sam s seboj, v trenutku ZDAJ? Opazuje??
                svoje misli in jih ima?? pod kontrolo? Kaj se ti plete po glavi?
                Si v pozitivnem ??mood-u??, ali ??samozaloten?? med nerganjem in
                prito??evanjem?{" "}
                  <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />{" "}
                Opazuj, kako ti te??e tok misli tekom dneva in poglej kak??no je
                tvoje ??ivljenje. Je odsev?
                <br />
                  <br />
                  <strong>
                    S komunikacijo kreiramo, ta pa se navezuje na na??e misli in
                    ob??utke.
                </strong>
                  <strong>
                    {" "}
                  A vse se da obrniti, spremeniti, ker kjer je ??elja, tam je
                  pot.{" "}
                  </strong>
                  <img
                    className="emoji-img"
                    src="../icons/smile.png"
                    width="30px"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <br />
            <div className={`blog-item ${this.state.selectedId == 'prepricanjeVzrok' && this.state.showBlog ? 'blogShow' : ''}`}>
              <Link to={"/blog#prepricanjeVzrok"} className="blog-title pisava-special brown #prepricanjeVzrok" id="prepricanjeVzrok" onClick={(e) => this.displayBlog(e)}>
                <li className={`${this.state.selectedId == 'prepricanjeVzrok' && this.state.showBlog ? 'disclosureOpen' : 'disclosureClosed'}`}>
                  Prepri??anje, vzrok in posledica</li>
              </Link>
              <div className={this.state.selectedId == "prepricanjeVzrok" && this.state.showBlog ? "displayBlog" : "hideBlog"}>

                <div className="blog-text pisava-special brown">
                  Vsi ste ??e sli??ali za vzrok in posledico, ampak ali ste se kdaj
                  tudi dejansko poglobili v pomen tega?
                <br />
                  <br />
                Jaz se vrsto let nisem, priznam. Itak mi je bilo ??kristalno
                jasno?? kaj to pomeni, ??e celo domi??ljala sem si, da zaznam to
                sosledje, ko se mi pripeti v ??ivljenju. Pa kako sem se motila.
                Sem morala nekaj krat "pristati na riti", da sem se za??ela
                poglabljati v svoje ??ivljenje in ga analizirati. Kmalu sem
                ugotovila, da ima klju??no vlogo na??e prepri??anje. Zaradi njega,
                delujemo po dolo??enem konceptu, ki pripelje do vzroka in
                posledice. Potem pa imamo tukaj prisoten ??e popolnoma druga??en
                na??in podajanja informacij pri mo??kih, kot pri ??enskah. Mislim,
                res dr??i, da znamo me eno dokaj preprosto zadevo povedati tako
                slikovito, malce bolj na dolgo in ??iroko (ker pa?? rade
                uporabljamo pridevnike, prislove ipd{" "}
                  <img
                    className="emoji-img"
                    src="../icons/smirk.png"
                    width="30px"
                    alt=""
                  />
                ), da se lahko nekdo, ki ti dobro ??ne sledi??, vmes ??izgubi??.
                Do??im`r mo??ki, to je pa ??isto druga plat. Kratko in jedrnato,
                v??asih celo pomanjkljivo{" "}
                  <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />
                . No, potem pa se dajmo zastopit . Ni zastonj pregovor "Mo??ki so
                iz Marsa, ??enske pa z Venere".
                <br />
                  <br />
                Pa da razlo??im malo bolj podrobno.
                <br />
                  <br />
                Kot otroka so me vzgojili v duhu delavnosti. Od jutra do ve??era
                je "treba skoz neki delat". V slu??bi, pa potem doma, pa ??e malo
                pri sosedih ( ??e slu??ajno zmanjka dela doma, kar se pa obi??ajno
                ne zgodi - to vemo, a ne{" "}
                  <img
                    className="emoji-img"
                    src="../icons/think.png"
                    width="30px"
                    alt=""
                  />
                ) - vzorec{" "}
                  <strong>
                    <i>prepri??anja</i>
                  </strong>
                . In posledi??no skozi to, sem potihoma to delavnost vpeljala v
                svoje ??ivljenje. Slu??beno in zasebno. Moj takratni partner (mo??
                in kasneje biv??i mo?? - zato sem, napisala takratni{" "}
                  <img
                    className="emoji-img"
                    src="../icons/smirk.png"
                    width="30px"
                    alt=""
                  />
                ) pa je v najin zakon ??prinesel?? svoja prepri??anja, ki so seveda
                en malce odstopala od mojih. To je seveda popolnoma razumljivo,
                ker izhajava iz razli??nih celic (primarne dru??ine) in vsak od
                naju je s seboj prinesel svoja prepri??anja in vzorce.
                <br />
                  <br />
                Vam je ??e jasno, kam pes taco moli??{" "}
                  <img
                    className="emoji-img"
                    src="../icons/think.png"
                    width="30px"
                    alt=""
                  />{" "}
                  <img
                    className="emoji-img"
                    src="../icons/sunglasses.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                  <br />
                Ker sva imela razli??ne poglede na dolo??ene situacije in ker se
                nisva znala pogovarjati, izraziti, kaj ??ele poslu??ati, je
                velikokrat pri??lo do tega, da je bila najina komunikacija,
                ??slika brez tona??{" "}
                  <img
                    className="emoji-img"
                    src="../icons/confused.png"
                    width="30px"
                    alt=""
                  />{" "}
                (pa smo pri{" "}
                  <strong>
                    <i>vzrok-u</i>
                  </strong>
                ). Zdaj ko gledam nazaj, je prav hecno, kako sva v marsikateri
                situaciji ??merila mo??i"{" "}
                  <img
                    className="emoji-img"
                    src="../icons/blushed.png"
                    width="30px"
                    alt=""
                  />
                . Jaz z besedam, ker sem ??e od nekdaj bila ve????a v komunikaciji
                (pa pustimo ??malenkost??, da imamo pravo in nepravo komunikacijo{" "}
                  <img
                    className="emoji-img"
                    src="../icons/smile.png"
                    width="30px"
                    alt=""
                  />{" "}
                ), on z neodzivnostjo ali molkom. V??asih sva trmarila in vlekla
                vsak v svojo stran, kot da vle??eva vrv, ipd. Vmes, pa sva ??e
                dovoljevala vme??avanje (direktno in indirektno) okolice. In ker
                se take situacije nikoli ne vle??ejo v nedogled, je sledila{" "}
                  <i>
                    <strong>posledica</strong>
                  </i>{" "}
                - lo??itev. In vsak od naju, je k situaciji doprinesel svojih
                50%.
                <br />
                  <br />
                In ??ele sedaj, po parih letih dela na sebi, sem dojela koncept{" "}
                  <strong>prepri??anje/vzrok/posledica</strong>.
                <br />
                  <br />
                Zato dobro poglejte, dajte pod drobnogled podro??ja svojega
                ??ivljenja, kjer se vam zatika. Preverite kak??na so va??a
                prepri??anja. Prisluhnite razlagi vzroka (zakaj je ali ni do
                ne??esa pri??lo, se naredilo, se izgovorilo), da prepre??ite
                posledico. Ali pa jo izpeljite (posledico namre??) in dano
                situacijo izkoristite za osebno rast.
                <br />
                  <br />
                It??s up to you{" "}
                  <img
                    className="emoji-img"
                    src="../icons/smile.png"
                    width="30px"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <br />
            <div className={`blog-item ${this.state.selectedId == 'belList' && this.state.showBlog ? 'blogShow' : ''}`}>
              <Link to={"/blog#belList"} className="blog-title pisava-special brown #belList" id="belList" onClick={(e) => this.displayBlog(e)}>
                <li className={`${this.state.selectedId == 'belList' && this.state.showBlog ? 'disclosureOpen' : 'disclosureClosed'}`}>
                  Bel list</li>
              </Link>
              <div className={this.state.selectedId == "belList" && this.state.showBlog ? "displayBlog" : "hideBlog"}>
                <div className="blog-text pisava-special brown">
                  Si kdaj pomislil, da ko se rodi??, si kot bel, nepopisan list.
                  Nato prve zapise, na ta tvoj lep, beli list, naredijo tvoji
                  star??i, kasneje jim seveda pomagajo tudi stari star??i (ker bog
                ne daj, brez njih res ne gre{" "}
                  <img
                    className="emoji-img"
                    src="../icons/think.png"
                    width="30px"
                    alt=""
                  />
                ). Nekaj ??asa so oni tvoji u??itelji, vodi??i, ??vsevedi?? in mogo??e
                sta tu ??e kak??na starej??a sestra ali brat, za povrh, da je mera
                polna{" "}
                  <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />
                . Ja, prav vsi te u??ijo, usmerjajo in "itak" vedo kaj je
                najbolje zate. Kasneje se temu ??klanu?? pridru??i vrtec, z vsemi
                pripadajo??imi akterji (vrstniki in vzgojitelji), nato ??ola -
                isti koncept zasedbe, samo v ??ir??em krogu. To se nadaljuje skozi
                cel tvoj proces ??olanja. Zraven pa pu????ajo svojo sled, na tem
                ??udovitem listu, seveda tudi prijatelji???tisti ??ta najbolj??i?? in
                tisti malo manj dobri.
                <br />
                Potem nastopi ??ta resen?? del??? slu??ba. Okolica in sodelavci,
                pridno igrajo svojo vlogo pri pisanju na tvoj list.
                <br />
                Nato spozna?? "Ljubezen svojega ??ivljenja" (??e ne gre v prvo, pa
                mogo??e v drugo, tretje???.no, kakorkoli ??e{" "}
                  <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />
                ).
                <br />
                  <br />
                Takrat nastopi?? v svoji najbolj??i verziji, ki jo potegne?? na
                plano, ??ez vest ta ??balast??. ??Na za??etku se ti razprejo krila,
                zadiha?? s polnimi plju??i, ima?? zalet. In ko ima?? ob??utek, da bo??
                poletel v tej svoji "najbolj??i verziji"??? <strong>
                    bam
                </strong>{" "}
                ???pristanek na zadnjico in dobrodo??el v ??realnosti??. Goriva je
                zmanjkalo ali smetana se je polizala.
                <br />
                Na plano pridejo vsi ti ??tvoji?? zapisi. In velikokrat niti ne
                ??porajta????, da pravzaprav razmi??lja??, ob??uti??, razume??, kot si
                bil nau??en. Nekje globoko v sebi, pa ti tihi glasek govori, da
                mogo??e pa le ni ??isto vse tako ali ??prav??, kot si vedel in znal
                da sedaj. Da mogo??e obstaja kak??na druga??na realnost, tvoja
                realnost. Mogo??e pa ti to, karkoli ??e, lahko izpelje??, se lahko
                nau??i??, priu??i??, si dovoli?? povedati na glas kaj si misli?? in
                kako razmi??lja??, si dovoli?? druga??e ob??utiti, si SPLOH dovoli??
                ob??utiti in si dolo??ene stvari tudi priznati.
                <br />
                  <br />
                Mogo??e, pa ti stvari <strong>lahko</strong> pelje?? skozi
                ??ivljenje druga??e kot tvoji star??i, prijatelji in sodelavci...
                <br />
                  <br />
                  <strong>
                    Vse je mogo??e! Kar je v na??i domi??ljiji, je mogo??e tudi v na??i
                    realnosti. Ampak pozor
                </strong>
                !
                <br />
                  <br />
                Ni?? se ne spremeni????ez no?? in ni?? se ne bo zgodilo samo od sebe.
                Vsaka sprememba zahteva svoj ??as. Se zaveda??, koliko radirke
                potrebuje?? in koliko ??asa, da ??zradira????, kar ti ne slu??i?
                <br />
                  <br />
                Potrebno si je <strong>resni??no</strong> ??eleti bolj??i, bolj po
                tvojih ??eljah naravnan dan in ??ivljenje.
                <br />
                  <br />
                Ker na tem tvojem "??udovitem listu" je tudi veliko{" "}
                  <strong>dobronamernih</strong> zapisov (prepri??anj in vzorcev).
                <br />
                  <br />
                In da pride?? do tega, kdo pravzaprav si <strong>
                    ti, ti
                </strong>{" "}
                in ne nekdo, kot ga je in ki ga je ??popredal??kala?? okolica in
                vsi njeni akterji, prisotni v tvojem ??ivljenju - zato je
                potrebno delo na sebi. In za prese??i vse to, kar te zadr??uje, je
                potrebno zopet delati na sebi.
                <br />
                  <br />
                Ja, ??e se odlo??i?? za delo na sebi, ti garantiram, ne bo ti
                dolg??as in ne bo ti zmanjkalo dela.{" "}
                  <img
                    className="emoji-img"
                    src="../icons/laugh.png"
                    width="30px"
                    alt=""
                  />
                  <br />
                  <br />
                Je pa noro dober <strong>ob??utek</strong>, ko se osvobodi??
                dolo??enih spon, prepri??anj, vzorcev... <strong>Poleti??.</strong>{" "}
                  <img
                    className="emoji-img"
                    src="../icons/wink.png"
                    width="30px"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout >
    )
  }
}

export default Blog
