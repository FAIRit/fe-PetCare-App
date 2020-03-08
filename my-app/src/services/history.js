export const getData = () => Promise.resolve([
    {
        id: 1,
        admission_date: '12.12.2019',
        discharge_date: '05.02.2020',
        vet: 'Przychodnia VetCare Gdynia, ul. Abrahama',
        doctor: 'wielu lekarzy',
        patients_condition: ' Kot wolnożyjący, wiek około 12 lat, znaleziony w Gdyni. Niewykastrowany, historia zdrowia nieznana. Temperatura 40 st. C. Kot nie utrzymuje się samodzielnie na łapach, usypia na stole. Widoczny duży strup na uchu nieznanego pochodzenia. Po zdjęciu strupa z ucha stwierdzono marwicę - konieczna amputacja i pobranie materiału do badań. Kot zatrzymany na obserwacji.',
        diagnosis: ' Nowotwor złośliwy - kostniakomięsak - w lewym uchu. Przewlekła niewydolność nerek, stan zapalny pęcherza, piasek w pęcherzu, nieprawidłowe wartości prób wątrobowych, anemia. Prawdopodobnie na skutek przebytego wypadku komunikacyjnego uszkodzenie kręgosłupa (nieleczone, samozrośnięte), uszkodzenie nerwów dna miednicy oraz złamany ogon.',
        recommendations:'Kot zatrzymany na obserwacji w lecznicy. Ucho do amputacji. Konieczne dodatkowe badania'

     },
     {
        id: 2,
        admission_date: '07.02.2020',
        discharge_date: '15.02.2020',
        vet: 'Przychodnia CrisVet Gdynia, ul. Warszawska',
        doctor: 'dr Agnieszka Antczak',
        patients_condition: 'Kot opuścił lecznicę VetCare 05.02.2020, po długim leczeniu. Kot choruje na przewlekłą niewydolność nerek. Po zmianie otoczenia przestał oddawać mocz.',
        diagnosis: 'W badaniu USG powiększony pęcherz, stan zapalny pęcherza',
        recommendations:'Antybiotykoteriapia, podłączenie cewnika. Przewidywany około tygodniowy pobyt w lecznicy.'

     } ,
     {
        id: 3,
        admission_date: '04.02.2020',
        discharge_date: '04.02.2020',
        vet: 'Przychodnia VetCentrum Gdynia, ul. Chylońska 230',
        doctor: 'Sylwana Rzepczyk',
        patients_condition: 'Kot osowiały, od 03.02 oddaje zmniejszone ilości moczu, wygryzł sobie sierść na lewym boku',
        diagnosis: 'W usg powiekszony pęcherz, po stanie sierści widać, że w przeszłości musiał mieć pasożyty (z badania pod mikroskopem wychodzi, że są martwe), stan trzustki zły, mocz niejednorodny, nerki w stanie terminalnym lub zapalnym (konieczne dodatkowe badania), szmery w sercu - konieczne echo serca',
        recommendations:'Podano lek rozkurczowy, pobrano krew do badań, pacjent wypisany do domu, konieczność powrotu 05.02 na ponowne usg'

     } ,
     {
        id: 4,
        admission_date: '05.02.2020',
        discharge_date: '06.02.2020',
        vet: 'Przychodnia VetCentrum Gdynia, ul. Chylońska 230',
        doctor: 'Sylwana Rzepczyk',
        patients_condition: 'Kot oddaje mocz, ale nadal w niewielkich ilościach. W usg pęcherz bardziej powiększony niż dzień wcześniej. Kot wygryzł sobie sierść również na prawnym boku. Bardzo osowiały',
        diagnosis: 'Prawdopodobny stan zapalny pęcherza i nerek, brak możliwości bezpiecznego pobrania moczu do badań poprzez wyciśnięcie lub strzykawkę',
        recommendations:'Podano znieczulenie podwyższonego ryzyka (ze względu na szmery w sercu), konieczność pozostania w klinice pod cewnikiem oraz pobrania moczu do badań. Koneiczność podania kroplówki dożylnie'

     },
     {
        id: 4,
        admission_date: '06.02.2020',
        discharge_date: '',
        vet: 'Przychodnia VetCentrum Gdynia, ul. Chylońska 230',
        doctor: 'Sylwana Rzepczyk',
        patients_condition: 'Kot oddaje mocz przy pomocy cewnika, jednak w badaniu pęcherz jest nadal znacznie powiększony. Zwierzę jest znacznie bardziej aktywne niż w poprzednich dniach',
        diagnosis: 'Prawdopodobny stan zapalny pęcherza i nerek, oczekujemy na wyniki badań moczu. Wynik badań mocznika i leukocytów powyżej skali',
        recommendations:'Podano znieczulenie miejscowe ze względu na serce. Ponownie wszyto cewnik, spuszczono mocz. Kot z cewnikiem i kołnierzem, zgodnie z decyzją opiekunki, został wypuszczony do domu. Konieczny powrót do lecznicy 09.02 na kroplówkę i konktrolę stanu pęcherza. 09.02 powinny wpłynąć częściowe wyniki badań moczu. Wprowadzono antybiotyk i cześciowo zmieniono sposób dotychczasowego leczenia.'

     }   ]); 