let DOCTORS = [
   {
      id: 1,
      admissionDate: '12.12.2019',
      dischargeDate: '05.02.2020',
      vet: 'Przychodnia VetCare Gdynia, ul. Abrahama',
      doctor: 'wielu lekarzy',
      patientsCondition: ' Kot wolnożyjący, wiek około 12 lat, znaleziony w Gdyni. Niewykastrowany, historia zdrowia nieznana. Temperatura 40 st. C. Kot nie utrzymuje się samodzielnie na łapach, usypia na stole. Widoczny duży strup na uchu nieznanego pochodzenia. Po zdjęciu strupa z ucha stwierdzono marwicę - konieczna amputacja i pobranie materiału do badań. Kot zatrzymany na obserwacji.',
      diagnosis: ' Nowotwor złośliwy - kostniakomięsak - w lewym uchu. Przewlekła niewydolność nerek, stan zapalny pęcherza, piasek w pęcherzu, nieprawidłowe wartości prób wątrobowych, anemia. Prawdopodobnie na skutek przebytego wypadku komunikacyjnego uszkodzenie kręgosłupa (nieleczone, samozrośnięte), uszkodzenie nerwów dna miednicy oraz złamany ogon.',
      recommendations: 'Kot zatrzymany na obserwacji w lecznicy. Ucho do amputacji. Konieczne dodatkowe badania'

   },
   {
      id: 2,
      admissionDate: '07.02.2020',
      dischargeDate: '15.02.2020',
      vet: 'Przychodnia CrisVet Gdynia, ul. Warszawska',
      doctor: 'dr Agnieszka Antczak',
      patientsCondition: 'Kot opuścił lecznicę VetCare 05.02.2020, po długim leczeniu. Kot choruje na przewlekłą niewydolność nerek. Po zmianie otoczenia przestał oddawać mocz.',
      diagnosis: 'W badaniu USG powiększony pęcherz, stan zapalny pęcherza',
      recommendations: 'Antybiotykoteriapia (wprowadzono Enroton Flavour), podłączenie cewnika. Przewidywany około tygodniowy pobyt w lecznicy.'

   },
   {
      id: 3,
      admissionDate: '05.03.2020',
      dischargeDate: '05.032020',
      vet: 'Przychodnia VetCentrum Gdynia, ul. Chylońska 230',
      doctor: 'Sylwana Rzepczyk',
      patientsCondition: 'Kot osowiały, od wieczora 03.03 oddaje zmniejszone ilości moczu, wygryzł sobie sierść na lewym boku',
      diagnosis: 'W usg powiekszony pęcherz, po stanie sierści widać, że w przeszłości musiał mieć pasożyty (z badania pod mikroskopem wychodzi, że są martwe), stan trzustki zły, mocz niejednorodny, nerki w stanie terminalnym lub zapalnym (konieczne dodatkowe badania), szmery w sercu - konieczne echo serca',
      recommendations: 'Podano lek rozkurczowy, pobrano krew do badań, pacjent wypisany do domu, konieczność powrotu 06.03 na ponowne usg'

   },
   {
      id: 4,
      admissionDate: '06.03.2020',
      dischargeDate: '07.03.2020',
      vet: 'Przychodnia VetCentrum Gdynia, ul. Chylońska 230',
      doctor: 'Sylwana Rzepczyk',
      patientsCondition: 'Kot oddaje mocz, ale nadal w niewielkich ilościach. W usg pęcherz bardziej powiększony niż dzień wcześniej. Kot wygryzł sobie sierść również na prawnym boku. Bardzo osowiały',
      diagnosis: 'Prawdopodobny stan zapalny pęcherza i nerek, brak możliwości bezpiecznego pobrania moczu do badań poprzez wyciśnięcie lub strzykawkę',
      recommendations: 'Podano znieczulenie podwyższonego ryzyka (ze względu na szmery w sercu), konieczność pozostania w klinice pod cewnikiem oraz pobrania moczu do badań. Koneiczność podania kroplówki dożylnie'

   },
   {
      id: 5,
      admissionDate: '07.03.2020',
      dischargeDate: '07.03.2020',
      vet: 'Przychodnia VetCentrum Gdynia, ul. Chylońska 230',
      doctor: 'Sylwana Rzepczyk',
      patientsCondition: 'Kot oddaje mocz przy pomocy cewnika, jednak w badaniu pęcherz jest nadal znacznie powiększony. Zwierzę jest znacznie bardziej aktywne niż w poprzednich dniach',
      diagnosis: 'Prawdopodobny stan zapalny pęcherza i nerek, oczekujemy na wyniki badań moczu. Wynik badań mocznika i leukocytów powyżej skali',
      recommendations: 'Podano jedynie znieczulenie miejscowe ze względu na serce. Ponownie wszyto cewnik, spuszczono mocz. Kot z cewnikiem i kołnierzem, zgodnie z decyzją opiekunki, został wypuszczony do domu. Konieczny powrót do lecznicy 09.03 na kroplówkę i konktrolę stanu pęcherza. 09.03 powinny wpłynąć częściowe wyniki badań moczu. Wprowadzono antybiotyk i cześciowo zmieniono sposób dotychczasowego leczenia, tj. - zmiejszono ilość Semintry o połowę (badanie ciśnienia w normie), zwiększono dawkę Cystaid Plus o połowę, wprowadzono Hyalutidin, Clavaseptin oraz Gabapentynę.'

   },
   {
      id: 6,
      admissionDate: '09.03.2020',
      dischargeDate: '09.03.2020',
      vet: 'Przychodnia VetCentrum Gdynia, ul. Chylońska 230',
      doctor: 'Sylwana Rzepczyk',
      patientsCondition: 'Kot w dużo lepszej formie fizycznej, cewnik pozostanie wszyty jeszcze na około 2 dni. Podano lek przeciwzapalny w zastrzyku i podłączono kroplówkę. Kot pozostaje w lecznicy do godzin wieczornych z podpiętą kroplówką, następnie uzyska wypis do domu',
      diagnosis: 'Prawdopodobny stan zapalny pęcherza i nerek, oczekujemy na wyniki badań moczu.',
      recommendations: 'Konieczny powrót 10.03 rano na kolejną kroplówkę i kontrolę stanu zdrowia'

   }, {
      id: 7,
      admissionDate: '10.03.2020',
      dischargeDate: '10.03.2020',
      vet: 'Przychodnia VetCentrum Gdynia, ul. Chylońska 230',
      doctor: 'Sylwana Rzepczyk',
      patientsCondition: 'Kot silnie zestresowany, podano opioid, pozostawiono na 6 godzin na kroplówce. Po godzinie 15 zdjęto cewnik i wypisano do domu',
      diagnosis: 'Prawdopodobny stan zapalny pęcherza i nerek, oczekujemy na wyniki badań moczu.',
      recommendations: 'Konieczny powrót 11.03 rano na kontrolę stanu zdrowia'

   },
   {
      id: 8,
      admissionDate: '11.03.2020',
      dischargeDate: '11.03.2020',
      vet: 'Przychodnia VetCentrum Gdynia, ul. Chylońska 230',
      doctor: 'Sylwana Rzepczyk',
      patientsCondition: 'Kot w dobrej formie, siusia samodzielnie, pęcherz nie jest powiększony (nie wykonano USG). Podano antybiotyk w zastrzyku i wypisano do domu',
      diagnosis: 'Prawdopodobny stan zapalny pęcherza i nerek, oczekujemy na wyniki badań moczu.',
      recommendations: 'Konieczny powrót 13.03 na kontrolę stanu zdrowia i 16.03 na echo serca'

   }, {
      id: 9,
      admissionDate: '13.03.2020',
      dischargeDate: '13.03.2020',
      vet: 'Przychodnia VetCentrum Gdynia, ul. Chylońska 230',
      doctor: 'Sylwana Rzepczyk',
      patientsCondition: 'Kot w dobrej formie, siusia samodzielnie. W usg pęcherz nadal duży, jednak, ponieważ kot siusia i czuje się dobrze, zostaje wypisany do domu. Podano zastrzyk na wzmocnienie pęcherza.',
      diagnosis: 'Na podstawie posiewu, stwierdzono dużą ilość escherichia colie w moczu.',
      recommendations: 'Antybiotykoterapia przez około 2 tygodnie, obserwacja ilości oddawanego moczu w domu. Konieczny powrót 16.03 na echo serca'

   },
   {
      id: 10,
      admissionDate: '16.03.2020',
      dischargeDate: '16.03.2020',
      vet: 'Przychodnia VetCentrum Gdynia, ul. Chylońska 230',
      doctor: 'Michał Bartnicki,  dr Marta Kozuń',
      patientsCondition: 'Kot czuje się dobrze, siusia samodzielnie, ale w ocenie opiekunki ma powiększony brzuszek - do zbadania w usg Wykonano echo serca - serce w normie, brak przeciwskazań od strony kardiologicznej do stosowania znieczulenia ogólnego. Szmery wynikają z płynu w jamie opłucnowej (śladowe ilości), ponadto stwierdzono też fragmenty niedodmowe płatów płucnych. Wykonano dwa zdjęcia rtg - zmiana nie wygląda na nowotworową, a zapalną - zdjęcia skierowano do dodatkowej konsultacji. W badaniu usg pęcherz duży, około 10 cm, ale taką samą wielkość stwierdzono podczas ostatniego badania. Ze względu na atonię pęcherza zalecono jedynie obserwację ilości oddawanego moczu w warunkach domowych',
      diagnosis: 'Na podstawie posiewu, stwierdzono dużą ilość escherichia colie w moczu.',
      recommendations: 'Kontynuacja antybiotykoterapii, obserwacja ilości oddawanego moczu w domu. Konieczny powrót 20.03 na zastrzyk wzmacianjący pęcherz. Do oceny pozostają zdjęcia rtg'

   },
   {
      id: 11,
      admissionDate: '20.03.2020',
      dischargeDate: '20.03.2020',
      vet: 'Przychodnia VetCentrum Gdynia, ul. Chylońska 230',
      doctor: 'dr Marta Kozuń',
      patientsCondition: 'Kot czuje się dobrze, siusia samodzielnie. Podano karprofen na wzmocnienie pęcherza. Wyznaczono termony kolejnych wizyt na 27.03 oraz 04.03',
      diagnosis: 'Na podstawie posiewu, stwierdzono dużą ilość escherichia colie w moczu. W RTG nie stwierdzono zmian nowotworowych. Powiększone węzły chłonne z niewiadomej przyczyny',
      recommendations: 'Kontynuacja antybiotykoterapii, obserwacja ilości oddawanego moczu w domu. Konieczny powrót 27.03 na zastrzyk wzmacianjący pęcherz.'

   }, {
      id: 12,
      admissionDate: '21.03.2020',
      dischargeDate: '21.03.2020',
      vet: 'Przychodnia VetCentrum Gdynia, ul. Chylońska 230',
      doctor: 'dr Marta Kozuń',
      patientsCondition: 'Kot przestał siusiać, zawodził w nocy próbując skorzystać z kuwety, Dodatkowo stwierdzono obecność pasożytów',
      diagnosis: 'Prawdopodobnie blokada na skutek stresu. Duża ilość pasożytów w organiźmie',
      recommendations: 'Podano tabletkę na odrobaczenie, wszytko cewnik. Zdjęcie cewnika zaplanowane na 23.03'

   },
   {
      id: 13,
      admissionDate: '23.03.2020',
      dischargeDate: '23.03.2020',
      vet: 'Przychodnia VetCentrum Gdynia, ul. Chylońska 230',
      doctor: 'dr Marta Kozuń',
      patientsCondition: 'Kot wyrwał sobie cewnik w nocy z soboty na niedzielę, ale zaczął siusiać samodzielnie, zalecono obserwację w domu. W godzinach popołudniowych skontaktowała się opiekunka kota z informacją o nierównomiernych źrenicach zwierzęcia oraz stanie zagubienia. Zalecono przyjazd do lecznicy. W lecznicy kot reagował na bodźce, podano parafinę, środek osłonowy na wątrobę oraz kroplówkę. Pobrano krew celem oceny wątroby i wskaźników mocznika ',
      diagnosis: 'Prawdopodobnie doszło do zatrucia związanego z kuracją przeciwpasożytniczą.',
      recommendations: 'Po pierwszej kroplówce kot w lepszej formie, zjadł pół saszetki karmy renal. Źrenice nadal nierównimierne.Konieczne wizyty w kolejnych dniach celem kontynuacji kroplówek.'

   },
   {
      id: 13,
      admissionDate: '24.03.2020',
      dischargeDate: '24.03.2020',
      vet: 'Przychodnia VetCentrum Gdynia, ul. Chylońska 230',
      doctor: 'dr Marta Kozuń',
      patientsCondition: 'Kot w lepszej kondycji. Wielkość źrenic nadal zróżnicowana, ale wyglądają lepiej, niż dzień wcześniej. Ma apetyt, siusia samodzielnie, wydala niewielkie ilości martwych pasożytów. Wyniki badań krwi lepsze,niż poprzednie. Mocznik spadł',
      diagnosis: 'Prawdopodobnie doszło do zatrucia związanego z kuracją przeciwpasożytniczą.',
<<<<<<< HEAD
      recommendations: 'Podawano drugą kroplówkę przez 5 godzin. Zalecany powrót 25.03 na trzecią, ostatnią kroplówkę. Dodatkowo, antybiotykoterapia zostaje przedłużona do 21 dni'
=======
      recommendations: 'Podawano drugą kroplówkę przez 5 godzin. Zalecany powrót 25.03 na trzecią, ostatnią kroplówkę'
>>>>>>> 9fe01dd8dec4170073a6850c7f3e4ba78517edb4

   },
   {
      id: 14,
      admissionDate: '25.03.2020',
      dischargeDate: '25.03.2020',
      vet: 'Przychodnia VetCentrum Gdynia, ul. Chylońska 230',
      doctor: 'dr Marta Kozuń',
      patientsCondition: 'Kot w lepszej kondycji. Wielkość źrenic nadal zróżnicowana. W trakcie pobytu w lecznicy, ygryzł sobie dużą ilość sierści na lewym boku, założono kołnierz na czas pobytu w lecznicy',
      diagnosis: 'Prawdopodobnie doszło do zatrucia związanego z kuracją przeciwpasożytniczą.',
      recommendations: 'Podawano trzecią kroplówkę przez 5 godzin. Zalecany powrót 26.03 na jeszcze jedną kroplówkę. Prawdopodobną przyczyną wygryzania sierści jest podwyższony poziom eozynofilów spowodowany infekcją pasożytniczą'

   }];

const calculateNextId = list => ((list || []).slice(-1)[0] ?.id ?? 0) + 1;

export const getData = () => Promise.resolve(DOCTORS);

export const addDoctor = doctor => {
   DOCTORS = [...DOCTORS, ({ ...doctor, id: calculateNextId(DOCTORS) })];
   return Promise.resolve();
};