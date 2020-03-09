export const getData = () => Promise.resolve([
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

   }]); 