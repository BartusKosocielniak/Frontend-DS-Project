<!-- todo to jest jak narazie niedkonczony przyklad -->
<template>
    <div>

        <h3>1. najprostsze użycie watchera</h3>
        <button @click="isActive = !isActive">
            Przełącznik jest: {{ isActive ? 'WŁĄCZONY' : 'WYŁĄCZONY' }} </button>

        <h3>2. inne użycie watchera</h3>
        <h2>Licznik: {{ counter }}</h2>
        <button @click="counter++">Zwiększ o 1</button>
        <button @click="counter--">Zmniejsz o 1</button>
        <h1>{{ message }}</h1>

        <h3>3. jak nasłuchiwać w aplikacji na zmiany w urlu</h3>
        <h1>test: {{ test }}</h1>
        <RouterLink :to="{ query: { test: 1 } }">ustaw query test=1</RouterLink> |
        <RouterLink :to="{ query: { test: 5 } }">ustaw query test=5</RouterLink>

        <h3>4. jak zmieniac url routera z aplikacji</h3>
        <input v-model="info" placeholder="wpisz info" />
        <button @click="updateUrl">Zaktualizuj URL</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
            counter: 0,
            message: "",
            test: 1,
            info: ""
        };
    },

    watch: {
        // przykład 1 - nazwa funkcji musi być taka sama jak nazwa zmiennej: isActive
        isActive(newVal) {
            console.log("Watcher isActive odpalił:", newVal);
            alert("Ktoś kliknął przełącznik!" + newVal);
        },

        // przykład 2 - nazwa funkcji musi być taka sama jak nazwa zmiennej w data()
        counter(newValue, oldValue) {
            console.log(`Zmiana z ${oldValue} na ${newValue}`);

            if (newValue > 3) {
                this.message = "Osiągnięto limit (3)!";
            } else {
                this.message = "";
            }
        },
        // przykład 3 - obserwujemy konkretną ścieżkę wewnątrz obiektu routera
        '$route.query.test': {
            immediate: true, // sprawdzamy URL zaraz po starcie aplikacji
            handler(val) {
                alert(`URL się zmienił! Nowa wartość test=${val}`);
                this.test = val || 1;
            }
        }
    },

    methods: {
        // ta metoda wpisuje nową wartość do paska adresu
        updateUrl() {
            this.$router.push({
                query: { info: this.info }
            });
        }
    }
}
</script>